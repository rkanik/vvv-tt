<template>
	<span
		class="base-transition"
		:style="{
			[`--transition-translate`]: `${translate}px`,
			[`--transition-duration`]: `${duration}ms`,
		}"
	>
		<transition :name="name" mode="out-in">
			<slot></slot>
		</transition>
	</span>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	name: 'BaseTransition',
	props: {
		name: {
			type: String,
			default: 'slide-y',
		},
		translate: {
			type: Number,
			default: -12,
		},
		duration: {
			type: Number,
			default: 250,
		},
	},
})
</script>

<style lang="scss">
.base-transition {
	/* SLIDE Y */
	.slide-y-enter,
	.slide-y-leave-to {
		opacity: 0;
		transform: translateY(var(--transition-translate));
	}
	.slide-y-enter-active,
	.slide-y-leave-active {
		transition: all var(--transition-duration) ease;
	}
	.slide-y-enter-to,
	.slide-y-leave {
		opacity: 1;
		transform: translateY(0);
	}

	/* SLIDE X */
	.slide-x-enter,
	.slide-x-leave-to {
		opacity: 0;
		transform: translateX(var(--transition-translate));
	}
	.slide-x-enter-active,
	.slide-x-leave-active {
		transition: all var(--transition-duration) ease;
	}
	.slide-x-enter-to,
	.slide-x-leave {
		opacity: 1;
		transform: translateX(0);
	}
}
</style>
