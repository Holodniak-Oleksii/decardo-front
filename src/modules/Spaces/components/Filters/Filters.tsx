import { Input, Select } from "@/ui-liberty/inputs";
import { Wrapper } from "./styles";

const Filters = () => {
  return (
    <Wrapper>
      <Input placeholder="Search..." />
      <Select options={[]} placeholder={"Select category"} withoutError />
    </Wrapper>
  );
};

export default Filters;
