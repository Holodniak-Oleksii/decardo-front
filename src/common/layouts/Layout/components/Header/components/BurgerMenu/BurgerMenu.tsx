import { LINK_TEMPLATES } from "@/common/constants";
import { useUserStore } from "@/common/store";
import { MobileOn } from "@/utils";
import { FC, useEffect } from "react";
import { social } from "../../../Footer/data";
import { headerNavigation } from "../../data";
import Account from "../Account/Account";
import AuthControls from "../AuthControls/AuthControls";
import {
  Burger,
  Button,
  CircleOverlay,
  Container,
  Indent,
  List,
  Menu,
  NavItem,
  SocialList,
  Wrapper,
} from "./styles";
import { IBurgerMenuProps } from "./types";

const BurgerMenu: FC<IBurgerMenuProps> = (props) => {
  const { isOpen, setIsOpen } = props;
  const isAuth = useUserStore((state) => state.isAuth);

  const onClose = () => {
    setIsOpen(false);
  };

  const renderNavigations = () => {
    return headerNavigation.map((navigation) => {
      const path = navigation.trigger();
      return (
        <NavItem key={navigation.id} href={path} onClick={onClose}>
          {navigation.title}
        </NavItem>
      );
    });
  };

  const renderSocial = () => social.map((Social, id) => <Social key={id} />);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isOpen]);

  return (
    <Wrapper>
      <Burger onClick={() => setIsOpen((prev) => !prev)}>
        <Button type="button" isOpen={isOpen}>
          <span></span>
          <span></span>
          <span></span>
        </Button>
      </Burger>

      <CircleOverlay isOpen={isOpen} />
      <Menu isOpen={isOpen}>
        <Container isOpen={isOpen}>
          <MobileOn>
            {isAuth ? (
              <Account isOpen={isOpen} onClose={onClose} />
            ) : (
              <AuthControls />
            )}
          </MobileOn>
          <List>
            {isAuth && (
              <NavItem onClick={onClose} href={LINK_TEMPLATES.CREATE_SPACE()}>
                New Space
              </NavItem>
            )}
            {renderNavigations()}
          </List>
        </Container>
        <Indent />
      </Menu>
      <SocialList isOpen={isOpen}>{renderSocial()}</SocialList>
    </Wrapper>
  );
};

export default BurgerMenu;
