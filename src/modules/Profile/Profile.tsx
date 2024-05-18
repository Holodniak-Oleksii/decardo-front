import { ArtCard } from "@/common/components/cards";
import { NotFound } from "@/common/shared";
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

const Profile: FC<IProfilePageProps> = ({ profile }) => {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const isUserWorks = activeTab === "WORKS";
  const list = useMemo(
    () => (activeTab === "WORKS" ? profile?.arts : profile.wishlist),
    [activeTab]
  );

  const renderGrid = () => {
    return list.map((art) => <ArtCard art={art} key={art.id} />);
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

  return (
    <Wrapper>
      <Container>
        <BannerInfo
          bannerImage={profile?.bannerImage}
          username={profile?.username}
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
