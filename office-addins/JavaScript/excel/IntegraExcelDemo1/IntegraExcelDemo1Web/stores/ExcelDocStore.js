var alt = require('../alt');

class ExcelDocStore {
    constructor() {
        // Is the document on the ledger at all?
        this.onLedger = false;

        // Has the document been modified, relative to the last revision
        // tracked on the ledger, which may be different than whether or not
        // it has been saved or reverted relative to the local disk?
        // This variable has no meaning if the document has no tracked
        // revisions.
        this.modified = false;
        
        // Initialize the list of tracked revisions.
        this.revisions = [];
    }
}