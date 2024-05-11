import imageBg from "@/assets/images/slider/02.webp";
import { LINK_TEMPLATES } from "@/common/constants";
import { LogoutIcon, SettingsIcon } from "@/common/icons";
import { useUserStore } from "@/common/store";
import Image from "next/image";
import { FC, PropsWithChildren } from "react";
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
const BannerInfo: FC<PropsWithChildren> = ({ children }) => {
  const setAuth = useUserStore((state) => state.setAuth);

  const logOut = () => {
    setAuth(false);
  };

  return (
    <Wrapper>
      <Content>
        <Image fill src={imageBg} alt="" />
        <Mask />
        <Flex>
          {children}
          <Indent />
          <Row>
            <Title>
              Magara Uchiha
              <Setting href={LINK_TEMPLATES.EDIT()}>
                <SettingsIcon />
              </Setting>
            </Title>
            <Text>
              <span>madara@gmail.com</span>
              <Logout onClick={logOut}>
                <LogoutIcon />
              </Logout>
            </Text>
          </Row>
        </Flex>
      </Content>
    </Wrapper>
  );
};

export default BannerInfo;
