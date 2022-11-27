import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import articlesApi from '../../api/articles'

//state
const initialState = {
    list: [],
    total: 0
}

//actions
export const loadList = createAsyncThunk(
    'articles/fetchList',
    async() => {
        const response = await articlesApi.getList()
        return response
    }
)

//store
export const articleSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        setList: (state, action) => {
            state.list = action.payload
        },
    },
    extraReducers(builder){
        builder
            .addCase(loadList.fulfilled, (state, action) => {
                state.list = action.payload
            })
    }
})

//actions
export const {setList} = articleSlice.actions

//selectors
export const selectList = (state) => state.articles.list

export default articleSlice.reducer