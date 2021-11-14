import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from '../Navbar';

import fs from 'fs'
import Personal from './Personal';

function Home(props) {

    return  (
        <Router>
        <div>
          <Link to="/" component={Navbar} >Navbar</Link>
        </div>
        
  
        <hr />
  
        <Routes>
          <Route exact path="/" component={Navbar}>
          </Route>
          
          
        </Routes>
      </Router>
        
            );
}

export default Home;