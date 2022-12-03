import { Container, Logo, Title, IconsContact } from "./style";

//@ts-ignore
import insta from '../../assets/insta.svg'//@ts-ignore
import linkedim from '../../assets/linkedim.svg'//@ts-ignore
import email from '../../assets/email2.svg'//@ts-ignore
import git from '../../assets/git64.png'//@ts-ignore
import whatz from '../../assets/whatz.svg'//@ts-ignore
const Contato = ()=>{


    return(
        <div>
            <Title>
                Contato
            </Title>
          
            <Container>
                <div style={{alignItems:'flex-end', width:'auto', justifyContent:'center'}}>
                    <div style={{alignItems:'flex-start', width:'auto'}}>    
                        <div style={{flexDirection:'row', width:'auto', marginTop:'10PX'}}>
                            <img src={whatz} style={{width:'30px'}} alt="Celular" />
                            <span style={{marginLeft:'10px', fontWeight:"bold", fontSize:'1.2em'}}>(051) 9 9969-6596</span>
                        </div>
                        <div style={{flexDirection:'row', width:'auto', marginTop:'20px'}}>
                            <img src={email} alt="Email" style={{width:'30px'}} />
                            <span style={{marginLeft:'10px', fontWeight:"bold", fontSize:'1.2em'}} >timbeck1997@hotmail.com</span>
                        </div>
                    </div>
                </div>
                <IconsContact>   
                    <a href='https://www.instagram.com/bcktim/' target='_blank'><img src={insta} style={{width:'40px', margin:'5px 15px 5px 40px'}}/></a>              
                    <a href='https://www.linkedin.com/in/tim-morgenstern-4581911b1/' target='_blank'> <img src={linkedim} style={{width:'40px', margin:'5px 15px'}} /></a>                     
                    <a href='https://github.com/timbeck97' target='_blank'><img src={git} style={{width:'40px', margin:'5px 15px'}}/></a>
                </IconsContact>
                
                
            </Container>
        </div>
    )
}
export default Contato;