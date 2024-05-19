export const selectIsLoggedId = (state) => state.auth.isLoggedIn;
export const selectUser = (state) => state.auth.user;
export const selectLoading = (state) => state.auth.loading;
export const selectRefreshing = (state) => state.auth.isRefreshing;
export const selectError = (state) => state.auth.error;
