import { SimpleGrid } from '@mantine/core';
import { SkillBars } from 'react-skills';
 
const SkillBarPage = ({user}:any) => {
  if(!user){
    return null
  }
  const dataList = user?.map((val:any) => {
    return {
      name:val.skillbar.name,
           level:val.skillbar.level,
           color:val.skillbar.color
    }
  })

  
  //  const dataList={
  //     
  //   }

  // console.log(dataList);
  
    
    return(
      <div style={{padding:30,background:'white',borderTop:'1px solid #a1a1aa',borderBottom:'1px solid #a1a1aa'}}>
     <h2 style={{margin:'20px 0'}}>Professional Skills</h2>
         <SimpleGrid cols={2}>
        <div> 
         <SkillBars skills={dataList} /> 
            </div>
            <div> 
        {/* <SkillBars skills={skillsData} /> */}
            </div>
       </SimpleGrid>
      </div>
    )
}
export default SkillBarPage;