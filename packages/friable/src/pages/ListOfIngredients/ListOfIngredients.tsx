// import React from 'react'
// import ResultCard from '../../components/ResultCard';
// import CardOfIngredient from '../../components/CardOfIngredient';
// const ListOfIngredients = ()=>{
//   return (
//     <div> <ResultCard/>
//     <CardOfIngredient/>
//     </div>
   

//   )};
 



import { Typography, List, ListItem, ListItemText, Button } from '@mui/material'

import RecipeDetails from '../RecipeDetails/RecipeDetails'
import { IIngredient } from 'shared_data';
import { makeStyles } from '@material-ui/core/styles';


interface ChecklistPageProps {
  checklist: IIngredient[];
  handleRemoveIngredient: (ingredient: IIngredient) => void;
  handleClearChecklist: () => void;
}



const ListOfIngredients: React.FC<ChecklistPageProps> = ({
  checklist,
  handleRemoveIngredient,
  handleClearChecklist,
}) => {
  
  const useStyles = makeStyles((theme) => ({
    checklist: {
      marginTop: theme.spacing(2),
    },
    removeButton: {
      marginLeft: theme.spacing(1),
    },
    clearButton: {
      marginTop: theme.spacing(2),
    },
  }));
  
  const classes = useStyles();

  return (
    <div className={classes.checklist}>
      <Typography variant="h5">Ingredients Checklist:</Typography>
      {checklist.length > 0 ? (
        <List>
          {checklist.map((ingredient, index) => (
            <ListItem key={index}>
              <ListItemText primary={ingredient.name} secondary={ingredient.amount} />
              <Button
                variant="outlined"
                color="secondary"
                size="small"
                className={classes.removeButton}
                onClick={() => handleRemoveIngredient(ingredient)}
              >
                Remove
              </Button>
            </ListItem>
          ))}
          <Button
            variant="outlined"
            color="secondary"
            className={classes.clearButton}
            onClick={handleClearChecklist}
          >
            Clear Checklist
          </Button>
        </List>
      ) : (
        <Typography variant="body1">No ingredients added to the checklist.</Typography>
      )}
    </div>
  );
};


export default ListOfIngredients;