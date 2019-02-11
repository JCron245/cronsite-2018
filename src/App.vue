<template>
  <div id="app">
    <header id="nav">
      <h1>
        <router-link to="/">Jon Cornwell</router-link>
      </h1>

			<router-link to="">
				<file-text-icon></file-text-icon>
				<span>Blog</span>
			</router-link>

      <a href="https://github.com/JCron245">
        <github-icon></github-icon>
        <span>Github</span>
      </a>

      <a href="https://www.linkedin.com/in/jonathon-cornwell-058a38bb">
        <linkedin-icon></linkedin-icon>
        <span>Linkedin</span>
      </a>

      <router-link to="/dogs">
				<dog-icon></dog-icon>
				<span>Dogs</span>
      </router-link>

    </header>
    <main>
      <transition
        name="fade"
        mode="out-in"
        @beforeLeave="beforeLeave"
        @enter="enter"
        @afterEnter="afterEnter"
      >
        <router-view />
      </transition>
    </main>
  </div>
</template>

<script>
import { GithubIcon, LinkedinIcon, PlusSquareIcon, FileTextIcon } from 'vue-feather-icons';
import DogIcon from './assets/dog.svg';

export default {
	components: {
		GithubIcon,
		LinkedinIcon,
		PlusSquareIcon,
		DogIcon,
		FileTextIcon
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
	> #nav {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		width: 100%;
		background-color: #212121;
		color: #009688;
		position: sticky;
		top: 0;
		padding: 0.75rem;
		box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
			0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
		a {
			padding: 0.25rem 0.05rem;
			margin: 0 0.5rem;
			border-bottom: 1px solid #009688;
			color: #009688;
			svg {
				width: 1rem;
				height: 1rem;
				margin-right: 0.25rem;
			}
			span {
				vertical-align: middle;
			}
		}
		h1 {
			margin: 0;
			padding: 0;
			margin-right: auto;
			a {
				border: 0;
			}
		}
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
