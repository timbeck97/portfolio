
import { Container, Imagem, Title, Subtitle,
    ContainerInfo,ContainerInfoColumn,
    Card, CardTitle, Line,
   } from "./style"
import React from 'react'

import Skills from "../../components/skills"
import Contato from "../../components/contato";
const img=require('../../assets/imagem3.jpeg');



export const Portfolio = () =>{
  
    return(
        <div style={{width:'100%'}}>
           
            <Container id='all' >

                <ContainerInfo direction="row" style={{width:'50vw'}}>
                    <ContainerInfoColumn >
                        <Imagem src={img} />
                    </ContainerInfoColumn>
                    <ContainerInfoColumn>
                        <Title>
                        Tim Morgenstern Beck
                        </Title>
                        <Subtitle>
                            Desenvolvedor WEB.
                        </Subtitle>
                        <Subtitle>
                            Estudante do curso Sistemas de Informação na instituição FACCAT.
                        </Subtitle>
                        <Subtitle>
                            Nova Hartz, Rio Grande do Sul - Brasil.
                        </Subtitle>
                    </ContainerInfoColumn>
                </ContainerInfo>
            
            
                <ContainerInfo >
                    <Line/>
                    <Card >
                        <CardTitle>
                            Informações
                        </CardTitle>
                        <Subtitle>
                                Meu nome é Tim Morgenstern Beck, tenho 25 anos, moro na cidade de Nova Hartz, Rio grande do Sul. Sou estudante do curso de Sistemas de Informaçõo pela instituição FACCAT, atualmente trabalho na área de desenvolvimento de software como desenvolvedor Full Stack. Gosto de passar meu tempo livre fora de casa praticando alguma atividade fisica, assistir algumas séries e no tempo que sobre gosto de estudar tecnologias novas na área que eu atuo.
                        </Subtitle>
                        
                    </Card>
                    <Line/>
                    <Skills />
                    <Line/>
                    <Contato />
                </ContainerInfo>

            </Container>
            {/* <footer style={{width:'100%', position:'absolute', bottom:'0'}}>
                <Contato />
            </footer> */}
        </div>
    )
}