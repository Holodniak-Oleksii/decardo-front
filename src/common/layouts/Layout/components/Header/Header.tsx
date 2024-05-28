import { LINK_TEMPLATES } from "@/common/constants";
import { useUserStore } from "@/common/store";
import { MobileOff, MobileOn } from "@/utils";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { Account, AuthControls, BurgerMenu } from "./components";
import { headerNavigation } from "./data";
import { Content, Logo, NavItem, Navigation, Wrapper } from "./styles";

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const refContainer = useRef<HTMLDivElement>(null);
  const { push, asPath } = useRouter();
  const isAuth = useUserStore((state) => state.isAuth);
  const [isOpen, setIsOpen] = useState(false);

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
    <Wrapper isOpen={isOpen} visible={visible}>
      <Content ref={refContainer}>
        <Navigation>
          <Logo isOpen={isOpen} onClick={() => push(LINK_TEMPLATES.HOME())}>
            D <span>3</span>
          </Logo>
          <MobileOff>{renderNavigations()}</MobileOff>
        </Navigation>
        <MobileOff>{isAuth ? <Account /> : <AuthControls />}</MobileOff>
        <MobileOn>
          <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </MobileOn>
      </Content>
    </Wrapper>
  );
};

export default Header;
