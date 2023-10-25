import {createSlice} from '@reduxjs/toolkit';


const inicialState = []

export const publicSlice = createSlice({
    name: 'publications',
    initialState: inicialState,
    reducers:{
        SeePosts: (state, action) => {
            return action.payload

        },
        AddPosts: (state, action) => {
            return [
                ...state, 
                {
                    id: action.payload.id,
                    title: action.payload.title,
                    body: action.payload.message
                },
            ]
            },
}
})

export const { SeePosts, AddPosts } = publicSlice.actions

export default publicSlice.reducer