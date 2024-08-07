import {
  BannerSlider,
  Grid,
  HexagonCategories,
  TargetText,
  WaveExamples,
  Welcome,
} from "./components";
import { Wrapper } from "./styles";

const Home = () => (
  <Wrapper>
    <Welcome />
    <BannerSlider />
    <Grid />
    <WaveExamples />
    <TargetText />
    <HexagonCategories />
  </Wrapper>
);

export default Home;
