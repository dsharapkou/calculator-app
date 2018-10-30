import React, { Component } from 'react';

class Display extends Component {
    render() {
        const { display } = this.props;
        return (
            <div>
                <div className="input">
                    {
                        display
                    }
                </div>
            </div>
        );
    }
}

export default Display;
