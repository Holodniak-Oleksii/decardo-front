import { ART_CATEGORIES } from "@/common/constants";
import { Button } from "@/ui-liberty/buttons";
import { Input, MultiSelect, TextArea } from "@/ui-liberty/inputs";

const SubmitForm = () => {
  return (
    <>
      <Input
        label={"Name"}
        placeholder={"Enter art name"}
        // {...register("username", {
        //   required: true,
        // })}
        // error={errors.username}
      />
      <TextArea
        label={"Description"}
        placeholder={"Enter art description"}
        customHeight={200}
      />
      <MultiSelect<string>
        options={ART_CATEGORIES.map((art, id) => ({
          id,
          label: art,
          value: art,
        }))}
        label={"Type of art"}
        placeholder={"Select type"}
        // registerOptions={{
        //   ...register("activityTypes", {
        //     required: true,
        //   }),
        // }}
        // onChange={(value) => onChangeSelectHandler("activityTypes", value)}
        // error={errors.activityTypes}
        // isClear={isSubmitSuccessful}
      />
      <Button>Create</Button>
    </>
  );
};

export default SubmitForm;
