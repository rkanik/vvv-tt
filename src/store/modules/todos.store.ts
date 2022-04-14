import { Todo } from '@/types'
import { ActionTree } from 'vuex'
import { RootState } from '../index'
import { SET, DELETE, UNSHIFT, UPDATE } from '@/plugins/vuelpers'
import {
	Pagination,
	handleAction,
	createGetters,
	createMutations,
	createPaginaion,
} from '@/plugins/vuelpers'
import { JsonApi } from '@/api'

export type TodosState = {
	todos: Pagination<Todo>
}

const newTodosState = (): TodosState => {
	return {
		todos: createPaginaion(),
	}
}

const state = newTodosState()
const getters = createGetters<TodosState, RootState>('todos')
const mutations = createMutations<TodosState>(SET, UNSHIFT, UPDATE, DELETE)

const actions: ActionTree<TodosState, RootState> = {
	fetchTodos({ commit, state: { todos } }) {
		if (todos.data.length) return [false, todos]
		return handleAction(JsonApi.get('/todos'), (res: any) => {
			commit(SET, { 'todos.data': res.data })
		})
	},
}

const todosModule = {
	state,
	getters,
	actions,
	mutations,
	namespaced: true,
}

export type TodosModule = typeof todosModule
export default todosModule
