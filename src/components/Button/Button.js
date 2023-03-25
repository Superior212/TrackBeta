import styles from "./Button.module.css";
const Button = ({ label, className = "" }) => {
  return (
    <div>
      <button className={`${styles.navBtn} ${className}`}>{label}</button>
    </div>
  );
};
export default Button;
