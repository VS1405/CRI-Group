import classes from "./Footer.module.css";

import { FaFacebook } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { FaSquarePhone } from "react-icons/fa6";

const FooterPage = () => {
  return (
    <div className={classes.con}>
      <div className={classes.link}>
        <FaSquarePhone />
        <a href="tel:18002001234">Toll free 1800 200 1234</a>
      </div>
      <div className={classes.link}>
        <FaFacebook />
        <a href="www.facebook.com">www.facebook.com</a>
      </div>
      <div className={classes.link}>
        <TfiWorld />
        <a href="www.crigroup.com">www.crigroup.com</a>
      </div>
    </div>
  );
};

export default FooterPage;
