import { ArtCard } from "@/common/components/cards";
import { useUserStore } from "@/common/store";
import { FC, useState } from "react";
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
  const user = useUserStore((state) => state.user);

  const renderGrid = () => {
    return (activeTab === "WORKS" ? profile.arts : user.wishlist).map((art) => (
      <ArtCard art={art} key={art.id} />
    ));
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
          bannerImage={profile.bannerImage}
          username={profile.username}
          email={profile.email}
          isMyProfile={profile.myProfile}
        >
          <AvatarBar
            avatar={profile.avatar}
            contact={profile.contact}
            description={profile.description}
          />
        </BannerInfo>
        <Content>
          <Indent />
          <Column>
            {profile.myProfile && <Tabs>{renderTabs()}</Tabs>}
            <List>{renderGrid()}</List>
          </Column>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Profile;
