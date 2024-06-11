import { configureStore } from '@reduxjs/toolkit'
import mainSlice from './features/Main/mainSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      main: mainSlice,
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
