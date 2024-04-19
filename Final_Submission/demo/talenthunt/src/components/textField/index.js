import { TextField } from "@mui/material";

export const InputField = ({
  id = "outlined-basic",
  type = "text",
  label = "Enter value",
  size = "small",
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
        size={size}
        {...rest}
      />
    </>
  );
};
