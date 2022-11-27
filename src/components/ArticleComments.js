import {useEffect, useState} from "react";
import articleApi from "../api/articles";
import uuid from 'react-uuid';

function ArticleComments({article}){
    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [list, setList] = useState([]);
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
            <ul>
                {
                    data.length === 0
                    ?
                    <li>No comments</li>
                    : data.map(comment => <li key={uuid()}>{comment.text}</li>)

                }
            </ul>
            {
                showLoadBtn && <button onClick={loadMoreComments}>More</button>
            }
        </>
    )
}

export default ArticleComments