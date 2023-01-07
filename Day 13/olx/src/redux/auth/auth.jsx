import user_types from "./types";
const init_state = {
  id: 0,
  username: "",
  password: "",
  avatar_url: "",
  email: "",
};

function userReducer(state = init_state, action) {
  if (action.type === user_types.USER_LOGIN) {
    return {
      ...state,
      id: action.payload.id,
      username: action.payload.username,
      password: action.payload.password,
      avatar_url: action.payload.avatar_url,
      email: action.payload.email,
    };
  } else if (action.type === user_types.USER_LOGOUT) {
    return init_state;
  }
  return state;
}

export default userReducer;
