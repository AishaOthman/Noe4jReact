import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import '../App.css';
import Typography  from '@mui/material/Typography';
import  Box  from '@mui/material/Box';
import Link from '@mui/material/Link';


const ResultCard = ()=>{
    return (
        <Grid item  xs={12}>
            <Paper elevation={3}  sx={{ display: 'flex' }} >
                <img className="img" src="https://oatslady.com/wp-content/uploads/2023/03/Healthy-chocolate-chip-cookie-oat-cereal-quick-768x1152.jpeg"/>
                <Box paddingX={1}>
                <Typography component="h4" variant='subtitle1' margin={5} marginTop={5}>
                COOKIE CEREALS RECIPE (HEALTHY)
                </Typography>
                <Box
                sx={{
                    display:"flex",
                    alignItems:"center"
                  }}
                >
                        <Typography variant='body2' component="p" margin={5}>
                        This Cookie Cereals Recipe will bring you back to childhood. 
                        Made with oats, these chocolate chip cereals are a healthy 
                        alternative to the ones you buy. So quick and easy that you’ll
                         now make cookie crisps at home.
                        Crunchy, addictively delicious yet highly nutritious. These homemade oat 
                        cereals look and taste like cookies, but mini.
                        </Typography>
                        
                </Box>
                <Link href="https://oatslady.com/cookie-cereals-recipe/" margin={5}>More</Link>
                </Box>
                
             </Paper>
        </Grid>
       
    )
};

export default ResultCard;