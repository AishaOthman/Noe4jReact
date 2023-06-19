// import React, { useState } from 'react';

// import { Typography, TextField, List, ListItem, ListItemText, Paper }  from '@mui/material';

// interface RecipeDetailsProps {
//   recipe: IRecipe;
// }

// const RecipeDetails: React.FC<RecipeDetailsProps> = ({ recipe }) => {
//   const [ingredients, setIngredients] = useState<IIngredient[]>(recipe.ingredients);
//   const [instructions, setInstructions] = useState<string[]>(recipe.instructions);

//   const handleIngredientChange = (index: number, field: keyof IIngredient, value: string) => {
//     const updatedIngredients = [...ingredients];
//     updatedIngredients[index][field] = value;
//     setIngredients(updatedIngredients);
//   };

//   const handleInstructionChange = (index: number, value: string) => {
//     const updatedInstructions = [...instructions];
//     updatedInstructions[index] = value;
//     setInstructions(updatedInstructions);
//   };

//   return (
//     <div>
//       {/* <div>
//         <img src={recipe.image} alt="Recipe" />
//       </div> */}
//       <div>
//         <Typography variant="h2">{recipe.recipeName}</Typography>
//         <Typography variant="body1">Author: {recipe.authorName}</Typography>
//         <Typography variant="body1">Prep Time: {recipe.prepTime} minutes</Typography>
//         <Typography variant="body1">Cook Time: {recipe.cookTime} minutes</Typography>
//         <Typography variant="body1">Category: {recipe.category}</Typography>
//         <Typography variant="body1">Diet Type: {recipe.dietType}</Typography>
//         <Typography variant="body1">Ratings: {recipe.ratings}</Typography>
//         <Typography variant="body1">Skill Level: {recipe.skilLevel}</Typography>
//         <Typography variant="body1">Dish Type: {recipe.dishType}</Typography>
//         <Typography variant="body1">Serves: {recipe.serves}</Typography>
//       </div>
//       <div>
//         <Typography variant="h5">Ingredients</Typography>
//         <List component={Paper}>
//           {ingredients.map((ingredient, index) => (
//             <ListItem key={index}>
//               <ListItemText>
//                 <TextField
//                   label="Ingredient Name"
//                   value={ingredient.name}
//                   onChange={(e) => handleIngredientChange(index, 'name', e.target.value)}
//                 />
//               </ListItemText>
//               <ListItemText>
//                 <TextField
//                   label="Amount"
//                   value={ingredient.amount}
//                   onChange={(e) => handleIngredientChange(index, 'amount', e.target.value)}
//                 />
//               </ListItemText>
//             </ListItem>
//           ))}
//         </List>
//       </div>
//       <div>
//         <Typography variant="h5">Instructions</Typography>
//         <List component={Paper}>
//           {instructions.map((instruction, index) => (
//             <ListItem key={index}>
//               <ListItemText>
//                 <Typography variant="body1">{index + 1}. {instruction}</Typography>
//               </ListItemText>
//               <TextField
//                 label="Instruction"
//                 multiline
//                 value={instruction}
//                 onChange={(e) => handleInstructionChange(index, e.target.value)}
//               />
//             </ListItem>
//           ))}
//         </List>
//       </div>
//     </div>
//   );
// };

// export default RecipeDetails;
import React, { useState } from 'react';
import { Typography,Button,FormControlLabel,Checkbox, TextField, List, ListItem, ListItemText, Paper }  from '@mui/material';
import { IRecipe, IIngredient }from 'shared_data';
import { makeStyles } from '@material-ui/core/styles';

interface RecipeDetailsProps {
  recipe: IRecipe;
}

const useStyles = makeStyles((theme) => ({
  container: {
    //display: 'flex',
   alignItems: 'center',
    marginBottom: theme.spacing(3),
    marginLeft:theme.spacing(3),
  },
  details:{
    display: 'flex',
    marginRight: theme.spacing(20),
    marginLeft:theme.spacing(10),
      marginBottom: theme.spacing(3),
  },
  image: {
    //width: '50%',
    marginRight: theme.spacing(3),
  },
  cookMode:{

  },
  ingredientsContainer: {
    width: '50%',
    marginBottom: theme.spacing(3),
  },
  instructionItem: {
    display: 'flex',
    marginBottom: theme.spacing(2),
  },
}));

