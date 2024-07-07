/* eslint-disable react/no-unescaped-entities */
import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { useState } from "react";







export default function ProductDetails({clickedProduct}) {





  const [selectedImg,setSelectedImg] = useState(0)

  return (
    <Box sx={{display:"flex", alignItems:"center",gap:2.5, flexDirection:{xs:'column',sm:"row"}}}>
      <Box display={"flex"}>
        <img  width={360} src={`${clickedProduct.attributes.ProductImg.data[selectedImg].attributes.url}`} alt="" />
      </Box>

      <Box sx={{py:2,textAlign:{xs:"center",sm:"left"}}}>
        <Typography variant="h5">{clickedProduct.attributes.ProductTitle}</Typography>
        <Typography my={0.4} fontSize={'22px'} color={"crimson"} variant="h5">${clickedProduct.attributes.ProductPrice}</Typography>
        <Typography variant="body1">
        {clickedProduct.attributes.ProductDecription}
        </Typography>


        <Stack sx={{
            justifyContent:{xs:"center",sm:"left"}
        }} gap={1} my={1} direction={"row"}>
          <ToggleButtonGroup
      value={selectedImg}
      exclusive
      sx={{
        ".Mui-selected":{
          border:"1px solid royalblue !important",
          borderRadius:"5px !important",
          opacity:"1",
          backgroundColor:"initial",
        }
      }}
    >

{
                clickedProduct.attributes.ProductImg.data.map((item,index)=>{
                    return(
                      <ToggleButton 
                      key={item.id}  
                      value={index}
                      aria-label="left aligned"
                      sx={{
                        width:"110px",
                        height:"110px",
                        mx:1,
                        p:"0",
                        opacity:"0.5"
                      }}
                      >
                                                <img onClick={()=>{
                          setSelectedImg(index)
                        }}
                        height={"100%"} 
                        style={{borderRadius:3}} 
                        width={"100%"} 
                        src={`${item.attributes.url}`} alt="" />
                      </ToggleButton>
                    )
                })
            }

  
    </ToggleButtonGroup>
  

        </Stack>


        <Button
        sx={{mb:{xs:1,sm:0},
            textTransform:"capitalize"
        }}
        variant="contained"
        >
            <AddShoppingCartOutlined sx={{mr:1}} fontSize="small"/>
            Buy Now
        </Button>





      </Box>
    </Box>
  );
}
