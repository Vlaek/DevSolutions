import { configureStore } from '@reduxjs/toolkit'
import localeSlice from './features/header/localeSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      local: localeSlice,
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
