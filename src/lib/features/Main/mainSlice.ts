import { RootState } from '@/lib/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IMainState {
  theme: string
  locale: string
}

const initialState: IMainState = {
  theme: 'Dark',
  locale: 'ru',
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload
    },
    changeLocale: (state, action: PayloadAction<string>) => {
      state.locale = action.payload
    },
  },
})

export const { changeTheme, changeLocale } = mainSlice.actions

export const selectTheme = (state: RootState) => state.main.theme
export const selectLocale = (state: RootState) => state.main.locale

export default mainSlice.reducer
