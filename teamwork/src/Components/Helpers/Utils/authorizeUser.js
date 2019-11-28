let response = '';
const token = sessionStorage.getItem('token');
const isAdmin = sessionStorage.getItem('isAdmin');
const articleAuthor = sessionStorage.getItem('articleAuthor');
const gifAuthor = sessionStorage.getItem('gifAuthor');
const currentUser = sessionStorage.getItem('currentUser');

export default class User {
  static isLoggedIn() {
    if (!token) {
      return (response = 'none');
    }
    return response;
  }
  static isAdmin() {
    if (isAdmin !== 'admin') {
      return (response = 'none');
    }
    return response;
  }
  static isArticleAuthor() {
    let res = '';
    if (articleAuthor !== currentUser) {
      return (res = 'none');
    }
    return res;
  }
  static isGifAuthor() {
    if (gifAuthor !== currentUser) {
      return (response = 'none');
    }
    return response;
  }
}
