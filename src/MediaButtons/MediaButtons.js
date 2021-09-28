import {Component} from 'react';
import Panel from 'components/Panel/Panel';
import Button from 'components/Button/Button';
import './MediaButtons.css';

class MediaButtons extends Component {
    styleColors = ['#0099ff', 'limegreen'];
    handleSubmit = () => {
        console.log('Button Stop have been clicked');
    };
    handleRewind = () => {
        console.log('Button Rewind have been clicked');
    };
    handlePlay = () => {
        console.log('Button Play have been clicked');
    };
    handleFastForward = () => {
        console.log('Button Fast Forward have been clicked');
    };

    render() {
        return (
            <Panel backgroundColor="blue">

                <Button text="Rewind" onClick={() => {
                    this.handleRewind()
                }} styleColors={this.styleColors}/>

                <Button text="Fast Forward" onClick={() => {
                    this.handleFastForward()
                }} styleColors={this.styleColors}/>

                <Button text="Play" onClick={() => {
                    this.handlePlay()
                }} color="green" size="large" styleColors={this.styleColors}/>

                <Button text="Stop" onClick={() => {
                    this.handleSubmit()
                }} color="red" size="large" styleColors={this.styleColors}/>
            </Panel>
        );
    }
}

export default MediaButtons;
