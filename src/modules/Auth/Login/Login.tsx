import { useLoginMutation, useProfileQuery } from "@/common/api";
import { LINK_TEMPLATES } from "@/common/constants";
import { patterns } from "@/common/helpers";
import { IResponseError, IUser } from "@/common/types";
import { Button } from "@/ui-liberty/buttons";
import { Input } from "@/ui-liberty/inputs";
import { AxiosError } from "axios";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { ActionContainer, Form, Label, Wrapper } from "./styles";
import { ILoginFormValues } from "./types";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormValues>({ mode: "onSubmit" });

  const { push } = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const { mutateAsync } = useLoginMutation();
  const { refetch } = useProfileQuery();

  const onSubmit = async (data: ILoginFormValues) => {
    try {
      const response = await mutateAsync(data);
      if (response.status === 200) {
        const user = response.result[0] as IUser;
        // Cookies.set(process.env.NEXT_PUBLIC_COOKIES_NAME!, user.tokenJwt, {
        //   path: "/",
        //   secure: true,
        //   sameSite: "strict",
        // });
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
        <Label>
          Don`t have account.&nbsp;
          <Link href={LINK_TEMPLATES.SIGN_UP()}>Create account</Link>
        </Label>
        <ActionContainer>
          <Button size={"lg"} fullWidth type={"submit"}>
            Sing in
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

export default Login;
