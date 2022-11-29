import {
    MailOutline,
    Phone,
  } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
  
  const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    margin: 20px 0px;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
  
//  const ListItem = styled.li`
//    width: 50%;
//    margin-bottom: 10px;
//  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>LeonShop</Logo>
          <Desc style={{fontSize: "20px"}}>
            Somos la mejor pagina de ventas para articulos de exterior de Buenos Aires.
          </Desc>
          <SocialContainer>
            <SocialIcon>
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
        </Center>
        <Right>
          <Title>Contactanos!</Title>
          <ContactItem>
            <Phone style={{marginRight:"10px" ,fontSize:"40px"}}/> 011 - 6353-9728
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px", fontSize:"40px"}} /> leoleonidas75@hotmail.com
          </ContactItem>
        </Right>
      </Container>
    );
  };
  
  export default Footer;