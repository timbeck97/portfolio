import styled from "styled-components";

interface DivProps{
    size?:string,
    direction?:string,

}
export const Title=styled.h1`
    font-size:2em;
    font-weigth:bold;
    padding:10px;
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