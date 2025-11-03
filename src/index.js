import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Welcome from './ch05/Welcome'
// import App from './App';
// import Hello from './ch03/Hello';
// import Library from './ch03/Library';
// import Book from './ch03/Book';
// import ConfirmDialog from './ch04/ConfirmDialog';
// import reportWebVitals from './reportWebVitals';
// import CommentList from './ch05/CommentList';
// import {App} from './ch05/App';
// import {LikeButton}  from './ch06/LikeButton';
// import Notification from './ch06/Notification';
// import NotificationList from './ch06/NotificationList';
// import Counter from './ch07/Counter';
import CounterContainer from './ch07/CounterContainer';
import { ChatRoomContainer } from './ch07/ChatRoom';
import Factorial from './ch07/Factorial';
import FactorialContainer from './ch07/FactorialContainer';
import Parent from './ch07/Parent';
import TextInputWithFocusButton from './ch07/TextInputWithfocusButton';
import UseRefExample from './ch07/useRefExample';
import Accomodate from './ch07/Accomodate';
import Toggle from './ch08/Toggle';
import ConfirmButton from './ch08/ConfirmButton';
import Greeting from './ch09/Greeting';
import LoginControl from './ch09/LoginControl';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LoginControl />);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<ConfirmDialog/>);


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Hello toWhat="고길동!!"/>
//     <Hello toWhat="홍길동!!"/>
//     <Hello toWhat="신길동!!"/>
//   </React.StrictMode>
// );

// const name = "소플";
// const element = <h1>안녕 , {name}</h1>;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);


// const formatName = (user) => {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Inje',
//   lastName: 'Lee',
//   avaterUrl: 'https://w7.pngwing.com/pngs/341/151/png-transparent-two-red-apple-fruits-juice-apple-fruit-food-fuji-red-apple-natural-foods-nutrition-green-apple-thumbnail.png'
// }

// const element = (
//   <h1>
//     Hello, {formatName(user)}
//   </h1>
// );

// const element = <div tabIndex="0"><p>나는 children이다.</p></div>;

// const element = <img src="https://w7.pngwing.com/pngs/319/218/png-transparent-sliced-apple-with-leaf-apple-juice-green-purxe9e-apple-natural-foods-food-green-apple-thumbnail.png"/>;
// const element = <img src={user.avaterUrl}></img>

// const element = (
//   <div>
//     <h1>안녕하세요</h1>
//     <h2>열심히 리액트를 공부해 봅시다.</h2>
//   </div>
// )
// const tick =() => {
// const element = (
//   <div>
//     <h1>안녕, 리액트!</h1>
//     <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
//   </div>
// )

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);
// }

// setInterval(tick, 1000);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
