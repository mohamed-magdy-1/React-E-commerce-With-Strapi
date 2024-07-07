import { ExpandMore, KeyboardArrowRightOutlined } from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';





// eslint-disable-next-line react/prop-types
export default function Links({title}){
    return (
      <Box
        sx={{
          ":hover .show-when-hover": {
            display: "block",},
            ":hover":{cursor:"pointer",},
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography variant="body1">{title}</Typography>
        <ExpandMore sx={{ fontSize: "16px", ml: 1 }} />

        <Box
          className="show-when-hover "
          sx={{
            display: "none",
            position: "absolute",
            top: "100%",
            minWidth: "170px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 5 ,
          }}
        >
          <Paper sx={{ mt: 2 }}>
            <nav aria-label="secondary mailbox folders">
              <List>
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{
                      display: "flex",
                      p: 0,
                      px: 1.5,
                    }}
                  >
                    <ListItemText
                      sx={{
                        ".MuiTypography-root": {
                          fontSize: "15px",
                          fontWeight: 300,
                        },
                      }}
                      primary="Dashboard"
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem 
                        sx={{
                            ":hover .show-when-hover-min": {
                              display: "block",
                            },
                            position: "relative",
                          }}
                disablePadding>
                  <ListItemButton
                    sx={{
                      display: "flex",
                      p: 0,
                      px: 1.5,
                    }}
                  >
                    <ListItemText
                      sx={{
                        ".MuiTypography-root": {
                          fontSize: "15px",
                          fontWeight: 300,
                        },
                      }}
                      primary="products"
                    />
                    <Box flexGrow={1} />
                    <KeyboardArrowRightOutlined fontSize="small" />
                  </ListItemButton>

                  <Box
                    className="show-when-hover-min "
                    sx={{
                      display: "none",
                      position: "absolute",
                      top: 0,
                      left:"100%"
                    }}
                  >
                    <Paper sx={{ml:1,minWidth: "150px",}}>
                      <nav aria-label="secondary mailbox folders">
                        <List>
                          <ListItem disablePadding>
                            <ListItemButton sx={{display:"flex",p:0,px:1.5}}>
                              <ListItemText
                                sx={{
                                    "& .MuiTypography-root":{
                                        fontSize:'15px',
                                        fontWeight:300,
                                    }
                                }}
                              primary="Add Product" />
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton sx={{display:"flex",p:0,px:1.5}}>
                              <ListItemText
                                sx={{
                                    "& .MuiTypography-root":{
                                        fontSize:'15px',
                                        fontWeight:300,
                                    }
                                }}
                              primary="Edit Product" />
                            </ListItemButton>
                          </ListItem>
                        </List>
                      </nav>
                    </Paper>
                  </Box>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{
                      display: "flex",
                      p: 0,
                      px: 1.5,
                    }}
                  >
                    <ListItemText
                      sx={{
                        ".MuiTypography-root": {
                          fontSize: "15px",
                          fontWeight: 300,
                        },
                      }}
                      primary="orders"
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{
                      display: "flex",
                      p: 0,
                      px: 1.5,
                    }}
                  >
                    <ListItemText
                      sx={{
                        ".MuiTypography-root": {
                          fontSize: "15px",
                          fontWeight: 300,
                        },
                      }}
                      primary="Profile"
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Paper>
        </Box>
      </Box>
    );
}