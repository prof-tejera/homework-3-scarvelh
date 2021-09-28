import {Component} from 'react';
import './LoginForm.css';
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";


class LoginForm extends Component {
    styleColors = ['#0099ff', 'limegreen'];

    handleSubmit = () => {
        console.log('Button Submit have been clicked');
    };

    handleUserChange = () => {
        console.log("User name is been entered");
    };
    handlePasswordChange = () => {
        console.log("Password is been entered");
    };

    render() {
        return (
            <>
                <div className='login-panel'>

                    <Input type={'text'} placeholder={'username'} onChange={this.handleUserChange}
                           name={"Username"} styleColors={this.styleColors}/>
                    <br/>
                    <br/>
                    <Input type={'password'} placeholder={'password'} onChange={this.handlePasswordChange}
                           name={'Password'} styleColors={this.styleColors}/>
                    <br/>
                    <br/>
                    <Button text={'Login'} onClick={() => {
                        this.handleSubmit()
                    }} styleColors={this.styleColors}/>

                </div>
            </>

        )

    }
}

export default LoginForm;
