import { forwardRef } from "react";
import cn from "classnames";

import styles from "./form.module.scss";

const Field = forwardRef(
   ({ placeholder, error, type = "text", style, ...rest }, ref) => {
      return (
         <div className={cn(styles.common, styles.field)} style={style}>
            <label>
               <span>{placeholder}</span>
               <input type={type} ref={ref} {...rest} />
            </label>
            {error && <div className={styles.error}>{error.message}</div>}
         </div>
      );
   }
);

Field.displayName = "Field";

export default Field;
