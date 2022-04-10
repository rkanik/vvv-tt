<template>
	<div>
		{{ todosLenth }}
		<pre>{{ todos }}</pre>
	</div>
</template>

<script lang="ts">
import {
	ref,
	defineComponent,
	computed,
	onActivated,
	onBeforeMount,
	onBeforeUpdate,
	onDeactivated,
	onErrorCaptured,
	onScopeDispose,
	onUnmounted,
	watch,
	watchEffect,
	toRefs,
	toRef,
	watchSyncEffect,
	watchPostEffect,
	useSlots,
	useCssModule,
	useAttrs,
	createRef,
	createApp,
	nextTick,
	isReactive,
	isReadonly,
	isRef,
	inject,
	provide,
	triggerRef,
	onUpdated,
	onMounted,
} from '@vue/composition-api'

export default defineComponent({
	name: 'CompositionApi',
	setup() {
		const todos = ref([])

		const fetchTodos = () => {
			fetch('https://jsonplaceholder.typicode.com/todos')
				.then(res => res.json())
				.then(res => (todos.value = res))
		}

		console.log('setup')
		fetchTodos()

		onActivated(() => {
			console.log('activated')
		})

		onMounted(() => {
			console.log('mounted')
		})

		watch(
			() => todos.value,
			() => {
				console.log('todos changed', todos.value)
			},
			{
				deep: true,
				immediate: true,
			}
		)

		watchEffect(
			() => {
				console.log('watchEffect', todos.value)
			},
			{
				flush: 'sync',
			}
		)

		const todosLenth = computed(() => todos.value.length)

		watch(
			todosLenth,
			() => {
				console.log('todosLenth changed', todosLenth.value)
			},
			{ immediate: true }
		)

		onBeforeMount(() => {
			console.log('beforeMount')
		})

		onBeforeUpdate(() => {
			console.log('beforeUpdate')
		})

		onUpdated(() => {
			console.log('updated')
		})

		onDeactivated(() => {
			console.log('deactivated')
		})

		onErrorCaptured(() => {
			console.log('errorCaptured')
		})

		onScopeDispose(() => {
			console.log('scopeDispose')
		})

		onUnmounted(() => {
			console.log('unmounted')
		})

		nextTick(() => {
			console.log('nextTick')
		})

		return {
			todos,
			todosLenth,
			fetchTodos,
		}
	},
})
</script>
