var alt = require('../alt')
// var IntegraSource = require('../datasources/IntegraSource')

class DocStatusActions {
  ReportInitialLoadStart () {
    return {}
  }

  ReportRegistrationStatus (isRegistered) {
  }

  fetchDocStatus () {
    return false
    /*
    return (dispatch) => {
      dispatch()
      IntegraSource.verifyRegistered('12345')
        .then((exists) => {
          this.updateRegistered(exists)
        })
        .catch((errorMessage) => {
          this.verificationFailed(errorMessage)
        })
    }
    */
  }

  verificationFailed (errorMessage) {
    console.log(errorMessage)
    return errorMessage
  }
}

export default alt.createActions(DocStatusActions, 'DocStatusActions')
