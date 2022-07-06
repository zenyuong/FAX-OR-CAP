import React from "react";

// BOOTSTRAP IMPORTS 
import {Button, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// COMPONENT IMPORTS
import Banner from './banner'
import Search from './search'



function Home() {
  return (
    <body>
      <Banner />
      <Search />
    </body>
  )
}

export default Home;