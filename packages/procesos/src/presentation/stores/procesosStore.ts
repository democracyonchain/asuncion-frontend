import { configureStore } from '@reduxjs/toolkit';
import { procesosSlice} from '@presentation/actions';


export const store = configureStore(
	{

		reducer: {			
			procesos:procesosSlice.reducer,		
		},

		middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false,})
	}
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch