import {
  queryClient,
  useAddToWishlistMutation,
  useGetArtQuery,
  useProfileQuery,
  useRemoveArtMutation,
  useRemoveFromWishlistMutation,
} from "@/common/api";
import { Scene } from "@/common/components/3d";
import { ArtCard } from "@/common/components/cards";
import { LINK_TEMPLATES } from "@/common/constants";
import { QueryKey } from "@/common/enums";
import {
  HandFingerIcon,
  HandFingerOffIcon,
  HeartIcon,
  TrashIcon,
  WalkDisableIcon,
  WalkIcon,
} from "@/common/icons";
import { useUserStore } from "@/common/store";
import { IArtResponseModel, IResponse } from "@/common/types";
import { useRouter } from "next/router";
import { FC, useEffect, useRef, useState } from "react";
import {
  ActionButton,
  Button,
  Container,
  Content,
  Description,
  Details,
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
  const [enabled, setEnabled] = useState(false);
  const maskRef = useRef<HTMLDivElement>(null);
  const { push } = useRouter();
  const user = useUserStore((state) => state.user);

  const isAuth = useUserStore((state) => state.isAuth);
  const [isLocked, setIsLocked] = useState(false);

  const isMyProfile = art.owner === user?.username;
  const [isLiked, setIsLiked] = useState(
    !!user?.wishlist?.find((item) => item.id === art.id)
  );
  const { refetch: refetchArt } = useGetArtQuery({ id: art.id });
  const { refetch: refetchUser } = useProfileQuery();

  const { mutateAsync: add } = useAddToWishlistMutation(art.id);
  const { mutateAsync: remove } = useRemoveFromWishlistMutation(art.id);
  const { mutateAsync: deleteArt } = useRemoveArtMutation(art.id);

  let recommendedArts = queryClient.getQueryData<
    IResponse<IArtResponseModel[]>
  >([QueryKey.RECOMMENDED_ARTS, art.id, art.tags.join(",")]);

  const handlerWishlistToggle = async () => {
    if (isLiked) {
      setIsLiked(false);
      await remove();
    } else {
      setIsLiked(true);
      await add();
    }
    refetchUser();
    refetchArt();
  };

  const handlerDeleteArt = async () => {
    await deleteArt();
    refetchUser();
    push(LINK_TEMPLATES.SPACES({}));
  };

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
                <Button
                  type="button"
                  onClick={() => setIsLocked((prev) => !prev)}
                >
                  {isLocked ? <WalkIcon /> : <WalkDisableIcon />}
                </Button>
              </Overlay>
            </Relative>
          </Mask>
          <Scene
            {...art.settings}
            format={art.format}
            url={art.model}
            isLocked={isLocked}
            unLock={() => {
              setIsLocked(false);
            }}
          />
        </View>

        <Content>
          <Details>
            <Title>
              <Text>{art.title}</Text>
              {isAuth && (
                <>
                  {!isMyProfile ? (
                    <ActionButton onClick={handlerWishlistToggle}>
                      <HeartIcon isLike={isLiked} />
                    </ActionButton>
                  ) : (
                    <ActionButton onClick={handlerDeleteArt}>
                      <TrashIcon />
                    </ActionButton>
                  )}
                </>
              )}
            </Title>
            <Owner href={LINK_TEMPLATES.PROFILE(art.owner)}>@{art.owner}</Owner>
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
