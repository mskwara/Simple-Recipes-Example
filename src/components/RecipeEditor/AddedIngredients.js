import { makeStyles } from "@material-ui/core/styles";
import { getFullIngredientText } from "../../utilities/helper";
import { Chip } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        gridArea: "aside",
        display: "flex",
        flexDirection: "column",
    },
    chip: {
        margin: "5px !important",
    },
    empty: {
        fontSize: "10pt",
        textAlign: "center",
    },
});

const AddedIngredients = ({
    ingredients,
    handleIngredientDelete,
    classLabel,
}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <label className={classLabel}>Added ingredients:</label>
            {ingredients.map((ingredient, index) => (
                <Chip
                    label={getFullIngredientText(ingredient)} // full ingredient text comes from helper.js
                    onDelete={() => handleIngredientDelete(index)}
                    color="secondary"
                    className={classes.chip}
                    clickable={false}
                    key={index}
                    data-testid="chip"
                />
            ))}
            {ingredients.length === 0 && ( // if there are no ingredients show message
                <p className={classes.empty}>No ingredients specified...</p>
            )}
        </div>
    );
};

export default AddedIngredients;
