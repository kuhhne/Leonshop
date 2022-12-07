import styled from "styled-components";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from 'react'
const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option`
    font-size: 20px;    
`;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split('/')[2]
  const [filter, setFilters] = useState({})
  const [sort, setSort] = useState({})

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filter,
      [e.target.name]: value,
    })
  }
  return (
    <Container>
      <Navbar />
      <Title>Explora nuestro catalogo</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtrar Productos:</FilterText>
          <Select name='cat' onChange={handleFilters}>
            <Option>Todos</Option>
            <Option>Piletas</Option>
            <Option>Camping</Option>
            <Option>Inflables</Option>
            <Option>Depositos de Jardin</Option>
            <Option>Varios</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Ordenar:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option>Mas reciente</Option>
            <Option>Mas antiguo</Option>
            <Option>Precio (asc)</Option>
            <Option>Precio (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;