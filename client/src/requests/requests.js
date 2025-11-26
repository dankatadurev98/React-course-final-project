

const BASE_URL = 'http://localhost:3030';

const endpoints = {
    games: `${BASE_URL}/data/games`,
    gamesById: (id) => `${BASE_URL}/data/games/${id}`,
    
    login: `${BASE_URL}/users/login`,
    register: `${BASE_URL}/users/register`,
    logout: `${BASE_URL}/users/logout`,
};


function request(method, url, data, token) {
    let options = {
        method,
        headers: {}
    };

    if (token) {
        options.headers['X-Authorization'] = token;
    }

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    return fetch(url, options)
        .then(res => {
            if (!res.ok) {
                return res.json().then(err => {
                    throw new Error(err.message);
                });
            }
            return res.json();
        });
}


export const api = {
    

    get: (url, token) => request('GET', url, undefined, token),
    post: (url, data, token) => request('POST', url, data, token),
    put: (url, data, token) => request('PUT', url, data, token),
    del: (url, token) => request('DELETE', url, undefined, token),
};
export {endpoints} ;