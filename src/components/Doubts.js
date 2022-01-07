import { Button, Typography } from '@mui/material'
import { typography } from '@mui/system'
import React from 'react'
import img2 from '../assets/image.png'
import side from '../assets/sidelogo.png'

const Doubts = () => {
    return (
        <div div className='doubts' style={{marginLeft:"840px",position:"relative" , display:"flex", marginTop:"60px" ,justifyContent:"space-around",height:"200px", 
        background: "linear-gradient(#80f1ea, #aafbc3)",borderRadius:"10px",width:"37%" ,alignItems:"flex-end"}}>
           
           <div style={{position:"absolute", marginRight:400, marginBottom:60 , display:"flex"}}>
            <img src={img2} width={100} height={100}/>   
            </div>
    
                <div style={{ position:"absolute", marginLeft:230, marginBottom:40 }}>
                <Typography variant='h3' style={{color:"#fff", fontSize:"25px"}}>
                    <b>Any Any Doubts?</b>
                    </Typography>
                    <li style={{fontSize:20 , color:"#fff"}}>Talk to our mentors</li>
                <li style={{fontSize:20 , color:"#fff"}} >Get experts guidance</li>
                <li style={{fontSize:20 , color:"#fff"}} >Talk to our experts</li> <br/>
                </div>
                <div style={{position:"absolute", marginBottom:148, marginLeft:720}}>
                     <img src={side} width={70} height={100}/>
                </div>


                <div style={{marginBottom:10}}>
                   <Button variant='outlined' style={{color:"#fff", borderColor:"#fff"}}>
                       Book Your Free Mentorship Session Now!</Button>
                </div>

               </div>     
        
             

        
    )
}

export default Doubts
