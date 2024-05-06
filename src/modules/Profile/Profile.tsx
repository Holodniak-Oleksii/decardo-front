import { ArtCard } from "@/common/components/cards";
import { useState } from "react";
import { artData } from "../Home/components/Grid/mocks";
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

const Profile = () => {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  const renderGrid = () => {
    return artData.map((art) => <ArtCard art={art} key={art.id} />);
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
        <BannerInfo>
          <AvatarBar />
        </BannerInfo>
        <Content>
          <Indent />
          <Column>
            <Tabs>{renderTabs()}</Tabs>
            <List>{renderGrid()}</List>
          </Column>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Profile;
