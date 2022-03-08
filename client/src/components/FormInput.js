import {
  Grid,
  FormControl,
  TextField,
  FormHelperText,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formInput: {
    width: "23.75rem",
    marginBottom: "0.875rem",
    fontWeight: "600 !important",
    fontStyle: "normal",
    FontSize: "14px",
    "& .MuiInputBase-input": {
      fontWeight: "600 !important"
    },
    "& a": {
      fontSize: "12px",
      fontWeight: "600",
      color: theme.palette.primary.main
    },
    "& label": {
      lineHeight: "19.07px",
      marginBottom: "1.875rem"
    },
    "& label + .MuiInput-formControl": {
      marginTop: "25px"
    },
    "@media (max-width: 834px)": {
      width: "14em"
    },
    "@media (max-width: 320px)": {
      width: "10em",
      marginBottom: "0.875rem"
    }
  }
}));

const FormInput = (props) => {
  const classes = useStyles(props);
  const {
    color,
    name,
    type,
    onChange,
    label,
    "aria-label": ariaLabel,
    inputProps,
    required,
    error,
    variant,
    formHelperText,
    ...other
  } = props;

  return (
    <Grid>
      <FormControl error={error} margin="normal" fullWidth>
        <TextField
          className={classes.formInput}
          variant={variant}
          aria-label={ariaLabel}
          label={label}
          name={name}
          type={type}
          onChange={onChange}
          required={required}
          color={color}
          {...other}
        />
        {formHelperText && (
          <FormHelperText error={error}>{formHelperText}</FormHelperText>
        )}
      </FormControl>
    </Grid>
  );
};

export default FormInput;
