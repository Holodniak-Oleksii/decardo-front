import { dehydrate } from "@tanstack/react-query";
import { axiosInstance, prefetchProfile, queryClient } from "../api";
import { LINK_TEMPLATES } from "../constants";
import { QueryKey } from "../enums";
import { IResponse, IUser } from "../types";
import { redirectHandler } from "./helpers";
import { IServerSideResponse, TProtectedRoute } from "./types";

const IS_PROTECTED_ROUTES = ["profile", "edit", "create"];
const IS_AUTH_ROUTES = ["sign-in", "sign-up"];

export const ProtectedRouteGuard: TProtectedRoute = (callback) => {
  return async (context) => {
    const cookies = context.req?.headers.cookie || "";
    console.log("cookies :", cookies);

    const isHaveSiteCookies = cookies.includes(
      process.env.NEXT_PUBLIC_COOKIES_NAME!
    );
    const isProtectedRoute =
      context.req &&
      IS_PROTECTED_ROUTES.some((route) => context.req.url?.includes(route));

    const isAuthRoute =
      context.req &&
      IS_AUTH_ROUTES.some((route) => context.req.url?.includes(route));

    if (isProtectedRoute && !isHaveSiteCookies) {
      return redirectHandler({ path: LINK_TEMPLATES.HOME() });
    }

    let user = queryClient.getQueryData<IResponse<IUser[]>>([
      QueryKey.PROFILE,
      QueryKey.USER,
    ]);

    if (!user) {
      await prefetchProfile(cookies, QueryKey.USER);
      user = queryClient.getQueryData<IResponse<IUser[]>>([
        QueryKey.PROFILE,
        QueryKey.USER,
      ]);
    }

    if (user?.status !== 200 && isHaveSiteCookies) {
      try {
        await axiosInstance.post("/user/logout", {
          headers: {
            cookie: cookies,
          },
        });
      } catch (error) {
        // console.log("error :", error);
      }
      if (isProtectedRoute) {
        return redirectHandler({ path: LINK_TEMPLATES.HOME() });
      }
    }

    if (user?.status === 200 && isHaveSiteCookies && isAuthRoute) {
      return redirectHandler({ path: LINK_TEMPLATES.HOME() });
    }

    const result = (await callback(context)) as IServerSideResponse;
    return {
      ...result,
      props: {
        ...result.props,
        user: user?.result[0] || null,
        isAuth: !!user,
        dehydratedState: dehydrate(queryClient),
      },
    };
  };
};
