import { Scene } from "@/common/components/3d";
import { useControls } from "leva";
import { useState } from "react";
import {
  Container,
  Content,
  Details,
  Information,
  Title,
  View,
  Wrapper,
} from "./styles";

const ArtDetails = () => {
  // const [file, setFile] = useState<string | null>(null);

  return (
    <Wrapper>
      <Container>
        <View>
          {/* {file && (
            <Scene
              ambientLight={ambientLight}
              directionalLight={directionalLight}
              castShadow={castShadow}
              format="fbx"
              backgroundColor={backgroundColor}
              url={file}
            />
          )} */}
        </View>

        <Content>
          <Details>
            <Information>
              <Title>Art</Title>
            </Information>
          </Details>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default ArtDetails;
