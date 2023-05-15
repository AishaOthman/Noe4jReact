//import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import {QueryPayload} from 'shared_data';
import container from "@mui/material/Container"
import ResultCard from './components/ResultCard';
import AppBar from './components/AppBar';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid'


function App() {
  return (
    <div className='App'>
      <AppBar></AppBar>
      <Container sx={{marginY:5}}>
        <Grid container spacing={3}>
          <ResultCard/>
          <ResultCard/>
          <ResultCard/>
          <ResultCard/>
        </Grid>
      </Container>
    </div>
  );

  // async function getServerData(){
  //   const serverResponse = await fetch('http://localhost:3001');
  //   const result:QueryPayload = await serverResponse.json();
  //   console.log("************************")
  //   console.log("!",result.payload,"!");
  //   console.log("************************")
  // }
  // async function getNeo4jData(){
  //   const serverResponse = await fetch('http://localhost:3001/neo4j');
  //   const result:QueryPayload = await serverResponse.json();
  //   console.log("************************")
  //   console.log("!",result.payload,"!");
  //   console.log("************************")
    
  // }
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         LETS GET ROCKING!!
  //       </p>
  //       <button
  //         onClick={getServerData}
  //       >
  //         GET SOME DATA
  //       </button>
  //       <button
  //         onClick={getNeo4jData}
  //       >
  //         GET SOME DATA FROM NEO4J
  //       </button>
  //     </header>
  //   </div>
  // );
}

export default App;
