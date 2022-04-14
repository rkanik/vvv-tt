import {
	AuthModule,
	AuthState,
	TodosModule,
	TodosState,
	UsersModule,
	UsersState,
} from './modules'

export type Modules = {
	auth: AuthModule
	users: UsersModule
	todos: TodosModule
}

export type RootState = {
	auth: AuthState
	users: UsersState
	todos: TodosState
}
