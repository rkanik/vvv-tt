<template>
	<!-- :color="color"
		:loading="loading"
		:depressed="depressed" -->
	<v-btn
		class="normal-case px-6"
		:type="type"
		:color="color"
		:loading="loading"
		:depressed="depressed"
		:disabled="disabled"
		@click="$emit('click', $event)"
	>
		<slot>Base Button</slot>
	</v-btn>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	name: 'BaseButton',
	props: {
		loading: {
			default: false,
			type: Boolean as Vue.PropType<boolean>,
		},
		disabled: {
			default: false,
			type: Boolean as Vue.PropType<boolean>,
		},
		depressed: {
			default: false,
			type: Boolean as Vue.PropType<boolean>,
		},
		type: {
			default: 'button',
			type: String as Vue.PropType<string>,
		},
		color: {
			default: 'primary',
			type: String as Vue.PropType<string>,
		},
	},
})
</script>
