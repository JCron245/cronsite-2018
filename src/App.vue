<template>
	<div id="app">
		<app-header />
		<main>
			<transition name="fade" mode="out-in" @beforeLeave="beforeLeave" @enter="enter" @afterEnter="afterEnter">
				<router-view />
			</transition>
		</main>
	</div>
</template>

<script>
import { PlusSquareIcon } from 'vue-feather-icons';
import AppHeader from './components/Header.vue';

export default {
	components: {
		PlusSquareIcon,
		'app-header': AppHeader
	},
	methods: {
		beforeLeave(element) {
			this.prevHeight = getComputedStyle(element).height;
		},
		enter(element) {
			const { height } = getComputedStyle(element);
			element.style.height = this.prevHeight;
			setTimeout(() => {
				element.style.height = height;
			});
		},
		afterEnter(element) {
			element.style.height = 'auto';
		}
	}
};
</script>

<style lang="scss">
#app {
	width: 100vw;
	max-width: 100%;
	.navbar {
		background-color: #222;
		color: #009688;
		position: sticky;
		top: 0;
		padding: 0.75rem;
		box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);

		.title {
			border-bottom: 0;
		}
	}
	.navbar-toggler {
		background-color: #009688;
		border-color: #009688;
	}
	.nav-link,
	.navbar-brand {
		padding: 0.25rem 0.05rem;
		margin: 0 0.5rem;
		border-bottom: 1px solid #009688;
		@media only screen and (max-width: 767px) {
			border-bottom: 0;
		}
		color: #009688;
	}
	svg {
		width: 1rem;
		height: 1rem;
		margin-right: 0.25rem;
	}
	.nav-item-title {
		vertical-align: middle;
	}
	.fade-enter-active,
	.fade-leave-active {
		transition-duration: 0.29s;
		transition-property: height, opacity;
		transition-timing-function: ease;
		overflow: hidden;
	}
	.fade-enter,
	.fade-leave-active {
		opacity: 0;
	}
}
</style>
