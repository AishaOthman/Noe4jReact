//import {QueryPayload} from 'shared_data';
//import container from "@mui/material/Container"
import ResultCard from "../../components/ResultCard";
import AppBar from '../../components/AppBar';
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid'

const Results = ()=>{
   return ( <div className='App'>
    <AppBar></AppBar>
   
    <Container sx={{marginY:5}}>
    <Typography  sx={{ padding:5}} component="h4" variant='h4'>Results:</Typography>
      <Grid container spacing={3}>
        <ResultCard/>
        <ResultCard/>
        <ResultCard/>
        <ResultCard/>
      </Grid>
    </Container>
  </div>)
}
export default Results;