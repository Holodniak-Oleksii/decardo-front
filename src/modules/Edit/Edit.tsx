import { useProfileQuery, useUpdateMutation } from "@/common/api";
import { LINK_TEMPLATES } from "@/common/constants";
import { DragAndDrop } from "@/common/shared";
import { useUserStore } from "@/common/store";
import { IResponseError, IUser } from "@/common/types";
import { Button } from "@/ui-liberty/buttons";
import { Input, TextArea } from "@/ui-liberty/inputs";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { FormProvider, useForm } from "react-hook-form";
import { Column, Container, Content, Form, Row, Wrapper } from "./styles";
import { IEditFormFields } from "./types";

const Edit = () => {
  const { data: user, isLoading: isUserLoading } = useProfileQuery();
  const profile = useUserStore((state) => state.user);
  const setProfile = useUserStore((state) => state.setUser);

  const methods = useForm<IEditFormFields>({
    mode: "onSubmit",
    defaultValues: {
      contact: user?.contact || profile?.contact || "",
      description: user?.description || profile?.description || "",
      username: user?.username || profile?.username || "",
    },
  });
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = methods;

  const { push } = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const { refetch } = useProfileQuery();
  const { mutateAsync } = useUpdateMutation();

  const onSubmit = async (data: IEditFormFields) => {
    try {
      const form = new FormData();
      form.append("username", data.username);
      if (user) {
        form.append("id", user?.id || "");
      }
      form.append("description", data.description);
      form.append("contact", data.contact);
      if (data.bannerImage) {
        form.append("bannerImage", data.bannerImage);
      }
      if (data.avatar) {
        form.append("avatar", data.avatar);
      }

      const response = await mutateAsync(form);
      if (response.status === 200) {
        const user = response.result[0] as IUser;
        setProfile(user);
        refetch();
        enqueueSnackbar("Success", {
          variant: "success",
        });
        push(LINK_TEMPLATES.PROFILE(user.username));
      }
    } catch (e) {
      const error = e as AxiosError<IResponseError>;
      if (error.response) {
        enqueueSnackbar(error.response?.data.message || "", {
          variant: "warning",
        });
      }
    }
  };

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
                  <Input
                    label={"Username"}
                    placeholder={"Enter username"}
                    {...register("username", {
                      required: true,
                    })}
                    error={errors.username}
                  />
                  <Input
                    label={"Contact"}
                    placeholder={"http://your.contact.com"}
                    {...register("contact", {
                      required: true,
                    })}
                    error={errors.contact}
                  />
                  <TextArea
                    label={"Description"}
                    placeholder={"Enter description"}
                    customHeight={160}
                    {...register("description", {
                      required: true,
                      maxLength: 255,
                    })}
                    error={errors.description}
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
