import { BrowserRouter } from 'react-router-dom';

import { Header, Content, Footer } from './components';
import { Home } from './pages';

import { Router } from './Router';

import './App.css';

function App(){

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export { App };
