import { queryClient } from "@/common/api";
import { Scene } from "@/common/components/3d";
import { ArtCard } from "@/common/components/cards";
import { QueryKey } from "@/common/enums";
import { useIsMounted } from "@/common/hooks";
import { HandFingerIcon, HandFingerOffIcon, HeartIcon } from "@/common/icons";
import { IArtResponseModel, IResponse } from "@/common/types";
import { FC, useEffect, useRef, useState } from "react";
import {
  Button,
  Container,
  Content,
  Description,
  Details,
  Like,
  List,
  Mask,
  Overlay,
  Owner,
  Relative,
  Tag,
  Tags,
  Text,
  Title,
  View,
  Wrapper,
} from "./styles";
import { IArtDetailsProps } from "./types";

const ArtDetails: FC<IArtDetailsProps> = ({ art }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const maskRef = useRef<HTMLDivElement>(null);
  const isMounted = useIsMounted();

  let recommendedArts = queryClient.getQueryData<
    IResponse<IArtResponseModel[]>
  >([QueryKey.RECOMMENDED_ARTS, art.id, art.tags.join(",")]);

  const renderTags = () => {
    return art?.tags?.map((tag) => <Tag>{tag}</Tag>);
  };

  const renderGrid = () => {
    return recommendedArts?.result?.map((item) => {
      if (item.id === art.id) return null;
      return <ArtCard art={item} key={item.id} />;
    });
  };

  useEffect(() => {
    if (maskRef.current) {
      if (enabled) {
        maskRef.current.style.pointerEvents = "all";
        maskRef.current.style.backgroundColor = "#00000095";
      } else {
        maskRef.current.style.pointerEvents = "none";
        maskRef.current.style.backgroundColor = "#00000000";
      }
    }
  }, [enabled]);

  return (
    <Wrapper>
      <Container>
        <View>
          <Mask ref={maskRef}>
            <Relative>
              <Overlay>
                <Button
                  type="button"
                  onClick={() => setEnabled((prev) => !prev)}
                >
                  {!enabled ? <HandFingerIcon /> : <HandFingerOffIcon />}
                </Button>
              </Overlay>
            </Relative>
          </Mask>
          <Scene {...art.settings} format={art.format} url={art.model} />
        </View>

        <Content>
          <Details>
            <Title>
              <Text>{art.title}</Text>
              <Like onClick={() => setIsLiked((prev) => !prev)}>
                <HeartIcon isLike={isLiked} />
                <span>11</span>
              </Like>
            </Title>
            <Owner href="">@{art.owner}</Owner>
            <Tags>{renderTags()}</Tags>
            <Description>{art.description}</Description>
            <List>{renderGrid()}</List>
          </Details>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default ArtDetails;
