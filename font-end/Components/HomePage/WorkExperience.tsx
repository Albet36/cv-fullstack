import { Text, Timeline } from '@mantine/core';
const WorkExperience = ({user}:any) => {
  if(!user){
    return null;
  }
    return(
     <div style={{padding:30,borderBottom:'1px solid gray'}}>
        <h2 style={{margin:'20px 0'}}>Work Experience</h2>
      {user && user.map((val:any) => {
        return(
         <>
          <Timeline active={4} bulletSize={24} lineWidth={4}>
          <Timeline.Item  title={val.work.name}>
            <Text size="xs" mt={4}>{val.work.dateStart}</Text>
            <Text size="xs" mt={4}>{val.work.position}</Text>
            <Text color="dimmed" size="sm">{val.work.description}</Text>
            <Text color="dimmed" size="sm">Link:{val.work.link}</Text>
        
          </Timeline.Item>
    
      
        </Timeline>
        </>
        )
      })}
     </div>
    )
}
export default WorkExperience;