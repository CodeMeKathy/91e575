import { Grid, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formHeader: {
    height: "5.5vh",
    fontSize: "28px",
    fontWeight: "600",
    lineHeight: "40px",
    letterSpacing: theme.typography.button.letter,
    "@media (max-width: 320px)": {
      height: "6.5vh",
      fontSize: "24px"
    }
  }
}));
const FormHeader = ({ formHeader }) => {
  const classes = useStyles();

  return (
    <Grid>
      <Typography className={classes.formHeader}>{formHeader}</Typography>
    </Grid>
  );
};

export default FormHeader;
