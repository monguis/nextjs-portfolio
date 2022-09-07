import { faAngular, faCss3, faJsSquare, faMicrosoft, faReact } from "@fortawesome/free-brands-svg-icons";
import { SkillTypeProps } from "../SkillTile";

const content:SkillTypeProps[] = [
    {title:"JavaScript", cssModifierClass:"javascript", icon:faJsSquare},
    {title:"React", cssModifierClass:"react", icon:faReact},
    {title:"CSS", cssModifierClass:"css", icon:faCss3},
    {title:"Angular", cssModifierClass:"angular", icon:faAngular},
    {title:".NET", icon:faMicrosoft},
    {title:"React", cssModifierClass:"react", icon:faReact},
]

export default content;