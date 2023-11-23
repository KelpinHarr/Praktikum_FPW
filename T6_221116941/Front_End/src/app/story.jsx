import {createSlice, current} from "@reduxjs/toolkit";

export const story = createSlice({
    name: "story",
    initialState: {
        detailStory: {
            story_id: 0
        }
    },
    reducers: {
        doOverview: (state, action) => {
            const {story_id} = action.payload;
            state.detailStory = {
                story_id: story_id
            }
        }
    }
})
export const {doOverview} = story.actions;
export default story.reducer;