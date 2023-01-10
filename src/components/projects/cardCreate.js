import { Information } from "../../js files/projectInfo";
import CardNoImage from "./cardNoImage";

export const CardCreate = (info) => {
   

    if (info.projectIMG == null) {
        return(
            <CardNoImage
                key = {info.id}
                type = {info.projectType}
                title ={info.projectTitle}
                git = {info.projectGithub}
                technologies = {info.technologies}
                description = {info.description}
            />
        )
    }
    else {
        
    }

}
