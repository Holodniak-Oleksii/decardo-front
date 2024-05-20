import { useProfileQuery, useRegistrationMutation } from "@/common/api";
import { LINK_TEMPLATES } from "@/common/constants";
import { patterns } from "@/common/helpers";
import { IResponseError, IUser } from "@/common/types";
import { Button } from "@/ui-liberty/buttons";
import { Input } from "@/ui-liberty/inputs";
import { AxiosError } from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { ActionContainer, Form, Label, Wrapper } from "./styles";
import { IRegistrationFormValues } from "./types";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistrationFormValues>({ mode: "onSubmit" });

  const { push } = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const { refetch } = useProfileQuery();
  const { mutateAsync } = useRegistrationMutation();

  const onSubmit = async (data: IRegistrationFormValues) => {
    try {
      const response = await mutateAsync(data);
      if (response.status === 200) {
        const user = response.result[0] as IUser;
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
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label={"Username"}
          placeholder={"Enter username"}
          {...register("username", {
            required: true,
            pattern: {
              value: patterns.username,
              message: "User is incorrect",
            },
          })}
          error={errors.username}
        />
        <Input
          label={"Email"}
          placeholder={"Enter email"}
          {...register("email", {
            required: true,
            pattern: {
              value: patterns.email,
              message: "Email is invalid",
            },
          })}
          error={errors.email}
        />
        <Input
          label={"Password"}
          type="password"
          placeholder={"Create password"}
          {...register("password", {
            required: true,
            minLength: 6,
            maxLength: 20,
          })}
          error={errors.password}
        />
        <Input
          label={"Confirm password"}
          type="password"
          placeholder={"Confirm password"}
          {...register("confirmPassword", {
            required: true,
            minLength: 6,
            maxLength: 20,
          })}
          error={errors.confirmPassword}
        />
        <Label>
          Do you have account?.&nbsp;
          <Link href={LINK_TEMPLATES.SIGN_IN()}>Log in</Link>
        </Label>
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
