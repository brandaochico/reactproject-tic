import { Header, Content, Footer } from './components';

import './App.css';

function App(){

  return (
    <>
      <Header />
      <Content>
        <h1>Teste</h1>
        <p>Teste teste teste teste teste</p>
      </Content>
      <Footer creatorName="Chico"/>
    </>
  )
}

export { App };
