import { RootState } from '@/lib/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ILocaleState {
  locale: string
}

const initialState: ILocaleState = {
  locale: 'ru',
}

export const localeSlice = createSlice({
  name: 'locale',
  initialState,
  reducers: {
    changeLocale: (state: ILocaleState, action: PayloadAction<string>) => {
      state.locale = action.payload
    },
  },
})

export const { changeLocale } = localeSlice.actions

export const selectLocale = (state: RootState) => state.local.locale

export default localeSlice.reducer
