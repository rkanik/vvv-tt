import { User } from '@/types'
import { ActionTree } from 'vuex'
import { RootState } from '../index'

import {
	createGetters,
	createMutations,
	SET,
	UPDATE,
	DELETE,
	UNSHIFT,
} from 'vuelpers'

export type AuthState = {
	token: string | null
	currentUser: User | null
}

const newAuthState = (): AuthState => {
	return {
		token: null,
		currentUser: null,
	}
}

const state = newAuthState()
const getters = createGetters<AuthState, RootState>('token', 'currentUser')
const mutations = createMutations<AuthState>(SET, UNSHIFT, UPDATE, DELETE)

const actions: ActionTree<AuthState, RootState> = {
	login() {
		// commit('SET_TOKEN', payload.token)
	},
}

const authModule = {
	state,
	getters,
	actions,
	mutations,
	namespaced: true,
}

export type AuthModule = typeof authModule
export default authModule
