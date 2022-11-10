import React from "react";
import "./Recaptcha.css";

const Recaptcha = () => {
  return (
    <div className="captcha">
      <div className="spinner">
        <label>
          <input
            type="checkbox"
            // onClick="$(this).attr('disabled','disabled');"
          />
          <span className="checkmark">
            <span>&nbsp;</span>
          </span>
        </label>
      </div>
      <div className="text">I'm not a robot</div>
      <div className="captcha_logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/RecaptchaLogo.svg/2048px-RecaptchaLogo.svg.png" />
        <p>Privacy - Terms</p>
      </div>
    </div>
  );
};

export default Recaptcha;
