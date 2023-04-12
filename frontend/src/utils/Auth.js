export class Auth {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) return res.json();
    else return Promise.reject(`Ошибка: ${res.status}`);
  }

  register({ email, password }) {
    return fetch(`${this.baseUrl}/signup`, {
      method: "POST",
      headers: this.headers,
      credentials: 'include',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then(this._checkResponse);
  }

  autorize({ email, password }) {
    return fetch(`${this.baseUrl}/signin`, {
      method: "POST",
      headers: this.headers,
      credentials: 'include',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(this._checkResponse)
      .then((data) => {
        return data;
      });
  }

  checkAuth() {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
    })
      .then(this._checkResponse)
      .then((data) => data);
  }

  logOut(){
    return fetch(`${this.baseUrl}/signout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
    })
      .then(this._checkResponse)
      .then((data) => data);
  }

}

const auth = new Auth({
  baseUrl: 'https://api.blazhev.mesto.nomoredomains.monster',
  headers: {
    "Content-Type": "application/json",
  },
});

export default auth;
