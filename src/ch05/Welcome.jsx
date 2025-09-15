// const Welcome = () => {
//     return 
//     <h1>안녕하세요, 홍길동님!!!</h1>
// }

const Welcome = (props) => {
    return (
       <h1>안녕하세요, {props.name}</h1>
    )
}

// class Welcome extends React.Component {
//     render() {
//         return <h1>안녕, {this.props.name}</h1>
//     }
// }

export default Welcome;