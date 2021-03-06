import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'times',
  initialState: {
    key: '',
  },
  reducers: {
    updateKey: (state, action) => {
      state.key = action.payload.toLowerCase()
    },
  },
})

export const { updateKey } = slice.actions
export default slice.reducer
