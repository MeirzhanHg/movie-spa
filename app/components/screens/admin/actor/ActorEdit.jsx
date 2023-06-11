import { Controller, useForm } from "react-hook-form";

import { useActorEdit } from "./useActorEdit";

import Meta from "../../../../utils/meta/Meta";
import generateSlug from "../../../../utils/string/generateSlug";

import AdminNavigation from "../../../ui/admin-navigation/AdminNavigation";
import Heading from "../../../ui/heading/Heading";
import SkeletonLoader from "../../../ui/SkeletonLoader";
import Field from "../../../ui/form-elements/Field";
import SlugField from "../../../ui/form-elements/SlugField/SlugField";
import Button from "../../../ui/form-elements/Button";
import UploadField from "../../../ui/form-elements/UploadField/UploadField";
import formStyles from "../../../ui/form-elements/admin-form.module.scss";

const ActorEdit = () => {
   const {
      handleSubmit,
      register,
      formState: { errors },
      setValue,
      getValues,
      control,
   } = useForm({ mode: "onChange" });

   const { isLoading, onSubmit } = useActorEdit(setValue);

   return (
      <Meta title="Edit genre">
         <AdminNavigation />
         <Heading title="Актерды өңдеу" />
         <form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
            {isLoading ? (
               <SkeletonLoader count={3} />
            ) : (
               <>
                  <div className={formStyles.fields}>
                     <Field
                        {...register("name", {
                           required: "Есімін енгізіңіз!",
                        })}
                        placeholder="Есімі"
                        error={errors.name}
                     />

                     <SlugField
                        register={register}
                        error={errors.slug}
                        generate={() => {
                           setValue("slug", generateSlug(getValues("name")));
                        }}
                     />

                     <Controller
                        control={control}
                        name="photo"
                        defaultValue=""
                        render={({
                           field: { value, onChange },
                           fieldState: { error },
                        }) => (
                           <UploadField
                              onChange={onChange}
                              value={value}
                              error={error}
                              folder="actors"
                              placeholder="Сурет"
                           />
                        )}
                        rules={{
                           required: "Суретті енгізіңіз",
                        }}
                     />
                  </div>
                  <Button>Жаңарту</Button>
               </>
            )}
         </form>
      </Meta>
   );
};

export default ActorEdit;
