import { User } from '@/types'
import { RootState } from '../index'
import {
	createGetters,
	createMutations,
	SET,
	DELETE,
	UNSHIFT,
	UPDATE,
	Pagination,
	createPaginaion,
} from 'vuelpers'
import { ActionTree } from 'vuex'

export type UsersState = {
	users: Pagination<User>
}

const newUsersState = (): UsersState => {
	return {
		users: createPaginaion(),
	}
}

const state = newUsersState()
const getters = createGetters<UsersState, RootState>('token', 'currentUser')
const mutations = createMutations<UsersState>(SET, UNSHIFT, UPDATE, DELETE)

const actions: ActionTree<UsersState, RootState> = {
	fetchUsers() {
		// console.log(state, rootState)
		// console.log(rootState.auth.currentUser)
	},
}

const usersModule = {
	state,
	getters,
	actions,
	mutations,
	namespaced: true,
}

export type UsersModule = typeof usersModule
export default usersModule
