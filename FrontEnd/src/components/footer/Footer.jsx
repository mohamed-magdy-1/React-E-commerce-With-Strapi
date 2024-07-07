import { Box, Link, Typography } from "@mui/material";


export default function Footer(){
    return(
        <Box
        sx={{
            bgcolor:"#2B3445",
            py:1.3,
            borderTopLeftRadius:8,
            borderTopRightRadius:8
        }} 
        >
            <Typography 
            variant="h6" 
            color="HighlightText"
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            >
                Designed and developed by 
                <Link
                href=""
                sx={{
                    mx:0.5,
                    fontSize:"18px",
                    textTransform:"capitalize",
                    color:"#ff7790",
                    textDecoration: "none",
                }}
                variant="text"
                color="primary"
                >
                    Mohamed Magdy
                </Link>
                *2024
            </Typography>
        </Box>
    )
}