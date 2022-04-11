<template>
	<div class="home">
		<v-card width="400">
			<v-card-title>I am a card</v-card-title>
			<v-card-text class="!font-bold !text-red-500">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
				itaque officia culpa reprehenderit, molestias eius officiis, debitis
				quod vitae voluptatibus ipsa ipsam? Odit, harum et sint enim
				reiciendis quas nemo.
				<div class="italic text-slate-500 mt-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
					itaque officia culpa reprehenderit, molestias eius officiis,
					debitis quod vitae voluptatibus ipsa ipsam? Odit, harum et sint
					enim reiciendis quas nemo.
				</div>
			</v-card-text>
		</v-card>

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
