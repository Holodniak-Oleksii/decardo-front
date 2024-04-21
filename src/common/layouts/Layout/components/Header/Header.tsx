import { LINK_TEMPLATES } from "@/common/constants";
import { Button } from "@/ui-liberty/buttons";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { headerNavigation } from "./data";
import {
  Content,
  Controls,
  Logo,
  NavItem,
  Navigation,
  Wrapper,
} from "./styles";

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const refContainer = useRef<HTMLDivElement>(null);
  const { push, asPath } = useRouter();

  const renderNavigations = () => {
    return headerNavigation.map((navigation) => {
      const path = navigation.trigger();
      return (
        <NavItem isActive={asPath === path} key={navigation.id} href={path}>
          {navigation.title}
        </NavItem>
      );
    });
  };

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
        <Navigation>
          <Logo onClick={() => push(LINK_TEMPLATES.HOME())}>
            D <span>3</span>
          </Logo>
          {renderNavigations()}
        </Navigation>
        <Controls>
          <Button onClick={() => push(LINK_TEMPLATES.SIGN_IN())}>
            Sing in
          </Button>
          <Button
            variant="outlined"
            onClick={() => push(LINK_TEMPLATES.SIGN_UP())}
          >
            Sing up
          </Button>
        </Controls>
      </Content>
    </Wrapper>
  );
};

export default Header;
