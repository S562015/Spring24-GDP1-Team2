import { TextField } from "@mui/material";


export const InputField = ({
  id = "outlined-basic",
  type = "text",
  label = "Enter value",
  variant,
  ...rest
}) => {
  return (

    <>
      <TextField
        id={id}
        label={label}
        variant={variant}
        type={type}
        {...rest}
      />
</>
  );
};
