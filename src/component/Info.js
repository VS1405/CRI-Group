import classes from "./Info.module.css";

import trofyImg from "../asserts/1.png";
import guestImg from "../asserts/2.png";

const Info = () => {
  return (
    <div className={classes.container}>
      <div className={classes.leftSide}>
        <img src={trofyImg} alt="trofy" />
      </div>
      <div className={classes.rightSide}>
        <h4>
          C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the
          the 4<sup>th</sup> time.
        </h4>
        <div className={classes.shortInfo}>
          <ul>
            <li>
              C.R.I.'s enegry efficient products as well as recognized by
              various Goverment Institutions, as trustworthy products for
              various projects across the globe to save enegry.
            </li>
            <li>
              C.R.I. is the highest contribution in the country for the projects
              of eesl (enegry efficient service limited) to replace the old
              inefficient pumps with 5 star rated energy efficient smart pump
              with IoT enabled control panel.
            </li>
          </ul>
          <img src={guestImg} alt="guest" />
          <p>
            Goverment of India has awarded the{" "}
            <strong>"National Energy Conservation Award 2018"</strong>. Mr. G.
            Selvaraj, Joint Managing Director of C.R.I. Group received the award
            from Smt. Sumitra Mahajan, speaker of Lok Sabha & Shri. Raj Kumar
            Singh, Honorabl Minister of State.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
