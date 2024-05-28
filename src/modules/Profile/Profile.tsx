import { useGetUserQuery } from "@/common/api";
import { ArtCard } from "@/common/components/cards";
import { NotFound, PageLoader } from "@/common/shared";
import { IArtResponseModel } from "@/common/types";
import Error from "next/error";
import { FC, useEffect, useState } from "react";
import { AvatarBar, BannerInfo } from "./components";
import { TABS } from "./data";
import {
  Column,
  Container,
  Content,
  Indent,
  List,
  Tab,
  Tabs,
  Wrapper,
} from "./styles";
import { IProfilePageProps } from "./types";

const Profile: FC<IProfilePageProps> = ({ username }) => {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const isUserWorks = activeTab === "WORKS";
  const {
    data: profile,
    isLoading,
    isFetching,
    refetch,
  } = useGetUserQuery({ username });
  const [list, setList] = useState<IArtResponseModel[] | undefined>(undefined);

  useEffect(() => {
    refetch();
  }, []);
  
  useEffect(() => {
    if (!isLoading && profile) {
      setList(activeTab === "WORKS" ? profile?.arts : profile?.wishlist);
    }
  }, [isLoading, JSON.stringify(profile), activeTab]);

  const renderGrid = () => {
    return list?.map((art) => <ArtCard art={art} key={art.id} />);
  };

  const renderTabs = () => {
    return TABS.map((tab, id) => (
      <Tab
        isActive={tab === activeTab}
        key={id}
        onClick={() => setActiveTab(tab)}
      >
        {tab}
      </Tab>
    ));
  };

  if (isLoading || isFetching) {
    return <PageLoader />;
  }

  if (!profile && !isLoading) {
    return <Error statusCode={404} />;
  }

  if (!profile) {
    return null;
  }

  return (
    <Wrapper>
      <Container>
        <BannerInfo
          bannerImage={profile.bannerImage}
          username={profile.username}
          email={profile.email}
          isMyProfile={profile.myProfile}
        >
          <AvatarBar
            avatar={profile?.avatar}
            contact={profile?.contact}
            description={profile?.description}
          />
        </BannerInfo>
        <Content>
          <Indent />
          <Column>
            {profile.myProfile && <Tabs>{renderTabs()}</Tabs>}
            {!!list?.length ? (
              <List>{renderGrid()}</List>
            ) : (
              <NotFound
                buttonText={isUserWorks ? "Create Art" : "Add favorite"}
                eventType={isUserWorks ? "create" : "wishlist"}
                title={
                  isUserWorks
                    ? "You don't have any works, want to make one?"
                    : "Find art that you like and add it to your favorites list"
                }
              />
            )}
          </Column>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Profile;
