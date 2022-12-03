import { FooterCard, SkillCard, Title } from "./style"
//@ts-ignore
import java  from '../../assets/java.svg'//@ts-ignore
import spring  from '../../assets/spring.svg'//@ts-ignore
import postgresql  from '../../assets/postgresql.svg'//@ts-ignore
import react2  from '../../assets/react2.svg'//@ts-ignore
import linux  from '../../assets/linux2.svg'//@ts-ignore


const Skills = ()=>{

    return(
        <div>
                <Title style={{marginTop:'15px'}}>
                    Tecnologias
                </Title>
                <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'center', alignItems:'normal', margin:'10px 0px'}}>
                <SkillCard size="200px" style={{alignItems:'center'}}>
                    <div style={{display:'flex', height:'calc(100% - 40px)', justifyContent:'center'}}>
                        <img  src={java} style={{width:'35%'}}/>
                    </div>
                    <FooterCard >
                        Java 8
                    </FooterCard>
                </SkillCard>
                <SkillCard size="200px" style={{alignItems:'center'}}>
                    <div style={{display:'flex', height:'calc(100% - 40px)', justifyContent:'center'}}>
                        <img  src={spring} style={{width:'80%'}}/>
                    </div> 
                    <FooterCard >
                        Spring Ecosistem
                    </FooterCard>
                </SkillCard>
                <SkillCard size="200px" style={{alignItems:'center'}}>
                    <div style={{display:'flex', height:'calc(100% - 40px)', justifyContent:'center'}}>
                        <img  src={postgresql} style={{width:'50%'}}/>
                    </div> 
                    <FooterCard >
                        PostgreSQL 14
                    </FooterCard>
                </SkillCard>
                <SkillCard size="200px">
                    <div style={{display:'flex', height:'calc(100% - 40px)', justifyContent:'center'}}>
                        <img  src={react2} style={{width:'50%'}}/>
                    </div>    
                    <FooterCard >
                        React JS 15
                    </FooterCard>
                </SkillCard>
                <SkillCard size="200px">
                    <div style={{display:'flex', height:'calc(100% - 40px)', justifyContent:'center'}}>
                        <img  src={linux} style={{width:'50%'}}/>
                    </div>    
                    <FooterCard >
                        Linux
                    </FooterCard>
                </SkillCard>
            </div>
    </div>
    )
}
export default Skills;