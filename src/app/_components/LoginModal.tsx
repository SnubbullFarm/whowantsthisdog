import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography, Link as MuiLink } from '@mui/material';

interface Props {
  open: boolean;
  onClose: () => void;
}

const PopupModal: React.FC<Props> = ({ open, onClose }) => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleToggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Logging in with:', email, password);
    // Reset the form after login
    setEmail('');
    setPassword('');
    // Close the modal
    onClose();
  };

  const handleSignUp = () => {
    // Implement your sign-up logic here
    console.log('Signing up with:', email, password, username, phoneNumber);
    // Reset the form after sign-up
    setEmail('');
    setPassword('');
    setUsername('');
    setPhoneNumber('');
    // Close the modal
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{isLoginForm ? 'Login' : 'Sign Up'}</DialogTitle>
      <DialogContent>
        {isLoginForm ? (
          <>
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
              value={email}
              onChange={handleEmailChange}
            />
            <TextField
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
              value={password}
              onChange={handlePasswordChange}
            />
            <Typography variant="body2" sx={{ marginTop: 2 }}>
              Don&apos;t have an account?{' '}
              <MuiLink component="button" onClick={handleToggleForm}>
                Sign Up Here
              </MuiLink>
            </Typography>
          </>
        ) : (
          <>
            <TextField
              margin="dense"
              id="username"
              label="Username"
              fullWidth
              value={username}
              onChange={handleUsernameChange}
            />
            <TextField
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
              value={email}
              onChange={handleEmailChange}
            />
            <TextField
              margin="dense"
              id="phoneNumber"
              label="Phone Number"
              fullWidth
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
            <TextField
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
              value={password}
              onChange={handlePasswordChange}
            />
            <Typography variant="body2" sx={{ marginTop: 2 }}>
              Already have an account?{' '}
              <MuiLink component="button" onClick={handleToggleForm}>
                Login Here
              </MuiLink>
            </Typography>
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        {isLoginForm ? (
          <Button onClick={handleLogin} color="primary">
            Login
          </Button>
        ) : (
          <Button onClick={handleSignUp} color="primary">
            Sign Up
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default PopupModal;
