import { Grid, SimpleGrid } from "@mantine/core";

const AboutMe = ({user}:any) => {
    if(!user){
        return null;    
    }
return( 
    <div style={{background:'white',padding:30}}>
    <h2>About Me</h2>
   {!user && user.map(((val:any) => {
    return(
        <>
        <SimpleGrid cols={2} style={{fontSize:20}}>
        <div style={{lineHeight:1.8}}>{val.about}</div>
        <div style={{marginLeft : 50}}>
<Grid>
    <Grid.Col span={4}>Age</Grid.Col>
    <Grid.Col span={8}>{val.age}</Grid.Col>
    <Grid.Col span={4}>Email</Grid.Col>
    <Grid.Col span={8}>{val.email}</Grid.Col>
    <Grid.Col span={4}>Phone</Grid.Col>
    <Grid.Col span={8}>{val.phone}</Grid.Col>
</Grid>
        </div>
    </SimpleGrid>
    </>
    )
   }))}
    </div>
)
}
export default AboutMe;