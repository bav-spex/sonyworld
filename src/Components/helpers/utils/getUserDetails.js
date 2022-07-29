import { decryptHelper } from "./encryptDecryptHelper";

export const getUserDetails = () => {

    const getUser = localStorage.getItem("userDetails");

    let getUserInfo = "";
    if (getUser !== null) {
        let getInfo = decryptHelper(getUser);
        getUserInfo = JSON.parse(getInfo);
    }

    return getUserInfo;
}
