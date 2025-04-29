import React from "react";
import { Container } from "@mui/system";
import Grid from "@mui/system/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import chatLogo from "../../assets/images/chatLogo.jpg";
import logoDark from "../../assets/images/logo-dark.svg";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";


const Register = () => {
    const navigate = useNavigate();
  return (
    <>
      <Container
        maxWidth="md"
        sx={{ display: "flex", alignItems: "center", height: "100vh" }}
      >
        <Grid container>
          <Grid size={{ md: 6 }}>
            <Paper
              square
              sx={{
                bgcolor: "primary.main",
                color: "primary.contrastText",
                height: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box sx={{ p: 5, textAlign: "center" }}>
                <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
                  <img
                    width="50"
                    height="50"
                    src={logoDark}
                    alt="Description"
                  />
                  <img
                    width="50"
                    height="50"
                    src={chatLogo}
                    alt="Description"
                  />
                </Box>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{ fontWeight: "600", mt: 3 }}
                >
                  Chat App
                </Typography>

                <Typography>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Porro, nobis praesentium! Quibusdam pariatur, dolorem
                  obcaecati iusto a laudantium non qui.
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid size={{ md: 6 }}>
            <Paper
              square
              sx={{
                height: "100%",
                display: "flex",
                flexDirection:"column"
              }}
            >
              <Box sx={{ p: 5 }}>
              <Typography variant="h4" sx={{mb:2 ,fontWeight:"500" ,textTransform:"uppercase"}}>Register Here</Typography>
                <TextField
                  fullWidth
                  id="name"
                  label="Your Full Name"
                  variant="standard"
                  sx={{ mb: 3 }}
                />
                 <TextField
                  fullWidth
                  id="email"
                  label="E-mail"
                  variant="standard"
                  sx={{ mb: 3 }}
                />

                <TextField
                  fullWidth
                  id="password"
                  label="Password"
                  variant="standard"
                  sx={{ mb: 3 }}
                />
                <TextField
                  fullWidth
                  id="mobile"
                  label="Mobile Number"
                  variant="standard"
                  sx={{ mb: 3 }}
                />

                <Button fullWidth variant="contained" sx={{ py: 2, mt: 2 }}>
                  Register
                </Button>
               
                <Box sx={{textAlign:'right'}}>
                <Typography variant="body2">
                   Already Have An Account?{" "}
                    <Button onClick={() => navigate("/")}>
                      Login
                    </Button>
                  </Typography>
              </Box>
              </Box>
              
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Register;
