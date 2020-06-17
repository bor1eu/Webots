import React, {Component} from 'react';
import './webots-function.css'

export default class WebotsFunction extends Component{

    render(){

        const leftTailStyle = {
            border : "20px solid transparent",
            borderRight : "20px solid #FFFFFF",
            float:"right",
            marginTop:"35px",
            marginLeft:"-30px"
        };

        const rightTailStyle = {
            border: "20px solid transparent",
            borderLeft: "20px solid #FFFFFF",
            float:"left",
            marginTop:"35px",
            marginLeft:"-6px"
        };

        if(this.props.side=="left"){
            return(
                <div className={"about-webots-functions__webots-function" + " " + "function-side-left" + " " + "function-level"+this.props.level}>
                    <aside style={leftTailStyle} className="block-tail"></aside>
                    <div className="webots-function__content">
                        {this.props.img}
                        <div>
                            <p className="webots-function__headline">{this.props.headline}</p>
                            <p className="webots-function__description">{this.props.description}</p>
                        </div>
                    </div>
                </div>
            )
        }else if(this.props.side=="right"){
            return(
                <div className={"about-webots-functions__webots-function" + " " + "function-side-right" + " " + "function-level"+this.props.level}>
                    <aside style={rightTailStyle} className="block-tail"></aside>
                    <div className="webots-function__content">
                        {this.props.img}
                        <div>
                            <p className="webots-function__headline">{this.props.headline}</p>
                            <p className="webots-function__description">{this.props.description}</p>
                        </div>
                    </div>
                </div>
            )
        }
    }
}