import React from "react";
import styles from "./styles/footer.module.css";
import { NavLink } from "react-router-dom";
import { VStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <VStack position={"relative"} bottom=""  id={styles.fooTerdivs}>
      <div id={styles.fooTer}>
        <h1 className={styles.H1}>Bewakoof</h1>
        <div className={styles.footerGrid}>
          <div>
            <h4>CUSTOMERS SERVICE</h4>
            <p>
              <a href="/">Contact us</a>
            </p>
            <p>
              <a href="/">Track Order</a>
            </p>
            <p>
              <a href="/">Return Order</a>
            </p>
            <p>
              <a href="/">Cancel Order</a>
            </p>
          </div>
          <div>
            <h4>COMPANY</h4>
            <p>
              <a href="/">About us</a>
            </p>
            <p>
              <a href="/">We're Hiring</a>
            </p>
            <p>
              <a href="/">Terms & Conditions</a>
            </p>
            <p>
              <a href="/">Privacy Policy</a>
            </p>
            <p>
              <a href="/">Blog</a>
            </p>
          </div>
          <div>
            <h4>CONNECT WITH US</h4>
            <p>
              <a href="/">4.7M People Like this</a>
            </p>
            <p>
              <a href="/">1M Followers</a>
            </p>
          </div>
          <div>
            <h4>KEEP UP TO DATE</h4>
            <div className={styles.inpbtnFlex}>
              <input placeholder="Enter Email id" />
              <button className={styles.bTTn}>Subscribe</button>
            </div>
          </div>
          <div>
            <p>
              <a href="/">15 Days return policy</a>
            </p>
            <p>
              <a href="/">Cash on delivery*</a>
            </p>
          </div>
          <div>
            <h4>DOWNLOAD THE APP</h4>
            <div id={styles.imgDivmain}>
              {/* //overflow={"hidden"} w="95%"  m="auto" mt={{base:"70px",lg:"190px"}} h={{base:"350px",lg:"auto"}} */}
              <div>
                <a
                  href="https://play.google.com/store/apps/details?id=com.bewakoof.bewakoof&hl=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://images.bewakoof.com/web/app_android_v1.png"
                    alt=""
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://itunes.apple.com/in/app/bewakoof/id1100190514?mt=8"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://images.bewakoof.com/web/app_ios_v1.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div>
            <h4>100% SECURE PAYMENT</h4>
            <div>
              <img
                src="https://images.bewakoof.com/web/secure-payments-image.png"
                alt=""
              />
            </div>
          </div>
        </div>

      
      </div>
    </VStack>
  );
};

export default Footer;
