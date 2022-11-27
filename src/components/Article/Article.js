import {useEffect, useState} from "react";
import articleApi from "../../api/articles";
import {formatDate} from "../../utils/date";
import { Card, Typography, Avatar, Skeleton } from "antd";
import ArticleComments from "./ArticleComments";
import Page from "../layout/Page";

const { Meta } = Card;
const { Paragraph } = Typography;

function Article(){
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)

    useEffect(() => {
        articleApi.getArticle('no-slug')
            .then((response) => {
                setData(response.article)
                setTimeout(() => {
                    setLoading(false)
                }, 500)
            })
    }, [])

    if(loading) return (
        <>
            <Page>
                <Card>
                    <Skeleton avatar active paragraph={{ rows: 3 }} />
                </Card>
            </Page>
        </>
    )

    return (
        <>
            <Page>
                <Card>
                    <Meta
                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                        title={data.author}
                        description={formatDate(data.date)}
                    />
                    <Paragraph>
                        {data.text}
                    </Paragraph>
                </Card>
                <ArticleComments article={data} />
            </Page>
        </>
    )
}

export default Article