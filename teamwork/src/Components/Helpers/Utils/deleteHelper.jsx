import React from 'react';
import Store from '../../../Store';
import DeleteDetail from './deleteWarn';
import HandleResponse from '.';

class DeleteHelper extends Store {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      success: false,
      errorResponse: '',
      successResponse: '',
    };
    this._isMounted = false;
    this.url = this.props.url;
  }
  getOneToDelete = () => {
    const { id } = this.props.parent.match.params;
    if (id) {
      this.getHandler(this.url + id)
        .then((response) => this.check(response))
        .then((response) => {
          let id = response.data.articleid || response.data.gifid;
          this.setState({
            id,
          });
        })
        .catch((error) => {
          error.json().then((body) => {
            this.setState({ errorResponse: { ...body } });
          });
        });
    }
  };
  handleDelete = (id) => {
    this.deleteHandler(this.url + id)
      .then((response) => this.check(response))
      .then((data) => {
        this.setState({ success: false, successResponse: { ...data } });
        this.props.parent.history.push('/feeds');
        return;
      })
      .catch((error) => {
        error.json().then((body) => {
          this.setState({ success: false, errorResponse: { ...body } });
        });
      });
    this.setState({ success: true });
  };
  componentDidMount() {
    this._isMounted = true;
    this.timeOutHandler();
    this.getOneToDelete();
  }
  render() {
    const { errorResponse, successResponse } = this.state;
    const response = HandleResponse(errorResponse, successResponse);
    const submitText = !this.state.success ? 'Continue' : 'Please wait ...';
    return (
      <>
        {response ? <div id='tm-response'>{response}</div> : null}
        <DeleteDetail
          Onclick={() => {
            this.handleDelete(this.state.id);
          }}
          id={this.state.id}
          text={submitText}
          route={this.props.route}
        />
      </>
    );
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
}

export default DeleteHelper;
