import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // TESTING
  // const registerUser = (e) => {
  //   e.preventDefault();

  //   const trimmedUsername = username.trim();
  //   const trimmedEmail = email.trim();
  //   const trimmedPassword = password.trim();

  //   if (!trimmedUsername | !trimmedEmail | !trimmedPassword) {
  //     return console.log("Cannot submit empty fields")
  //   }

  //   console.log(`Username: ${trimmedUsername} | Email: ${trimmedEmail} | Password: ${trimmedPassword}`)
  //   setUsername("");
  //   setEmail("");
  //   setPassword("");
  // }

  // JSON WEB TOKENS
  // async function registerUser(e) {
  //   e.preventDefault();

  //   const response = await fetch("http://localhost:3001/register", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       username,
  //       email,
  //       password
  //     })
  //   })

  //   const data = await response.json();
  //   console.log(data)
  // }

  return (
    <form>
      <Box
        sx={{
          "& .MuiTextField-root": { m: 3, width: "40ch", display: 'flex', flexDirection: 'column' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          id="outlined-required"
          label="Username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <TextField
          required
          id="outlined-required"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </Box>

      <Button type="submit" variant="contained" sx={{ width: "125px", py: 1, borderRadius: "50px", m: 3 }}>
        Sign Up
      </Button>
    </form>
  )
}

export default SignUpForm;