export {
    customerSignUp, // customer signup
    customerSignIn, // customer sign in
    getCustomerDetails, // customer details
    isEmailAvailable,  // is-email-available
    isUsernameAvailable,  // is-username-available
    checkPasswordStrength,  // check-password-strength
} from './customer/customer';

export {
    loaderStart, // start loader
    loaderEnd, // end loader
    notifySuccess, // success message
    notifyError, // error message
    notifyClear, // clear message
} from './common/common';