import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { InputField } from "../../components/textField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import * as React from "react";
import background from "../../assets/login.png";

const SignUp = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{

          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "5319AC",
          backgroundSize: "50%",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Typography>Start & track your Scheduling Process</Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <InputField
              margin="normal"
              required
              fullWidth
              id="first"
              label="First Name"
              name="First Name"
              autoFocus
            />
            <InputField
              margin="normal"
              required
              fullWidth
              id="last-name"
              label="Last Name"
              name="Last Name"
            />
            <InputField
              margin="normal"
              required
              fullWidth
              id="user-name"
              label="UserName"
              name="UserName"
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
              id="orgisation-name"
              label="Orgisation Name"
              name="Orgisation Name"
            />
            <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Create an account ? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};


export default SignUp;
