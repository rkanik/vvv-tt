<template>
	<div class="min-h-screen bg-red-500 flex">
		<div
			class="w-20 hover:w-64 transition-all duration-700 bg-white py-4 overflow-hidden"
			@mouseover="isExpanded = true"
			@mouseleave="isExpanded = false"
		>
			<ul class="relative">
				<!-- Movable -->
				<div
					class="h-11 absolute left-4 rounded-l-full right-0 bg-red-500 z-10 top-14 transition-all duration-500"
					:style="{ top: `${(activeIndex - 1) * 44}px` }"
				>
					<!-- Top right inner rounded circle -->
					<div class="absolute w-6 h-6 bg-red-500 right-0 -top-6">
						<div class="absolute bg-white inset-0 rounded-br-full"></div>
					</div>

					<!-- Bottom right innner rounded circle -->
					<div class="absolute w-6 h-6 bg-red-500 right-0 -bottom-6">
						<div class="absolute bg-white inset-0 rounded-tr-full"></div>
					</div>
				</div>

				<!-- List Items -->
				<li v-for="i in 10" :key="i" class="relative z-20">
					<a
						:href="`#${i}`"
						class="px-6 h-11 flex items-center justify-start font-inter text-sm font-medium space-x-5"
						:class="{ group: i !== activeIndex }"
						@click="activeIndex = i"
					>
						<!-- Icon Placeholder -->
						<span
							class="h-8 w-8 flex-none rounded-full bg-gray-300 group-hover:bg-red-500 transition-all duration-500"
						></span>

						<!-- Link label -->
						<span
							class="group-hover:text-red-500 transition-all duration-500 flex-1 whitespace-nowrap"
							:class="[isExpanded ? 'opacity-100' : 'opacity-0']"
						>
							Nav Link {{ i }}
						</span>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref(1)
const isExpanded = ref(false)
</script>
