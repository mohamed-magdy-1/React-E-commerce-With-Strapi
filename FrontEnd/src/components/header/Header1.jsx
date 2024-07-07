
import   { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
import { Box, IconButton, useTheme, Typography, Stack, ListItem, Container } from "@mui/material";

import { DarkModeOutlined, ExpandMore, LightModeOutlined } from "@mui/icons-material";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import List from '@mui/material/List'; 
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const options = [
  'AR',
  'EN',
];


export default function Header1(){

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };










    const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

    return(
      <Box sx={{
        bgcolor:"#2B3445",
        by:"4px",
        borderBottomRightRadius:14,
        borderBottomLeftRadius:14,
      }}>

<Container >
<Stack direction={'row'} alignItems={'center'}>
<Typography 
sx={{
  mr:2,
  p:"3px 10px",
  bgcolor:"#D23F57",
  borderRadius:"12px",
  fontSize:'15px',
  fontWeight:'bold',
  color:"#fff"
}}
variant="body2"
>
HOT
</Typography>
<Typography 
sx={{
  fontSize:'14px',
  fontWeight:300,
  color:"#fff"
}}
variant="body2">
Free Express Shipping
</Typography>



<Box flexGrow={1}/>


        <div> 
             
             {theme.palette.mode === "light" ? (
               <IconButton
               sx={{mb:"4px"}}
                 onClick={() => {
                   localStorage.setItem(
                     "mode",
                     theme.palette.mode === "dark" ? "light" : "dark"
                   );
                   colorMode.toggleColorMode();
                 }}
                 color="inherit"
               >
                 <LightModeOutlined sx={{fontSize:"20px", color:"#fff"}}  />
               </IconButton>
             ) : (
               <IconButton
                 onClick={() => {
                   localStorage.setItem(
                     "mode",
                     theme.palette.mode === "dark" ? "light" : "dark"
                   );
                   colorMode.toggleColorMode();
                 }}
                 color="inherit"
               >
                 <DarkModeOutlined sx={{fontSize:"20px"}} />
               </IconButton>
             )}

        </div>






        <List
        component="nav"
        aria-label="Device settings"
        sx={{p:"0",m:"0"}}
      >
        <ListItem
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
          sx={{"&:hover":{cursor:"pointer"}, px:1}}
        >
          <ListItemText
          sx={{".MuiTypography-root":{fontSize:"18px",color:"#fff"}}}
            secondary={options[selectedIndex]}
          />
          <ExpandMore sx={{fontSize:"20px",color:"#fff" }}/>
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
          sx={{fontSize:"20px",p:"3px 10px", minHeight:'10px'}}
            key={option}
            
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>

















<FacebookIcon
sx={{
  fontSize:"20px",
  color:"#fff"
}}
/>
<XIcon
sx={{
  fontSize:"20px",
  mx:1,
  color:"#fff"
}}
/>
<InstagramIcon
sx={{
  fontSize:"20px",
  color:"#fff",
}}
/>


</Stack>
</Container>



      </Box>
    )
}