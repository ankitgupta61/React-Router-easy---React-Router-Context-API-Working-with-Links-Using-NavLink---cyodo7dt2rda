import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Index } from './Pages/Index';
import {Home} from "./Pages/Home"
import {NotFound} from './Pages/NotFound';



export const AppRoutes = () => {
    return (
            <Routes>
                <Route path='/' element={<Index></Index>}></Route>
                <Route path='/home' element={<Home></Home>}></Route>
                <Route path='/*' element={<NotFound></NotFound>}></Route>
            </Routes>
    )
}