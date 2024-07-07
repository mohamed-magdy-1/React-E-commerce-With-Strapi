import { useTheme } from "@emotion/react";
import { AddShoppingCartOutlined, Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Dialog,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import ProductDetails from "./ProductDetails";
import { useGetproductByNameQuery } from "../../Redux/product";

import { AnimatePresence, motion } from 'framer-motion'


export default function Main() {


  const allProductsAPI = 'products?populate=*';
  const menCategoryAPI = 'products?populate=*&filters[ProductCategory][$eq]=men';
  const womenCategoryAPI = 'products?populate=*&filters[ProductCategory][$eq]=women';


  const [myDate,setMyDate] =useState(allProductsAPI)


  const { data, error, isLoading } = useGetproductByNameQuery(myDate)
  
  const [clickedProduct,setClickedProduct] = useState({});






  const theme = useTheme();


  const handleAlignment = (event, newValue) => {
      if (newValue !== null) {
        setMyDate(newValue);
    }
    
  };


  const [open,setOpen] = useState(false)

  const handleClickOpen = ()=>{
    setOpen(true)
  }

const handleClose = ()=>{
  setOpen(false)
}

if(isLoading){
return(
  <Box sx={{ py:11,textAlign:"center"}}>
  <CircularProgress />
</Box>
)
}


if(error){
  return(
  <Container sx={{py:11, textAlign:"center"}}>
  <Typography variant="h6" >{error.error}</Typography>
  <Typography variant="h6" >
    Please try again later
  </Typography>

  </Container>

  )

}









if(data){
  return (
    <Container sx={{ py: 9 }}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        gap={3}
      >
        <Box>
          <Typography variant="h6">Selected Products</Typography>
          <Typography fontWeight={300} variant="body1">
            All Our New Arrivals in a exclusive brand selection
          </Typography>
        </Box>

        <ToggleButtonGroup
          sx={{
            ".Mui-selected": {
              border: "1px solid rgba(233,69,96,0.5) !important",
              color: "#e94560",
              backgroundColor: "initial",
            },
          }}
          color="error"
          value={myDate}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton
            sx={{ color: theme.palette.text.primary }}
            className="myButton"
            value={allProductsAPI}
            aria-label="left aligned"
            
          >
            All Products
          </ToggleButton>

          <ToggleButton
            sx={{ mx: "16px !important", color: theme.palette.text.primary }}
            className="myButton"
            value={menCategoryAPI}
            aria-label="centered"
            
          >
            MEN Category
          </ToggleButton>

          <ToggleButton
            sx={{ color: theme.palette.text.primary }}
            className="myButton"
            value={womenCategoryAPI}
            aria-label="right aligned"
            o
          >
            Women Category
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"center"} gap={4}>
        
        <AnimatePresence>
        {
            data.data.map((item)=>{
                return(
                    <Card 
                    component={motion.div}
                    layout
                    initial={{transform:"scale(0)"}}
                    animate={{transform:"scale(1)"}}
                    transition={{duration:0.5,type:"spring",stiffness:50}}
                    key={item.id} 
                    sx={{ 
                        maxWidth: 333,
                        mt:6,
                        
                        ":hover .MuiCardMedia-root":{
                            rotate:"1deg",
                            scale:"1.1",
                            transition:"0.35s ease-in-out",
                        }
                    }}
                    >
                    <CardMedia
                      sx={{ height: 277 }}
                      image={`${item.attributes.ProductImg.data[0].attributes.url}`}
                      title="green iguana"
                    />
                    <CardContent>
                      <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Typography variant="h6" component="div">
                          {item.attributes.ProductTitle}
                        </Typography>
                        <Typography variant="subtitle1" component="p">
                          ${item.attributes.ProductPrice}
                        </Typography>
                      </Stack>
                      <Typography sx={{height:"100px",overflow:"hidden"}} variant="body2" color="text.secondary">
                        {item.attributes.ProductDecription}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{justifyContent:"space-between"}}>
                      <Button onClick={()=>{
                        handleClickOpen()
                        setClickedProduct(item)
                      }} sx={{textTransform:"capitalize"}} size="large">
                          <AddShoppingCartOutlined sx={{ mr:1}} size="small"/>
                          add to Cart
                      </Button>
                      <Rating precision={0.5} name="read-only" value={item.attributes.ProductRating} readOnly/>
                    </CardActions>
                  </Card>
                )
            })
        }

        </AnimatePresence>


      </Stack>



<Dialog
open={open}
onClose={handleClose}
aria-labelledby="alert-dialog-title"
aria-describedby="alert-dialog-description"
sx={{
  ".MuiPaper-root":{
    minWidth:{xs:"100%",md:800}
  }
}}
>
<IconButton
              sx={{
                ":hover": {
                  color: "red",
                  rotate: "180deg",
                  transition: "0.3s",
                },
                position: "absolute",
                top: 0,
                right: 10,
              }}
              onClick={handleClose}
            >
              <Close/>
</IconButton>



<ProductDetails clickedProduct={clickedProduct}/>
</Dialog>







    </Container>
  );
}

}
