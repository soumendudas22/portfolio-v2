import { SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiReact, SiAngular, SiNextdotjs, SiMysql, SiJava, SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";

const Skill = ({ name, icon }) => {
  return (
    <motion.div className="skill wrapper-box" whileHover={{ 
      backgroundColor: '#974bf3',
      boxShadow: 'inset 4px 4px 8px #8040cf, inset -4px -4px 8px #ae56ff'
     }}>
      <div className="skill-icon">{icon}</div>
      <div className="skill-name">{name}</div>
    </motion.div>
  )
}


export default function Section3() {
  return (
    <div className="section-3">
      <div className="nav-title" style={{ marginLeft: 10 }}>SKILLS</div>
      <div className="skills-wrapper">
        <Skill name={'HTML'} icon={<SiHtml5 />} />
        <Skill name={'CSS'} icon={<SiCss3 />} />
        <Skill name={'JS'} icon={<SiJavascript />} />
        <Skill name={'REACT JS'} icon={<SiReact />} />
        <Skill name={'ANGULAR'} icon={<SiAngular />} />
        <Skill name={'NEXT'} icon={<SiNextdotjs />} />
        <Skill name={'MYSQL'} icon={<SiMysql />} />
        <Skill name={'MONGO DB'} icon={<SiMongodb />} />
        <Skill name={'NODE JS'} icon={<SiNodedotjs />} />
        <Skill name={'JAVA'} icon={<SiJava />} />
      </div>
    </div>
  );
}