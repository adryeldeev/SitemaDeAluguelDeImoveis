import styled from 'styled-components'

export const Container = styled.div`
padding:20px 150px;
display:flex;
justify-content:space-between;
@media (max-width: 375px){
    padding:0px;
    display:grid;
    grid-template-columns:1fr;
    width:100%;
 }
 @media (max-width: 481px) and (max-width:767px){
  padding:0px;
  display:grid;
  grid-template-columns:1fr;
  width:100%;
}
@media (max-width: 768px) and (max-width:991px){
   padding:10px;
  display:grid;
  grid-template-columns:1fr 1fr;
  width:100%;
 }
`

export const Left = styled.div`
width:49%;
padding:20px;
h2{
font-size:1.17em;
}
@media (max-width: 375px){   
    width:100%
  }
  @media (max-width: 481px) and (max-width:767px){
    width:100%;
    
  }
  @media (max-width: 768px) and (max-width:991px){
    width:100%;

  }
` ;



export const Right = styled.div`
width:49%;
padding:20px;
@media (max-width: 375px){   
    width:100%;
    padding:10px;
  }
h2{
    font-size:1.17em;
}
@media (max-width: 481px) and (max-width:767px){
  width:100%;
  padding:20px;
}
@media (max-width: 768px) and (max-width:991px){
  width:100%;

}
`;

export const Form = styled.form`
background-color:#fff;
margin-top:10px;
padding:25px;

`;

export const Message = styled.div`
display:flex;
flex-direction:column;
padding:10px;
margin-top:10px;
margin-bottom:10px;
background-color:#ffff;
`;