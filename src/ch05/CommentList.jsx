import Comment from "./Comment"

const comments = [
    {name: "홍길동", comment: "제가 만든 첫 컴포넌트입니다."},
    {name: "김철수", comment: "리액트 너무 재밌어요."},
    {name: "박영희", comment: "하이루~"},
]

function CommentList(props) {
    return (
        <div>
            {comments.map((c) => {
                return <Comment name={c.name} comment={c.comment}/>;
            })}        
        </div>
    );
}

export default CommentList;