export const emailRegExp = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const nameRegExp = /^(?:((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-.\s])){1,}(['’,\-\\.]){0,1}){1,}(([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-. ]))*(([ ]+){0,1}(((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-\\.\s])){1,})(['’\-,\\.]){0,1}){1,}((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-\\.\s])){1,})?)*)$/;
export const usernameRegExp = /^[a-zA-Z0-9._]+$/;
export const verificationCodeRegExp = /^[0-9]{5}$/;
// eslint-disable-next-line
export const phoneNumberRegExp = /^[+]?[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
export const phoneNumberRegExpSa = /^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/;
export const cardNumberRegExp = /^[0-9]{16}$/;
export const amexRegExp = /^3[47][0-9]{13}$/;
export const expiryMonthRegExp = /^[0-9]{1,2}$/;
export const expiryYearRegExp = /^[0-9]{2}$/;
export const cscRegExp = /^[0-9]{3,4}$/;
export const urlRegExp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
export const streetAddressRegExp = /^[a-zA-Z0-9\s,.'-]{1,}$/;
export const redeemMezaOTPRegExp = /^[0-9]{4,6}$/;
export const redeemMezaValueRegExp = /^[0-9]{1,}$/;
export const redeemMezaPhoneRegExp = /^[0-9]{10}$/;
export const walletRedeemCodeRegExp = /^[0-9A-Z]{4}-[0-9A-Z]{4}-[0-9A-Z]{4}/;


