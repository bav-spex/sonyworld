import React,{useState} from "react";
import "./../SCSS/_newsLetter.scss"
function NewsLetter() {
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = () => {
    console.log(email);
  };
  return (
    <div className="container-fluid newsLetter__container">
      <div className="newsLetter__block">
        <div className="row newsLetter__row">
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-3 newsLetter__text">
            <div className="newsLetter__title">Newsletter Subscriptions</div>
            <div className="newsLetter__description">
              Signup for exclusive offers, original stories, activism awareness,
              events and more.
            </div>
          </div>
          <div className="col-sm-12 col-md-8 col-lg-8 col-xl-9 newsLetter__form__block">
            <form onSubmit={handleSubmit} className="newsLetter__form">
              <div className="form__field">
                <input
                  type="text"
                  className="input__field"
                  placeholder="Enter Email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div className="form__field">
                <button
                  type="submit"
                  className="input__button"
                  onClick={handleSubmit}
                >SUBSCRIBE</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
