import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/NewsLetter";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
  font-size: 20px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;


const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;


const Button = styled.button`
  
  padding: 20px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 700;
  &:hover{
      background-color: #f8f4f4;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar /> 
      <Wrapper>
        <ImgContainer>
          <Image src="https://cdnlaol.laanonimaonline.com/webapp_webp/images/productos/b/0000031000/31872.webp" />
        </ImgContainer>
        <InfoContainer>
          <Title>DEPOSITO KETER OAKLAND 757</Title>
          <Desc>
          Construcción de doble pared con refuerzos de acero, resistente a la intemperie.
          Paredes DUOTECH
          Amplias puertas dobles, ventanas y claraboya de estilo victoriano.
          Piso resistente.
          Cielorraso robusto.
          Techos altos.
          Paredes aptas para pintar.
          Sistema para cerrar de acero inoxidable (no incluye candado)
          Se entrega DESARMADO, medidas 227 (A) x 39 (A) x 132 (P) Cm. Fácil de armar
          </Desc>
          <Price>$497.000,00</Price>
          <AddContainer>
            <Button>CONSULTAR STOCK</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;