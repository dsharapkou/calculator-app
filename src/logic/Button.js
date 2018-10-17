import * as React from 'react';

class Button extends React.PureComponent {
    render() {
        return (
            <a
                onClick={this.props.onClick}
                className={`${this.props.group} button button-name-${this.props.label}`}
            >
                {this.props.label}
            </a>
        );
    }
}

export default Button;
