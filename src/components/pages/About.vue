<template lang="html">
	<section class="about">

		<div class="hero">
			<p class="typeTitle has-text-centered ">
				<a href="" class="typewrite" data-period="2000" data-type='[ "We build digital stuff", "Websites, mobile apps, web apps", "Copywriting, marketing and social stuff" ]'>
                    <span class="wrap"></span>
                </a>
			</p>
		</div>

		<div class="container has-text-centered">
			<div class="columns is-multiline">
				<div class="column is-4">
					<div class="card">
						<div class="card-image">
							<figure class="img-circle">
								<img style="border-radius:50% " src="http://placehold.it/300x300" alt="Placeholder image">
							</figure>
						</div>
						<div class="card-content">
							<div class="media">
								<div class="media-content has-text-centered">
									<p class="title is-4">John Smith</p>
									<p class="position is-6">Code Monkey</p>
								</div>
							</div>
							<div class="content has-text-centered">
								<p>Michael has led engineering teams at companies such as Path and Twitter, and is the primary author of open source JavaScript libraries including mustache.js and React Router. He has a passion for building clean, well-designed systems.</p>
							</div>
						</div>
					</div>
				</div>
				<div class="column is-4">
					<div class="card">
						<div class="card-image">
							<figure class="img-circle">
								<img style="border-radius:50% " src="http://placehold.it/300x300" alt="Placeholder image">
							</figure>
						</div>
						<div class="card-content">
							<div class="media">
								<div class="media-content has-text-centered">
									<p class="title is-4">John Smith</p>
									<p class="position is-6">Code Monkey</p>
								</div>
							</div>
							<div class="content has-text-centered">
								<p>Michael has led engineering teams at companies such as Path and Twitter, and is the primary author of open source JavaScript libraries including mustache.js and React Router. He has a passion for building clean, well-designed systems.</p>
							</div>
						</div>
					</div>
				</div>
				<div class="column is-4">
					<div class="card">
						<div class="card-image">
							<figure class="img-circle">
								<img style="border-radius:50% " src="http://placehold.it/300x300" alt="Placeholder image">
							</figure>
						</div>
						<div class="card-content">
							<div class="media">
								<div class="media-content has-text-centered">
									<p class="title is-4">John Smith</p>
									<p class="position is-6">Code Monkey</p>
								</div>
							</div>
							<div class="content has-text-centered">
								<p>Michael has led engineering teams at companies such as Path and Twitter, and is the primary author of open source JavaScript libraries including mustache.js and React Router. He has a passion for building clean, well-designed systems.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

</template>

<script>

export default {
	name: 'about',
}
</script>

<style scoped lang="css">
.column.is-4{
	display: inline-block;
}
a{
	color: var(--titlu);
	text-transform: uppercase;
}
.excerpt{
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
h2{
	font-size: 1.5em;
}
p.subtitle{
	font-size: 1.25rem;
	font-weight: 400;
	line-height: 1.25;
	padding-top: 8em;
}
p.typeTitle{
	font-size: 1.8rem;
	font-weight: 600;
	line-height: 1.125;
	padding-top: 5em;
}
.is-vertical-center {
	display: flex;
	align-items: center;
}

.blog-content{
	margin: 15px 20px 20px 15px;
}
.card{
	margin-top: 3em;
	padding: 14px;
	border-radius: .375rem;
	display: inline-block;
	box-shadow: none;
	box-shadow: 5px 5px 25px 0 rgba(46,61,73,.2);
	border-top: 5px solid #02ccba;
	width: 80%;
}
.card-content{
	padding-top: 4px;
	padding-left: 4px;
	padding-bottom: 3em;
}
.column{
	margin-bottom: 1em;
}

.hero{
	background-image: url('/static/img/hero-bg_abstract.png');
	height: 300px;

}
.hero .container{
	padding-top: 10em;
}
.title{
	color: var(--titlu);
	margin-bottom: .5em;
}
.position{
	text-transform: uppercase;
	color: #7d97ad;
	font-weight: 600;
}
.img-circle {
    border-radius: 50%;
	max-width: 40%;
	margin: 0 auto;
	margin-top: -1.8em;
}
</style>
