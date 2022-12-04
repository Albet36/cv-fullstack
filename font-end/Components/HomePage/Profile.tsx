import {Avatar, Button} from '@mantine/core';

const Profile = ({user}:any) => {
  if(!user){
    return null;
  }
  
    return(
<>
<div className='profile' style={{position:'relative'}}>
   <div style={{textAlign:'center',marginTop: '30px'}}>

  {user && user.map((data:any) => {
    return(
     <>
      <Avatar size={200} style={{borderRadius:800,position:"absolute",top:-100}} src={data.avatar}  />

<div className="content">
<h2>{data.name}</h2>
 <p style={{margin:'10px 0',fontSize:20}}>{data.positionDeal}</p>
</div>
     </>
    )
  })}
  <div>
    <Button style={{marginRight:5}}  radius={80} color="green">Download CV</Button>
    <Button color="gray" radius={80} >Hire Me</Button>
  </div>
   </div>
</div>
</>
    )
}
export default Profile;