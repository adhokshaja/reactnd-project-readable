/**
 * Create an object from array
 * @param {array} arr 
 * @param {string} key 
 */
export function objectFromArray(arr, key = 'id') {
    if (arr && arr.length) {
        return arr.reduce((v, i) => {
            v[i[key]] = i;
            return v;
        }, {});
    } else {
        return {};
    }
}