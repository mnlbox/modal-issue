import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Route, Link } from 'react-router-dom';

export default class LoginModal extends React.Component {


  render() {
    // const { showLoginModal } = this.props.store.appState;
    const { isLoginModalOpen, handleCloseLoginModal } = this.props;
    // console.warn("re render: " + JSON.stringify(this.props.store.appState));
    console.warn("render: " + isLoginModalOpen);
    return (
        <Dialog
          open={isLoginModalOpen}
          onClose={handleCloseLoginModal}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Login</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please login before continue.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseLoginModal} color="primary">
              Cancel
            </Button>
            <Button onClick={this.closeLoginModal} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
    );
  }
}
