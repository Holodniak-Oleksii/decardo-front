import { queryClient } from "@/common/api";
import { FONTS } from "@/common/constants";
import { GeneralLayout, Layout } from "@/common/layouts";
import { PageLoader } from "@/common/shared";
import { InitUserSync } from "@/common/store";
import { TAppPropsWithLayout } from "@/common/types";
import "@/styles/index.scss";
import Theme from "@/theme";
import { HydrationBoundary, QueryClientProvider } from "@tanstack/react-query";
import { useRouter } from "next/router";
import NextProgressBar from "nextjs-progressbar";
import { SnackbarProvider } from "notistack";

const App = (props: TAppPropsWithLayout) => {
  const { Component, pageProps } = props;
  const { route } = useRouter();

  const renderWithLayout =
    Component.getLayout ||
    function (page: any) {
      return <Layout pageProps={pageProps}>{page}</Layout>;
    };

  return (
    <Theme>
      <PageLoader />
      <NextProgressBar color="#358CE1" />
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={pageProps.dehydratedState}>
          <GeneralLayout font={FONTS.variable}>
            <SnackbarProvider
              maxSnack={3}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              autoHideDuration={3000}
            >
              <InitUserSync {...pageProps} />
              {renderWithLayout(
                <Component {...pageProps} key={route} />,
                pageProps
              )}
            </SnackbarProvider>
          </GeneralLayout>
        </HydrationBoundary>
      </QueryClientProvider>
    </Theme>
  );
};

export default App;
