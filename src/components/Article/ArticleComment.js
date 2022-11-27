import {formatDate} from "../../utils/date";

function ArticleComment({comment}){
    return (
        <div className="comment">
            <div className="comment__header">
                <div className="comment__author">
                    {comment.author}
                </div>
                <div className="comment__date">
                    {formatDate(comment.date)}
                </div>
            </div>
            <div className="comment__body">
                <div className="comment__content" dangerouslySetInnerHTML={{__html: comment.text}}></div>
            </div>
        </div>
    )
}

export default ArticleComment