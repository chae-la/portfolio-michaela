import "./Nav.scss";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import FolderIcon from "@mui/icons-material/Folder";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { useState } from "react";


type NavProps = {
  navActionIndex: number;
};

const Nav = ({ navActionIndex = 0 }: NavProps) => {
  const [value, setValue] = useState(navActionIndex);
  return (
    <div className="nav">
      <Box
        sx={{
          width: "100%",
          position: "fixed",
          bottom: 0,
        }}
      >
        <BottomNavigation
          className="bottom-navigation"
          showLabels
          value={value}
          onChange={(_, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            className="bottom-navigation__item"
            icon={<HomeIcon />}
            label="Home"
            component={Link}
            to="/"
          />
          <BottomNavigationAction
            className="bottom-navigation__item"
            label="About"
            icon={<PersonIcon />}
            component={Link}
            to="/about"
          />
          <BottomNavigationAction
            className="bottom-navigation__item"
            label="Projects"
            icon={<FolderIcon />}
            component={Link}
            to="/projects"
          />

          <BottomNavigationAction
            className="bottom-navigation__item"
            label="Socials"
            icon={<PhoneIphoneIcon />}
            component={Link}
            to="/socials"
          />
        </BottomNavigation>
      </Box>
    </div>
  );
};
export default Nav;
