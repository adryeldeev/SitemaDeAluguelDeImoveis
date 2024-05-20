import styled from 'styled-components'

export const Container = styled.div`
padding:20px 150px;
display:flex;
justify-content:space-between;
@media (max-width: 992px) and (max-width:1199.98px){
    padding:20px 100px;
    
    width:100%;
}
@media (max-width: 768px) and (max-width:991px){
    padding:15px;
    display:grid;
    grid-template-columns:1fr;
    width:100%;
}
@media (max-width: 567px) and (max-width:767px){
    padding:15px;
    display:grid;
    grid-template-columns:1fr;
    width:100%;
}
@media (max-width: 375px){
    padding:15px;
    display:grid;
    grid-template-columns:1fr;
    width:100%;
}}
`

export const Left = styled.div`
width:70%;
padding:10px;
border:1px solid rgb(0,0,0,.1);
@media (max-width: 992px) and (max-width:1199.98px){
    padding:0px 10px;
    width:50%;
}
@media (max-width: 768px) and (max-width:991px){
    padding:0px 10px;
    width:100%;
}

@media (max-width: 567px) and (max-width:767px){
    padding:0px 10px;
    width:100%;
}
@media (max-width: 375px){
    padding:0px 10px;
    width:100%;
    
 }

`

export const Thumb = styled.div`
width:100%;
img{
    width:100%;
    heigth:auto;
    border-radius:5px;
}

`

export const Description = styled.div`
padding:30px 0;
@media (max-width: 375px){
    padding:0px;  
 }}
h2, p{
    margin-bottom:15px;
    color:var(--secondary);
    

}


`
export const Rigth = styled.div`
width:28%;
padding:10px;
border:1px solid rgb(0,0,0,.1);
border-radius:5px;
@media (max-width: 992px) and (max-width:1199.98px){
    padding:0px;
    display:grid;
    grid-template-container:1fr 1fr;
    width:50%;
}
@media (max-width: 768px) and (max-width:991px){
    padding:0px;
    display:grid;
    grid-template-container:1fr 1fr;
    width:100%;
}
@media (max-width: 567px) and (max-width:767px){
    padding:0px;
    display:grid;
    grid-template-container:1fr 1fr;
    width:100%;
}
@media (max-width: 375px){
    padding:0px;
    display:grid;
    grid-template-container:1fr 1fr;
    width:100%;
 }

`



export const Profile = styled.div`
display:flex;
justify-content:space-between;


`


export const ProfileImg = styled.div`
width:115px;
img{
    width:100%;
    height:auto;
    border-radius:5px;
}

`

export const ProfileDescript = styled.div`
h3,p{
    margin-bottom:15px;
    color:var(--secondary);
}

`



export const ProfileContact = styled.div`
h3,p{
    margin-bottom:15px;
    color:var(--secondary);
}
`


export const ProfileFormContact = styled.div`
h3{
    margin-bottom:15px;
    color:var(--secondary);
}
form{
    display:flex;
    flex-direction:column;
}

`
