//import {QueryPayload} from 'shared_data';
//import container from "@mui/material/Container"
import ResultCard from "../../components/ResultCard";
//import AppBar from '../../components/AppBar';
import { AppBar, Box, Container, Link, Paper, Toolbar, Typography } from '@mui/material';
import Grid from '@mui/material/Grid'

const Results = ()=>{
   return ( <div className='App'>
    {/* <AppBar></AppBar> */}
    <AppBar position="static">
                 <Toolbar>
                      {/*'Add New Recipe', 'My Recipes', 'my Ingredients List','logout', */}
                     
                        <Typography  component="h5" >
                         Aisha Oth
                        </Typography>
        
                    <Box sx={{ marginLeft: 'auto' }}>
          
                        <Box sx={{ marginLeft: 2, display: 'inline' }} />
                        <Link color="inherit" href="/">logOut</Link>
                        <Box sx={{ marginLeft: 2, display: 'inline' }} />
                        <Link color="inherit" href="/">Add New Recipe</Link>
                        <Box sx={{ marginLeft: 2, display: 'inline' }} />
                        <Link color="inherit" href="/">My Recipes</Link>
                        <Box sx={{ marginLeft: 2, display: 'inline' }} />
                        <Link color="inherit" href="/">my Ingredients List</Link>
                        <Box sx={{ marginLeft: 2, display: 'inline' }} />
                    
                     </Box>
                    </Toolbar>
        </AppBar>
    <Container sx={{marginY:5}}>
        <Typography  sx={{ padding:5}} component="h4" variant='h4'>Results:</Typography>
        <Grid container spacing={2}>
            <Grid item  xs={12}>
             <Paper elevation={3}  sx={{ display: 'flex' }} >
                {/* <img className="img" src="https://oatslady.com/wp-content/uploads/2023/03/Healthy-chocolate-chip-cookie-oat-cereal-quick-768x1152.jpeg"/> */}
                <Box paddingX={1}>
                  <Typography component="h2" variant='h4' margin={2} marginTop={2}>
                  Spaghetti with olive oil and garlic sauce
                  </Typography>
                  <Box sx={{
                        display:"flex",
                        alignItems:"center"
                       }}>
                  
                        <Typography variant='body2' component="p" margin={1}>
                           Step 1
                          Finely chop the garlic and parsley. Bring a large saucepan of water to a boil. Add spaghetti and cook until al dente (8-10 mins). Drain well, return to saucepan and cover.
                          Step 2
                          In a medium frying pan over low heat, heat oil. Add garlic and cook gently 5-6 minutes. Do not let garlic brown.
                          Step 3
                          Remove from heat, add parsley and stir. Season with salt and pepper.
                          Step 4
                          Pour warm garlic-oil mixture over spaghetti and toss to coat. Serve.
                         </Typography>
                          
                  </Box>
                  <Link href="/RecipeDetails" margin={5}>More</Link>
                </Box>
                
              </Paper>
              
         </Grid>
         <Grid item  xs={12}>
             <Paper elevation={3}  sx={{ display: 'flex' }} >
                {/* <img className="img" src="https://oatslady.com/wp-content/uploads/2023/03/Healthy-chocolate-chip-cookie-oat-cereal-quick-768x1152.jpeg"/> */}
                <Box paddingX={1}>
                  <Typography component="h2" variant='h4' margin={2} marginTop={2}>
                  Simple And Satisfying Vegan Spaghetti With Garlic And Olive Oil
                  </Typography>
                  <Box sx={{
                        display:"flex",
                        alignItems:"center"
                       }}>
                  
                        <Typography variant='body2' component="p" margin={1}>
                        This vegan spaghetti with garlic and olive oil is so simple and satisfying. Pasta aglio olio is an Italian classic first course that everyone needs to try at least once in their lifetime. It’s so simple and yet so fulfilling and delicious. It brings together the main elements of Italian cuisine: simplicity, creativity and comfort. No one can resist this.
                         </Typography>
                          
                  </Box>
                  <Link href="https://www.livekindly.com/vegan-spaghetti-garlic-olive-oil/" margin={5}>More</Link>
                </Box>
                
              </Paper>
              
         </Grid>
         <Grid item  xs={12}>
             <Paper elevation={3}  sx={{ display: 'flex' }} >
                {/* <img className="img" src="https://oatslady.com/wp-content/uploads/2023/03/Healthy-chocolate-chip-cookie-oat-cereal-quick-768x1152.jpeg"/> */}
                <Box paddingX={1}>
                  <Typography component="h2" variant='h4' margin={2} marginTop={2}>
                  SPAGHETTI WITH OLIVE OIL, GARLIC AND CHILLI
                  </Typography>
                  <Box sx={{
                        display:"flex",
                        alignItems:"center"
                       }}>
                  
                        <Typography variant='body2' component="p" margin={1}>
                        This one is pure pasta eaten and savoured 
                        for its own sake with the minimum amount of adornment –
                         just a hint of garlic, chilli and olive oil.
                         Then, just heat the olive oil in a small frying pan and,
                          when it is hot, add the garlic, chilli and some freshly
                           milled black pepper. Cook these very gently for about 2 minutes, 
                         which will be enough time for the flavourings to infuse the oil. 
                         </Typography>
                          
                  </Box>
                  <Link href="https://www.deliaonline.com/recipes/type-of-dish/spicy-recipes/spaghetti-with-olive-oil-garlic-and-chilli" margin={5}>More</Link>
                </Box>
                
              </Paper>
              
         </Grid>
         <Grid item  xs={12}>
             <Paper elevation={3}  sx={{ display: 'flex' }} >
                {/* <img className="img" src="https://oatslady.com/wp-content/uploads/2023/03/Healthy-chocolate-chip-cookie-oat-cereal-quick-768x1152.jpeg"/> */}
                <Box paddingX={1}>
                  <Typography component="h2" variant='h4' margin={2} marginTop={2}>
                  SPAGHETTI AGLIO E OLIO (SPAGHETTI WITH GARLIC AND OLIVE OIL)
                  </Typography>
                  <Box sx={{
                        display:"flex",
                        alignItems:"center"
                       }}>
                  
                        <Typography variant='body2' component="p" margin={1}>
                        Spaghetti tossed in sauteed garlic, olive oil, red pepper flakes, 
                        and fresh parsley.
                         A quick and easy authentic pasta dish!
                         This is as easy as it gets. When you are too tired to even think about fixing dinner, this is what you whip up.  I have heard that many chefs during cooking school or after a long shift on the line, they come home and make Spaghetti Aglio e Olio.
                          It is a big bowl of comfort food that is so simple and quick to prepare.
                         </Typography>
                          
                  </Box>
                  <Link href="https://www.modernhoney.com/spaghetti-aglio-e-olio-spaghetti-with-garlic-olive-oil/" margin={5}>More</Link>
                </Box>
                
              </Paper>
              
         </Grid>
         <Grid item  xs={12}>
             <Paper elevation={3}  sx={{ display: 'flex' }} >
                {/* <img className="img" src="https://oatslady.com/wp-content/uploads/2023/03/Healthy-chocolate-chip-cookie-oat-cereal-quick-768x1152.jpeg"/> */}
                <Box paddingX={1}>
                  <Typography component="h2" variant='h4' margin={2} marginTop={2}>
                  Vegetable Spaghetti with Garlic Olive Oil
                  </Typography>
                  <Box sx={{
                        display:"flex",
                        alignItems:"center"
                       }}>
                  
                        <Typography variant='body2' component="p" margin={1}>
                        This flavorful Vegetable Spaghetti with Garlic Olive Oil makes the perfect meatless meal any night of the week! It’s a delicious, healthy and beautiful dish. 
                        This simple to prepare spaghetti recipe is packed with chunky colorful vegetables that makes the perfect meatless dinner idea or side dish to your favorite chicken or beef dinner recipes.
                         </Typography>
                          
                  </Box>
                  <Link href="https://picky-palate.com/vegetable-party-spaghetti-with-warm-garlic-thyme-olive-oil/" margin={5}>More</Link>
                </Box>
                
              </Paper>
              
         </Grid>
         <Grid item  xs={12}>
             <Paper elevation={3}  sx={{ display: 'flex' }} >
                {/* <img className="img" src="https://oatslady.com/wp-content/uploads/2023/03/Healthy-chocolate-chip-cookie-oat-cereal-quick-768x1152.jpeg"/> */}
                <Box paddingX={1}>
                  <Typography component="h2" variant='h4' margin={2} marginTop={2}>
                  Spaghetti with garlic, pangrattato and olive oil
                  </Typography>
                  <Box sx={{
                        display:"flex",
                        alignItems:"center"
                       }}>
                  
                        <Typography variant='body2' component="p" margin={1}>
                        "Pangrattato" is basically Italian for breadcrumbs - so much more romantic! Good bread makes good crumbs, so I recommend using sourdough that's a day or two old.
                         </Typography>
                          
                  </Box>
                  <Link href="https://www.smh.com.au/goodfood/recipes/spaghetti-with-garlic-pangrattato-and-olive-oil-20130909-2tfl8.html" margin={5}>More</Link>
                </Box>
                
              </Paper>
              
         </Grid>
         <Grid item  xs={12}>
             <Paper elevation={3}  sx={{ display: 'flex' }} >
                {/* <img className="img" src="https://oatslady.com/wp-content/uploads/2023/03/Healthy-chocolate-chip-cookie-oat-cereal-quick-768x1152.jpeg"/> */}
                <Box paddingX={1}>
                  <Typography component="h2" variant='h4' margin={2} marginTop={2}>
                  30-minute Spaghetti with Garlic and Olive Oil
                  </Typography>
                  <Box sx={{
                        display:"flex",
                        alignItems:"center"
                       }}>
                  
                        <Typography variant='body2' component="p" margin={1}>
                        Known as Aglio e Olio, this is one of the most classic and comforting of pasta dishes.  It’s quick and easy to prepare, yet has a delectable  flavor everyone will love.  Perfect for busy weeknights.  Works great next to your favorite veggies, protein, or all by itself.
                         </Typography>
                          
                  </Box>
                  <Link href="https://www.chewoutloud.com/30-minute-spaghetti-garlic-olive-oil/" margin={5}>More</Link>
                </Box>
                
              </Paper>
              
         </Grid>
         <Grid item  xs={12}>
             <Paper elevation={3}  sx={{ display: 'flex' }} >
                {/* <img className="img" src="https://oatslady.com/wp-content/uploads/2023/03/Healthy-chocolate-chip-cookie-oat-cereal-quick-768x1152.jpeg"/> */}
                <Box paddingX={1}>
                  <Typography component="h2" variant='h4' margin={2} marginTop={2}>
                  Vegetarian Spaghetti w/Olive Oil and Garlic
                  </Typography>
                  <Box sx={{
                        display:"flex",
                        alignItems:"center"
                       }}>
                  
                        <Typography variant='body2' component="p" margin={1}>
                        Bring a large pot of cold water to a boil over high heat, then salt it generously.
Add the pasta and cook, stirring occasionally until al dente, tender but not mushy, about 8 minutes.
While the pasta cooks, combine the garlic, olive oil, the 1 teaspoon salt, and red pepper flakes in a large skillet and warm over low heat, stirring occasionally, until the garlic softens and turns golden, about 8 minutes.
Drain the pasta in a colander set in the sink, reserving about a 1/4 cup of the cooking water.
Add the pasta and the reserved water to the garlic mixture. Mix well.
Add the parsley and lemon zest (if using). Adjust seasoning, to taste.
Transfer to a large serving bowl or divide amongst 4 to 6 dishes.
Serve topped with grated cheese, if desired.
                         </Typography>
                          
                  </Box>
                  <Link href="https://oliviaevoo.com/vegetarian-spaghetti-w-olive-oil-and-garlic/" margin={5}>More</Link>
                </Box>
                
              </Paper>
              
         </Grid>
         <Grid item  xs={12}>
             <Paper elevation={3}  sx={{ display: 'flex' }} >
                {/* <img className="img" src="https://oatslady.com/wp-content/uploads/2023/03/Healthy-chocolate-chip-cookie-oat-cereal-quick-768x1152.jpeg"/> */}
                <Box paddingX={1}>
                  <Typography component="h2" variant='h4' margin={2} marginTop={2}>
                  Border Grill's Spaghetti with Garlic and Olive Oil
                  </Typography>
                  <Box sx={{
                        display:"flex",
                        alignItems:"center"
                       }}>
                  
                        <Typography variant='body2' component="p" margin={1}>
                        1/2 cup extra-virgin olive oil
12 cloves garlic, thinly sliced
1/2 teaspoon red chile flakes
1/2 teaspoon salt
1/2 lemon
1 bunch fresh Italian parsley, chopped
1 pound spaghetti
garlicky breadcrumbs
                         </Typography>
                          
                  </Box>
                  <Link href="https://www.cdkitchen.com/recipes/recs/511/Border_Grill_Spaghetti_with_Garlic_and_Olive_Oil35110.shtml" margin={5}>More</Link>
                </Box>
                
              </Paper>
              
         </Grid>
         <Grid item  xs={12}>
             <Paper elevation={3}  sx={{ display: 'flex' }} >
                {/* <img className="img" src="https://oatslady.com/wp-content/uploads/2023/03/Healthy-chocolate-chip-cookie-oat-cereal-quick-768x1152.jpeg"/> */}
                <Box paddingX={1}>
                  <Typography component="h2" variant='h4' margin={2} marginTop={2}>
                  Spaghetti with Ricotta, Zucchini, Garlic, and Olive Oil
                  </Typography>
                  <Box sx={{
                        display:"flex",
                        alignItems:"center"
                       }}>
                  
                        <Typography variant='body2' component="p" margin={1}>
                        This dish is great with grilled shrimp or chicken. Simply add it to pan with the pasta to ensure that it gets heated through. Fresh peas and asparagus also work well with this recipe.
                         </Typography>
                          
                  </Box>
                  <Link href="https://galbanicheese.com/recipes/spaghetti-with-ricotta-zucchini-garlic-and-olive-oil" margin={5}>More</Link>
                </Box>
                
              </Paper>
              
         </Grid>
         <Grid item  xs={12}>
             <Paper elevation={3}  sx={{ display: 'flex' }} >
                {/* <img className="img" src="https://oatslady.com/wp-content/uploads/2023/03/Healthy-chocolate-chip-cookie-oat-cereal-quick-768x1152.jpeg"/> */}
                <Box paddingX={1}>
                  <Typography component="h2" variant='h4' margin={2} marginTop={2}>
                  paghetti with Garlic, Olive Oil and Red Pepper Flakes
                  </Typography>
                  <Box sx={{
                        display:"flex",
                        alignItems:"center"
                       }}>
                  
                        <Typography variant='body2' component="p" margin={1}>
                        Bellissimo! When in need of a delicious Italian recipe, 
                        turn to Giada! Had a tooth extracted today,
                         had to eat soft food, so I needed an idea 
                         of what I could make using gnocchi. I use
                         d this recipe with gnocchi instead of spag
                         hetti and it came out great! Because I did
                         n't want to irritate the wound, I went easy
                          on the red pepper flakes. Also, had to use
                           what I had on hand, so no mint. I did hav
                            fresh oregano and basil, though! I'd make
                            this again in a heartbeat! Fast, too.
                         </Typography>
                          
                  </Box>
                  <Link href="https://www.foodnetwork.com/recipes/giada-de-laurentiis/spaghetti-with-garlic-olive-oil-and-red-pepper-flakes-recipe-1914199" margin={5}>More</Link>
                </Box>
                
              </Paper>
              
         </Grid>
         <Grid item  xs={12}>
             <Paper elevation={3}  sx={{ display: 'flex' }} >
                {/* <img className="img" src="https://oatslady.com/wp-content/uploads/2023/03/Healthy-chocolate-chip-cookie-oat-cereal-quick-768x1152.jpeg"/> */}
                <Box paddingX={1}>
                  <Typography component="h2" variant='h4' margin={2} marginTop={2}>
                  Delfina’s Spaghetti with Plum Tomatoes, Garlic & Chili Flakes
                  </Typography>
                  <Box sx={{
                        display:"flex",
                        alignItems:"center"
                       }}>
                  
                        <Typography variant='body2' component="p" margin={1}>
                        This is a fantastic spaghetti recipe that was on the menu of Michelin-starred Da Delfina restaurant in Tuscany. This is a light dish, which is also vegetarian-friendlt and simply a must-try recipe!
                         </Typography>
                          
                  </Box>
                  <Link href="https://www.chefspencil.com/delfinas-spaghetti-plum-tomatoes-garlic-chili-flake-extra-virgin-olive-oil/" margin={5}>More</Link>
                </Box>
                
              </Paper>
              
         </Grid>
         <Grid item  xs={12}>
             <Paper elevation={3}  sx={{ display: 'flex' }} >
                {/* <img className="img" src="https://oatslady.com/wp-content/uploads/2023/03/Healthy-chocolate-chip-cookie-oat-cereal-quick-768x1152.jpeg"/> */}
                <Box paddingX={1}>
                  <Typography component="h2" variant='h4' margin={2} marginTop={2}>
                  SPAGHETTI WITH GARLIC OLIVE OIL ZUCCHINI
                  </Typography>
                  <Box sx={{
                        display:"flex",
                        alignItems:"center"
                       }}>
                  
                        <Typography variant='body2' component="p" margin={1}>
                        Spaghetti with garlic olive oil zucchini is a one meal dish loved by all age groups. I always try spaghetti with different veggies. It is an easy and quick recipe.
                         </Typography>
                          
                  </Box>
                  <Link href="https://www.betterbutter.in/recipe/22249/spaghetti-with-garlic-olive-oil-zucchini/" margin={5}>More</Link>
                </Box>
                
              </Paper>
              
         </Grid>

      </Grid>
    </Container>
  </div>)
}
export default Results;