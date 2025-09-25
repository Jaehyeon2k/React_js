import React from "react";

export class LikeButton extends React.Component {
    constructor(props){
        super(props);
        this.state= {liked: false};
        // this.text = "좋아요";
    }

    handleClick() {
        // this.state.liked = !this.state.liked;
        this.setState({liked: !this.state.liked});
    }

    render() {
        const text = this.state.liked ? "You liked this." : "Like";
        return <button onClick={()=>this.handleClick()}>{text}</button>
    }
}