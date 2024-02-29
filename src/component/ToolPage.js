import toolImg from "../asserts/3.png";
import classes from "./ToolPage.module.css";

const ToolPage = () => {
  return (
    <div className={classes.con}>
      <p>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </p>
      <div className={classes.toolImg}>
        <img src={toolImg} alt="Tool.png" />
        <p className={classes.toolNames}>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
        <hr />
        <div>
          <h4>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
          <p>
            CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA
            SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING
            FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE
            FIGHTING AGRICULTURE & RESIDENTIAL
          </p>
        </div>
      </div>
    </div>
  );
};

export default ToolPage;
