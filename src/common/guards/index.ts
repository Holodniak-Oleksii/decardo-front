import { dehydrate } from "@tanstack/react-query";
import { queryClient } from "../api";
import { LINK_TEMPLATES } from "../constants";
import { redirectHandler } from "./helpers";
import { IServerSideResponse, TProtectedRoute } from "./types";

const IS_PROTECTED_ROUTES = ["profile", "edit", "create"];

export const ProtectedRouteGuard: TProtectedRoute = (callback) => {
  return async (context) => {
    const cookies = context.req?.headers.cookie || "";

    const isHaveSiteCookies = cookies.includes(
      process.env.NEXT_PUBLIC_COOKIES_NAME!
    );
    const isProtectedRoute =
      context.req &&
      IS_PROTECTED_ROUTES.some((route) => context.req.url?.includes(route));

    if (isProtectedRoute && !isHaveSiteCookies) {
      return redirectHandler({ path: LINK_TEMPLATES.HOME() });
    }

    const result = (await callback(context)) as IServerSideResponse;
    return {
      ...result,
      props: {
        ...result.props,
        dehydratedState: dehydrate(queryClient),
      },
    };
  };
};
