import axios from 'axios'
interface User {
    name:string,
    age:string,
    address:string,
    avatar:string,
    about:string,
    education:{
        name:string,
        dateStart:string,
        dateEnd:string,
        description:string
    },
    skillbar:{
        name:string,
        level:number,
        color:string
    },
    workexperience:{
        name:string,
        dateStart:string,
        dateEnd:string,
        link:string,
        position:string,
        description:string
    }
}
const URL = 'http://localhost:2001'
export const listMe = async() =>{
try {
   return await axios.get<User[]>(`${URL}/listData`)
} catch (error) {
    console.log('loi roi');
    
}
}