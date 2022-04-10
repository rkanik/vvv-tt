<template>
	<div class="home">
		<BaseInput />
		<HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

const HelloWorld = () => import('@/components/HelloWorld.vue')

@Component({
	components: {
		HelloWorld,
	},
})
export default class Home extends Vue {}
</script>
