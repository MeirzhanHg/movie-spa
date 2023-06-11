import { useState } from "react";
import { useAuthRedirect } from "./useAuthRedirect";
import { useAuth } from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";

import styles from "./Auth.module.scss";
import Meta from "../../../utils/meta/Meta";
import Heading from "../../ui/heading/Heading";
import Button from "../../ui/form-elements/Button";
import AuthFields from "./AuthFields";
import { useActions } from "../../../hooks/useActions";

const Auth = () => {
   useAuthRedirect();

   const { isLoading } = useAuth();

   const [type, setType] = useState("login");

   const {
      register: registerInput,
      handleSubmit,
      formState,
      reset,
   } = useForm({
      mode: "onChange",
   });

   const { login, register } = useActions();

   const onSubmit = (data) => {
      if (type === "login") login(data);
      else if (type === "register") register(data);

      reset();
   };

   return (
      <Meta title="Auth">
         <section className={styles.wrapper}>
            <form onSubmit={handleSubmit(onSubmit)}>
               <Heading title="Регистрация" className="mb-6" />

               <AuthFields
                  formState={formState}
                  register={registerInput}
                  isPasswordRequired
               />

               <div className={styles.buttons}>
                  <Button
                     type="submit"
                     onClick={() => setType("login")}
                     disabled={isLoading}
                  >
                     Кіру
                  </Button>
                  <Button
                     type="submit"
                     onClick={() => setType("register")}
                     disabled={isLoading}
                  >
                     Тіркелу
                  </Button>
               </div>
            </form>
         </section>
      </Meta>
   );
};

export default Auth;
