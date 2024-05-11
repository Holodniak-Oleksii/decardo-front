import { LINK_TEMPLATES } from "@/common/constants";
import { Button } from "@/ui-liberty/buttons";
import { Input } from "@/ui-liberty/inputs";
import { AxiosError } from "axios";
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
  const onSubmit = async (data: ILoginFormValues) => {
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
          label={"Password"}
          type="password"
          placeholder={"Create password"}
          {...register("password", {
            required: true,
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
