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

		<div>
			<div class="d-flex align-center text-center justify-center">
				<v-avatar
					:color="isIntersecting ? 'green lighten-1' : 'red darken-2'"
					class="mr-3 swing-transition"
					size="32"
				></v-avatar>
			</div>

			<v-responsive class="overflow-y-auto" max-height="400">
				<v-responsive
					height="200vh"
					class="d-flex align-center text-center pa-2"
				>
					<v-card
						v-intersect="onIntersect"
						class="mx-auto"
						max-width="336"
					>
						<v-card-title>Card title</v-card-title>

						<v-card-text>
							Phasellus magna. Quisque rutrum. Nunc egestas, augue at
							pellentesque laoreet, felis eros vehicula leo, at malesuada
							velit leo quis pede. Aliquam lobortis. Quisque libero
							metus, condimentum nec, tempor a, commodo mollis, magna. In
							turpis. In dui magna, posuere eget, vestibulum et, tempor
							auctor, justo. In turpis. Pellentesque dapibus hendrerit
							tortor. Ut varius tincidunt libero.
						</v-card-text>
					</v-card>
				</v-responsive>
			</v-responsive>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import HelloWorld from '@/components/HelloWorld.vue'

export default defineComponent({
	name: 'Home',
	components: {
		HelloWorld,
	},
	setup() {
		const isIntersecting = ref(false)
		const onIntersect = (entries: any, observer: any) => {
			console.log('onIntersect', entries, observer)
			isIntersecting.value = entries[0].isIntersecting
		}
		return {
			onIntersect,
			isIntersecting,
		}
	},
})
</script>
