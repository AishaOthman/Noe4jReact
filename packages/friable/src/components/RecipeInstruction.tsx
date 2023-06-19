// import React, { useContext, useState } from "react";
// import { IRecipe } from "shared_data";
// import { RecipeContext } from "./addNewRecipeForm";
// import { Typography } from "@mui/material";


// const RecipeInstruction = () => {
    
//   //const {recipe ,setRecipe} = useContext(RecipeContext);
  
//   const [instructers, setInstructers] = useState(recipe.instructions ?? [""]);


//   return (
//     <div>
//  <Typography variant='h5' component='h5' marginTop={2}>
//          Add Instructers:
//        </Typography>
//     {instructers.map((step, index) => {
//       return (
//         <div key={`${index}`}>
//           <input
//             onChange={(e) => {
//               const tempArr = [...instructers];
//               tempArr[index] = e.target.value;
//               setInstructers(tempArr);
//             }}
//             value={step}
//           />
//         </div>
//       );
//     })}
//     <br />
//     <button
//       onClick={() => setInstructers((prev) => [...prev, ""])}
//     >
//       add another step
//     </button>
//     <button onClick={() => setRecipe({ ...recipe, instructions: instructers })
//   }>
     
//       save instructers
//     </button>
   
//         <div>
//           <div>
//             {" "}
//             <b>comments about the adress:</b>
//             {recipe.instructions?.map((step, index) => {
//               return (
//                 <div key={index}>
//                   <i> step #{index + 1}:</i> {step}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
  
//   )
// }

// export default RecipeInstruction


