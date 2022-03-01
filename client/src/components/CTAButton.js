import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  ctaBtn: {
    height: "56px",
    width: "160px",
    marginTop: "10px",
    lineHeight: "24px",
    fontSize: "16px",
    fontWeight: "700",
    color: theme.palette.primary.contrastText,
    borderRadius: "3px",
    background: theme.palette.primary.main,
    "@media (max-width: 700px)": {
      height: "42px",
      width: "145px"
    }
  }
}));

const CTAButton = ({ ctaButtonText, onClick, type }) => {
  const classes = useStyles();

  return (
    <Button type={type} onClick={onClick} className={classes.ctaBtn}>
      {ctaButtonText}
    </Button>
  );
};

export default CTAButton;
