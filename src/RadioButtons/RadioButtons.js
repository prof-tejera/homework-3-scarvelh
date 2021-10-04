import {Component} from 'react';
import './RadioButtons.css';
import Input from "../components/Input/Input";

class RadioButtons extends Component {


    styleColors = ['#0099ff', 'limegreen'];
    handleChange = e => {
        const {name, value} = e.target;

        this.setState({
            [name]: value
        });
    };
    // the styles that is passed to the children via props
    style = {
        backgroundColor: '#ff0000',
        padding: '50px',
        borderRadius: '5px',
        border: 'none',
        outline: 'none',
        width: '50px',
    };


    render() {
        return (

            <>
                <div className='radio-button-div'>
                    <Input type={'radio'} onChange={this.handleChange}
                           styleColors={this.styleColors} value={'Apple'} name={'fruits'} id="Apple"
                           style={this.style}/>
                    <label htmlFor="Apple" className="radio-spacing">Apple</label>
                </div>
                <div className='radio-button-div'>
                    <Input type={'radio'} onChange={this.handleChange}
                           styleColors={this.styleColors} value={'Pear'} name={'fruits'} id="Pear" style={this.style}/>
                    <label htmlFor="Pear" className="radio-spacing">Pear</label>
                </div>

                <div className="radio-button-div">
                    <Input type={'radio'} onChange={this.handleChange}
                           styleColors={this.styleColors} value={'Orange'} name={'fruits'} id="Orange"
                           style={this.style}/>
                    <label className="radio-spacing" htmlFor="Orange">Orange</label>
                </div>

            </>

        )
    }
}

export default RadioButtons;
