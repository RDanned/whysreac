import {useEffect, useState} from "react";
import articleApi from "../../api/articles";
import uuid from 'react-uuid';
import ArticleComment from '../Article/ArticleComment';

function ArticleComments({article}){
    const [data, setData] = useState([]);
    const [currentOffset, setCurrentOffset] = useState(0)
    const [currentLimit, setCurrentLimit] = useState(2)
    const [totalCount, setTotalCount] = useState(0)
    const [showLoadBtn, setShowLoadBtn] = useState(false)

    function loadComments(){
        articleApi
            .getComments({offset: currentOffset, limit: currentLimit})
            .then((response) => {
                setData((prevState) => ([...prevState, ...response.comments]))
                setTotalCount(response.total)
                setCurrentOffset(prevState => prevState + 2)
                setCurrentLimit(prevState => prevState + 2)
                setShowLoadBtn(response.total > 0 && response.total !== currentLimit)
            })
    }

    useEffect(() => {
        loadComments()
    }, [])

    function loadMoreComments(){
        if(currentLimit <= totalCount){
            loadComments()
        }
    }

    return (
        <>
            <div className="comments-wrapper">
                {
                    data.length === 0
                    ?
                    <div>No comments</div>
                    : data.map(comment => <ArticleComment key={uuid()} comment={comment} />)

                }

                {
                    showLoadBtn && <button className="comments__load-btn" onClick={loadMoreComments}>More comments</button>
                }
            </div>
        </>
    )
}

export default ArticleComments