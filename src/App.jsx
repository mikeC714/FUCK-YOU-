import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Nav} from "./components/pages/navigation/nav.jsx"
import {Profile} from "./components/pages/navigation/profile.jsx"
import {Dash} from './components/pages/navigation/dashBoard/dash.jsx'
import {Analytics} from './components/pages/navigation/analytics.jsx'
import {Applicants} from './components/pages/navigation/applicants.jsx'
import {NotFoundPage} from './components/pages/navigation/404Page.jsx'

export const App = () => (

    <BrowserRouter>
        <div className='app'>
            <main>
                <Routes>
                    <Route path='/profile' element= {<Profile />} />
                    <Route path="/" element={<>
                        <Nav /> 
                        <Dash />
                    </>} />  
                    <Route path="/applicants" element={<>
                        <Nav /> 
                        <Applicants />
                    </>} />
                    <Route path="/analytics" element={
                    <>
                        <Nav /> 
                        <Analytics />
                    </>} />


                    <Route path="*" element={<NotFoundPage />} />   {/* this is my 404*/}
                </Routes>
            </main>
        </div>
    </BrowserRouter>





)



