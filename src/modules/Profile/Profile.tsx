import { useGetUserQuery, useProfileQuery } from "@/common/api";
import { ArtCard } from "@/common/components/cards";
import { NotFound, PageLoader } from "@/common/shared";
import Error from "next/error";
import { FC, useMemo, useState } from "react";
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
  const { data, isLoading, isFetching } = useGetUserQuery({ username });

  const { data: user, isLoading: isUserLoading } = useProfileQuery();

  const profile = useMemo(() => {
    return data?.myProfile ? user : data;
  }, [data, isLoading, data]);

  const list = useMemo(
    () => (activeTab === "WORKS" ? profile?.arts : profile?.wishlist),
    [activeTab]
  );

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

  if (isLoading || isFetching || isUserLoading) {
    return <PageLoader />;
  }

  if (!profile && !isUserLoading && !isLoading) {
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
