import { Typography } from '@mui/material';
import React from 'react';
import i1 from '../assets/other.png';
import i2 from '../assets/corses4.png';
import star from '../assets/stars.png'
import i3 from '../assets/courses5.png';
import i4 from '../assets/EDTCH9.png';
import i5 from '../assets/Rectangle24.png';
import i6 from '../assets/Rectangle.png';
import gg from '../assets/gggg.png';
const Mycourses = () => {
    return (
        <>
        <div style={{borderRadius:"10px", position:"absolute",width:"37%" , height:"1050px", marginLeft:"840px", 
        marginBottom:"1000px",position:"absolute", display:"flex",backgroundColor:"#fff", marginTop:"30px"}}>
            
            <div style={{position:"absolute",marginLeft:10, marginTop:10}}>
               <img src={i1} width={18} height={34}/>
            </div>
              <div style={{position:"absolute", marginTop:10,marginLeft:"34px"}}>
              <Typography style={{fontSize:30}}>
                 <b>My Courses</b> 
              </Typography>
              </div>

              <div style={{padding:10,paddingTop:65, paddingRight:20 }} >
                <img src={i2} width={255} height={159}/>
              </div>
             
              <div>
              <Typography style={{position:"absolute", marginTop:70, fontSize:26}}>
                   <b>Lorem ipsum sit a</b>  
                 </Typography>
              </div>
              
              <div >
                  <Typography style={{position:"absolute", marginTop:115, color:"gray", fontSize:18}}>
                      Lorem ipsum dolor sit amet, <br/>
                      consecteur adipisc Lorem<br/>
                      ipsum dolor sit amet,
                  </Typography>
              </div>

              <div style={{position:"absolute", marginTop:195, marginLeft:280}}>
                  <img src={star} width={160} height={25}/>
              </div>

              <div style={{position:"absolute", padding:10, marginTop:250 }} >
                <img src={i3} width={255} height={159}/>
              </div>
              
              <div >
              <Typography style={{position:"absolute" ,marginTop:260, fontSize:26}}>
                   <b>Lorem ipsum sit a</b>  
                 </Typography>
              </div>
              <div >
                  <Typography style={{position:"absolute", marginTop:305, color:"gray", fontSize:18}}>
                      Lorem ipsum dolor sit amet, <br/>
                      consecteur adipisc Lorem<br/>
                      ipsum dolor sit amet,
                  </Typography>
              </div>
              <div style={{position:"absolute", marginTop:390, marginLeft:280}}>
                  <img src={star} width={160} height={25}/>
              </div>
              
              <div style={{position:"absolute", padding:10, marginTop:450 }} >
                <img src={i4} width={255} height={159}/>
              </div>
              <div >
              <Typography style={{position:"absolute" ,marginTop:460, fontSize:26}}>
                   <b>Lorem ipsum sit a</b>  
                 </Typography>
              </div>
              <div >
                  <Typography style={{position:"absolute", marginTop:500, color:"gray", fontSize:18}}>
                      Lorem ipsum dolor sit amet, <br/>
                      consecteur adipisc Lorem<br/>
                      ipsum dolor sit amet,
                  </Typography>
              </div>
              <div style={{position:"absolute", marginTop:580, marginLeft:280}}>
                  <img src={star} width={160} height={25}/>
              </div>
              
              <div style={{position:"absolute", padding:10, marginTop:650 }} >
                <img src={i5} width={255} height={159}/>
              </div>
              <div >
              <Typography style={{position:"absolute" ,marginTop:660, fontSize:26}}>
                   <b>Lorem ipsum sit a</b>  
                 </Typography>
              </div>
              <div >
                  <Typography style={{position:"absolute", marginTop:700, color:"gray", fontSize:18}}>
                      Lorem ipsum dolor sit amet, <br/>
                      consecteur adipisc Lorem<br/>
                      ipsum dolor sit amet,
                  </Typography>
              </div>
              <div style={{position:"absolute", marginTop:780, marginLeft:280}}>
                  <img src={star} width={160} height={25}/>
              </div>

              <div style={{position:"absolute", padding:10, marginTop:850 }} >
                <img src={i6} width={255} height={159}/>
              </div>
              <div >
              <Typography style={{position:"absolute" ,marginTop:860, fontSize:26}}>
                   <b>Lorem ipsum sit a</b>  
                 </Typography>
              </div>
              <div >
                  <Typography style={{position:"absolute", marginTop:900, color:"gray", fontSize:18}}>
                      Lorem ipsum dolor sit amet, <br/>
                      consecteur adipisc Lorem<br/>
                      ipsum dolor sit amet,
                  </Typography>
              </div>
              <div style={{position:"absolute", marginTop:980, marginLeft:280}}>
                  <img src={star} width={160} height={25}/>
              </div>
              
               <div style={{position:"absolute", marginTop:1060}}>
                 <img src={gg} width={35} height={35}/>
               </div>

        </div>

       </>
        

    )
}

export default Mycourses
