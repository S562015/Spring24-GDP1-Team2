import { Button } from "@mui/material";

const CommonButton = ({ id, color, size, onClick, children, variant, sx }) => {
  console.log({ sx });
  return (
    <>
      <Button
        id={id}
        color={color}
        size={size}
        onClick={onClick}
        variant={variant}
        sx={sx}
      >
        {children}
      </Button>
    </>
  );
};

export default CommonButton;
