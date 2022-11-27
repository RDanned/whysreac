import { configureStore } from '@reduxjs/toolkit'
import articles from './modules/articles'

// Redux won't be used in this small project
export function makeStore() {
    return configureStore({
        reducer: {
            articles: articles,
        },
    })
}

const store = makeStore()

export default store