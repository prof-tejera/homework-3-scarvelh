import {Component} from 'react';
import './Button.css';

class Button extends Component {
    color = 'limegreen';

    onSubmitButtonClick = () => {
        this.props.onClick(

        )
        console.log('Passing :' + this.props.text + ' handler function');
        this.color = this.props.styleColors[0];


        //this.setState(this.props.style)

        //this.props.onButtonClick(this.props.index)
        //console.log('Passing :' + this.props.text + ' handler function');
    };


    render() {

        return <button className="loginButton" onClick={this.onSubmitButtonClick}
                       style={this.props.style} id='buttons'>{this.props.text}</button>;
        //return <button className="loginButton" onClick={this.onSubmitButtonClick} style={{backgroundColor:{color}}}>{this.props.text}</button>;
    }

}

export default Button;
