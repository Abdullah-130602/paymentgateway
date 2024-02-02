import React from "react";
import styles from "./TextArea.module.css";

const TextArea = ({ value, onChange, ...props }) => {
  return (
    <textarea
      className={styles.textarea}
      cols="30"
      rows="10"
      {...props}
      onChange={onChange}
      defaultValue={value}
    ></textarea>
  );
};

export default TextArea;
