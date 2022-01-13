import React,  { Component } from 'react'

export class colors extends Component {
    render(){
        const {colorsType} = this.props;
        return (
            <div className="colors">
                  {
                    colorsType.map((color, index)=>(
                      <button style={{background: color}} key={index}></button>
                ))
                }
            </div>

        )
}
}
export default colors


// everytime class name should follow camelCase


