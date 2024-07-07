import { useTheme } from "@emotion/react";
import { AccessAlarmOutlined, CreditScoreOutlined, ElectricBolt, WorkspacePremiumOutlined } from "@mui/icons-material";
import { Box, Container, Divider, Stack, Typography, useMediaQuery } from "@mui/material";




export default function IconSection (){

    const theme = useTheme()

    return (
      <Container sx={{mt: 3 , bgcolor: theme.palette.mode === "dark" ? "#000" : "#fff"  }}>
        <Stack
          divider={
            useMediaQuery("(min-width:600px)") ? (
              <Divider orientation="vertical" flexItem />
            ) : null
          }
          flexWrap={"wrap"}
          direction={"row"}
          alignItems={"center"}
          
        >
          <MyBox
            subTitle={"Start From $10"}
            title={"Fast Delivery"}
            icon={<ElectricBolt />}
          />
          <MyBox
            subTitle={"7 Days Back"}
            title={"Money Guarantee"}
            icon={<WorkspacePremiumOutlined />}
          />
          <MyBox
            subTitle={"For free return"}
            title={"365 Days"}
            icon={<AccessAlarmOutlined />}
          />
          <MyBox
            subTitle={"Secure System"}
            title={"Payment"}
            icon={<CreditScoreOutlined />}
          />
        </Stack>
      </Container>
    );

}


// eslint-disable-next-line react/prop-types
function MyBox({icon,title,subTitle}){
    const theme = useTheme() 
    return (
      <Box
        sx={{
          width: 250,
          display: "flex",
          alignItems: "center",
          justifyContent:useMediaQuery('(min-width:600px)')?"center":"left",
          flexGrow: 1,
          gap: 3,
          py: 1.6,
        }}
      >
        {icon}
        <Box>
          <Typography variant="body1">{title}</Typography>
          <Typography
            sx={{
              fontWeight: 300,
              color: theme.palette.text.secondary,
            }}
            variant="body1"
          >
            {subTitle}
          </Typography>
        </Box>
      </Box>
    );
}

