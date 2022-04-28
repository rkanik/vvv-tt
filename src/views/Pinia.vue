<template>
	<div class="max-w-5xl mx-auto xl:mt-20">
		<v-card class="!shadow rounded">
			<v-card-title>Pinia Todo Store</v-card-title>
			<!-- <v-card-subtitle>Scroll down to see the effect</v-card-subtitle> -->
		</v-card>

		<v-form
			ref="formRef"
			v-model="todoForm.isValid"
			class="mt-4"
			@submit.prevent="onCreateTodo"
		>
			<v-card>
				<v-card-text>
					<v-text-field
						v-model="todoForm.todo.title"
						label="Title"
						:rules="[rules.required('Title')]"
					></v-text-field>
					<v-textarea
						v-model="todoForm.todo.description"
						:rows="2"
						hide-details
						label="Description"
					></v-textarea>
				</v-card-text>
				<v-card-actions class="px-4 pb-4">
					<base-button
						depressed
						type="submit"
						:loading="todoForm.isLoading"
					>
						Create Todo
					</base-button>
				</v-card-actions>
			</v-card>
		</v-form>

		<v-list class="!bg-transparent xl:mt-8">
			<v-list-item
				v-for="todo in todoStore.todos.data"
				:key="todo.id"
				class="mt-3 bg-white shadow group"
			>
				<v-list-item-icon>
					<v-progress-circular
						v-if="isUpdating(todo)"
						size="24"
						indeterminate
						color="primary"
					></v-progress-circular>
					<v-checkbox
						v-else
						:value="todo.completed"
						:input-value="todo.completed"
						hide-details
						class="ma-0 pa-0"
						@change="onToggleCompleted(todo)"
					></v-checkbox>
				</v-list-item-icon>
				<v-list-item-content
					:class="{
						'line-through opacity-50': todo.completed,
					}"
				>
					<v-list-item-title class="capitalize">
						{{ todo.title }}
					</v-list-item-title>
					<v-list-item-subtitle>
						{{ todo.description }}
					</v-list-item-subtitle>
				</v-list-item-content>
				<v-list-item-action>
					<v-btn
						icon
						color="error"
						class="transform scale-0 group-hover:scale-100"
						:loading="isDeleting(todo)"
						:class="{
							'scale-100': isDeleting(todo),
						}"
						@click="onDeleteTodo(todo)"
					>
						<v-icon>mdi-delete</v-icon>
					</v-btn>
				</v-list-item-action>
			</v-list-item>
		</v-list>

		<!-- <div v-intersect="onIntersect" class="text-center mt-4 relative">
			<div
				v-if="isLoading"
				class="absolute left-1/2 transform -translate-x-1/2 bottom-1 rounded-full bg-white shadow-lg p-1.5"
			>
				<v-progress-circular
					indeterminate
					size="32"
					color="primary"
				></v-progress-circular>
			</div>
		</div> -->
	</div>
</template>

<script lang="ts">
import { Todo, VFormRef } from '@/types'
import { useValidator } from '@/composables/useValidator'
import { useTodoStore } from '@/store/pinia/useTodoStore'
import { ref, reactive, defineComponent } from '@vue/composition-api'

export default defineComponent({
	name: 'Pinia',
	setup() {
		const rules = useValidator('required')
		const todoStore = useTodoStore()
		const currentTodo = reactive({
			isUpdating: false,
			isDeleting: false,
			data: { id: 0 } as Partial<Todo>,
		})
		const todoForm = reactive({
			isValid: true,
			isLoading: false,
			todo: {
				title: '',
				description: '',
			},
		})
		const refs = {
			formRef: ref<VFormRef | null>(null),
		}

		// Initialize
		todoStore.fetchTodos()

		// Methods
		const onCreateTodo = async () => {
			if (!refs.formRef.value?.validate()) return
			todoForm.isLoading = true
			const [err] = await todoStore.createTodo(todoForm.todo)
			todoForm.isLoading = false
			if (!err) {
				refs.formRef.value?.reset()
				todoForm.todo = { title: '', description: '' }
			}
		}

		const onToggleCompleted = async (todo: Todo) => {
			currentTodo.data = todo
			currentTodo.isUpdating = true
			const [err] = await todoStore.updateTodo({
				...todo,
				completed: !todo.completed,
			})
			currentTodo.isUpdating = false
			if (!err) currentTodo.data = { id: 0 }
		}

		const onDeleteTodo = async (todo: Todo) => {
			if (
				!window.confirm(`Are you sure you want to delete "${todo.title}"?`)
			) {
				return
			}

			currentTodo.data = todo
			currentTodo.isDeleting = true
			const [err] = await todoStore.deleteTodo(todo)
			currentTodo.isDeleting = false

			if (!err) currentTodo.data = { id: 0 }
		}

		const isUpdating = (todo: Todo) => {
			return todo.id === currentTodo.data.id && currentTodo.isUpdating
		}

		const isDeleting = (todo: Todo) => {
			return todo.id === currentTodo.data.id && currentTodo.isDeleting
		}

		return {
			...refs,
			// Data
			rules,
			todoForm,
			todoStore,
			currentTodo,
			// Methods
			isUpdating,
			isDeleting,
			onCreateTodo,
			onDeleteTodo,
			onToggleCompleted,
		}
	},
})
</script>
