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
          left: 0,               
          right: 0,               
          backgroundColor: '#ffffff', 
          zIndex: 1000,           
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.3)", 
        }}
      >
        <BottomNavigation
          value={value}
          onChange={(_, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            icon={<HomeIcon />}
            label="Home"
            component={Link}
            to="/portfolio-michaela"
          />
          <BottomNavigationAction
            label="About"
            icon={<PersonIcon />}
            component={Link}
            to="/about"
          />
          <BottomNavigationAction
            label="Projects"
            icon={<FolderIcon />}
            component={Link}
            to="/projects"
          />
          <BottomNavigationAction
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
