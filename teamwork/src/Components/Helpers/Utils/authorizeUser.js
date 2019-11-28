let response = 'flex';
const token = sessionStorage.getItem('token');
const isAdmin = sessionStorage.getItem('isAdmin');
const articleAuthor = localStorage.getItem('articleAuthor');
const gifAuthor = sessionStorage.getItem('gifAuthor');
const currentUser = sessionStorage.getItem('currentUser');

export default class User {
  static isLoggedIn() {
    let className = 'tm-navigation-auth';
    if (!token) {
      return (className = 'tm-nav-noauth');
    }
    return className;
  }
  static isAdmin() {
    if (isAdmin !== 'admin') {
      return (response = 'none');
    }
    return response;
  }
  static isArticleAuthor() {
    console.log('article author', articleAuthor, 'currentuser', currentUser);
    let res = 'flex';
    if (articleAuthor && articleAuthor === currentUser) {
      return res;
    }
    return (res = 'none');
  }
  static isGifAuthor() {
    if (gifAuthor && gifAuthor === currentUser) {
      return response;
    }
    return (response = 'none');
  }
}
