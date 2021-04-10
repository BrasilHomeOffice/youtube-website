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
  return new Promise((resolve, reject) => {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId      : '3094736140806182',
        cookie     : true,
        xfbml      : true,
        version    : 'v2.7'
      });
      
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
        resolve(response);
      });
      // _fbRefreshLoggedUser();

      window.FB.AppEvents.logPageView();
    };

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  });
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
    console.log('_fbRefreshLoggedUser ', response)
  });
}

/**
 * 
 */
export function fbLogin() {
  FB.login(checkLoginStatus, {scope : 'public_profile,email'});
}

// Check the result of the user status and display login button if necessary
function checkLoginStatus(response) {
  if(response && response.status == 'connected') {
    console.log('User is authorized', response);

  } else if (response.status === 'not_authorized') {
    console.log('User is not_authorized ... ', response);

  } else {
    console.log('User is not authorized', response);
  }
}