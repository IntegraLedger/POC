var alt = require('../alt')

var DocStatusActions = require('../actions/DocStatusActions')

class DocStatusStore {

  constructor() {
    console.log('DocStatusStore Constructor 1')

    this.SHA256sum = null

    // Valid values are:
    // ----------------------------------------------------------------------------
    // 'true'       Hash was found on the ledger.
    // 'false'      Hash was not found on the ledger.
    // 'checking'   The first ledger check is in progress.
    // 'failed'     The first and only ledger check has failed.
    //                (Failures after the first attempt will not change the value.)
    this.isRegistered = null
    this.revisions = []
    this.errorMessage = null

    /*
    this.bindListeners({
      // onRegistrationReport: DocStatusActions.ReportRegistration,
      // handleUpdateSHA256sum: DocStatusActions.UPDATE_SHA256SUM
      
      // handleUpdateEnrollment: DocStatusActions.UPDATE_ENROLLMENT,
      // handleUpdateEnrollmentFailed: DocStatusActions.ENROLLMENT_CHECK_FAILED
      
    })
    */

    console.log('DocStatusStore Constructor 2')
  }

  onReportRegistration(isRegistered) {
    this.isRegistered = isRegistered
  }

  /*
  handleUpdateSHA256sum (SHA256sum) {
    this.SHA256sum = SHA256sum
  }
  */
}

export default alt.createStore(DocStatusStore, 'DocStatusStore')
