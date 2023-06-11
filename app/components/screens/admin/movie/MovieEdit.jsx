import { Controller, useForm } from "react-hook-form";
import { useMovieEdit } from "./useMovieEdit";

import Meta from "../../../../utils/meta/Meta";
import AdminNavigation from "../../../ui/admin-navigation/AdminNavigation";
import Heading from "../../../ui/heading/Heading";

import SkeletonLoader from "../../../ui/SkeletonLoader";
import Field from "../../../ui/form-elements/Field";
import SlugField from "../../../ui/form-elements/SlugField/SlugField";
import generateSlug from "../../../../utils/string/generateSlug";
import Button from "../../../ui/form-elements/Button";

import UploadField from "../../../ui/form-elements/UploadField/UploadField";

import formStyles from "../../../ui/form-elements/admin-form.module.scss";
import { useAdminGenre } from "./useAdminGenre";
import { useAdminActor } from "./useAdminActor";
import dynamic from "next/dynamic";

const DynamicSelect = dynamic(() => import("../../../ui/select/Select"), {
   ssr: false,
});

const MovieEdit = () => {
   const {
      handleSubmit,
      register,
      formState: { errors },
      setValue,
      getValues,
      control,
   } = useForm({ mode: "onChange" });

   const { isLoading, onSubmit } = useMovieEdit(setValue);

   const { isLoading: isGenresLoading, data: genres } = useAdminGenre();
   const { isLoading: isActorLoading, data: actors } = useAdminActor();

   return (
      <Meta title="Edit movie">
         <AdminNavigation />
         <Heading title="Фильмді өңдеу" />
         <form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
            {isLoading ? (
               <SkeletonLoader count={5} />
            ) : (
               <>
                  <div className={formStyles.fields}>
                     <Field
                        {...register("title", {
                           required: "Атауды таңдау қажет!",
                        })}
                        placeholder="Атауы"
                        error={errors.title}
                     />

                     <SlugField
                        register={register}
                        error={errors.slug}
                        generate={() => {
                           setValue("slug", generateSlug(getValues("title")));
                        }}
                     />

                     <Field
                        {...register("parameters.country", {
                           required: "Елді таңдау қажет!",
                        })}
                        placeholder="Ел"
                        error={errors.parameters?.country}
                        style={{ width: "31%" }}
                     />

                     <Field
                        {...register("parameters.duration", {
                           required: "Ұзақтығын таңдаңыз!",
                        })}
                        placeholder="Ұзақтығы"
                        error={errors.parameters?.duration}
                        style={{ width: "31%" }}
                     />

                     <Field
                        {...register("parameters.year", {
                           required: "Жылды көрсетіңіз!",
                        })}
                        placeholder="Жыл"
                        error={errors.parameters?.year}
                        style={{ width: "31%" }}
                     />

                     <Controller
                        control={control}
                        name="genres"
                        render={({ field, fieldState: { error } }) => (
                           <DynamicSelect
                              field={field}
                              options={genres || []}
                              isLoading={isGenresLoading}
                              isMulti
                              placeholder="Жанрлар"
                              error={error}
                           />
                        )}
                        rules={{
                           required: "Кем дегенде бір жанрды таңдаңыз!",
                        }}
                     />

                     <Controller
                        name="actors"
                        control={control}
                        rules={{
                           required: "Кем дегенде бір актер таңдаңыз!",
                        }}
                        render={({ field, fieldState: { error } }) => (
                           <DynamicSelect
                              error={error}
                              field={field}
                              placeholder="Актерлар"
                              options={actors || []}
                              isLoading={isActorLoading}
                              isMulti
                           />
                        )}
                     />

                     <Controller
                        control={control}
                        name="poster"
                        defaultValue=""
                        render={({
                           field: { value, onChange },
                           fieldState: { error },
                        }) => (
                           <UploadField
                              onChange={onChange}
                              value={value}
                              error={error}
                              folder="movies"
                              placeholder="Постер"
                           />
                        )}
                        rules={{
                           required: "Постер қажет",
                        }}
                     />

                     <Controller
                        control={control}
                        name="bigPoster"
                        defaultValue=""
                        render={({
                           field: { value, onChange },
                           fieldState: { error },
                        }) => (
                           <UploadField
                              onChange={onChange}
                              value={value}
                              error={error}
                              folder="movies"
                              placeholder="Үлкен постер"
                           />
                        )}
                        rules={{
                           required: "Үлкен постер қажет",
                        }}
                     />

                     <Controller
                        control={control}
                        name="videoUrl"
                        defaultValue=""
                        render={({
                           field: { value, onChange },
                           fieldState: { error },
                        }) => (
                           <UploadField
                              onChange={onChange}
                              value={value}
                              error={error}
                              folder="movies"
                              placeholder="Бейне"
                              style={{ marginTop: -25 }}
                              isNoImage
                           />
                        )}
                        rules={{
                           required: "Бейне қажет",
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

export default MovieEdit;
