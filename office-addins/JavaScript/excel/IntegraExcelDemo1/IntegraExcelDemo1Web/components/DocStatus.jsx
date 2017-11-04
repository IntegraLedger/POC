import React from 'react'

import DocStatusStore from '../stores/DocStatusStore'

class DocStatus extends React.Component {
  /* TODO
  static propTypes = {
      isRegistered: React.propTypes.s
  }
  */

  constructor (props) {
    super(props)
    this.state = {
      isRegistered: 'checking'
    }
  }

  componentDidMount () {
    //DocStatusStore.listen(this.onChange)
  }

  
  componentWillUnmount () {
    //DocStatusStore.unlisten(this.onChange)
  }

  onChange (state) {
    this.setState(state)
  }

  // End boilerplate

  render () {
    console.log('YERP')

    var isRegisteredBlurb = 'shit';
    var verificationColor = 'cyan';

    this.state.isRegistered = 'true';
    console.log("aaa" + this.state.isRegistered + "bbb");

    switch (this.state.isRegistered) {
      case 'true':
        isRegisteredBlurb = 'Verified'
        verificationColor = 'green'
        break;

      case 'false':
        isRegisteredBlurb = 'Unverified'
        verificationColor = 'red'
        break;

      case 'checking':
        isRegisteredBlurb = 'Checking ledger...'
        verificationColor = 'yellow'
        break;

      case 'failed':
        isRegisteredBlurb = 'Cannot connect to ledger'
        verificationColor = 'orange'
        break;

      case undefined:
        isRegisteredBlurb = '(internal error, undefined)'
        verificationColor = 'violet'
        break;

      default:
        isRegisteredBlurb = '(internal error)'
        verificationColor = 'violet'
    }

    console.log("ccc" + isRegisteredBlurb + "ddd")
    console.log('SQUICK')

    return (
      <div>
        <div id="ledger-context">
          <div className="ms-font-l ms-fontColor-neutralSecondary">
            <hr style={{ width: '95%' }} />
            Digital Signature
            <br />
              Registered: <span style={{ 'color': verificationColor }}>"{isRegisteredBlurb}"</span>
            <br />
          </div>
        </div>
      </div>
    )

    /*
        <div>
            <div id="ledger-context">
                <div class="ms-font-xl ms-fontWeight-semibold" style="color:green;">Verified</div>
                <hr style="width:100%" />
                <div class="ms-font-l ms-fontColor-neutralSecondary">Digital Signature</div>
            </div>
        </div >
    <div id="ledger-context">
        <div class="ms-font-xl ms-fontWeight-semibold" style="color:green;">Verified</div>
        <hr style="width:100%" />
        <div class="ms-font-l ms-fontColor-neutralSecondary">Digital Signature</div>
    </div>
        <div class="ms-font-m" style="color:green;">Matt Heck<br />President<br />Hard Problems Group, LLC</div>
        <br />
        <div class="ms-font-l ms-fontColor-neutralSecondary">Ledger</div>
        <div class="ms-font-m" style="color:green;">
            <span id="ledger-icon">
                <img src="Images/Integra-glyph-16x16.png" />
            </span>
            <span id="ledger-name" style="position:relative; left:2px; top:-2px;">Integra Ledger Global Legal Blockchain</span>
        </div>
        <br />
        <div class="ms-font-l ms-fontColor-neutralSecondary">Substrate</div>
        <div class="ms-font-m" style="color:gray;">Hyperledger Fabric</div>
    */
    //    <div>Document state: {this.state.trackingStatus}</div>
  }
}

export default DocStatus
