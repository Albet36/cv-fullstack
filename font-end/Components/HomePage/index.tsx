import { useEffect, useState } from "react";
import { listMe } from "../../pages/api/api";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Education from "./Education";
import Profile from "./Profile";
import SkillBarPage from "./SkillBar";
import WorkExperience from "./WorkExperience";
interface User {
    name?:string,
    age?:string,
    address?:string,
    avatar?:string,
    about?:string,
    education?:{
        name?:string,
        dateStart?:string,
        dateEnd?:string,
        description?:string
    },
    skillbar?:{
        name?:string,
        level?:number,
        color?:string
    },
    workexperience?:{
        name?:string,
        dateStart?:string,
        dateEnd?:string,
        link?:string,
        position?:string,
        description?:string
    }
}
const HomePage = () => {
    const [users,setUsers] = useState<any>();
    console.log(users);
    
    const listAllData = async() => {
const res:any = await listMe();
setUsers(res.data);
    }
    useEffect(()=>{
        listAllData();
    },[])

    
    return(
<div className="layout">
  

    <Profile user={users} />

        <AboutMe  user={users}/>
        <SkillBarPage  user={users}/>
        <WorkExperience  user={users}/>
        <Education  user={users}/>
        <Contact  user={users}/>
</div>
    )
}
export default HomePage;