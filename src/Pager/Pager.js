import React, {Component} from 'react';
import './Pager.css';
import Button from "../components/Button/Button";

class Pager extends Component {


    handleSubmit = () => {
        console.log('Button Pager have been clicked');

        // console.log("Value of the button: ")
    }
    // the styles that is passed to the children via props
    styleColors = ['#0099ff', 'limegreen'];

    style = {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '5px',
        border: '1px solid black',
        width: '80px',


    };
    // make pager more flexible by having the list of pages before hand then passing it on to the render function
    // currently hardcoded to 8 for default value
    numberOfPages =8;

    render() {

        return (

            <>

                <Button className="<" text={'<'} onClick={this.handleSubmit} styleColors={this.styleColors}
                        style={this.style}/>
                {[...Array(this.numberOfPages)].map((x, i) =>
                    <Button text={i + 1} onClick={() => {
                        this.handleSubmit(this);
                    }} key={i} styleColors={this.styleColors} id={i} ref={i} style={this.style

                    }/>
                )}

                <Button className=">" text={'>'} onClick={this.handleSubmit} styleColors={this.styleColors}
                        style={this.style}/>

            </>
        );
    }
}
export default Pager;
