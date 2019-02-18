import React, { useState } from 'react';
import TextCard from '../../components/TextCard/TextCard';
import FormDialog from '../../components/FormDialog/FormDialog';

function Activity() {

    const [state, setState] = useState({
        ycard: {
            content: 'One Card Content',
            edit: false
        },
        tcard: {
            content: 'Two Card Content',
            edit: false
        },
        tempContent: ''
    });

    const handleClose = () => {
        setState({
            ...state,
            ycard: {
                ...state.ycard,
                edit: false
            }
        });
    }
    const handleSave = (content) => {
        setState({
            ...state,
            ycard: {
                ...state.ycard,
                content: state.tempContent,
                edit: false
            }
        });
    }
    const handleContentChange = (event) => {
        event.preventDefault();
        setState({
            ...state,
            tempContent: event.target.value
        });
    }
    const handleYCardEdit = (content) => {
        setState({
            ...state,
            ycard: {
                edit: true,
                content: content
            },
            tempContent: content
        });
        console.log('here');
    }

    const handleTCardEdit = (content) => {
        setState({
            ...state,
            tcard: {
                edit: true,
                content: content
            }
        });
    }

    const testHandler = () => {
        setState({ ...state, tcardContent: 'test' });
    }

    return (
        <div>
            Activity Page
            <TextCard
                content={state.ycard.content}
                clicked={handleYCardEdit}
                edit={state.ycard.edit}
            />
            <TextCard
                content={state.tcard.content}
                clicked={handleTCardEdit}
                edit={state.tcard.edit} />
            <FormDialog
                edit={state.ycard.edit}
                close={() => handleClose}
                content={state.ycard.content}
                save={() => handleSave}
                change={() => handleContentChange} />
        </div>
    );
}

export default Activity;