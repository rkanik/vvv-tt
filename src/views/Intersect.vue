<template>
	<div class="max-w-5xl mx-auto xl:mt-20">
		<v-card class="!shadow rounded">
			<v-card-title>Intersect</v-card-title>
			<v-card-subtitle>Scroll down to see the effect</v-card-subtitle>
		</v-card>
		<v-list class="!bg-transparent xl:mt-8">
			<v-list-item
				v-for="todo in todos"
				:key="todo.id"
				class="mt-3 bg-white shadow"
			>
				<v-list-item-icon>
					<v-checkbox
						v-model="todo.completed"
						hide-details
						class="ma-0 pa-0"
					></v-checkbox>
				</v-list-item-icon>
				<v-list-item-content>
					<v-list-item-title
						class="capitalize"
						:class="{
							'line-through opacity-50': todo.completed,
						}"
					>
						{{ todo.title }}
					</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-list>

		<div v-intersect="onIntersect" class="text-center mt-4 relative">
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
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

import { Todo, Computed } from '@/types'
import { mapActions, mapGetters } from 'vuex'
import { Pagination, sleep } from '@/plugins/vuelpers'

export default Vue.extend({
	name: 'Intersect',
	data: () => ({
		page: 1,
		limit: 15,
		isLoading: false,
	}),
	computed: {
		...({ ...mapGetters('todos', ['$todos']) } as Computed<{
			$todos: Pagination<Todo>
		}>),
		todos(): Todo[] {
			return this.$todos.data.slice(0, this.limit * this.page)
		},
	},
	created() {
		this.fetchTodos()
	},
	methods: {
		...mapActions('todos', ['fetchTodos']),
		async onIntersect(entries: any) {
			if (this.isLoading || !entries[0].isIntersecting) return
			if (this.limit * this.page >= this.$todos.data.length) return

			this.isLoading = true
			await sleep(1000)
			this.isLoading = false

			this.page++
		},
	},
})
</script>
