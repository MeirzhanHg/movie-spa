import Field from "../../ui/form-elements/Field";
import { validEmail } from "../../../shared/regex";

const AuthFields = ({
   register,
   formState: { errors },
   isPasswordRequired = false,
}) => {
   return (
      <>
         <Field
            {...register("email", {
               required: "Электрондық пошта қажет",
               pattern: {
                  value: validEmail,
                  message:
                     "Өтінеміз қолданыстағы электронды пошта адресін енгізіңіз",
               },
            })}
            placeholder="E-mail"
            error={errors.email}
         />

         <Field
            {...register(
               "password",
               isPasswordRequired
                  ? {
                       required: "Құпия сөз қажет",
                       minLength: {
                          value: 6,
                          message:
                             "Минималды ұзындығы 6 символдан көп болуы керек",
                       },
                    }
                  : {}
            )}
            type="password"
            placeholder="Құпия сөз"
            error={errors.password}
         />
      </>
   );
};

export default AuthFields;
