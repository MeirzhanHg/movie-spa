import styles from "./SlugField.module.scss";
import Field from "../Field";

const SlugField = ({ generate, register, error }) => {
   return (
      <div className="relative">
         <Field
            {...register("slug", {
               required: "Slug is required",
            })}
            placeholder="Slug"
            error={error}
         />

         <div className={styles.badge} onClick={generate}>
            generate
         </div>
      </div>
   );
};

export default SlugField;
