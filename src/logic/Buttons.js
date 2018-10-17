import React, {Component} from 'react';
import Button from './Button';

class Buttons extends Component {

    constructor(props) {
        super(props);

        this.a = '';
        this.b = '';
        this.result = '';
        this.operation = '';
    };

    onClick = (value) => {
        if (this.operation) {
            this.b = this.b + value;
        } else {
            this.a = this.a + value;
        }
        console.log(this.a);
        console.log(this.b);

    };
    clear = () => {
        this.a = '';
        this.b = '';
        this.result = '';
        this.operation = '';
        console.log('inside of clear');
    };
    setOperation = (value) => {
        this.operation = value;
        console.log(this.operation);
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
        if (this.operation === "multiply") {
            if (this.result) {
                console.log('result exists');
                this.result = this.multiply(this.result, this.b);
            } else {
                this.result = this.multiply(this.a, this.b);
                console.log('result not exists');
            }

        } else if (this.operation === "sum") {
            if (this.result) {
                console.log('result exists');
                this.result = this.sum(this.result, this.b);
            } else {
                this.result = this.sum(this.a, this.b)
                console.log('result not exists');

            };

        } else if (this.operation === "substract") {
            if (this.result) {
                console.log('result exists');
                this.result = this.substract(this.result, this.b);
            } else {
                this.result = this.substract(this.a, this.b);
                console.log('result not exists');
            }
        } else if (this.operation === "division") {
            if (this.result) {
                console.log('result exists');
                this.result = this.division(this.result, this.b);
            } else {

                this.result = this.division(this.a, this.b);
                console.log('result not exists');

            }
        }


        console.log(this.result);
    };



    render() {
        const buttonList = [
            <Button
                key="AC"
                label="AC"
                onClick={() => this.clear()}
                group="buttons_style"
            />,
            <Button
                key="+/-"
                label="+/-"
                onClick={() => this.clear()}
                group="buttons_style"
            />,
            <Button
                key="%"
                label="%"
                onClick={() => this.clear()}
                group="buttons_style"
            />,
            <Button
                key="/"
                label="/"
                onClick={() => this.setOperation("division")}
                group="buttons_style"
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
                group="buttons_style"
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
                group="buttons_style"
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
                group="buttons_style"
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
                onClick={() => console.log('handleClick ,')}
                group="buttons_style"
            />,
            <Button
                key="="
                label="="
                onClick={() => this.calculateResult()}
                group="buttons_style"
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
