import React from "react";
import styles from "./Driver.module.css";
import Drive from "../../images/drive.png";

const Driver = () => {
  return (
    <div className={styles.driver}>
      <div className={styles.left}>
        <img src={Drive} alt="" />
      </div>
      <div>
        <h2>
          Find your perfect car <span>to try before you buy</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          iusto quos veritatis id facilis ex obcaecati, rerum iure totam ea et
          vel sunt tempora magni voluptate itaque voluptates nulla excepturi!
        </p>
        <button>Browse Cars</button>
      </div>
    </div>
  );
};

export default Driver;
