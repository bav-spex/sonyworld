export {
    customerSignUp, // customer signup
    customerSignIn, // customer sign in
    getCustomerDetails, // customer details
    isEmailAvailable,  // is-email-available
    isUsernameAvailable,  // is-username-available
    checkPasswordStrength,  // check-password-strength
    customerLogout,  // logout
    customerUpdatePassword,  // update password
    customerProfileDetails, // profile details
    customerUpdateProfile // profile update
} from './customer/customer';

export {
    createCustomerAddress, // create customer address 
    getCustomerAddressList, // get customer address 
    updateCustomerAddress, // update customer address
    deleteCustomerAddress, // delete customer address
} from './customerAddress/customerAddress';

export {
    loaderStart, // start loader
    loaderEnd, // end loader
    notifySuccess, // success message
    notifyError, // error message
    notifyClear, // clear message
} from './common/common';

export {
    getCustomerOrdersList, // get_api_V1_customer_orders
    getCustomerOrderDetails
} from './customerOrders/customerOrders';

export {
    getFlyerPdf
} from './other/other';