import { Button, Typography } from '@mui/material';
import { borderRadius, typography } from '@mui/system';
import React from 'react'
import l from '../assets/logo.png'
import im1 from '../assets/Group.png'
import im2 from '../assets/Rectangle35.png'




const RemusLupin = () => {
    return (
        <div style={{backgroundColor:"#fff", position:"absolute" ,display:"flex", marginLeft:"120px",marginTop:"60px",border:"2px", height:330,width:"45%" , borderRadius:"10px"}}>
           
<div style={{position:"absolute", marginLeft:45, marginTop:45}}>
<img src={im1} width={150} height={150}/>

</div>
<div style={{position:"absolute", marginLeft:48, marginTop:52}}>
<img src={im2} width={130} height={130} />
</div>

            <div style={{marginLeft:250}}>
            <Typography style={{fontSize:30, marginTop:10}}>
                 <b>Remus Lupin</b> <br/>
                 <Typography style={{fontSize:15, color:"grey"}}>
                 JEE Aspirant
                 </Typography>
            </Typography>
               </div>

               

               <div style={{position:"absolute", marginTop:80, marginLeft:250}}>
               <Button variant='outlined' style={{borderRadius:"30px", color:"#6f7273",fontSize:9 ,height:20 ,borderColor:"#6f7273" }}>
                   Jee</Button>  
               </div>
               <div style={{position:"absolute", marginTop:80, marginLeft:320}}>
               <Button variant='outlined' style={{borderRadius:"30px", color:"#6f7273",fontSize:9 ,width:"2%", height:20 ,borderColor:"#6f7273" }}>
                   Calculus</Button>  
               </div>
               <div style={{position:"absolute", marginTop:80, marginLeft:390}}>
               <Button variant='outlined' style={{borderRadius:"30px", color:"#6f7273",fontSize:9 ,width:"2%", height:20 ,borderColor:"#6f7273" }}>
                   Mechanics</Button>  
               </div>
               <div style={{position:"absolute", marginTop:80, marginLeft:460}}>
               <Button variant='outlined' style={{borderRadius:"30px", color:"#6f7273",fontSize:9 ,width:"2%", height:20 ,borderColor:"#6f7273" }}>
                   Organic</Button>  
               </div>
               <div style={{position:"absolute", marginTop:80, marginLeft:530}}>
               <Button variant='outlined' style={{borderRadius:"30px", color:"#6f7273",fontSize:9 ,width:"2%", height:20 ,borderColor:"#6f7273" }}>
                  BTech</Button>  
               </div>
               <div style={{position:"absolute", marginTop:80, marginLeft:600}}>
               <Button variant='outlined' style={{borderRadius:"30px", color:"#6f7273",fontSize:9 ,width:"2%", height:20 ,borderColor:"#6f7273" }}>
                  Thermo</Button>  
               </div>
               <div style={{position:"absolute", marginTop:110, marginLeft:250}}>
               <Button variant='outlined' style={{borderRadius:"30px", color:"#6f7273",fontSize:9 ,width:"2%", height:20 ,borderColor:"#6f7273" }}>
                   Calculus</Button>  
               </div>
               <div style={{position:"absolute", marginTop:110, marginLeft:320}}>
               <Button variant='outlined' style={{borderRadius:"30px", color:"#6f7273",fontSize:9 ,width:"2%", height:20 ,borderColor:"#6f7273" }}>
                   Mechanics</Button>  
               </div>
               <div style={{position:"absolute", marginTop:110, marginLeft:390}}>
               <Button variant='outlined' style={{borderRadius:"30px", color:"#6f7273",fontSize:9 ,width:"2%", height:20 ,borderColor:"#6f7273" }}>
                  CSE</Button>  
               </div>
               <div style={{position:"absolute", marginTop:110, marginLeft:460}}>
               <Button variant='outlined' style={{borderRadius:"30px", color:"#6f7273",fontSize:9 ,width:"2%", height:20 ,borderColor:"#6f7273" }}>
                   Organic</Button>  
               </div>
               <div style={{position:"absolute", marginTop:110, marginLeft:530}}>
               <Button variant='outlined' style={{borderRadius:"30px", color:"#6f7273",fontSize:9 ,width:"2%", height:20 ,borderColor:"#6f7273" }}>
                  Jee</Button>  
               </div>
               <div style={{position:"absolute", marginTop:230,marginLeft:50}}>
                   <img src={l} width={100} height={20}/>
               </div>
               <div style={{marginLeft:100, marginTop:25}}>
                   <Button variant='outlined' style={{width:"100%", height:30, color:"grey", fontSize:10,borderColor:"#000"}}>Edit Profile</Button>
               </div>
               <div style={{position:"absolute", marginTop:110, marginLeft:600}}>
               <Button variant='outlined' style={{borderRadius:"30px", color:"#6f7273",fontSize:9 ,width:"2%", height:20 ,borderColor:"#6f7273" }}>
                 Btech</Button>  
               </div>
               <div style={{position:"absolute", marginTop:140, marginLeft:250}}>
               <Button variant='outlined' style={{borderRadius:"30px", color:"#6f7273",fontSize:9 ,width:"5%", height:20 ,borderColor:"#6f7273" }}>
                   Thermo</Button>  
               </div>
               <div style={{position:"absolute", marginTop:140, marginLeft:320}}>
               <Button variant='outlined' style={{borderRadius:"30px", color:"#6f7273",fontSize:9 ,width:"2%", height:20 ,borderColor:"#6f7273" }}>
                   Btech</Button>  
               </div>
               <div style={{position:"absolute", marginTop:140, marginLeft:390}}>
               <Button variant='outlined' style={{borderRadius:"30px", color:"#6f7273",fontSize:9 ,width:"2%", height:20 ,borderColor:"#6f7273" }}>
                  calculus</Button>  
               </div>
               <div style={{position:"absolute", marginTop:140, marginLeft:460}}>
               <Button variant='outlined' style={{borderRadius:"30px", color:"#6f7273",fontSize:9 ,width:"2%", height:20 ,borderColor:"#6f7273" }}>
                   Organic</Button>  
               </div>
           
       
    
            <div style={{position:"absolute",marginTop:190, marginLeft:250}}>
                <hr color='#393839' />
                <Typography style={{color:"#6f7273", fontSize:15}}>
                Lorem ipsum dolor sit amet, consecteur adipiscing elit. Ac,<br/>
                turpis cras in pellentesqu at blandit velit. Magna at lobortis <br/>
                lacus, ultricies in vel morbi adipiscing. Nibh purus a sollictudin <br/>
                scelerisque. Integer eger dui orci, des tellus.
                </Typography>

                
            </div>
      
           

           </div> 
    
    )
}

export default RemusLupin;
