<template lang="html">
	<section class="hero">
		<div class="hero-body">
			<div class="container">
				<div class="columns">
					<div class="column is-half">
						<h1 class="title">Bring your ideea to life!</h1>
						<h2 class="subtitle"><router-link class="button is-primary is-medium" to="/estimator">Request a Quote</router-link></h2>
					</div>
					<div class="column">
						<img src="/static/img/bg.png" alt="">
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'hero'
}
</script>

<style scoped lang="css">
	.hero{
		height: 600px;
		background-image: url('/static/img/hero-bg.png');
		/*background-color: linear-gradient(141deg, #018eff 0%, #3273dc 71%, #4366e5 100%);*/
		background-repeat: no-repeat;
	}
	.hero .container{
		padding-top: 11em;
	}
	.title{
		color: white;
		font-weight: 300;
	}
	.subtitle{
		color: white;
		padding-top: 1.2em;
	}
	.button.is-primary{
		background-color: var(--aqua);
		border-radius: 8px;
	}
</style>
