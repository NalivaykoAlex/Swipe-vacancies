export const FetchData = () => async dispatch => {
  dispatch({
    type: "FETCH_DATA",
    initialized: true,
    loading: false
  });
};

export const PushDislikes = dislikes => async dispatch => {
  dispatch({ type: "PUSH_DISLIKES", dislikes });
};

export const Pushlikes = likes => async dispatch => {
  dispatch({ type: "PUSH_LIKES", likes });
};
