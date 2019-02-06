import React, { Component } from 'react';
import TextCard from '../../components/TextCard/TextCard';

class Activity extends Component {

    state = {
        ycardContent: 'One Card Content',
        tcardContent: 'Two Card Content'
    };

    handleYCardEdit = (content) => {
        this.setState({ ycardContent: content });
        console.log('here');
    }

    handleTCardEdit = (content) => {
        this.setState({ tcardContent: content });
    }

    render() {
        return (
            <div>
                Activity Page
            <TextCard content={this.state.ycardContent} clicked={this.handleYCardEdit} />
                <TextCard content={this.state.tcardContent} clicked={this.handleTCardEdit} />
            </div>
        );
    }
}

export default Activity;