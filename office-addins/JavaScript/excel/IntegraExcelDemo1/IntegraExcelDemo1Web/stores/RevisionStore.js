var alt = require('../alt');

var RevisionActions = require('../actions/RevisionActions');

class RevisionStore {
    constructor() {
        this.date   = null;
        this.author = null;
        this.sha256 = null;
    }
}

module.exports = alt.createStore(RevisionStore, 'RevisionStore');

