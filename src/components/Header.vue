<template>
	<b-navbar toggleable="md">
		<b-navbar-brand to="/" class="title">Jon Cornwell</b-navbar-brand>
		<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
		<b-collapse is-nav id="nav_collapse">
			<b-navbar-nav class="ml-auto">
				<b-nav-item href="#">
					<file-text-icon></file-text-icon>
					<span class="nav-item-title">Blog</span>
				</b-nav-item>
				<b-nav-item href="https://github.com/JCron245">
					<github-icon></github-icon>
					<span class="nav-item-title">Github</span>
				</b-nav-item>
				<b-nav-item href="https://www.linkedin.com/in/jonathon-cornwell-058a38bb">
					<linkedin-icon></linkedin-icon>
					<span class="nav-item-title">Linkedin</span>
				</b-nav-item>
				<b-nav-item href="http://croncolor.com">
					<edit2-icon></edit2-icon>
					<span>Color Tool</span>
				</b-nav-item>
				<b-nav-item to="/dogs">
					<dog-icon></dog-icon>
					<span class="nav-item-title">Dogs</span>
				</b-nav-item>
			</b-navbar-nav>
		</b-collapse>
	</b-navbar>
</template>

<script>
import { GithubIcon, LinkedinIcon, FileTextIcon, Edit2Icon } from 'vue-feather-icons';
import { BNavbar, BNavbarNav, BNavbarBrand, BNavbarToggle, BCollapse, BNavItem } from 'bootstrap-vue';
import DogIcon from '../assets/dog.svg';

export default {
	name: 'app-header',
	components: {
		GithubIcon,
		LinkedinIcon,
		DogIcon,
		FileTextIcon,
		Edit2Icon,
		'b-navbar': BNavbar,
		'b-navbar-nav': BNavbarNav,
		'b-navbar-brand': BNavbarBrand,
		'b-navbar-toggle': BNavbarToggle,
		'b-collapse': BCollapse,
		'b-nav-item': BNavItem
	}
};
</script>

<style lang="scss">
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
</style>
