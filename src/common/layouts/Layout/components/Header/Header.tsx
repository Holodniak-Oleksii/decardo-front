import { useOnClickOutside } from "@/common/hooks";
import { useEffect, useRef, useState } from "react";
import { BurgerMenu } from "./components";
import { Content, Wrapper } from "./styles";

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const refContainer = useRef<HTMLDivElement>(null);

  useOnClickOutside(refContainer, () => setIsOpenCategory(false));

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos >= 80) {
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <Wrapper visible={visible}>
      <Content ref={refContainer}>
        <BurgerMenu isOpen={isOpenCategory} setOpen={setIsOpenCategory} />
      </Content>
    </Wrapper>
  );
};

export default Header;
