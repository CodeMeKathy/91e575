import { Grid, Typography, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  ctaGrid: {
    display: "flex",
    height: "20vh",
    width: "90%",
    justifyContent: "flex-end",
    alignContent: "center",
    color: theme.palette.secondary.main,
    lineHeight: "40px",
    "& p": {
      position: "relative",
      top: "16.32px",
      "@media (max-width: 320px)": {
        marginBottom: "1.5rem"
      }
    },
    "@media (max-width: 834px)": {
      height: "20vh",
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignContent: "flex-end"
    },
    "@media (max-width: 320px)": {
      height: "23vh"
    }
  },
  ctaBtn: {
    height: "54px",
    width: (props) => props.width,
    marginLeft: "30px",
    lineHeight: "19.07px",
    fontSize: "14px",
    fontWeight: "600",
    color: theme.palette.primary.main,
    boxShadow: "0px 2px 12px 0px #4A6A9533",
    borderRadius: "5px",
    background: theme.palette.primary.contrastText,
    "@media (max-width: 700px)": {
      height: "40px",
      width: (props) => props.mobileWidth,
      marginLeft: "70px"
    }
  }
}));

const CTAHeader = ({ ctaHeader, ctaButtonText, onClick, ...props }) => {
  const classes = useStyles(props);

  return (
    <Grid container item className={classes.ctaGrid}>
      <Typography> {ctaHeader}</Typography>
      <Button onClick={onClick} className={classes.ctaBtn}>
        {ctaButtonText}
      </Button>
    </Grid>
  );
};

export default CTAHeader;
