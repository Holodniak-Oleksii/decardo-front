import { DragAndDrop } from "@/common/shared";
import { Button } from "@/ui-liberty/buttons";
import { Input, TextArea } from "@/ui-liberty/inputs";
import { FormProvider, useForm } from "react-hook-form";
import { Column, Container, Content, Form, Row, Wrapper } from "./styles";
import { IEditFormFields } from "./types";

const Edit = () => {
  const methods = useForm<IEditFormFields>({ mode: "onSubmit" });
  const {
    handleSubmit,
    register,
    setValue,
    formState: { isSubmitted, errors },
  } = methods;

  const onSubmit = async () => {};

  return (
    <Wrapper>
      <Container>
        <Content>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormProvider {...methods}>
              <DragAndDrop onChange={(file) => setValue("bannerImage", file)} />
              <Row>
                <DragAndDrop onChange={(file) => setValue("avatar", file)} />
                <Column>
                  <TextArea
                    label={"Description"}
                    placeholder={"Enter description"}
                    customHeight={200}
                    {...register("description", {
                      required: true,
                      maxLength: 255,
                    })}
                    error={errors.description}
                  />
                  <Input
                    label={"Contact"}
                    placeholder={"Enter contact"}
                    {...register("contact", {
                      required: true,
                    })}
                    error={errors.contact}
                  />
                  <Button type="submit">Submit</Button>
                </Column>
              </Row>
            </FormProvider>
          </Form>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Edit;
