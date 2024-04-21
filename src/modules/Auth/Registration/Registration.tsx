import { LINK_TEMPLATES } from "@/common/constants";
import { Button } from "@/ui-liberty/buttons";
import { Input } from "@/ui-liberty/inputs";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { ActionContainer, Form, Wrapper } from "./styles";
import { IRegistrationFormValues } from "./types";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistrationFormValues>({ mode: "onSubmit" });

  const { push } = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const onSubmit = async (data: IRegistrationFormValues) => {
    try {
      // push(LINK_TEMPLATES.USER({ username: user.username }));
    } catch (e) {
      const error = e as AxiosError;
      if (error.response) {
        enqueueSnackbar((error.response?.data as string) || "", {
          variant: "warning",
        });
      }
    }
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label={"Username"}
          placeholder={"Enter username"}
          {...register("username", {
            required: true,
          })}
          error={errors.username}
        />
        <Input
          label={"Email"}
          placeholder={"Enter email"}
          {...register("email", {
            required: true,
          })}
          error={errors.email}
        />
        <Input
          label={"Password"}
          type="password"
          placeholder={"Create password"}
          {...register("password", {
            required: true,
          })}
          error={errors.password}
        />
        <Input
          label={"Confirm password"}
          type="password"
          placeholder={"Confirm password"}
          {...register("confirmPassword", {
            required: true,
          })}
          error={errors.confirmPassword}
        />
        <ActionContainer>
          <Button size={"lg"} fullWidth type={"submit"}>
            Sing up
          </Button>
          <Button
            size={"lg"}
            onClick={() => push(LINK_TEMPLATES.HOME())}
            fullWidth
            variant="outlined"
            type={"button"}
          >
            Cancel
          </Button>
        </ActionContainer>
      </Form>
    </Wrapper>
  );
};

export default Registration;