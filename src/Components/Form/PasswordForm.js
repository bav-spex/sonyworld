import React,{useState} from 'react'
import Heading7 from '../Font/Heading7'
import see_password from "./../../assets/Icon/see_password.svg"
import hide_password from "./../../assets/Icon/hide_password.svg"
import "./../../SCSS/Form/_passwordForm.scss"
function PasswordForm() {
    const [isPassword, setIsPassword] = useState(true);
    const [isConfirmPassword, setIsConfirmPassword] = useState(true);
    const [passwordData, setPasswordData] = useState({
        oldPassword:"",
        newPassword:"",
        confirmPassword:""
    })
    const [errors, setErrors] = useState([]);
    const togglePassword = () => setIsPassword(!isPassword);
    const toggleConfirmPassword = () => setIsConfirmPassword(!isConfirmPassword);
    const handleChange = (event) => {
        let value = event.target.value;
        let name = event.target.name;
        let getErr = errors.filter((val, i) => val !== name);
        if (value) {
          
          if (name === "confirmPassword") {
            if (passwordData.password) {
              if (passwordData.confirmPassword !== passwordData.password) {
                getErr.push("confirmPassword");
              }
            }
          }
        } else {
          getErr.push(name);
        }
        setErrors(getErr);
        setPasswordData({ ...passwordData, [name]: value });
      };
      const handleSubmit=()=>{
        console.log(passwordData);
      }
      const handleCancel=()=>{
        console.log(passwordData);
      }
  return (
    <div className="inner__password__block">
       <div className="main__form__field__block">
          {/* <p className="form__label">Password</p> */}
          <Heading7 text="Old Password" marginBottom={10} />
          <div className="field__block">
            <input
              type={isPassword ? "password" : "text"}
              placeholder=""
              className="form__field"
              id="oldPassword"
              name="oldPassword"
              value={passwordData.oldPassword}
              onChange={(e) => handleChange(e)}
            />
            <a onClick={() => togglePassword()}>
              {isPassword ? (
                <img src={see_password} alt="" />
              ) : (
                <img src={hide_password} alt="" />
              )}
            </a>
          </div>
          {errors.includes("password") && <p className="invalid__message">invalid password</p>}
        </div>
       <div className="main__form__field__block">
          {/* <p className="form__label">Password</p> */}
          <Heading7 text="New Password" marginBottom={10} />
          <div className="field__block">
            <input
              type={isPassword ? "password" : "text"}
              placeholder=""
              className="form__field"
              id="newPassword"
              name="newPassword"
              value={passwordData.newPassword}
              onChange={(e) => handleChange(e)}
            />
            <a onClick={() => togglePassword()}>
              {isPassword ? (
                <img src={see_password} alt="" />
              ) : (
                <img src={hide_password} alt="" />
              )}
            </a>
          </div>
          {errors.includes("password") && <p className="invalid__message">invalid password</p>}
        </div>
        <div className="main__form__field__block">
          {/* <p className="form__label">Confirm Password</p> */}
          <Heading7 text="Confirm Password" marginBottom={10} />
          <div className="field__block">
            <input
              type={isConfirmPassword ? "password" : "text"}
              placeholder=""
              className="form__field"
              id="confirmPassword"
              name="confirmPassword"
              value={passwordData.confirmPassword}
              onChange={(e) => handleChange(e)}
            />
            <a onClick={() => toggleConfirmPassword()}>
              {isConfirmPassword ? (
                <img src={see_password} alt="" />
              ) : (
                <img src={hide_password} alt="" />
              )}
            </a>
          </div>
          {errors.includes("confirmPassword") && <p className="invalid__message">invalid confirmPassword</p>}
        </div>
     
     
      <div className="profile__form__button__block">
        <button className="form__save__button" onClick={handleSubmit}>
          SAVE
        </button>
        <button className="form__cancel__button" onClick={handleCancel}>
          CANCEL
        </button>
      </div>
      </div>
  )
}

export default PasswordForm