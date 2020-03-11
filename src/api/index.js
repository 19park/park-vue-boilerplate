import api from '@/api/common';

function jsonToQueryString(json) {
    if (!json) return '';
    return '?' +
        Object.keys(json).map(function (key) {
            if (json[key] instanceof Array) {
                let query = [];
                for (let i = 0;i < json[key].length;i++) {
                    query.push(encodeURIComponent(key) + '=' +
                             encodeURIComponent(json[key][i]));
                }
                return query.join('&');
            } else {
                return encodeURIComponent(key) + '=' +
                    encodeURIComponent(json[key]);
            }
        }).join('&');
}

export const mask = {
    fetchByAddr(data) {
        return api.request({
            method: 'get',
            url: `/storesByAddr/json${jsonToQueryString(data)}`
        });
    }
};

export default mask;
