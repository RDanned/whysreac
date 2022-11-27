
//In real
const getArticle = (slug) => {
    return new Promise((resolve) => {
        resolve({
            article: {
                slug: 'no-slug',
                author: 'Eliana Franco',
                date: '2017-09-10T22:00:05.919Z',
                text: `Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.`,
            }
        })
    })
}

const getComments = ({offset = 0, limit = 2}) => {
    const comments = [
        { id: 1, author: 'Germán Toro', text: 'Great!', date: '2017-09-11T12:00:39.430Z' },
        { id: 2, author: 'Elena Builes', text: 'Awesome!', date: '2017-09-11T12:30:39.430Z' },
        { id: 3, author: 'Germán Toro', text: 'Splendid!', date: '2017-09-11T14:30:05.919Z' },
        { id: 4, author: 'Elena Builes', text: 'Excelent!', date: '2017-09-11T11:30:05.919Z' },
    ]
    return new Promise((resolve) => {
        const response = {
            comments: comments.slice(offset, limit),
            total: comments.length
        }

        console.log(offset)
        console.log(limit)
        console.log(response)
        resolve(response)
    })
}

const articleApi = {
    getArticle,
    getComments
}

export default articleApi