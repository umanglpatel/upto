import React from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

const StyledTextField = styled(TextField)`
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    `;

const InputTextField = (props) => {
    return (
        <StyledTextField
            id="standard-bare"
            margin="normal"
            defaultValue={props.value}
        ></StyledTextField>
    );
}
export default InputTextField;