const RecipeDetails: React.FC<RecipeDetailsProps> = ({ recipe }) => {
  const classes = useStyles();
  const [ingredients, setIngredients] = useState<IIngredient[]>(recipe.ingredients);
  const [instructions, setInstructions] = useState<string[]>(recipe.instructions);
  const [checklist, setChecklist] = useState<IIngredient[]>([]);
  const [cookMode, setCookMode] = useState<boolean>(false);
  const handleAddToChecklist = () => {
    setChecklist(ingredients);
  };
  const handleCookModeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCookMode(event.target.checked);
  };

  return (
    <div className={classes.container}>
      
    <div >
    <div>
        <Typography variant="h4">{recipe.recipeName}</Typography>
        <br/>
        <Typography variant="subtitle1">Author: {recipe.authorName}</Typography>
        <div className={classes.details}>
        
        <Typography variant="subtitle1">Prep Time: {recipe.prepTime} minutes</Typography>
        <Typography variant="subtitle1">Cook Time: {recipe.cookTime} minutes</Typography>
        <Typography variant="subtitle1">Category: {recipe.category}</Typography>
        <Typography variant="subtitle1">Diet Type: {recipe.dietType}</Typography>
        <Typography variant="subtitle1">Ratings: {recipe.ratings}</Typography>
        <Typography variant="subtitle1">Skill Level: {recipe.skilLevel}</Typography>
        <Typography variant="subtitle1">Dish Type: {recipe.dishType}</Typography>
        <Typography variant="subtitle1">Serves: {recipe.serves}</Typography>
     
        </div>
         </div>
      <div>
        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIkAiQMBEQACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAACAAEEBQYDB//EADoQAAEDAwIFAQUGBQMFAAAAAAECAwQABRESIQYTMUFRYRQicYGRFSMyQqHBM1Kx0eEWJPAHU3Ky8f/EABsBAQACAwEBAAAAAAAAAAAAAAABBAIDBQYH/8QAMhEAAgIBAwEGBAYCAwEAAAAAAAECAxEEEiExEyJBUWHwBXGh0YGRscHh8RQyIzNCUv/aAAwDAQACEQMRAD8A9aTisjEfagFgUJHAFAPgUAsCgGIFALSKAfSKAWBQC0CgHwBQCxQC0A0A4SKAfFACoDFAc8CgBTQgLFAKgCAoSLFAPigHAoBYoBYoBYNAPigFigFigFQCoBCgGVQA4oAU0IC7UA4FAPihI4FAPQC2HWoyDkt5pH43EisXZFdWZqEn0RWXXiCHbg2CpLinM6MLA3xVa3WRguFk022dnw+pEsN3XOkI9omtELScNpwNx5/52rVp9RKc8TZpos7RZbNLXQyWRVIFQCxQDYoBYxQAmgFihBzAoAgKAehI9AP2oCjv/E0OzsKUs619kjqTVO3VRi9seWWI08bp8I81v/8A1Ausia5Ct8eQteoN4itlwpV4GB/atEe1uW6UsIyV1UOiBh8NXifcuReLxJYUU6s47DrsrySMeMb1pfZf6uP5mmer77gmWF44KnN2RKG5rzzjal8s8oLXpJzjAI+lZJJYyjk6mq2yanJZ9CBw5ZbnapCEP85UnUpallJHuYGNj+H81TOScltWCna5RsSri15lzN4yuvD76ZMpAkWp1Wnmg7tKz0UfB8/LxnOE7f8Aw8vyf7HY0msjdHbNc/qbaxcSwLywhbDiQoj8OasU6qNj2vh+RclU8Zjyi6FW8mkegFQDGgBNANQHMGhAQIoSODQD5A3PjNGDK8UcReyIUxFwtwpJCQrBVjsPU7AfGudqNRKb7OBYwqIb5dfAzts4VuN8uKpEyYhttpWNaUZUkke8nrhRGevQeprCqhSTX5mrtJTeZmsh8IMWS2IZt0pzUg6ip7BDhzvqx581ts0sXymaeyWeDH36ebnNTCjMSXrlb3tYS2QlTZA6KJ2KTkeh2qmu0U3Ga49TTb3MN9SHBvXEMu/e0zXnW40D3zCU3pU5qCgBjO+NznpsKiU1XHl5l8/2MoN2pKPU6cV8XPPMe0W+O4EFIakLUgpKUk4BGR5/rUxt7WeOjwYavSajY5OLSx7+R1j3GPauGZUfiePhIa1JirSCpaSOw9duprOtvdsfj0KmjpkoutroZ+S7abfZY984b9qYVIcSluKCSkqzgjG+DnI26kipnV2k3CfVePiXqLrYW7c5+f3PRODuKVTW2o1wQpp8pBGoYz/nyK26bUtS7Obz6nQnGFq3Vmyz4ORXSKwqAVACaAagOVAOKAIUyCqv89EWOpGvTtlR8Cqeqt2rBa09e55MR/pjiOXcW72w3HQWUkMMvOYUQcZUoaSATjpkY8iq9VE1H5kX2qUsLojcWd9Ue3Rw40WV6MuNq6pV3B+eatwW2KRoxkmrlpeTo1gfOpcl5kqLPPOI7KmTxNMuEhspiLZbShbTqkrWsbEYSR2xv6VztXdFSWGbadFLUW4a7qCiRY8m0sybcAHwjUWS4VqyPy+8c9e+3nvVJweWpHagoQawuF0LtiKy9AHNZaUXEjVp3GdvrWtx28oWNz7r6GB4rZVxVO1RHgRDc+8OCoKIOCjA3PTp8KuR1XZ43rmSPNx0llWosnL/AF6Z+TLOTCiXHhlUVDSo8hLqUuO6QkNrSrO3fqB1FVXqI6dLCy3n8jfpa4aq2U+mCkjSmrZcfsaTOdEpp9Lok6iAcp6FONx9MHHat6/5ae2UcJ/Tkymv8e3jnB65wxdDcIel73X29lD1H/M109HqO1jiXVC2MWlOPRl1mrqNA2dqkDGgFQHOgHFAJawhJUTsATUSeFklLLwYX7RRcuOI1vdOW20rfUnspScYH1UD8q5lf/Nc5PojpWR7KjC6s3rkyPGYLry0ttpxlSjgDtvV9ySWWcuUlFZfQw3H19XCgxp1lejPJdlIjvJUdQAXsCMHrnFVrXGUW0/B9DPT2QtfcafODlamJwlkznESmNJCm0DCUnGSo5O47Y2361yq1ubzn36HalWlFYOvFMN77LacgMKUtDmtfLUlJQkjJz/88Vst00ZRXmiaNS4z58QbHckTIbMmMA4HBgOKSMuIyevrnf8AaqylODcJdffUsTjCxbk+Ca9PSCENOAhJOpOnISBjPr3rKSyzFV//AEZ+THfdlOTeH2mnZCBh37wpT33wOqqwqmlJLrgq/E6ZypxHhsn2O2z2o7QuAwrH3uVDOo47Cq9/FneXQo06WcYtJ9Tk9wa0i/i5KcbdjKPOcDqElYWkBKdJGPdA7E9fNXYWqulR8P2b54NlkN0WvH+CVBdNsvzCA4Ve0NlSs4GSD2A2A3rZRa43KXmV9NiUZQZuQoKAUOhGRXfXPJpawLNSQLNANQA0A2aAiXR7lQXFen+f2rRqJba2b9PDdakeO29mU7xTAusZ9SV6yVlSdihWc4+W3xxXM0921OJ63V/DKpR7RS6Lobni68Kh251iU39xIbLaXvy/PwR1wetbbbbWtsY5PHayFcVskniXHHr9jD2y7MqsU5CY5lMLOE5TjSoAjUPHfHetXfT29GcuNM/h01mXEn+hfW7ikswORcOaw3KwGJbnvNe9/Ng+6dzvt+taq4yacUerlbDdFvqaR5tU159nncpuSo6glGS4kJHQgggbfGsoWqTfkJR2xTXVGGudyTwxe1xGpSfZnHCpqOkfwwNt/wDywoYHitPZu/Morp4+f9G+u5Rmozxh+BNt853iuTORIL8S2x2S4Q2DzFHO2SPTOw/Xet0qVFZzz9ODTPVOLUY/z7+5ZcN2t6JMlMx32mYfLGHFbLCv8Aj5iubOCuakpYkvEuWNRim45NJAKW23W3EGQsK089z8KiOhz6f1zWuuUIOW6OW/H+StanJpp4XkDc3XlWpTpRghJ0pQNSl+noPWsZSdlce0wvLz/oiMUptRfv7lRcHHILIfZAdUvQhKRkhOrYHI6j6CrlakuIrw/I4s6lVauXnxNpbnQ7DQoEHGRXo9PNTrTRNuN3BINbjWDQCzQA0AjQFXxCSLY7j+VX/qaqa3/qZc0P8A3L34nnF7cagNxZTQ2SUgBKk/hATnbGT8c1xdL3k/mew00pScovyz7/AsbZLj3CE7EcQ5MtjzY56nNw2D+E7/ALdKtNSXT+ivqaYySnwpPpj/ANL3+ZmJ0NqPe7dbIsZyJHjPYdXzdQfGCdfnJ27YHyqXP/jlZLn7nl9doMWq6fKa4+X3Le2RYd+4fnR7o6tuQmUoBxOUlaRjRnHXqKwnPsEnHrw14mFMVZbGOOPH+yYz9o8NQcmal9lgHkofa1A7E4CxgjPw7Vobbswlh/T8v5OzCVdte6DyvrwYULk3y4PmcXmZCMrQ37xKFHOSSE4SMA104whTDudH9ShBOcmmsNdPT1JK5DcaOm3W2SZEqQRrfbUQlZ6hPQE7jOD6DOK0d+eZTWIrwLsa6o428y/Q3PD8S4x7TFjNhbrxWTIBI1acHJ39cVyZS32ScPftFu1xSW99F1NNZTMctoau8NEQIQBytSVjHTOxxWcIRi5KcsxX7/Y51kk2pV9WGoQkfcMywSnIVyzqWkdht02rTbTp4OMVLrn38vqSp2SzJxMXLua27i3CjRZEKG3KShWlQGxHRZzncnceuc1dqp62J8HB+Ia7dY6fFenX8TfcN8wW4B/+ICNQz0OkHFdnRLFWDfOKikovPBa1bNY1AKgBzQAk0BBuqA7EUg9CdJ+YI/etGpjmssaZ4sR4jxAq4IaLDwUoJOgaSSMZ/FjscVydMq08Jnutrjp90Y5lLCePBeJK4eWuNIhx7fJWtt9QQ40tRQWjjdQ7EddqsNKcvUp6yT0ellKUE4x6e/1NPxM42lhlx+OpUnmhDkhjCfu9vxevTJrGSi3hnzW3U6m6rspS8fw9PxC4NtMlmM7MnKymUdbCl4UrGDg+nX9KpX7W00sYO9oNDZQ3veU+qIXE1wk2ibGjPI9pZWrWV5/hgbBRT2I6/Wti3Xrc3yunqdTS6evSpqCbjLr6fwRL6+lptMu3RgHG4+HZIOCpR/Lq657/ADrXU+0e2T4b6F+cVXmWOUafhS0srtzKHoTD6WmvffIGVuH3jg9dqiDlZKTx3clW+XZ4We8S3J8Vp9Tjb6o7jSSnU8kkAK6jHfoN6rucekcm3sZSXeWV6HCTxPDjSorUmS3IakKIw2jVqTtpyD5rbVQ5T3RfC6/Y5evuWlgt0cNlxhmHfFvIho0rjpQVoSAQQVHGMdNxvVm5LenjK8itG7HcbMTxGi6OcUOuuR/ZEygluOrIVnAwVg9l4+mB1rNvbXuxz1+xTnVC/Uxil+J6NZmkR4pbbSlKAshIHgYH7V1NNHbA33vMyyBqwaRUAqACgAUaAjyUF1hbYOCobH17VhZHdFozhLbJM8ru9vkMTn0uIKmVKK2Hgfwg76VfA5GfSuJZVjlI9x8P1ycUmZiYwtElsoyHELzlPXP962VyW1o6Wogp4s8PFe/fJFukmYJHtSHS6lDiS8xzT7+CN1J7pPQnyatUwU62nweX+MVU6OcFVFYXP1NLJ48hvJbSpT0JKGtPLS1qIVnt2xv/AIqotHaouO1P1yc2Vtc7o2dq1Fc7cePzBuXEL15lJet0HmtiOpt0KSVnSemMb9+uKzj8OnCLcs+GMFzVX2UVKVMd6fvwHtrpj8JrYchHnodKit0ELLYIwUp7fHx8q02pdvx1f0Kj1tipUurSfHy8zQ8P8TtKtrjRacQqIgEJbVjmnO56jfrt03rCUexio8LJW0GulrJPeu8iHcUMXCMia+tSoTbahhLmoHYfl/OR0xvVStWRk1Fc+/od92xjFufHiBbrdFKXr1xMy9GLWPZ4qzo0oHRRA7k9RXWrgqobFz5+p5L4jqFfY5zXC6I7XuXPTJt9zkMOr9qUQ1CStQKG8HBJG+TnP0rNYT5OXqFOTUp+XT+gbMHblxC3NfjKZREZUQyXFOEqyO6txnYVhb3mopF/4PscpzXhheP7npkNssx22idSkpAUrye5+tdSEdscFqct0myUDWRiPmgFQAk7UACqA5KoSZTiu3OPITIhp/3bK+dHx+Y9VtnznGcdzmqGprw8o7fwnVRjLs7P9Xx8vJnlU9T8yRy7ew4XHVZDaeqPO/Yeta9NXvl0PQ/E7nVp1Bc7uPf4EWIxMHtryYEp95aeU3yElSU4UCoKI+HaugqlGvB5rVzs1E5zkuuMY8vfUj3WPPnLRm3So7TCA22240r4nfG5Jyc1NdbWTl1aSxZbRXx33YK0kFSe+nfI+XatkZuLLlGos0zxnjyLN6a9LUqQw4pDqkkJKVY0p/l9R8amyuNnVFy6iOshvhjLXtEnhfiC6RJy4bFuTcHJeEKZCfeVj6gDztjzXO1OkhZht4x7+f1OTpX/AIUmlHqemX+VJs0CDPk2mOGGHkrdjJcC3BnO6Nuo6k+BXOopau73H7/Ms67VxlViL5fn+hU3S7TuKbmz9hxUyWuQMpeZSeVuepIOk/2q/wBWebsnO6zhHK7clEmOviBUxsMu6AhsZKzjGrKcHHXpvVeG5N46mjdJWd58pM0fBNpMZovPTVzVLVzFPKJORk6E77nAOT64q3RHfLtGjv1bK6Vs6y5Zs0mrpidUmhAQoBZoBjQAGgOS6EkGYgONqSrOPIO4PYj1qJRUlhkxe15RgeKuHpE8SXrM97PcXEkvtA6UykjukjofI9arxm6MprhnT/yZ217M9Dz/AP1Dd4ENFuZU2y217ukNAKSe+T5qyp5isdDXK6yvCRxXfr1LdUw5O0+igMHHrisk5ZIhqL5z2ZSZyntvSIDUkuLdKfdcydwvuMY8VnKPdTMr4OdKknz4nNnkxJTSW3wULSFLUsaQk+vrRNQfBlTbHTWLa8xayarhqVco9+jvcOMiSp/KVtlOykDcknHujoa06ytSgp9Dd8VrTrjqI+J6hDtz7xVdbk4iQ+jKUQwfu2/Azj8Xr8q5UIrG58s85jdmyTyyKviiSbmiFFgsJQhwJdIc0q09zggDA85+VZ9sn6FSOtcp7UksFXLfF5uMq3x3ZC2ArLymikcv0B6g+me31wVU5vhCEbpWN7eM+ODZwmkMsIabzpSMDJya6kYqKwjqJJLCJqKyB0SaALNALNAEaABVAcVUJIj42NAUc9GVDqMHIIOCCO4PmolFSWGZRk4vKM7xDYrfemyqaFR5QxiayjIOP+4n9x+lVttlX+vQtxtU1tZkbnwBMi2xc9U9p1tJPvsoKw4NsaQn+npWP+Vz3o8fM0WxnvwufkUCokyEVP63VNNjCnFA6VA9AM9T1+H61Yrvi8NMmN7g13n8gZWJCnp4ZLbegJUMDBWe4G+B06VnbJOSSNtzUpucU8Y8S14MdCZamHJioZcbIKy7yiAN+p237D0NVdU3KCSfRlPVxnZptnPBvIsllfD64zDy2XEleh54EJdO5Ckq6KHfaqO3GODkrS2dlFYwmzKwrc5Jk6ftJ6UFH7xwjSlfolPj4/SrkKXN5cdq9+J1o6ail9xZZ6PYobUSOlphsIQOwq5GKisIlyb6miZGwqSCSnpQBihA9APmgHJoATQHNVAcHU5oSVc1nIO1AUzgKFmpBHI5S1Ox1rYdO5W0op1fHsfnWuVcZdTOM5R6EC5XCUGv9xHhTUjtJjAn6pxWl6WHgble+uDPOcURbe9zW+FrUHk9HEoIIrF6bKw3x79SVqcPOPf5EOX/ANSLwtJRDjQ4Y8ttAn9amOmgiJamTKppy432b7RPfcfWTuVn9PhW+MFHoaZTcup6Bw/buUhO1ZowNnCbwBUgs2hioB3FAEDQgfNALNAPmgFQAkUByWM0JIzzWoUBVyYec4FSCrejLSTttQFdJb1pKSn9KEmcu1mW/nQg71AZTx+FJDjoKknTmoGDYWXh8R0j3N6kM1kKEGwBipILZpGKgElIoDomhA9APmgFmgDoBUA1CQSKA5qTQg4raz2oSR1xQfy1II6oKD+WgF9ntn8lQAkwGx+QUB1TGSnoKkHZLIHQUB2SmoIDSKAICgHoBUAqA6dqAagF2oSI0IANAAaEgGgAoBxQD0AqAegDFCAhQD0AqAXagGoD/9k=" alt="Recipe" className={classes.image} />
      </div>
    </div>
    <div className={classes.ingredientsContainer}>
        <Typography variant="h5">Ingredients</Typography>
        <List component={Paper}>
          {recipe.ingredients.map((ingredient, index) => (
            <ListItem key={index}>
              <ListItemText>
                <Typography>{ingredient.name+" :"}</Typography>
              </ListItemText>
              <ListItemText>
                <Typography>{ingredient.amount}</Typography>
              </ListItemText>
            </ListItem>
          ))}
        </List>
        <Button color="primary" onClick={handleAddToChecklist}>
          Add ingredients to checklist
        </Button>
      </div>
     
      <div>
        <Typography variant="h5">Instructions</Typography>
        <List component={Paper}>
          {recipe.instructions.map((instruction, index) => (
            <ListItem key={index}>
              <ListItemText>
                <Typography>{index + 1}. {instruction}</Typography>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </div>
      <div className={classes.cookMode}>
        <FormControlLabel
          control={<Checkbox checked={cookMode} onChange={handleCookModeChange} color="primary" />}
          label="Cook Mode"
        />
      </div>
     
    </div>
  );
};

export default RecipeDetails;