import { KeyboardArrowUp } from "@mui/icons-material"
import { Fab, Zoom, useScrollTrigger } from "@mui/material"





function ScrollToTop() {

    return (
      <Zoom in={useScrollTrigger({threshold:100})}>
        <Fab
        onClick={()=> window.scrollTo(0,0)} 
        variant="extended"
        sx={{position:'fixed',bottom:33,right:33}}
        color="primary" 
        size="small" 
        aria-label="Scroll back to top">
          <KeyboardArrowUp fontSize="medium" />
        </Fab>
      </Zoom>
    );
  }
  export default ScrollToTop