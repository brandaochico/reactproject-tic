import { Routes, Route } from 'react-router-dom';

import { Home } from './pages';
import { AboutUs } from './pages';

import { Template } from './layouts';

const Router = () => { 
    return(
        <Routes>
            <Route path="/" element={<Template />}>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about-us" element={<AboutUs />} />
            </Route>
        </Routes>
    );
};

export { Router };