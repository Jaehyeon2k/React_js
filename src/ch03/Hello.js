import React from "react";

// class Hello extends React.Component {
//     render() {
//         return <div> Hello, {this.props.toWhat} </div>; //jax
//         // React.createElement("div,"","hello,SCPARK");
//     }
// }

const Hello = (props) => {
    return <div> Hello, {props.toWhat} </div>
}

export default Hello;