import { AuthModule, AuthState, UsersModule, UsersState } from './modules'

export type Modules = {
	auth: AuthModule
	users: UsersModule
}

export type RootState = {
	auth: AuthState
	users: UsersState
}
