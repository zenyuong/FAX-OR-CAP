import React from "react";

// BOOTSTRAP IMPORTS 
import {Button, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// COMPONENT IMPORTS
import Banner from './banner'
import Search from './search'

const darkBg = {
  background : "#2F302F", 
  height : "100vh"
}


function Home() {
  return (
    <body style={darkBg}>
      <Banner />
      <Search />
    </body>
  )
}

export default Home;