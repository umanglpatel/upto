import React, { Component } from 'react';
import TextCard from '../../components/TextCard/TextCard';
import FormDialog from '../../components/FormDialog/FormDialog';

class Activity extends Component {

    state = {
        ycard: {
            content: 'One Card Content',
            edit: false
        },
        tcard: {
            content: 'Two Card Content',
            edit: false
        },
        tempContent: ''
    };

    handleClose = () => {
        this.setState({
            ycard: {
                ...this.state.ycard,
                edit: false
            }
        });
    }
    handleSave = (content) => {
        this.setState({
            ycard: {
                ...this.state.ycard,
                content: this.state.tempContent,
                edit: false
            }
        });
    }
    handleContentChange = (event) => {
        event.preventDefault();
        this.setState({
            tempContent: event.target.value
        });
    }
    handleYCardEdit = (content) => {
        this.setState({
            ycard: {
                edit: true,
                content: content
            },
            tempContent: content
        });
        console.log('here');
    }

    handleTCardEdit = (content) => {
        this.setState({
            tcard: {
                edit: true,
                content: content
            }
        });
    }

    testHandler = () => {
        this.setState({ tcardContent: 'this.test' });
    }

    render() {
        return (
            <div>
                Activity Page
            <TextCard
                    content={this.state.ycard.content}
                    clicked={this.handleYCardEdit}
                    edit={this.state.ycard.edit} />
                <TextCard
                    content={this.state.tcard.content}
                    clicked={this.handleTCardEdit}
                    edit={this.state.tcard.edit} />
                <FormDialog
                    edit={this.state.ycard.edit}
                    close={() => this.handleClose}
                    content={this.state.ycard.content}
                    save={() => this.handleSave}
                    change={() => this.handleContentChange} />
            </div>
        );
    }
}

export default Activity;