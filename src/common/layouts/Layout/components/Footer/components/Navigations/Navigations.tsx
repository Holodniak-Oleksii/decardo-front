import { footerNavigation } from "../../data";
import { List, NavItem, NavTitle } from "./styles";

const Navigations = () => {
  const renderNavigation = (array: string[]) =>
    array.map((item, id) => <NavItem key={id}>{item}</NavItem>);

  return (
    <>
      <List>
        <NavTitle>About us</NavTitle>
        {renderNavigation(footerNavigation.about)}
      </List>

      <List>
        <NavTitle>Services</NavTitle>
        {renderNavigation(footerNavigation.services)}
      </List>

      <List>
        <NavTitle>Product</NavTitle>
        {renderNavigation(footerNavigation.products)}
      </List>

      <List>
        <NavTitle>Support</NavTitle>
        {renderNavigation(footerNavigation.support)}
      </List>
    </>
  );
};

export default Navigations;
