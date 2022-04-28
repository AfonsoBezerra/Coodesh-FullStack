import React, {useState} from 'react';
import styled from 'styled-components';
import ContentArticles from '../components/ContentArticles';

import Header from '../components/Header';
import { theme } from '../styles/global';

const Container = styled.section`
  background-color: ${theme.colors.backgroundPrimary}; 
  min-height: 100vh; 
`

const Home = () => {

  const [ searchHeader, setSearchHeader ] = useState('');
  const [ orderListArticles, setOrderListArticles ] = useState('');

  return (
    <Container> 
      <Header openSearch={setSearchHeader} sendListOrderArticles={setOrderListArticles} />

      <ContentArticles sendSearch={searchHeader} sendListOrder={orderListArticles} />
    </Container>
  )
}

export default Home;