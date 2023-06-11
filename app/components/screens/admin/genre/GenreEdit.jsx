import { Controller, useForm } from "react-hook-form";
import { useGenreEdit } from "./useGenreEdit";
import Meta from "../../../../utils/meta/Meta";
import AdminNavigation from "../../../ui/admin-navigation/AdminNavigation";
import Heading from "../../../ui/heading/Heading";
import SkeletonLoader from "../../../ui/SkeletonLoader";
import Field from "../../../ui/form-elements/Field";
import SlugField from "../../../ui/form-elements/SlugField/SlugField";
import generateSlug from "../../../../utils/string/generateSlug";
import Button from "../../../ui/form-elements/Button";

import { stripHtml } from "string-strip-html";

import formStyles from "../../../ui/form-elements/admin-form.module.scss";
import dynamic from "next/dynamic";

const DynamicTextEditor = dynamic(
   () => import("../../../ui/form-elements/TextEditor"),
   {
      ssr: false,
   }
);

const GenreEdit = () => {
   const {
      handleSubmit,
      register,
      formState: { errors },
      setValue,
      getValues,
      control,
   } = useForm({ mode: "onChange" });

   const { isLoading, onSubmit } = useGenreEdit(setValue);

   return (
      <Meta title="Edit genre">
         <AdminNavigation />
         <Heading title="Жанрды өзгерту" />
         <form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
            {isLoading ? (
               <SkeletonLoader count={3} />
            ) : (
               <>
                  <div className={formStyles.fields}>
                     <Field
                        {...register("name", {
                           required: "Атауын енгізіңіз!",
                        })}
                        placeholder="Атауы"
                        error={errors.name}
                        style={{ width: "31%" }}
                     />

                     <div style={{ width: "31%" }}>
                        <SlugField
                           register={register}
                           error={errors.slug}
                           generate={() => {
                              setValue("slug", generateSlug(getValues("name")));
                           }}
                        />
                     </div>

                     <Field
                        {...register("icon", {
                           required: "Иконканы таңдаңыз!",
                        })}
                        placeholder="Иконка"
                        error={errors.icon}
                        style={{ width: "31%" }}
                     />
                  </div>
                  <Controller
                     control={control}
                     name="description"
                     defaultValue=""
                     render={({
                        field: { value, onChange },
                        fieldState: { error },
                     }) => (
                        <DynamicTextEditor
                           onChange={onChange}
                           value={value}
                           error={error}
                           placeholder="Сипаттама"
                        />
                     )}
                     rules={{
                        validate: {
                           required: (v) =>
                              (v && stripHtml(v).result.length > 0) ||
                              "Сипаттаманы толтырыңыз!",
                        },
                     }}
                  />

                  <Button>Жаңарту</Button>
               </>
            )}
         </form>
      </Meta>
   );
};

export default GenreEdit;
