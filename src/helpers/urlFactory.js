// src/helpers/urlFactory.js
const urlFactory = (boss, className, param1, param2, isLazy) => {
    let query = `메이플 ${className}`;
    let url = 'https://www.youtube.com/results?search_query='


    if (boss) {
        query += param1 + " " + param2;
        return url + encodeURIComponent(query);
    }

    if (param1) {
        query = query + ` ${param1}`.trim();
    }

    if (param2) {
        query = query + ` ${param2}`.trim();
    }

    if (!param1 && !param2) {
        query = query + ' 사냥터'
    }

    if (isLazy) {
        query += ' 뇌빼기';
    }

    return url + encodeURIComponent(query);
};

export default urlFactory;
