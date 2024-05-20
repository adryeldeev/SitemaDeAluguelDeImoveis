import styled from "styled-components";

export const Container = styled.div`
  padding: 25px 150px;
  height: 96px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  background-color: var(--white);
  @media (max-width: 375px) {
    padding: 65px;
  }
  @media (max-width: 576px) and (max-width:767px){
    padding: 65px;
    width:100%;
    
  }
  @media (max-width: 768px) and (max-width:991px){
    padding: 65px;
    width:100%;
  }
  @media (max-width: 992px) and (max-width:1199.98px){
    padding: 65px;
    width:100%;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 300px;

    @media (max-width: 375px) {
      width: 200px;
    }
  }
`;

export const Hamburger = styled.div`
  display: none;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 375px) {
    display: block;
  }
  @media (max-width: 567px) and (max-width:767px){
    display: block;
   
  }
  @media (max-width: 768px) and (max-width:991px){
    display: block;
  }
  @media (max-width: 992px) and (max-width:1199.98px){
    display: block;
  }
 
`;

export const Menu = styled.div`
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    
    li {
      border: 1px solid var(--gray);
      border-radius: 10px;
      padding: 10px;
      
      a {
        font-size: 1.2rem;
        font-weight: 300;
        color: #000;
      }

      &:hover {
        background-color: var(--gray);
        cursor: pointer;
      }
    }
  }

  @media (max-width: 375px) {
    display: ${({ open }) => (open ? "block" : "none")};
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background-color: var(--white);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    ul {
      flex-direction: column;
      align-items: flex-start;
      padding:10px;

      li {
        width: 100%;
        text-align: center;
        border: none;
        border-bottom: 1px solid var(--gray);
      }
    }
  }
  @media (max-width: 567px) and (max-width:767px) {
    display: ${({ open }) => (open ? "block" : "none")};
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background-color: var(--white);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    ul {
      flex-direction: column;
      align-items: flex-start;
      padding:10px;

      li {
        width: 100%;
        text-align: center;
        border: none;
        border-bottom: 1px solid var(--gray);
      }
    }
  }
  @media (max-width: 768px) and (max-width:991px){
    display: ${({ open }) => (open ? "block" : "none")};
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background-color: var(--white);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    ul {
      flex-direction: column;
      align-items: flex-start;
      padding:10px;

      li {
        width: 100%;
        text-align: center;
        border: none;
        border-bottom: 1px solid var(--gray);
      }
    }
  }
  @media (max-width: 992px) and (max-width:1199.98px){
    display: ${({ open }) => (open ? "block" : "none")};
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background-color: var(--white);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    ul {
      flex-direction: column;
      align-items: flex-start;
      padding:10px;

      li {
        width: 100%;
        text-align: center;
        border: none;
        border-bottom: 1px solid var(--gray);
      }
    }
  }
`;

export const NavLinks = styled.div``;

export const Button = styled.button`
  width: 100%;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  background-color: var(--blue);
  line-height: 24px;
  border: none;
  color: var(--white);
  font: 0.875rem;
  font-weight: 600;
  transition: 0.3s;
  padding: 12px 20px;
`;