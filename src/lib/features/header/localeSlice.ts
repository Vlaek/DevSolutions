import { RootState } from '@/lib/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ILocaleState {
  value: string
}

const initialState: ILocaleState = {
  value: 'ru',
}

export const localeSlice = createSlice({
  name: 'locale',
  initialState,
  reducers: {
    changeLocale: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { changeLocale } = localeSlice.actions

export const selectLocale = (state: RootState) => state.local.value

export default localeSlice.reducer
