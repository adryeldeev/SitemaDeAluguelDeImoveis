import styled from 'styled-components'

export const Header = styled.div`
display:flex;
justify-content:flex-start;
align-items:center;
padding:25px 150px;
h2{
  font-size:25px;
}

@media (max-width: 375px){
    padding: 10px 50px;
  h2 {
    font-size: 20px;
    margin: 0;
    white-space: nowrap;
  }
}
@media (max-width: 576px) and (max-width:767px){
   
  h2 {
    font-size: 25px;
    margin: 0;
    white-space: nowrap;
  }
}
@media (max-width: 992px) and (max-width:1199.98px){
  padding:25px 50px; 
}

`
export const Wrapper = styled.div`
display:flex;
gap:20px;
align-items:center;
flex-wrap:wrap;
padding:25px 150px;

@media (max-width: 992px) and (max-width:1199.98px){
  padding:10px 50px; 
}
@media (max-width: 375px) {
    padding: 10px 50px;
}
 
`