import React from "react";
import { Menu, Segment } from "semantic-ui-react";

function Navbar() {
  return (
    <Segment inverted>
      <Menu inverted secondary>
        <Menu.Item
          name="OnlyPets Logo"
          //   active={activeItem === "home"}
          //   onClick={this.handleItemClick}
        />
        <Menu.Item
          name="About"
          //   active={activeItem === "messages"}
          //   onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Members"
          // active={activeItem === "friends"}
          // onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Contact"
          //   active={activeItem === "friends"}
          //   onClick={this.handleItemClick}
        />
      </Menu>
    </Segment>
  );
}

export default Navbar;
