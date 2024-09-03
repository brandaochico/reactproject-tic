import { Header, Content, Footer } from './components';
import { Home } from './pages';

import './App.css';

function App(){

  return (
    <>
      <Header />
      <Content>
        <Home />
      </Content>
      <Footer creatorName="Chico"/>
    </>
  )
}

export { App };
