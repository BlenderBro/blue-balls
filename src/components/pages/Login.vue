<template lang="html">
	<section class="login">
		<div style="padding-top:3em;" class="container">
			<h1 class="title has-text-centered">LogIn</h1>
		</div>

		<div class="columns is-centered">
			<div class="column is-3">
				<form v-on:submit.prevent="LoginFormSubmit()">
					<div class="field">
						<p class="control has-icons-left has-icons-right">
							<input v-model="login.email" class="input" type="email" placeholder="Email">
							<span class="icon is-small is-left">
								<img src="/static/img/svg/envelope.svg" alt="mail">
							</span>
						</p>
					</div>
					<div class="field">
						<p class="control has-icons-left">
							<input v-model="login.password" class="input" type="password" placeholder="Password">
							<span class="icon is-small is-left">
								<img src="/static/img/svg/lock.svg" alt="lock">
							</span>
						</p>
					</div>
					<div class="field">
					<p class="control">
						<button  class="button is-success">
							Login
						</button>
					</p>
				</div>
				</form>
			</div>
		</div>
	</section>
</template>

<script>
import axios from 'axios'
import {clientID, clientSecret} from '../../env'
export default {
	name: 'login',
	data() {
		return {
			login: {
				email: 		'vlad.s.dobrescu@gmail.com',
				password: 	'123456'
			}
		}
	},
	methods: {
		LoginFormSubmit(){
			const data = {
				grant_type: 'password',
				client_id: clientID,
				client_secret: clientSecret,
				scope: '',
				username: this.login.email,
				password: this.login.password
			}
			axios.post('http://backend.app/oauth/token', data).then(response => { console.log(response) })
		}
	}
}
</script>

<style scoped lang="css">
	.login{
		padding-top: 15em;
		padding-bottom: 25em;
	}
	span img{
		max-width: 40%;
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
