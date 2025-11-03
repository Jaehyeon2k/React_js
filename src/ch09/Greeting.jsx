function UserGreeting(props) {
  return <h1>환영합니다</h1>;
}

function GuestGreeting(props) {
  return <h1>로그인을 해주세요.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  } else {
    return <GuestGreeting />;
  }
}

export default Greeting;
