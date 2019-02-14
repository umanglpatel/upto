import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const FormDialog = (props) => {
    return (
        <div>
            <Dialog
                open={props.edit}
                onClose={props.close}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Change Text</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        fullWidth
                        defaultValue={props.content}
                        onChange={props.change()}
                    ></TextField>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.close()} color="primary">
                        Cancel
            </Button>
                    <Button onClick={props.save(props.save)} color="primary">
                        Save
            </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default FormDialog;