<template lang="html">
	<section class="blog">
<!-- IMAGE -->
		<div class="hero">
			<div class="hero-body">
				<div class="container">
					<div class="columns has-text-centered">
						<div class="column">
							<h2 class="title">Blog</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
<!-- //IMAGE -->
<!-- SEARCH -->
		<div class="columns is-mobile search">
			<div class="column is-half is-offset-3">
				<div class="field">
					<p class="control has-icons-left has-icons-right">
						<input class="input is-medium" type="email" placeholder="#search #for #something">
						<span class="icon is-small is-right">
							<img style="max-width:50%;" src="/static/img/svg/search.svg" alt="">
						</span>
					</p>
				</div>
			</div>
		</div>
<!-- //SEARCH -->
		<div class="columns is-mobile blog-content has-text-centered">
			<div class="column is-mobile">
				<div class="card">
					<div class="card-image">
						<figure class="image is-16by9">
							<img src="http://bulma.io/images/placeholders/1280x960.png" alt="Image">
						</figure>
					</div>
					<div class="card-content">
						<div class="media">
							<div class="media-left">
								<p class="tags">#css #php #javascript</p>
							</div>
						</div>
						<div class="content has-text-left">
							<router-link :to="{ name: 'blogSingle' }"><h2>Article Title</h2></router-link>
							<p class="excerpt">In the next couple of months we’ll be
							reincorporating the Ghost Foundation in Singapore and closing down all operations in...</p>
						<div class="columns author">
							<div class="column is-3">
								<figure class="image is-64x64">
									<img class="img-circle" src="http://bulma.io/images/placeholders/96x96.png" alt="Image">
								</figure>
							</div>
							<div class="column handle has-text-right">
								<p class="title">{{test.name}}</p>
								<p class="subtitle">{{test.state}}</p>
							</div>
						</div>

							<small>Jul 27 - 2 min read</small>
						</div>
					</div>
				</div>
			</div>
			<div class="column is-mobile">
				<div class="card">
					<div class="card-image">
						<figure class="image is-16by9">
							<img src="http://bulma.io/images/placeholders/1280x960.png" alt="Image">
						</figure>
					</div>
					<div class="card-content">
						<div class="media">
							<div class="media-left">
								<p class="tags">#css #php #javascript</p>
							</div>
						</div>
						<div class="content has-text-left">
							<h2>Article Title</h2>

							<p class="excerpt">In the next couple of months we’ll be
							reincorporating the Ghost Foundation in Singapore and closing down all operations in...</p>
						<div class="columns author">
							<div class="column is-3">
								<figure class="image is-64x64">
									<img class="img-circle" src="http://bulma.io/images/placeholders/96x96.png" alt="Image">
								</figure>
							</div>
							<div class="column handle has-text-right">
								<p class="title">John Smith</p>
								<p class="subtitle">@johnsmith</p>
							</div>
						</div>

							<small>Jul 27 - 2 min read</small>
						</div>
					</div>
				</div>
			</div>
			<div class="column is-mobile">
				<div class="card">
					<div class="card-image">
						<figure class="image is-16by9">
							<img src="http://bulma.io/images/placeholders/1280x960.png" alt="Image">
						</figure>
					</div>
					<div class="card-content">
						<div class="media">
							<div class="media-left">
								<p class="tags">#css #php #javascript</p>
							</div>
						</div>
						<div class="content has-text-left">
							<h2>Article Title</h2>

							<p class="excerpt">In the next couple of months we’ll be
							reincorporating the Ghost Foundation in Singapore and closing down all operations in...</p>
						<div class="columns author">
							<div class="column is-3">
								<figure class="image is-64x64">
									<img class="img-circle" src="http://bulma.io/images/placeholders/96x96.png" alt="Image">
								</figure>
							</div>
							<div class="column handle has-text-right">
								<p class="title">John Smith</p>
								<p class="subtitle">@johnsmith</p>
							</div>
						</div>

							<small>Jul 27 - 2 min read</small>
						</div>
					</div>
				</div>
			</div>
		</div>
		</div>
	</section>

</template>

<script>
import axios from 'axios'
export default {
	name: 'blog',
	data: ()=>({
		test: [],
		errors: []
	}),
	created() {
		axios.get('http://backend.app/api/test')
			.then(response =>{
				this.test = response.data
		})
		.catch(e => {
			this.errors.push(e);
		})
	}
}
</script>

<style scoped lang="css">
h2{
	font-size: 1.5em;
}
.blog-content{
	margin: 15px 20px 20px 15px;
}
.card{
	padding: 14px;
	border: 1px solid;
	border-color: var(--gri);
	border-radius: 12px;
	/*max-width: 30%;*/
	display: inline-block;
	/*-webkit-box-shadow: 20px 20px 18px -15px rgba(0,0,0,0.37);
	-moz-box-shadow: 20px 20px 18px -15px rgba(0,0,0,0.37);
	box-shadow: 20px 20px 18px -15px rgba(0,0,0,0.37);*/
}
.card-content{
	padding-top: 4px;
	padding-left: 4px;
}
.column{
	/*margin-bottom: 1em;*/
}
.search{
	background-color: #d4d4d4;
	height: 8em;
}
.search input{
	border-radius: 10px;
}
.field{
	padding-top: 2em;
}
::placeholder{
	color: var(--text);
	font-size: .8em;
}
.hero{
	background-image: url('/static/img/pattern-bg-lightviolet.jpg');
	height: 600px;
}
.hero .container{
	padding-top: 10em;
}
.title{
	color: var(--gri)
}
.has-padd{
	padding-top: 3em;
}
.icon.is-small.is-right{
	background-color: var(--text);
	border-radius: 0px 10px 10px 0px;
}
p{
	padding-top: 0px !important;
}
p.tags{
	font-family: 'Lora', serif !important;
	color: var(--text);
	font-weight: lighter;
}
p.excerpt{
	font-family: 'Lora', serif !important;
	color: var(--subtitlu);
}
p.title{
	font-size: 1em;
	font-family: 'Lora', serif !important;
	color: var(--titlu);
}
.subtitle{
	font-family: 'Lora', serif !important;
	color: var(--subtitlu);
	font-size: .8em;
	margin-top: 10px;
}
.title:not(.is-spaced)+.subtitle{
	margin-top: 0px;
}
small{
	font-family: 'Lora', serif !important;
	color: var(--text);
	font-weight: lighter;
	font-size: .7em
}
.tags{
	padding-bottom: 2em;
}
.card h2{
	font-family: 'Lora', serif !important;
	color: var(--titlu);
}
.img-circle {
    border-radius: 50%;
}
.author{
	padding-top: 2em;
}
.handle{
	margin-top: 5px;
}
</style>
