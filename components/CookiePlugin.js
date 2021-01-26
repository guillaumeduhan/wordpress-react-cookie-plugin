class CookiePlugin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      name: "CookiePlugin"
    };
    this.acceptCookies = this.acceptCookies.bind(this)
    this.declineCookies = this.declineCookies.bind(this)
  }

  acceptCookies() {
    Cookies.set('myCookieFromCookiePlugin', true)
    this.setState({
      visible: false
    })
  }

  declineCookies() {
    Cookies.set('declineCookie', false)
    this.setState({
      visible: false
    })
  }

  render() {
    return this.state.visible ? (
      <div class='CookieBanner container fixed-bottom alert alert-light border alert-dismissible fade show' role='alert' ref='cookieBanner'>
        <div class='row justify-content-between align-items-stretch'>
          <div class='col-1 h-full d-flex align-items-center justify-content-center'>
            <img src='wp-content/plugins/cookie-plugin/assets/cookie.png' width='100px' />
          </div>
          <div class='col-8'>
            <p class='m-0 fw-bolder'>Are you okay with Cookies?</p>
            <p class='lh-base fs-6 m-0'>Cookies let us give you a better experience and improve our products.<br />We won't
            turn them until you accept.</p>
          </div>
          <div class='col-2'>
            <div class='row'>
              <button id='accept' onClick={this.acceptCookies} type='button' class='btn btn-info text-white mb-2'>Accept</button>
              <button id='decline' onClick={this.declineCookies} type='button' class='btn btn-outline-info'>Decline</button>
            </div>
          </div>
        </div>
      </div>
    ) : ''
  }
}