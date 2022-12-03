import styled from "styled-components";
interface DivProps{
    size?:string,
    direction?:string,

}

export const Container =styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:flex-start;
    color:#FFFFFF;
`
export const Header=styled.header`
    height:60px;
    width:100%;
    display:flex;
    justify-content:center;
    align-itens:center;
    background-image:linear-gradient(to bottom, rgba(170,0,0,1), rgba(255,0,0,0));
    margin-bottom:20px;
    padding-bottom:10px;
    
`
export const ContainerInfo=styled.div<DivProps>`
    display:flex;
    flex-direction:${props=>props.direction?props.direction:'column'};
    justify-content:center;
    width:70vw;
    margin-top:20px;
    @media(max-width:768px){
        flex-direction:column;
    }
    
    
`
export const Card=styled.div<DivProps>`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    flex-wrap:wrap;
    max-width:${props=>props.size?props.size:'100%'};
    background:#2C2C2C;
    border-radius:5px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    padding:20px;
    margin:10px;


`
export const CardTitle=styled.h2`
    color: #37FF62;
    font-weight:500;
    padding:10px 0px;
    
    `
export const ContainerInfoColumn=styled.div<DivProps>`
    display:flex;
    flex-direction:column;
    width:${props=>props.size?props.size:''};
    padding:25px;
    @media(max-width:768px){
        padding:0;
        align-items:center;
        text-align:center;
    }
`

export const Imagem=styled.img`
    height:200px;
    width:200px;
    border-radius:100%;
    border: 1px solid #37FF62;
    box-shadow:
    0 0 10px #fff,
    0 0 2px #fff,
    0 0 2px #0fa,
    0 0 2px #0fa,
    0 0 2px #0fa,
    0 0 2px #37FF62,
    0 0 2px #37FF62;

`

export const Title=styled.h1`
    font-size:2em;
    font-weigth:bold;
    padding:10px;
`
export const Subtitle=styled.h2`
    font-size:1.3em;
    font-weight:200;
    padding:10px 0px;
    color:#CECECE;
    line-height: 1.6;
    overflow: hidden;
   
`
export const Line=styled.div`
    height:1px;
    width:100%;
    background:#37FF62;
`


export const SkillCard=styled.div<DivProps>`
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    justify-content:space-between;
    align-itens:center;
    max-width:${props=>props.size?props.size:'100%'};
    background:black;
    border-radius:5px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    margin:5px;
    padding-top:10px;
    border-radius:5px;
    border:0.5px solid #37FF62;
    transition: 0.5s;
    &:hover{
        transform:scale(1.2);

    }
  
`
export const FooterCard=styled.div`
    width:100%;
    height:40px;
    display:flex;
    font-weight:900;
    background:#37FF62;
    color:#131313;
    justify-content:center;
`