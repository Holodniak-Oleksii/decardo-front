import {
  BannerSlider,
  Grid,
  HexagonCategories,
  WaveExamples,
  Welcome,
} from "./components";
import { Wrapper } from "./styles";

const Home = () => {
  return (
    <Wrapper>
      <Welcome />
      <BannerSlider />
      <Grid />
      <WaveExamples />
      <HexagonCategories />
    </Wrapper>
  );
};

export default Home;
