<template>
	<div class="VueUse">
		<h4>This is VueUse component</h4>
		<pre>pos: {{ x }}, {{ y }}</pre>
		<pre>isDark: {{ isDark }}</pre>
		<pre>store: {{ store }}</pre>

		<base-button @click="eyeDropper.open">Open Eye Dropper</base-button>
		<pre>eyeDropper: {{ eyeDropper }}</pre>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import {
	useMouse,
	useEyeDropper,
	useLocalStorage,
	usePreferredDark,
} from '@vueuse/core'

export default defineComponent({
	name: 'VueUse',
	setup() {
		// tracks mouse position
		const { x, y } = useMouse()

		// is user prefers dark theme
		const isDark = usePreferredDark()

		// persist state in localStorage
		const store = useLocalStorage('my-storage', {
			name: 'Apple',
			color: 'red',
		})

		// const { isSupported, open, sRGBHex } = useEyeDropper()
		const eyeDropper = useEyeDropper()

		return { eyeDropper, x, y, isDark, store }
	},
})
</script>
