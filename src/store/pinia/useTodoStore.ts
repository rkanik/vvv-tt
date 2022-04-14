import { JsonApi } from '@/api'
import { defineStore } from 'pinia'
import { Filter, Todo } from '@/types'
import { Pagination, createPaginaion, handleAction } from '@/plugins/vuelpers'

type TodoState = {
	filter: Filter
	nextId: number
	todos: Pagination<Todo>
}

const useTodoStore = defineStore({
	id: 'todos',
	state: () => {
		return {
			nextId: 999,
			filter: 'all',
			todos: createPaginaion(),
		} as TodoState
	},
	getters: {
		finishedTodos(state): Todo[] {
			return state.todos.data.filter(todo => todo.completed)
		},
		unfinishedTodos(state): Todo[] {
			return state.todos.data.filter(todo => !todo.completed)
		},
		filteredTodos(): Todo[] {
			if (this.filter === 'finished') {
				return this.finishedTodos
			} else if (this.filter === 'unfinished') {
				return this.unfinishedTodos
			}
			return this.todos.data
		},
	},
	actions: {
		fetchTodos() {
			if (this.todos.data.length) return [false, this.todos]
			return handleAction(JsonApi.get('/todos'), (res: any) => {
				this.todos.data = res.data
			})
		},
		updateTodo(todo: Todo) {
			return handleAction(
				JsonApi.patch('/todos/' + todo.id, todo),
				(res: any) => {
					this.todos.data = this.todos.data.map(todoItem => {
						if (todoItem.id !== todo.id) return todoItem
						return {
							...todoItem,
							title: res.title,
							completed: res.completed,
							description: res.description,
						}
					})
				}
			) as Promise<[boolean, Todo]>
		},
		createTodo(todo: Pick<Todo, 'title' | 'description'>) {
			return handleAction(JsonApi.post('/todos', todo), (res: any) => {
				this.todos.data.unshift({
					id: this.nextId++,
					title: res.title,
					description: res.description,
					completed: false,
				})
				this.todos.total += 1
			}) as Promise<[boolean, Todo]>
		},
	},
	persist: {
		key: '__[VVV-TT]__TODOS__',
		storage: window.sessionStorage,
		// // paths: ['nested.data'],
		// beforeRestore: context => {
		// 	console.log('Before hydration...', context)
		// },
		// afterRestore: context => {
		// 	console.log('After hydration...', context)
		// },
	},
})

export { useTodoStore }
