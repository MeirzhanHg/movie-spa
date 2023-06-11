import styles from "./Profile.module.scss";
import { useForm } from "react-hook-form";
import { useProfile } from "./useProfile";
import Meta from "../../../utils/meta/Meta";
import Button from "../../ui/form-elements/Button";
import AuthFields from "../auth/AuthFields";
import Heading from "../../ui/heading/Heading";
import SkeletonLoader from "../../ui/SkeletonLoader";

const Profile = () => {
   const { handleSubmit, register, formState, setValue } = useForm({
      mode: "onChange",
   });

   const { isLoading, onSubmit } = useProfile(setValue);

   return (
      <Meta title="Profile">
         <Heading title="Профиль" className="mb-6" />
         <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            {isLoading ? (
               <SkeletonLoader count={2} />
            ) : (
               <AuthFields formState={formState} register={register} />
            )}

            <Button>Жаңарту</Button>
         </form>
      </Meta>
   );
};

export default Profile;
