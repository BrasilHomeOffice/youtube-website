/**
 * Docs to read:
 * 
 * Login button - https://developers.facebook.com/docs/facebook-login/web/login-button
<fb:login-button 
  scope="public_profile,email"
  onlogin="checkLoginState();">
</fb:login-button>
 * 
 * Verify the token on backend:
 * https://developers.facebook.com/docs/facebook-login/web/accesstokens
 * 
 * Required permissions: (scope=public_profile, email)
 * https://developers.facebook.com/docs/facebook-login/web/permissions
 * 
 * Like buttons:
 * https://developers.facebook.com/docs/plugins/
 * 
 * App review?
 * https://developers.facebook.com/docs/app-review
 * 
 */

export function fbInit() {
  window.fbAsyncInit = function() {
    window.FB.init({
      appId      : '{your-app-id}',
      cookie     : true,
      xfbml      : true,
      version    : '{api-version}'
    });
    
    _fbRefreshLoggedUser();

    window.FB.AppEvents.logPageView();
  };

  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
}

/**
 * Refreshes the login completely
 * Used to autologin users when page loads
 * 
 * https://developers.facebook.com/docs/facebook-login/web
 */
function _fbRefreshLoggedUser() {
  /**
   * Get the current login status
   * 
   * Schema:
   * https://developers.facebook.com/docs/facebook-login/web#checklogin
   * { status, authResponse: {
   *   accessToken, userID,                 // important fields
   *   signedRequest,                       // @QUESTION ~ what is this field?
   *   expiresIn, reauthorize_required_in,  // other
   * }}
   */
  window.FB.getLoginStatus(function(response) {
    // @TODO ~ 
  });
}

/**
 * 
 */