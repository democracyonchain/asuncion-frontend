import { configureStore } from '@reduxjs/toolkit';
import {librarySlice} from '@store/slices';
import {autenticacionApi} from '@store/apis'

export const store = configureStore({
	reducer: {
		
		actionShared:librarySlice.reducer,

		[autenticacionApi.reducerPath]:autenticacionApi.reducer,

	},

  	middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false,})
	.concat(autenticacionApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch