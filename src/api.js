export const domainRoot = 'http://backend.app';
export const loginUrl = domainRoot+'/oauth/token';
export const userUrl = domainRoot+'/api/user';
export const postsUrl = domainRoot+'/api/posts';

export const getHeader = function () {
    const tokenData = JSON.parse(window.localStorage.getItem('authUser'));
    const headers = {
        'Accept': 'application/json',
        'Authorization': 'Bearer '+ tokenData.access_token
    };
    return headers
};
