import imageBg from "@/assets/images/slider/02.webp";
import { LINK_TEMPLATES } from "@/common/constants";
import { SettingsIcon } from "@/common/icons";
import Image from "next/image";
import { FC, PropsWithChildren } from "react";
import { Indent } from "../../styles";
import {
  Content,
  Flex,
  Mask,
  Row,
  Setting,
  Text,
  Title,
  Wrapper,
} from "./styles";
const BannerInfo: FC<PropsWithChildren> = ({ children }) => {
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
            <Text>madara@gmail.com</Text>
          </Row>
        </Flex>
      </Content>
    </Wrapper>
  );
};

export default BannerInfo;
