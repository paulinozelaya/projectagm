import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router";
import { Nabvar } from "./navbar/Nabvar";
import { Image } from "./pages/Image";
import { Home } from "./pages/Home";
import { Music } from "./pages/Music";
import { Video } from "./pages/Video";
import './App.css';

const App = () => {
    const { isAuthenticated,isLoading} = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }
      
    return (
        isAuthenticated && (
            <div>
                <Router>
                    <Nabvar/>
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route path="/Image" element ={<Image/>}/>
                        <Route path="/Music" element ={<Music/>}/>
                        <Route path="/Video" element ={<Video/>}/>
                    </Routes>
                </Router>
            </div>
           
          )
    );
};

export default withAuthenticationRequired(App);