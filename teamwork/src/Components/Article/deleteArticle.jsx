import React from 'react';
import Store from '../../Store';
import DeleteDetail from './deleteWarn';
import HandleResponse from '../Helpers/Utils';

class Article extends Store {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      success: false,
      errorResponse: '',
      successResponse: '',
    };
    this._isMounted = false;
    this.url = 'http://localhost:5000/api/v1/articles/';
  }
  getArticleHandler = () => {
    const { id } = this.props.match.params;
    if (id) {
      this.getHandler(this.url + id)
        .then((response) => this.check(response))
        .then((response) => {
          this.setState({
            id: response.data.id,
          });
        })
        .catch((error) => {
          error.json().then((body) => {
            this.setState({ errorResponse: { ...body } });
          });
        });
    }
  };
  deleteArticleHandler = (id) => {
    this.deleteHandler(this.url + id)
      .then((response) => this.check(response))
      .then((data) => {
        this.setState({ success: false, successResponse: { ...data } });
        this.props.history.push('/feeds');
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
    this.getArticleHandler();
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
            this.deleteArticleHandler(this.state.id);
          }}
          id={this.state.id}
          text={submitText}
        />
      </>
    );
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
}

export default Article;
