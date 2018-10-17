import React, {Component} from 'react';
import Button from './Button';

class Buttons extends Component {

    onClick = (value) => {
        let object = {};
        if (this.props.operation) {
            object = {
                b: this.props.b + value,
            };
        } else {
            object = {
                a: this.props.a + value,
                result: this.props.a + value,
            };
        }

        this.props.goState(object);
        //debugger;
        console.log(object);
    };

    clear = () => {
        this.props.goState({
            a : 0,
            b : 0,
            result : 0,
            operation : null
        });
        console.log('inside of clear');
    };

    setOperation = (value) => {
        this.props.goState({
            operation: value,
            result: this.props.a,
            a: 0
        });

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
        console.log('this is operation: ' +operation);
        console.log('this is result: ' + this.props.result);
        console.log('this is a: ' + this.props.a);
        console.log('this is b: ' + this.props.b);

        if (operation === "multiply") {
            this.props.goState({
                result: this.multiply(this.props.result, this.props.b),
                a: 0
            });
        } else if (operation === "division") {
            this.props.goState({
                result: this.division(this.props.result, this.props.b),
                a: 0
            });
        } else if (operation === "sum") {
            this.props.goState({
                result: this.sum(this.props.result, this.props.b),
                a: 0
            });
        } else if (operation === "substract") {
            this.props.goState({
                result: this.substract(this.props.result, this.props.b ),
                a: 0
            });
        }


        /*
        this.props.goState({
            result: operation === "multiply" ? this.multiply(this.props.result, this.props.a) : false
        });

        */

        /*this.props.goState({
            result: this.props.result
        });
        this.props.result = operation === "multiply" ? this.multiply(this.props.result, this.props.a) : false;
        this.props.result = operation === "sum" ? this.sum(this.props.result, this.props.a) : false;
        this.props.result = operation === "division" ? this.division(this.props.result, this.props.a) : false;
        this.props.result = operation === "substract" ? this.substract(this.props.result, this.props.a) : false;
        console.log(operation);
        */
        /*
        if (this.props.operation === "multiply") {
            if (this.result) {
                console.log('result exists');
                this.result = this.multiply(this.result, this.b);
            } else {
                this.result = this.multiply(this.props.a, this.props.result);
                console.log('result not exists');
            }

        } else if (this.props.operation === "sum") {
            if (this.result) {
                console.log('result exists');
                this.result = this.sum(this.result, this.b);
            } else {
                this.result = this.sum(this.a, this.b);
                console.log('result not exists');

            }

        } else if (this.props.operation === "substract") {
            if (this.result) {
                console.log('result exists');
                this.result = this.substract(this.result, this.b);
            } else {
                this.result = this.substract(this.a, this.b);
                console.log('result not exists');
            }
        } else if (this.props.operation === "division") {
            if (this.result) {
                console.log('result exists');
                this.result = this.division(this.result, this.b);
            } else {

                this.result = this.division(this.a, this.b);
                console.log('result not exists');

            }
        }
        */
    };
    opposite = () => {
        this.props.goState({
            result : - (this.props.result),
            a: - (this.props.a)
        })
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
                onClick={() => this.calculateResult(this.props.a, this.props.b, this.props.result )}
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
