import { ART_CATEGORIES } from "@/common/constants";
import { Button } from "@/ui-liberty/buttons";
import { Input, MultiSelect, TextArea } from "@/ui-liberty/inputs";
import { useFormContext } from "react-hook-form";
import { IArtFormFiled } from "../../types";

const SubmitForm = () => {
  const {
    register,
    setError,
    setValue,
    clearErrors,
    formState: { errors, isSubmitted },
  } = useFormContext<IArtFormFiled>();

  const onChangeSelectHandler = (value: string[]) => {
    if (isSubmitted) {
      if (value.length) {
        clearErrors("tags");
      } else {
        setError("tags", { type: "required" });
      }
    }
    setValue("tags", value);
  };

  return (
    <>
      <Input
        label={"Title"}
        placeholder={"Enter art title"}
        {...register("title", {
          required: true,
          maxLength: 50,
        })}
        error={errors.title}
      />
      <TextArea
        label={"Description"}
        placeholder={"Enter art description"}
        customHeight={200}
        {...register("description", {
          required: true,
          maxLength: 255,
        })}
        error={errors.description}
      />
      <MultiSelect<string>
        options={ART_CATEGORIES.map((art, id) => ({
          id,
          label: art,
          value: art,
        }))}
        label={"Type of art"}
        placeholder={"Select type"}
        registerOptions={{
          ...register("tags", {
            required: true,
          }),
        }}
        onChange={(value) => onChangeSelectHandler(value)}
        error={errors.tags}
      />
      <Button type="submit">Create</Button>
    </>
  );
};

export default SubmitForm;
