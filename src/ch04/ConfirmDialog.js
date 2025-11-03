const Button = (props) => {
    return(
        <button className={`bg-${props.color}`}>
            <b>
                {props.children}
            </b>
        </button>
    )
}

const ConfirmDialog = () => {
    return (
        <div>
            <p>내용을 확인했으면 확인 버튼을 눌러주세요.</p>
            <Button color="green">확인</Button>
        </div>
    )
}

export default ConfirmDialog;