import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 100px 150px;
  background-color: var(--white);
  @media (max-width: 992px) and (max-width:1199.98px){
    display:flex;
    flex-direction: column;
    padding:30px;
  }
  @media (max-width: 768px) and (max-width:991px){
    display:flex;
    flex-direction: column;
    padding:10px;
  }
  @media (max-width: 567px) and (max-width:767px){
  display:flex;
  flex-direction: column;
  padding:10px;
  }
  @media (max-width: 375px) {
    padding: 10px;
    display:grid;
    grid-template-columns:1fr;
    
  }  
  ul {
    display: flex;  
  }
}}




`

export const Item = styled.div`
  img {
    width: 200px;
  }
  
  h3 {
    margin-bottom: 10px;
  }
  
  ul {
    li {
      padding: 12px 0;
    }
  }
  
  nav {
    display: flex;
    margin-top: 15px;
    
    li {
      span {
        margin-right: 15px;
      }
    }
  }
`

export const Copy = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 150px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  @media (max-width: 992px) and (max-width:1199.98px){
    padding: 10px 250px;
    display:grid;
    grid-template-columns:1fr;
  }
  @media (max-width: 768px) and (max-width:991px){
    padding: 10px 170px;
    display:grid;
    grid-template-columns:1fr;
  }
  @media (max-width: 567px) and (max-width:767px){
    padding: 10px 170px;
    display:grid;
    grid-template-columns:1fr;
    align-items: center;
  }
  @media (max-width: 375px) {
    padding: 10px 80px;
display:grid;
grid-template-columns:1fr;
    
}}
  ul {
    display: flex;
    align-items: center;
    @media (max-width: 992px) and (max-width:1199.98px){
      padding: 5px 0;
      padding-right: 20px;
      display:flex;
      flex-direction: column;
    }
    @media (max-width: 768px) and (max-width:991px){
      padding: 5px 0;
      padding-right: 20px;
      display:flex;
      flex-direction: column;
    }

    @media (max-width: 567px) and (max-width:767px){
      padding: 5px 0;
      padding-right: 20px;
      display:flex;
      flex-direction: column;
    
    }
    @media (max-width:375px) {
      padding: 5px 0;
      padding-right: 20px;
      display:flex;
      flex-direction: column;
    }
    li {
      span {
        margin-left: 15px;
      }
    }
  }
`

export const Services = styled.div`
h3{
    padding:15px;
}
ul{
    display:flex;
    flex-direction:column;
    li {
    
        span {
            margin-right: 245px;
        }
}}
@media (max-width: 992px) and (max-width:1199.98px){
  ul{
    display:flex;
    li {
        span {
          margin-right: 805px;
        }
}
}
@media (max-width: 768px) and (max-width:991px){
  ul{
    display:flex;
    li {
        span {
          margin-right: 605px;
        }
}
}
@media (max-width: 567px) and (max-width:767px){
  ul{
    display:flex;
    li {
        span {
          margin-right: 435px;
        }
}
}

@media (max-width: 375px) {

    ul{
        display:flex;
        li {
            span {
              margin-right: 205px;
            }
    }
}


  
`
