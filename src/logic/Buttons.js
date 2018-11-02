import _ from 'lodash';
import React, {Component} from 'react';
import Button from './Button';

class Buttons extends Component {

    onClick = (value) => {
        if (this.props.operation) {
            const b = _.concat(this.props.b, value).join('');
            this.props.goState({
                display: b,
                b: b,
            });
        } else {
            const a = _.concat(this.props.a, value).join('');
            this.props.goState({
                a: a,
                display: a,
            });
        }
        console.log(value);
        console.log(this.props);
};

    clear = () => {
        this.props.goState({
            a: [],
            b: [],
            bMemory : 0,
            display: 0,
            operation: null,
        });
        console.log('inside of clear');
    };

    setOperation = (value) => {
        // const b = this.props.b;
        // if (b.length === 0) {
        //     console.log(typeof b);
        //     console.log(this.props.a);
        //     console.log(b);
        //     console.log(b.length);
        //     this.props.goState({
        //         operation: value,
        //     });
        // } this.props.goState({
        //     operation: value,
        //     a: b,
        //     b: [],
        // });
        this.props.goState({
            operation: value,
            b: [],
        });
        console.log(value);


        console.log('setting operation');
        console.log(this.props);
    };

    multiply = (a, b) => {
        return parseFloat(a) * parseFloat(b);
    };

    sum = (a, b) => {
        return parseFloat(a) + parseFloat(b);
    };

    substract = (a, b) => {
        return parseFloat(a) - parseFloat(b);
    };

    division = (a, b) => {
        return parseFloat(a) / parseFloat(b);
    };

    calculateResult = () => {

        let operation = this.props.operation;
        console.log(this.props);
        if (operation === "multiply") {
            const multiplyResult = this.multiply(this.props.a, this.props.b);
            this.props.goState({
                a: multiplyResult,
                display: multiplyResult,
            });
        } else if (operation === "division") {
            const divisionResult = this.division(this.props.a, this.props.b);
            this.props.goState({
                a: divisionResult,
                display: divisionResult,
            });
        } else if (operation === "sum") {
            const sumResult = this.sum(this.props.a, this.props.b);
            this.props.goState({
                a: sumResult,
                display: sumResult,
            });
        } else if (operation === "substract") {
            const substractResult = this.substract(this.props.a, this.props.b);
            this.props.goState({
                a: substractResult,
                display: substractResult,
            });
        }
    };
    opposite = () => {
        this.props.goState({
            display: -1 * (this.props.display),
        });
    };


    render() {
        const buttonList = [
            <Button
                key="AC"
                label="AC"
                onClick={() => this.clear()}
                group="buttons_style_manage"
            />,
            <Button
                key="+/-"
                label="+/-"
                onClick={() => this.opposite()}
                group="buttons_style_manage"
            />,
            <Button
                key="%"
                label="%"
                onClick={() => this.clear()}
                group="buttons_style_manage"
            />,
            <Button
                key="/"
                label="/"
                onClick={() => this.setOperation("division")}
                group="buttons_style_operators"
                className={ this.props.operation === "division" ? "active" : "" }
            />,
            <Button
                key="7"
                label="7"
                onClick={() => this.onClick(7)}
                group="buttons_style"
            />,
            <Button
                key="8"
                label="8"
                onClick={() => this.onClick(8)}
                group="buttons_style"
            />,
            <Button
                key="9"
                label="9"
                onClick={() => this.onClick(9)}
                group="buttons_style"
            />,
            <Button
                key="*"
                label="*"
                onClick={() => this.setOperation("multiply")}
                group="buttons_style_operators"
                className={ this.props.operation === "multiply" ? "active" : "" }
            />,
            <Button
                key="4"
                label="4"
                onClick={() => this.onClick(4)}
                group="buttons_style"
            />,
            <Button
                key="5"
                label="5"
                onClick={() => this.onClick(5)}
                group="buttons_style"
            />,
            <Button
                key="6"
                label="6"
                onClick={() => this.onClick(6)}
                group="buttons_style"
            />,
            <Button
                key="+"
                label="+"
                onClick={() => this.setOperation("sum")}
                group="buttons_style_operators"
                className={ this.props.operation === "sum" ? "active" : "" }
            />,
            <Button
                key="1"
                label="1"
                onClick={() => this.onClick(1)}
                group="buttons_style"
            />,
            <Button
                key="2"
                label="2"
                onClick={() => this.onClick(2)}
                group="buttons_style"
            />,
            <Button
                key="3"
                label="3"
                onClick={() => this.onClick(3)}
                group="buttons_style"
            />,
            <Button
                key="-"
                label="-"
                onClick={() => this.setOperation("substract")}
                group="buttons_style_operators"
                className={ this.props.operation === "substract" ? "active" : "" }
            />,
            <Button
                key="0"
                label="0"
                onClick={() => this.onClick(0)}
                group="buttons_style"
            />,
            <Button
                key=","
                label=","
                onClick={() => this.onClick('.')}
                group="buttons_style"
            />,
            <Button
                key="="
                label="="
                onClick={() => this.calculateResult()}
                group="buttons_style_operators"
            />,

        ];
        return (
            <div className="button_list">
                {buttonList}
            </div>
        );
    }
}

export default Buttons;
