export enum ActionTypes {
  REGISTER = "[Auth] Register",
  REGISTER_SUCCESS = "[Auth] Register Success",
  REGISTER_FAILURE = "[Auth] Register Failure",

  LOGIN = "[Auth] Login",
  LOGIN_SUCCESS = "[Auth] Login Success",
  LOGIN_FAILURE = "[Auth] Login Failure",

  CURRENT_USER = "[Auth] Current User",
  CURRENT_USER_SUCCESS = "[Auth] Current User Success",
  CURRENT_USER_FAILURE = "[Auth] Current User Failure",

  UPDATE_CURRENT_USER = "[Auth] Update Current User",
  UPDATE_CURRENT_USER_SUCCESS = "[Auth] Update Current User Success",
  UPDATE_CURRENT_USER_FAILURE = "[Auth] Update Current User Failure",

  LOGOUT_CURRENT_USER = "[Auth] Logout Current User"
}