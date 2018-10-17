import React, { Component } from 'react';

class Display extends Component {
    render() {
        const { result, a, b } = this.props;
        return (
            <div>
                <div className="input">
                    {
                        a !== result ? result : b
                    }
                </div>
            </div>
        );
    }
}

export default Display;
