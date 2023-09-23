import { Box, TextField, Button } from "@mui/material";

const Register = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.innerBox}>
        <TextField label="Full Name" fullWidth />
        <TextField label="Email" fullWidth />
        <TextField label="Phone Number" fullWidth />
        <Box sx={styles.passwordBox}>
          <TextField label="Password" fullWidth />
          <TextField label="Confirm Password" fullWidth />
        </Box>
        <Box sx={styles.passwordBox}>
          <Button sx={styles.button}>Login</Button>
          <Button sx={styles.button}>Reset</Button>
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  innerBox: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    justifyContent: "center",
    alignItems: "center",
  },
  passwordBox: {
    display: "flex",
    gap: "1rem",
    width: "100%",
  },
  button: {
    width: "50%",
    backgroundColor: "#898989",
  },
};

export default Register;
