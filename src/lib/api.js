'use strict';
export default {

  get(path) {
    return fetch(path)
      .then(r => r.json())
      .catch(ex => console.log('parsing failed', ex));
  }

};
