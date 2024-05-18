import { useLogOutMutation } from "@/common/api";
import { LINK_TEMPLATES } from "@/common/constants";
import { LogoutIcon, SettingsIcon } from "@/common/icons";
import { useUserStore } from "@/common/store";
import { MobileOff } from "@/utils";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";
import { Indent } from "../../styles";
import {
  Content,
  Flex,
  Logout,
  Mask,
  Row,
  Setting,
  Text,
  Title,
  Wrapper,
} from "./styles";
import { IBannerInfoProps } from "./types";

const BannerInfo: FC<IBannerInfoProps> = ({
  children,
  bannerImage,
  email,
  username,
  isMyProfile,
}) => {
  const setAuth = useUserStore((state) => state.setAuth);
  const { mutateAsync } = useLogOutMutation();
  const { push } = useRouter();

  const logOut = async () => {
    try {
      await mutateAsync();
      // Cookies.remove(process.env.NEXT_PUBLIC_COOKIES_NAME!);
      setAuth(false);
      push(LINK_TEMPLATES.HOME());
    } catch (e) {}
  };

  return (
    <Wrapper>
      <Content>
        {bannerImage && (
          <>
            <Image fill alt="" src={bannerImage} />
            <Mask />
          </>
        )}
        <Flex>
          {children}
          <MobileOff>
            <Indent />
            <Row>
              <Title>
                {username}
                {isMyProfile && (
                  <Setting href={LINK_TEMPLATES.EDIT()}>
                    <SettingsIcon />
                  </Setting>
                )}
              </Title>
              <Text>
                <span>{email}</span>
                {isMyProfile && (
                  <Logout onClick={logOut}>
                    <LogoutIcon />
                  </Logout>
                )}
              </Text>
            </Row>
          </MobileOff>
        </Flex>
      </Content>
    </Wrapper>
  );
};

export default BannerInfo;
