<template lang="html">
	<section class="section is-estimator">
		<div class="container">
			<div class="columns">
				<div class="column">
					<h2 class="title has-text-centered">We want to hear from You!</h2>
					<p class="subtitle has-text-centered">Whether you want to work with us, ask a question (we always answer), or just say hello, we'd love <br>
					 to hear from you. If this form is overkill, please give us a shout on Twitter, instead (@vlad_dobrescu).</p>
				</div>
			</div>
			<div class="row column is-10 is-offset-1">
				<div class="columns">
					<!-- LEFT -->
					<div class="column">
						<div class="field">
							<label class="label">Your Name</label>
							<div class="control">
								<input class="input" type="text" placeholder="First and Last Name">
							</div>
							<p class="help">Required</p>
						</div>
						<div class="field">
							<label class="label">Email Address</label>
							<div class="control">
								<input class="input" type="email" placeholder="you@example.com">
							</div>
							<p class="help">Required</p>
						</div>
					</div>
					<!-- RIGHT -->
					<div class="column">
						<div class="field">
							<label class="label">Company Name</label>
							<div class="control">
								<input class="input" type="text" placeholder="Text input">
							</div>
							<p class="help">Optional</p>
						</div>
						<div class="field">
							<label class="label">Phone Number</label>
							<div class="control">
								<input class="input" type="text" placeholder="Text input">
							</div>
							<p class="help">Optional</p>
						</div>
					</div>
				</div>
				<div class="columns">
					<div class="column">
						<div class="field">
							<label class="label">Message or Project Details</label>
							<div class="control">
								<textarea class="textarea" placeholder="Type your message..."></textarea>
							</div>
						</div>
					</div>
				</div>
			</div>
			<p class="is-aqua has-text-centered"><span class="caret"></span>Optional</p>
			<hr>
			<div class="column is-10 is-offset-1">
				<div class="field is-horizontal">
					<div class="field-label">
						<label class="label">I'm looking for a:</label>
					</div>
					<div class="field-body">
						<div class="field">
							<div class="control">
								<label class="checkbox">
									<input type="checkbox">
									Web Dev
								</label>
							</div>
						</div>
						<div class="field">
							<div class="control">
								<label class="checkbox">
									<input type="checkbox">
									Mobile Dev
								</label>
							</div>
						</div>
						<div class="field">
							<div class="control">
								<label class="checkbox">
									<input type="checkbox">
									UI/UX Designer
								</label>
							</div>
						</div>
						<div class="field">
							<div class="control">
								<label class="checkbox">
									<input type="checkbox">
									Marketer/Social Strategist
								</label>
							</div>
						</div>
						<div class="field">
							<div class="control">
								<label class="checkbox">
									<input type="checkbox">
									Something Else
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
			<hr style="margin-top:1.2em;">
			<div class="columns is-half has-text-centered">
				<div class="column">
					<div class="select" placeholder="Time Line">
						<select>
							<option value="" disabled selected>Time Frame</option>
							<option value="">1 - 3 months</option>
							<option value="">3+ months</option>
							<option value=""> 6+ months</option>
							<option value="">9+ months</option>
							<option value="">12+ months</option>
						</select>
					</div>
				</div>
				<div class="column">
					<a class="button is-primary is-medium">Send</a>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
// $(document).ready(function(){
// 	$(".select").hover(function(){
// 		$(this).toggleClass("is-active");
// 	});
// });
export default {
	name: 'estimator'
}
</script>

<style scoped lang="css">
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
