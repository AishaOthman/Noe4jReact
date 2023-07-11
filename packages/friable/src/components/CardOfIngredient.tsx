import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import '../App.css';
import Typography  from '@mui/material/Typography';
import  Box  from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material';

const CardOfIngredient = () => {
  return (
    <Grid xs={12}>
            <Paper elevation={3}  sx={{ display: 'inline' }} >
               
                <Box paddingX={1}>
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                </FormGroup>
                
                            <Box
                            sx={{
                                display:"flex",
                                alignItems:"center"
                            }}
                            >
                              <Button variant="contained">Remov</Button>  
                            </Box>
               
                </Box>
                
             </Paper>
             <Button variant="contained" >ClearChecklist</Button> 
        </Grid>
  )
}

export default CardOfIngredient