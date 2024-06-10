import { configureStore } from '@reduxjs/toolkit';
import { seguridadesSlice} from '@presentation/actions';


export const store = configureStore(
	{

		reducer: {			
			seguridades:seguridadesSlice.reducer,		
		},

		middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false,})
	}
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch