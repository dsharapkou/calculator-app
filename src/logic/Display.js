import React, { Component } from 'react';

class Display extends Component {
    render() {
        const { result, a, b } = this.props;
        return (
            <div>
                <div className="input">
                    {
                        result
                    }
                </div>
            </div>
        );
    }
}

export default Display;
