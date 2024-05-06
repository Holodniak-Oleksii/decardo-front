import avatarImage from "@/assets/images/artist.webp";
import Image from "next/image";

import { ExternalLinkIcon } from "@/common/icons";
import { Avatar, Container, Label, Redirect, Text, Wrapper } from "./styles";

const AvatarBar = () => {
  return (
    <Wrapper>
      <Avatar>
        <Image src={avatarImage} fill alt="" />
      </Avatar>
      <Container>
        <Label>ABOUT</Label>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Label>CONTACT</Label>
        <Text>
          <Redirect href="">
            <ExternalLinkIcon />
          </Redirect>
          <span>http://localhost:3000/profile/arsak</span>
        </Text>
      </Container>
    </Wrapper>
  );
};

export default AvatarBar;
