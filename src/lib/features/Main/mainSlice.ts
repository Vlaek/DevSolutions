import { RootState } from '@/lib/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IMainState {
  theme: string
  locale: string
  isModalActive: boolean
}

const initialState: IMainState = {
  theme: 'Dark',
  locale: 'ru',
  isModalActive: false,
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
    changeIsModalActive: (state, action: PayloadAction<boolean>) => {
      state.isModalActive = action.payload
    },
  },
})

export const { changeTheme, changeLocale, changeIsModalActive } = mainSlice.actions

export const selectTheme = (state: RootState) => state.main.theme
export const selectLocale = (state: RootState) => state.main.locale
export const selectIsModalActive = (state: RootState) => state.main.isModalActive

export default mainSlice.reducer
