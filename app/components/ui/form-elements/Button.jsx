import cn from "classnames";

import styles from "./form.module.scss";

const Button = ({ children, className, ...rest }) => {
   return (
      <button className={cn(styles.button, className)} {...rest}>
         {children}
      </button>
   );
};

export default Button;
