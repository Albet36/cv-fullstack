import { model, Schema } from "mongoose"

// interface IEducation{
//     name:string,
//     date:string,
//     description:string
// }
const EducationSchema = new Schema({
    name: String,
    dateStart:String,
    dateEnd:String,
    description:String,
    position:String
})
const Education = model('education',EducationSchema);
export default Education;
