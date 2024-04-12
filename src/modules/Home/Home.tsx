import { BannerSlider, Welcome } from "./components";
import { Wrapper } from "./styles";

const Home = () => {
  return (
    <Wrapper>
      <Welcome />
      <BannerSlider />
    </Wrapper>
  );
};

export default Home;
