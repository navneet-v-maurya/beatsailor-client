import { Typography, Box, TextField } from "@mui/material";

const Login = () => {
  return (
    <>
      <Box>
        <TextField label="Email" variant="outlined" />
        <TextField label="Password" />
      </Box>
    </>
  );
};

export default Login;
