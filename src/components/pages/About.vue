<template lang="html">
	<section class="section is-about">
		<div class="container">
			<div class="columns">
				<div class="column">
					<h2 class="title has-text-centered">We want to hear from You!</h2>
					<p class="subtitle has-text-centered">Whether you want to work with us, ask a question (we always answer), or just say hello, we'd love <br>
					 to hear from you. If this form is overkill, please give us a shout on Twitter, instead (@vlad_dobrescu).</p>
				</div>
			</div>
			<div class="columns">
        <div class="column has-text-centered">
          Second column
        </div>
        <div class="column has-text-centered">
          Third column
        </div>
      </div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'about'
}
</script>

<style scoped lang="css">
.select select{
	color: var(--text)
}

section.is-about{
	padding-top: 10em;
	padding-bottom: 4em;
}

hr{
	color: var(--aqua);
	padding-top: 2px;
	margin-top: 4px;
}
</style>
