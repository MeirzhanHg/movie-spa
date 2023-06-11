import cn from "classnames";

import styles from "./SlideArrow.module.scss";
import MaterialIcon from "../../MaterialIcon";

const SlideArrow = ({ variant, clickHandler }) => {
   const isLeft = variant === "left";

   return (
      <button
         onClick={clickHandler}
         className={cn(styles.arrow, {
            [styles.left]: isLeft,
            [styles.right]: !isLeft,
         })}
      >
         <MaterialIcon name={isLeft ? "MdChevronLeft" : "MdChevronRight"} />
      </button>
   );
};

export default SlideArrow;
