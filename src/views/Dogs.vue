<template>
	<div class="dogs">
		<div class="grid">
			<img src="@/assets/hades.png" title="Hades" alt="My dog Hades" />
			<img src="@/assets/astros-collage.png" title="Astros" alt="Collage of my dog Astros" />
			<img src="@/assets/astros-window.png" title="Astros" alt="Astros looking out a window" />
			<img src="@/assets/hades-puppy.png" title="Hades" alt="Hades sleeping as a puppy" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'home'
};
</script>

<style lang="scss" scoped>
.dogs {
	width: 80vw;
	@media only screen and (max-width: 767px) {
		width: 100vw;
	}
	max-width: 1200px;
	margin: 0 auto;
	background-color: transparent;
	padding: 1rem;
	font-family: 'Roboto', sans-serif;
	.grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-auto-rows: auto;
		gap: 1rem;
		padding: 0 0.2rem;
		img {
			width: 100%;
			box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
		}
	}
}
</style>
