// import { Fragment } from "react";
// import './NavBar.css';
// import {Link} from 'react-router-dom';
// import styled from "styled-components";

// const StyledNav = styled.div`
// background-color: ${({theme}) => theme.primary};
//   display: flex;
//   justify-content: space-between;
//   padding: 5px 25px;
//   boxshadow: 0px 4px 8px rgba(0, 0,0, 0.26);
// `;

// function NavBar() {
//     return (
//     <Fragment>
//         <StyledNav>
//             <h4>Employee App</h4>
//             <ul style={{display: "flex", 
//                         justifyContent: "space-between", 
//                         width: "35%", 
//                         listStyle: "none",
//                         color: "#fff",
//                         cursor: "pointer",}}>
//                 <li><Link style={{textDecoration: "none", color: "#fff" }} to="/">Home</Link></li>
//                 <li><Link style={{textDecoration: "none", color: "#fff" }} to="/add-employee">Add Employee</Link></li>
//                 <li><Link style={{textDecoration: "none", color: "#fff" }} to="/employee-list">Employee List</Link></li>
//                 <li><Link style={{textDecoration: "none", color: "#fff" }} to="/">Logout</Link></li>
//             </ul>
//         </StyledNav>
//     </Fragment>
//     );
// }

// // const SyledNav = {
// //     backgroundColor: "#2196F3",
// //     display: "flex",
// //     justifyContent: "space-between",
// //     padding: "5px 25px",
// //     boxShadow: "0px 4px 8px rgba(0, 0,0, 0.26)",
// // };

// export default NavBar; 

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;
// const navItems = ['Home', 'Employee-list', 'Add-employee', 'Logout'];
const navItems = [
    {itemName: "Home", to:"/"},
    {itemName: "Employee-list", to:"/employee-list"},
    {itemName: "Add-employee", to:"/add-employee"},
    {itemName: "Logout", to:"/"},
];

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        EMPLOYEE APP
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.itemName} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => navigate(item.to)}>
              <ListItemText primary={item.itemName} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      {/* <CssBaseline /> */}
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            EMPLOYEE APP
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item.itemName} sx={{ color: '#fff' }} onClick={() => navigate(item.to)}>
                {item.itemName}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default NavBar;