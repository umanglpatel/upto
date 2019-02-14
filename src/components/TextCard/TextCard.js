import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import styled from 'styled-components';

import InputTextField from '../TextField/TextField';

const StyledCard = styled(Card)`
    minWidth: 275;
    width: 40%;
    margin: 16px 0px;
`;

const StyledCardActionArea = styled(CardActionArea)`
    minHeight: 100;
`;

const StyledCardContent = styled(CardContent)`

`;

function TextCard(props) {
    return (
        <div>
            <StyledCard>
                {/* <StyledCardActionArea onClick={() => props.clicked(props.content)}> */}
                <StyledCardContent>
                    {props.content}
                    {/* {props.content} */}
                </StyledCardContent>
                <CardActions>
                    <Button onClick={() => props.clicked(props.content)} size="small">edit</Button>
                    {/* <Button color="primary" onClick={() => props.clicked(props.content)} size="small">save</Button> */}
                </CardActions>
                {/* </StyledCardActionArea> */}
            </StyledCard>
        </div>
    );
}

export default TextCard;