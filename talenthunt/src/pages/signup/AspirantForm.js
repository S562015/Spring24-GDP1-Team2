import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { InputField } from "../../components/textField";
import BasicDatePicker from "../../components/DatePicker/DatePicker";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import * as React from "react";
import { useState } from "react";
import { cloneObject, handlePost } from "../../utils";
import { createAspirant } from " ./signupActions";

const AspirantFrom = ({ signupWithUsernameAndPassword }) => {
  const [aspirantInfo, setAspirantInfo] = useState({});

  const handleChange = (key, value) => {
    let newValue = cloneObject(aspirantInfo);
    newValue[key] = value;
    setAspirantInfo(newValue);
  };

  const handleSubmit = async () => {
    const res = await createAspirant();
    signupWithUsernameAndPassword();
    console.log(res);
  };

  return (
    <Box component="form" noValidate sx={{ mt: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <InputField
            margin="normal"
            required
            fullWidth
            id="first"
            label="First Name"
            name="First Name"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            margin="normal"
            required
            fullWidth
            id="last-name"
            label="Last Name"
            name="Last Name"
          />
        </Grid>
        <BasicDatePicker label="Date of Birth" />
        <InputField
          margin="normal"
          required
          fullWidth
          id="qualification"
          label="qualification"
          name="qualification"
        />
        <InputField
          margin="normal"
          required
          fullWidth
          id="orgisation-name"
          label="Orgisation Name"
          name="Orgisation Name"
        />
        <InputField
          margin="normal"
          required
          fullWidth
          id="address-line1"
          label="Address line 1"
          name="Address line 1"
        />
        <InputField
          margin="normal"
          required
          fullWidth
          id="address-line1"
          label="Address line 2"
          name="Address line 2"
        />
        <InputField
          margin="normal"
          required
          fullWidth
          id="city"
          label="City"
          name="City"
        />
        <InputField
          margin="normal"
          required
          fullWidth
          id="zipCode"
          label="zipCode"
          name="ZipCode"
          type={"number"}
        />
        <InputField
          margin="normal"
          required
          fullWidth
          id="phone"
          label="Phone Number"
          name="Phone"
          type={"phone"}
        />
      </Grid>
      <Button
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={handleSubmit}
        disabled
      >
        Register
      </Button>
      <Grid container>
        <Grid item xs>
          <Link to="/login">Already have an account? SignIn</Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AspirantFrom;
