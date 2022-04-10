<template>
	<v-btn>
		<slot>Base Button</slot>
	</v-btn>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	name: 'BaseButton',
})
</script>
