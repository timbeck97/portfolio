import styled from "styled-components";

export const Title=styled.h1`
    font-size:2em;
    font-weigth:bold;
    padding:10px;
`
export const Container = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    width:100%;
    margin:10px 0px;
    @media(max-width:768px){
        flex-direction:column;
  
    }
`
export const Logo=styled.div`
    width:auto;
    border-radius:50%;
    padding:10px;
    border: 1px solid #37FF62;
    margin:5px 10px;
    color:white;
`
export const IconsContact=styled.div`
    flex-direction:row;
    width:auto;
    @media(max-width:768px){
       margin-top:15px;
  
    }
`