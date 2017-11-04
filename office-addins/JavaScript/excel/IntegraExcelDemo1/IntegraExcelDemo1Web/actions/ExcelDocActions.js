var alt = require('../alt');

class ExcelDocActions {
    evaluateNewDocument(newDoc) {
        return newDoc;
    }

}

module.exports = alt.createActions(ExcelDocActions);
