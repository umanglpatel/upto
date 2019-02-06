import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import styled from 'styled-components';

const StyledCard = styled(Card)`
    minWidth: 275;
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
                <StyledCardActionArea onClick={() => props.clicked('content')}>
                    <StyledCardContent>
                        {props.content}
                    </StyledCardContent>
                </StyledCardActionArea>
            </StyledCard>
        </div>
    );
}

export default TextCard;