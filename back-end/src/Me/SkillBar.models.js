import { model, Schema } from "mongoose"

// interface ISkillBar  {
//     name: string,
//     level: number,
//     color: string
// }
const skillbarSchema = new Schema({
    name:String,
    level:Number,
    color:String
})
const skillbar = model('Skillbar',skillbarSchema);
export default skillbar;