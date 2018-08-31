<template>
  <div id="app">
    <header id="nav">
    </header>
		<main>
			<transition>
				<router-view/>
			</transition>
		</main>
  </div>
</template>

<style lang="scss">
#app {
	background-color: green;
	width: 100%;
}
</style>
