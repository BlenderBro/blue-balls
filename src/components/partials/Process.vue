<template lang="html">
	<section class="section is-case-studies">
		<div class="container">
			<div class="columns">
				<div class="column">
					<h2 class="title has-text-centered">Working with us</h2>
					<p class="subtitle has-text-centered">
						In order to build your app for it's target audience in the best, most efficient way, we require all<br>
						our clients to go with us trough our Discovery Process
					</p>
				</div>
			</div>
			<div class="row">
				<div class="columns">
					<div class="column has-text-centered">
						<img style="height:80px" src="/static/img/svg/info-circle.svg" alt="Web Solutions">
						<h3>Information Gathering</h3>
						<p>This first step is actually the most important one, as it involves a solid understanding
						 of the company it is created for. It involves a good understanding of <b>you</b> – what your
					  	business goals and dreams are, and how we can help you achieve those goals.</p>
					</div>
					<div class="column has-text-centered">
						<img style="height:80px" src="/static/img/svg/map.svg" alt="Web Solutions">
						<h3>Planning</h3>
						<p>The end-user of the web site or app – aka your customer – must be kept in mind when in the planning phase.
						 These are, after all, the people who will be learning about your service or buying your product</p>
					</div>
					<div class="column has-text-centered">
						<img style="height:80px" src="/static/img/svg/layers.svg" alt="Web Solutions">
						<h3>Design</h3>
						<p>In this phase, communication between both you and your designer is crucial to ensure that the final product
						will match your needs and taste. It is important that you work closely with your designer, exchanging ideas,
					  	until you arrive at the final design for your web site.</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Process'
}
</script>

<style scoped lang="css">
.is-case-studies{
	background-color: var(--gri);
	padding-top: 3em;
	background-image: -ms-linear-gradient(right, #52489C 0%, #4062BB 100%);
	background-image: -moz-linear-gradient(right, #52489C 0%, #4062BB 100%);
	background-image: -o-linear-gradient(right, #52489C 0%, #4062BB 100%);
	background-image: -webkit-gradient(linear, right top, left top, color-stop(0, #52489C), color-stop(100, #4062BB));
	background-image: -webkit-linear-gradient(right, #52489C 0%, #4062BB 100%);
	background-image: linear-gradient(to left, #52489C 0%, #4062BB 100%);
}
h3, h2, p {
	color: white;
}
</style>
