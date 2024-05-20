import styled from 'styled-components'

export const Container = styled.div`
width:24%;
margin-bottom:12px;
background-color:var(--white);
box-shadow:0px 1px 3px 0px rgba(0,0,0.1);
@media (max-width: 567px) and (max-width:767px){
    width:100%;
  
  
}
@media (max-width: 375px){
   width:90%;
   padding:10px;
}}
@media (max-width: 768px) and (max-width:991px){
    width:50%;
    padding:10px;
}
@media (max-width: 992px) and (max-width:1199.98px){
    width:30%;
    padding:10px
}

`
export const Img = styled.div`
width:100%;
img{
    width:100%;
    height:auto;
    
}
@media (max-width: 375px) {
   width:100%;
margin-top:20px;
}

`
export const Description = styled.div`
padding:12px;

@media (max-width: 375px) {
width:100%;
padding:20px 0px 10px 10px;
}
a{
    display:flex;
    justify-content:space-between;
    align-items:center;
    color:var(--secondary);
    @media (max-width: 375px){
       width:100%;
    }
  
}
h4{
    font-size:0.9rem;
    font-weight:600;
    margin-bottom:10px;
   
}
span{
    @media (max-width: 375px){
     display:flex;
    }
  }
}

`
export const Itens = styled.div`
display:flex;
justify-content:flex-start;
flex-direction:column;

span{
    margin-bottom:10px;
}

`
//export const Container = styled.div`


//`