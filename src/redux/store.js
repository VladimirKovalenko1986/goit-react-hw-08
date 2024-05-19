import { configureStore } from "@reduxjs/toolkit";
import contactSliceReducer from "./contacts/slice";
import filterSliceReducer from "./filters/slice";
import authReducer from "./auth/slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const authPersistReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    contacts: contactSliceReducer,
    filters: filterSliceReducer,
    auth: authPersistReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
