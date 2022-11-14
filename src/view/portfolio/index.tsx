
import { Container, Imagem, Title, Subtitle, Header,ContainerInfo,ContainerInfoColumn, Card, CardTitle, Line} from "./style"
import React from 'react'
import {useState} from 'react'

const img=require('../../assets/imagem3.jpeg');
const insta=require('../../assets/html.svg')



export const Portfolio = () =>{
   
    return(
        <Container >

            <ContainerInfo direction="row">
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
                            Meu nome é Tim Morgenstern Beck, tenho 25 anos, moro na cidade de Nova Hartz, Rio grande do Sul. Sou estudante do curso de Sistemas de Informaçõo pela instituição FACCAT, atualmente trabalho na area de desenvolvimento de software como desenvolvedor Full Stack. Gosto de passar meu tempo livre fora de casa praticando alguma atividade fisica, assistir algumas séries e no tempo que sobre gosto de estudar tenologias novas na área que eu atuo. Trabalho com as tecnologias Java, Spring Boot e PostgreSQL para o back-end, e no front-end ReactJS 15, HTML e CSS.
                    </Subtitle>
                    
                </Card>
                <Line/>
                <Card >
                    <CardTitle>
                        Skills
                    </CardTitle>
                    
                    
                </Card>
                
            </ContainerInfo>
            
           

           
        </Container>
    )
}