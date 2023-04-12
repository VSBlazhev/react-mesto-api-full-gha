export class Api {
    constructor(options){
        this.baseUrl = options.baseUrl
        this.headers = options.headers
    }

    _checkResponse(res) {
        if (res.ok)
          return res.json();
        else
          return Promise.reject(`Ошибка: ${res.status}`);
      }

    getUserId(){
        return fetch(`${this.baseUrl}/users/me`, {
           headers: this.headers,
           credentials: 'include',
        })
        .then(this._checkResponse)
    }

    getInitialCards(){
        return fetch(`${this.baseUrl}/cards`, {
            headers: this.headers,
            credentials: 'include',
        })
        .then(this._checkResponse)
    }

    patchUserInfo({name, description}){
        return fetch(`${this.baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this.headers,
            credentials: 'include',
         body: JSON.stringify({
            name: name,
            about: description
          })
        })
         .then(this._checkResponse)
    }

    addNewCard({name,link}){
        return fetch(`${this.baseUrl}/cards`, {
            method: 'POST',
            headers: this.headers,
            credentials: 'include',
         body: JSON.stringify({
            name: name,
            link: link
          })
        })
         .then(this._checkResponse)
    }

    deleteCard(id){
        return fetch(`${this.baseUrl}/cards/${id}`, {
            method: 'DELETE',
            headers: this.headers,
            credentials: 'include',
         })
         .then(this._checkResponse)
    }

    deleteLike(id){
        return fetch(`${this.baseUrl}/cards/${id}/likes`, {
            method: 'DELETE',
            headers: this.headers,
            credentials: 'include',
         })
         .then(this._checkResponse)
    }

    addLike(id){ 
        return fetch(`${this.baseUrl}/cards/${id}/likes`, {
            method: 'PUT',
            headers: this.headers,
            credentials: 'include',
         })
         .then(this._checkResponse)
    }

    patchUserAvatar({link}){
        return fetch(`${this.baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this.headers,
            credentials: 'include',
         body: JSON.stringify({
            avatar: link
          })
        })
         .then(this._checkResponse)
    }
}

const api = new Api({
    baseUrl: 'http://api.blazhev.mesto.nomoredomains.monster',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  export default api