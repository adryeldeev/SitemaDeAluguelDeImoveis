import styled from 'styled-components'

export const Container = styled.div`
padding:50px 150px;
position:relative;
background-size:cover;
background-position:center;
@media (max-width: 992px) and (max-width:1199.98px){
    padding:30px 120px;
    display:flex
    flex-direction:column; 
}
@media (max-width: 768px) and (max-width:991px){
    padding:15px;
    display:flex
    flex-direction:column; 
}
@media (max-width: 567px) and (max-width:767px){
    padding:10px;
    display:flex
    flex-direction:column;
}
@media (max-width: 375px){
    padding:10px;
   display:flex
   flex-direction:column;
 }


:before{
    background-color:rgba(0,0,0,.6);
    content:'';
    position:absolute;
    top:0;
    left:0;
    width:100%;
    heigth:100%;
    z-index:1;
}

    `
    
    
    export const Text = styled.div`
width:55%;
position:relative;
z-index:1;
@media (max-width: 375px){
    padding:0px;
   display:flex
   flex-direction:column;
  
  
 }
h2{
    color:var(--white);
    font-size:3.875rem;
    margin-bottom:25px;
   
}
p{
    color:var(--white);
    margin-bottom:25px;
    @media (max-width: 375px){
        padding:0px;
       display:flex  
     }
}

`