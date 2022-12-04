import { Text, Timeline } from "@mantine/core";
const Education = ({user}:any) => {

  console.log(user);
  
  if(!user){
    return null;
  }
  const mapData = user.map((use:any) =>use);
  console.log(mapData.work);
  
    return(
<div style={{padding:30}}>
        <h2 style={{margin:'20px 0'}}>Education</h2>
           <Timeline active={4} bulletSize={24} lineWidth={4}>
      
          <>
            <Timeline.Item  title={mapData.education.name}>
          <Text size="xs" mt={4}>{mapData.education.dateStart}</Text>
          <Text color="dimmed" size="sm">{mapData.education.description}</Text>
        </Timeline.Item>
          </>
       
  
      </Timeline>
     </div>
    )
}
export default Education;