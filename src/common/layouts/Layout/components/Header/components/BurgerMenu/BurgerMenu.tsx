import { FC, useEffect } from "react";
import { Burger, Button, Container, List, Menu, Wrapper } from "./styles";
import { IBurgerMenuProps } from "./types";

const BurgerMenu: FC<IBurgerMenuProps> = (props) => {
  const { isOpen, setOpen } = props;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isOpen]);

  return (
    <Wrapper>
      <Burger onClick={() => setOpen((prev) => !prev)}>
        <Button type="button" isOpen={isOpen}>
          <span></span>
          <span></span>
          <span></span>
        </Button>
      </Burger>

      <Menu isOpen={isOpen}>
        <Container>
          <List></List>
        </Container>
      </Menu>
    </Wrapper>
  );
};

export default BurgerMenu;
