import { Controller, useForm } from "react-hook-form";

import { useUserEdit } from "./useUserEdit";
import Meta from "../../../../utils/meta/Meta";

import AdminNavigation from "../../../ui/admin-navigation/AdminNavigation";
import Heading from "../../../ui/heading/Heading";
import SkeletonLoader from "../../../ui/SkeletonLoader";

import Button from "../../../ui/form-elements/Button";

import AuthFields from "../../auth/AuthFields";

const UserEdit = () => {
   const { handleSubmit, register, formState, setValue, control } = useForm({
      mode: "onChange",
   });

   const { isLoading, onSubmit } = useUserEdit(setValue);

   return (
      <Meta title="Edit user">
         <AdminNavigation />
         <Heading title="Пайдаланушыны өңдеу" />
         <form onSubmit={handleSubmit(onSubmit)} className="admin-form">
            {isLoading ? (
               <SkeletonLoader count={3} />
            ) : (
               <>
                  <AuthFields register={register} formState={formState} />

                  <Controller
                     control={control}
                     name="isAdmin"
                     render={({ field }) => (
                        <button
                           onClick={(e) => {
                              e.preventDefault();
                              field.onChange(!field.value);
                           }}
                           className="text-link block mb-7"
                        >
                           {field.value
                              ? "Тұрақты пайдаланушыға айналдыру"
                              : "Әкімші ету"}
                        </button>
                     )}
                  />

                  <Button>Жаңарту</Button>
               </>
            )}
         </form>
      </Meta>
   );
};

export default UserEdit;
