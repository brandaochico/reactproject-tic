import { Routes, Route } from 'react-router-dom';

import { Home, PageNotFound } from './pages';
import { AboutUs } from './pages';

import { Template } from './layouts';

const Router = () => { 
    return(
        <Routes>
            <Route path="/" element={<Template />}>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about-us" element={<AboutUs />} />
                <Route path="*" element={<PageNotFound />}/>
            </Route>
        </Routes>
    );
};

export { Router };