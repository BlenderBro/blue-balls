<template>
	<div id="app">
		<headerPartial></headerPartial>
		<transition name="fade">
			<router-view></router-view>
		</transition>
		<Footer></Footer>
	</div>
</template>

<script>
import headerPartial from './components/partials/headerPartial'
import Footer from './components/partials/Footer'
export default {
	name: 'app',
	components: {
		headerPartial,
		Footer
	}
}
</script>

<style scoped lang="css">
#app{
	width: 100%;
}
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .35s;
}

.fade-enter-active {
  transition-delay: .35s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
