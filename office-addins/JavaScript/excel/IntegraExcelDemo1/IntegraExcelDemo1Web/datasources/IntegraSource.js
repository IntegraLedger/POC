class IntegraSource {
  verifyExists (SHA256sum) {
    return new Promise(function (resolve, reject) {
      /*
      $.ajaxSetup({
          headers: {
              "X-IBM-Client-ID": "09d25564-cfbd-4c90-820d-a8d3538a667a",
              "X-IBM-Client-Secret": "c88c5925-f19c-4d7d-b4c4-
cc5e3c928f97"}
      */

      // HACK FOR TESTING
      console.log('herp')
      setTimeout(function () {
        console.log('derp')
        resolve(false)
      }, 5000)
    })
  }
}

export default IntegraSource
