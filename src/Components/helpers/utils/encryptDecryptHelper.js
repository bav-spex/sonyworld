import CryptoJS from "crypto-js";

const SECURITY_KEY = process.env.REACT_APP_ENCRYPT_DECRYPT_SECRET_KEY; // base url

export const encryptHelper = (message) => {

    // Encrypt
    var ciphertext = CryptoJS.AES.encrypt(message, SECURITY_KEY).toString();

    return ciphertext;
}

export const decryptHelper = (ciphertext) => {

    // Decrypt
    var bytes = CryptoJS.AES.decrypt(ciphertext, SECURITY_KEY);
    var originalText = bytes.toString(CryptoJS.enc.Utf8);

    return originalText;
}