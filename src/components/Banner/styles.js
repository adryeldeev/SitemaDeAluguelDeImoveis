import styled from 'styled-components';

export const Container = styled.div`
position: relative;
padding: 100px 50px;

background-size: cover;
background-position: center;
background-image: url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
@media (max-width: 375px){
    padding: 0;
    margin:0 auto;

}
`;

export const Text = styled.div`
  width: 55%;
  position: relative;
  z-index: 1;
  @media (min-width: 375px) {
      width: 100%;
      text-align:center;
      font-size:40px;
      margin-bottom: 20px;

  }
  
  h2 {
    color: var(--white);
    font-size: 62px;
    font-weight: 700;
    margin-bottom: 35px;
    
  }

  p {
    color: var(--white);
    margin-bottom: 25px;
    font-size: 48px;
    line-height: 1.5;
  
  }

  span {
    display: inline-block;
    background-color: var(--blue);
    border: 0;
    color: var(--white);
    font-size: 14px;
    font-weight: 600;
    padding: 12px 20px;
    line-height: 24px;
    border-radius: 3px;
    cursor: pointer;
    text-align: center;
    text-transform: uppercase;
  }

  @media (max-width: 375px) {
    width: 100%;
    h2, p, span {
      text-align: center;
      
    }
    span {
      padding: 12px  40px;
   
    }
  }
`

export const Titulo = styled.div`
@media (max-width: 375px) {
    h2 {
        width: 100%;
        font-size:40px;
        text-align: center;
        display:flex;
        padding: 42px 40px;
        
       
    }
    span {
      padding: 12px 40px;
    
   
    }
}
`
export const SubTexto = styled.div`
p {
    font-size:28px;
    text-align: center;
}
    @media (min-width: 375px) {
      p{
        width: 60%;
        text-align:center;
        margin:0 auto;
        font-size:15px;
      }
    }
}

`
export const TextoSpan = styled.div`

@media (max-width: 375px){
    text-align:center;
    padding:20px;
    
}
`