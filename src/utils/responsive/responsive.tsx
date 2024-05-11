import dynamic from "next/dynamic";
import { PropsWithChildren } from "react";
import MediaQuery from "react-responsive";
import { IResponsiveOff } from "./types";

const MobileOnRes = (props: PropsWithChildren): JSX.Element => (
  <MediaQuery {...props} maxWidth={767} />
);
const MobileOffRes = (props: PropsWithChildren) => (
  <MediaQuery {...props} minWidth={768} />
);
const LittleMobileOnRes = (props: PropsWithChildren) => (
  <MediaQuery {...props} maxWidth={540} />
);
const LittleMobileOffRes = (props: PropsWithChildren) => (
  <MediaQuery {...props} minWidth={541} />
);
const DesktopOnRes = (props: PropsWithChildren) => (
  <MediaQuery {...props} maxWidth={1440} />
);
const DesktopOffRes = (props: PropsWithChildren) => (
  <MediaQuery {...props} minWidth={1441} />
);
const LittleDesktopOnRes = (props: PropsWithChildren) => (
  <MediaQuery {...props} maxWidth={1280} />
);
const LittleDesktopOffRes = (props: PropsWithChildren) => (
  <MediaQuery {...props} minWidth={1281} />
);
const TabletOffRes = (props: PropsWithChildren) => (
  <MediaQuery {...props} minWidth={1025} />
);
const TabletOnRes = (props: PropsWithChildren) => (
  <MediaQuery {...props} maxWidth={1024} />
);
const ResponsiveRes = (props: IResponsiveOff) => <MediaQuery {...props} />;

export const TabletOff = dynamic(() => Promise.resolve(TabletOffRes), {
  ssr: false,
});
export const MobileOn = dynamic(() => Promise.resolve(MobileOnRes), {
  ssr: false,
});
export const MobileOff = dynamic(() => Promise.resolve(MobileOffRes), {
  ssr: false,
});
export const LittleMobileOn = dynamic(
  () => Promise.resolve(LittleMobileOnRes),
  {
    ssr: false,
  }
);
export const LittleMobileOff = dynamic(
  () => Promise.resolve(LittleMobileOffRes),
  {
    ssr: false,
  }
);
export const DesktopOn = dynamic(() => Promise.resolve(DesktopOnRes), {
  ssr: false,
});
export const DesktopOff = dynamic(() => Promise.resolve(DesktopOffRes), {
  ssr: false,
});
export const LittleDesktopOn = dynamic(
  () => Promise.resolve(LittleDesktopOnRes),
  {
    ssr: false,
  }
);
export const LittleDesktopOff = dynamic(
  () => Promise.resolve(LittleDesktopOffRes),
  {
    ssr: false,
  }
);
export const TabletOn = dynamic(() => Promise.resolve(TabletOnRes), {
  ssr: false,
});

export const Responsive = dynamic(() => Promise.resolve(ResponsiveRes), {
  ssr: false,
});
