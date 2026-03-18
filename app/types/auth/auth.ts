export interface LoginResponse {
  access_token: string;
  user: User;
}

export interface User {
  id: string;
  username: string;
  password: string;
  profile_picture?: string;
  // whatever your backend's User model returns
}
