import { forwardRef } from "react";
import styles from "./Input.module.css";

const Input = forwardRef(
  ({ type, onChange, placeholder, value, ...props }, ref) => {
    return (
      <div className={styles["input-container"]}>
        <input
          className={styles.input}
          ref={ref}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          {...props}
        />
      </div>
    );
  }
);

export default Input;
