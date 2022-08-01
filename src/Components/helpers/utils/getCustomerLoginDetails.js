import { decryptHelper } from "./encryptDecryptHelper";

export const getCustomerLoginDetails = () => {

    const getUser = localStorage.getItem("custDetails");

    let getUserInfo = "";
    if (getUser !== null) {
        let getInfo = decryptHelper(getUser);
        try {
            // const result = JSON.parse('');
            let custInfo = JSON.parse(getInfo);
            if (custInfo.id !== "" && custInfo.email !== "") {
                getUserInfo = custInfo
            }
        } catch (err) {
            // 👇️ SyntaxError: Unexpected end of JSON input
        }
    }
    return getUserInfo;
}

export const getCustomerLoginStatus = () => {

    const getUser = localStorage.getItem("custDetails");

    let loginStatus = false;
    if (getUser !== null) {

        let getInfo = decryptHelper(getUser);
        try {
            // const result = JSON.parse('');
            let custInfo = JSON.parse(getInfo);
            if (custInfo.id !== "" && custInfo.email !== "") {
                loginStatus = true;
            }
        } catch (err) {
            // 👇️ SyntaxError: Unexpected end of JSON input
        }
    }

    return loginStatus;
}


