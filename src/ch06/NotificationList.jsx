import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {   
        id: 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "점심 식사 시간입니다.",
    },
    {
        id: 3,
        message: "회의가 10분 후에 시작됩니다."
    },
];

class NotificationList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: [],
        };
    }
    componentDidMount() {
        // setInterval(this.displayLog,1000);
        // 1초마다 this.state.notifications배열에
        // reservedNotifications의 요소를 하나씩 읽어와
        // 추가하는 함수를 timer에 등록해놓음
        const timer = setInterval(() => {
            const {notifications} = this.state;
            // notifications 배열에 reservedNotifications의
            // 모든 요소를 다 담지 않았다면
            // 차례 대로 하나씩 담자.
            // 만약에, 다 담았다면, timer 멈추자.
            if(notifications.length < reservedNotifications.length) // 아직 다 안담았으면
            {
                const index = notifications.length;
                const nextNotifications = [...this.state.notifications,
                    reservedNotifications[index],
                ];
                this.setState({notifications: nextNotifications});
            } else {
                this.setState({notifications: []});
                clearInterval(timer);
            }
        }, 2000);
    }
    render() {
        return (
            <div>
                {this.state.notifications.map((n)=>{
                    return <Notification
                    id={n.id} // notification.jsx에서 this.props.id로 사용
                    key={n.id}  // 리액트가 내부적으로 사용하는 key
                    message={n.message}/> // notification.jsx에서 this.props.message로 사용
                })}
            </div>
        );
    }
}

export default NotificationList;