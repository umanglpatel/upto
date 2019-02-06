import React, { Component } from 'react';
import TextCard from '../../components/TextCard/TextCard';

class Activity extends Component {

    state = {
        ycardContent: 'One Card Content',
        tcardContent: 'Two Card Content'
    };

    render() {
        return (
            <div>
                Activity Page
            <TextCard content={this.state.ycardContent} />
                <TextCard content={this.state.tcardContent} />
            </div>
        );
    }
}

export default Activity;