import { configureStore } from '@reduxjs/toolkit'
import localeSlice from './features/header/localeSlice'
import themeSlice from './features/header/themeSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      local: localeSlice,
      theme: themeSlice,
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
