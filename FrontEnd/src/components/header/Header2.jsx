import { ExpandMore, Person2Outlined, ShoppingCartOutlined } from "@mui/icons-material";
import { Container, IconButton, ListItem, Stack, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useState } from "react";
import { useTheme } from "@emotion/react";



const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));


const Search = styled('div')(({ theme }) => ({
  flexGrow:0.4, // this is don't work i don't new why so i added a class in the index.css
    position: 'relative',
    border: "1px solid #777",
    '&:hover': {
      border:"1px solid #333"
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '266 px',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: '330',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:"#777"
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));



const options = [
    'All Categories',
    'CAR',
    'Clothes',
    'Electronics',
];




export default function Header2(){

    const theme = useTheme()

    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
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
  





    return (
      <Container sx={{ my: 3 ,display:"flex",justifyContent:"space-between"}}>
        <Stack alignItems="center">
          <ShoppingCartOutlined />
          <Typography variant="body2">E-commerce</Typography>
        </Stack>

        <Stack>
          <Search
          sx={{
            borderRadius:"22px",
            display:"flex",  
            justifyContent:"space-between",
        }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />


<List
        component="nav"
        aria-label="Device settings"
        sx={{ bgcolor: theme.palette.myColor.main,
            borderTopRightRadius:"22px",
            borderBottomRightRadius:"22px",
            p:"0"
        }}
      >
        <ListItem
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText

          sx={{width:93,textAlign:"center","&:hover":{cursor:"pointer"}}}
            secondary={options[selectedIndex]}
          />
          <ExpandMore sx={{fontSize:"16px","&:hover":{cursor:"pointer"}}}/>
        </ListItem>
      </List>
      <Menu
      sx={{fontSize:"11px"}}
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
            key={option}
            
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>


          </Search>
        </Stack>



        <Stack direction={'row'} alignItems={'center'}>
        <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="primary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>

        <IconButton>
            <Person2Outlined/>
        </IconButton>
        </Stack>








      </Container>
    );
}