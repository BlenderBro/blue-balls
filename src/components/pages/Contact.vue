<template lang="html">
	<section class="contact">

		<div style="padding-top:3em;" class="container">
			<h1 class="title has-text-centered">Contact Us</h1>
			<p class="subtitle has-text-centered">Fill the form below or contact us at <span>@twitter</span></p>
		</div>

		<div class="columns is-centered">
			<div class="column is-3">
				<div class="field">
					<p class="control has-icons-left has-icons-right">
						<input class="input" type="text" placeholder="First and Last Name">
						<span class="icon is-small is-left">
							<img style="max-width: 40%" src="/static/img/svg/user.svg" alt="">
						</span>
						<p class="help">Required</p>
					</p>
				</div>
				<div class="field">
					<p class="control has-icons-left has-icons-right">
						<input class="input" type="text" placeholder="Subject">
						<span class="icon is-small is-left">
							<img style="max-width: 40%" src="/static/img/svg/commenting.svg" alt="">
						</span>
						<p class="help">Required</p>
					</p>
				</div>
				<div class="field">
					<div class="control">
						<textarea class="textarea" placeholder="Type your message..."></textarea>
					</div>
					<p class="help">Required</p>
				</div>
				<div class="field has-text-centered">
					<p class="control">
						<button class="button is-success">
							Submit
						</button>
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'contact'
}
</script>

<style scoped lang="css">
	.contact{
		padding-top: 5em;
		padding-bottom: 10em;
	}
	button{
		width: 100%;
		background-color: #0FACF3 !important;
	}
	.container{
		padding-bottom: 3em;
	}
	p.subtitle{
		color: var(--text);
	}
	span{
		color: #0FACF3;
	}
	.select select{
		color: var(--text)
	}
	.text{
		color: var(--text);
	}
	.icon {
		color: var(--aqua);
		max-height: 80%;
	}
	section.is-estimator{
		padding-top: 10em;
		padding-bottom: 4em;
	}
	.is-half{
		padding-bottom: 6em;
		padding-top: 3em;
	}
	p.is-aqua{
		padding: 0;
		color: var(--aqua);
		font-size: .75em;
	}
	.help{
		margin: 0;
		padding-top: 5px;
		color: var(--aqua);
		font-style: italic;
	}
	.label{
		color: var(--text);
	}
	.checkbox{
		color: var(--text)
	}
	::placeholder{
		color: var(--text);
		font-size: .8em;
	}
	hr{
		color: var(--aqua);
		padding-top: 2px;
		margin-top: 4px;
	}
</style>
