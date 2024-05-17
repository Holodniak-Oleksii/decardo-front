import Image from "next/image";

import imagePlug from "@/assets/images/empty.png";
import { ExternalLinkIcon } from "@/common/icons";
import { FC } from "react";
import { Avatar, Container, Label, Redirect, Text, Wrapper } from "./styles";
import { IAvatarBarProps } from "./types";

const AvatarBar: FC<IAvatarBarProps> = ({ avatar, contact, description }) => (
  <Wrapper>
    <Avatar>
      <Image
        src={(avatar as string) || ""}
        fill
        alt=""
        onError={(e) => {
          e.currentTarget.src = imagePlug.src;
        }}
      />
    </Avatar>
    <Container>
      {description && (
        <>
          <Label>ABOUT</Label>
          <Text>{description}</Text>
        </>
      )}
      {!!contact && (
        <>
          <Label>CONTACT</Label>
          <Text>
            <Redirect href={contact}>
              <ExternalLinkIcon />
            </Redirect>
            <span>{contact}</span>
          </Text>
        </>
      )}
    </Container>
  </Wrapper>
);

export default AvatarBar;
