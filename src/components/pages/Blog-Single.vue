<template lang="html">
	<div class="single">
		<section>
			<div class="columns is-mobile is-centered">
				<div class="column is-8 is-narrow is-full-mobile">
					<div class="box">
						<article class="media">
							<div class="media-left">
								<figure class="image is-96x96">
									<img class="auth-avatar img-circle" src="/static/img/auth.jpg" alt="Image">
								</figure>
							</div>
							<div class="media-content">
								<div class="content">
									<p id="name">
										<strong>Vlad Dobrescu</strong>
										<small><img class="social" src="/static/img/svg/facebook.svg" alt="Facebook">
										<img class="social" src="/static/img/svg/twitter.svg" alt="Twitter">
										<img class="social" src="/static/img/svg/linkedin.svg" alt="LinkedIn"></small>
										<br>
										<p class="auth-about is-hidden-mobile">Descriere sit amet, consectetur adipiscing elit. <br>Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.<p>
									</p>
								</div>
							</div>
						</article>
					</div>
				<h1 class="title">Are Notifications A Dark Pattern?</h1>
			</div>
			</div>
		</section>
		<section class="is-single is-mobile is-centered">
			<!-- IMAGE -->
					<div class="hero">
						<!-- <img src="/static/img/place-gri.jpg" alt=""> -->
						<img src="/static/img/suit-hero.jpg" alt="Hero Article Image">
					</div>
			<!-- //IMAGE -->
			<div class="columns is-mobile aligner">
				<div id="target" class="column is-6 is-offset-3 body">

					<p>Have you ever had a nightmare where you were literally drowning in little red notification badges?
					I did once, and it got me thinking: what actually are notifications? And are they just another dark pattern — a
					form of coercion and online trickery? In this article, I explore the phenomenon of “pseudo-notifications”, and
					conclude with some thoughts on what the future might hold for notifications as a design pattern.</p>

					<h2 class="subtitle">What are notifications?</h2>

					<p>However, since the arrival of smartphones, notifications have been subtly changing. First, and above all,
					the apps and websites we use every day love to notify us of everything they can. Our phones no longer just alert
					us to calls and texts; they now remind us about game activity, tell us when people are tweeting, and nag us to take
					our 10,000 daily steps. Unlike doorbells, the things that today’s apps and websites deem worthy of a notification often
					don’t really require our immediate attention at all.</p>

					<p>Second, notifications increasingly reach us by whatever means, and in whatever context, they can. Whether it’s an icon
					with an unread count, text scrolling in from the top of a smartphone screen, a special ringtone, or a disembodied
					voice assistant, notifications are designed to penetrate our senses and interrupt whatever we’re doing. Distraction
					isn’t an unfortunate side-effect of notifications — it is one of their core functions. Notifications are intended to
					draw us away from our current activity, and refocus our attention on wherever that notification is coming from.</p>

					<p>Notifications are a powerful tool for UX designers and developers, because they work by pushing people’s psychological
					buttons. Appealing to a deep human instinct to be socially integrated and accepted, that number in a little red circle
					subtly tells us both that there’s a social transaction awaiting our attention, and that by ignoring it, we’re missing
					out on something. By now we’ve probably all experienced that seemingly irrepressible urge to tap an icon just because
					it has an unread count — even if we already know we’re not interested in looking at whatever’s there.</p>

					<p>Notifications were once there to tell us something we needed to know. But has the desperation of companies to get us
					to engage with their product turned notifications into an annoyance — a manipulative, destructive dark pattern?</p>
				</div>
			</div>
			<!-- TAGS -->
			<div style="padding-bottom: 2em;" class="column is-multiline is-6 is-offset-3">
				<div class="tags is-centered">
					<span class="tag is-rounded">One</span>
					<span class="tag is-rounded">Two</span>
					<span class="tag is-rounded">Three</span>
					<span class="tag is-rounded">Four</span>
					<span class="tag is-rounded">Five</span>
					<span class="tag is-rounded">Six</span>
					<span class="tag is-rounded">Seven</span>
					<span class="tag is-rounded">Eight</span>
					<span class="tag is-rounded">Nine</span>
					<span class="tag is-rounded">Ten</span>
					<span class="tag is-rounded">Elevesn</span>
				</div>
			</div>
			<!-- //TAGS -->
			<!-- RECOMENDED -->
			<section class="rec">
				<div class="container">
					<div class="columns is-centered is-multiline rec">
						<div class="column is-3">
							<div class="card">
								<div class="card-image">
									<figure class="image is-16by9">
										<img src="http://bulma.io/images/placeholders/1280x960.png" alt="Image">
									</figure>
								</div>
								<div class="card-content">
									<div class="content has-text-left">
										<router-link :to="{ name: 'blogSingle' }"><h2>Article Title uahfkagfagfkagfkagfkagfkagfkagfagf akgfakgf akhg</h2></router-link>
										<div class="columns author">
											<div class="column is-mobil is-3">
												<figure class="image is-36x36">
													<img class="img-circle" src="http://bulma.io/images/placeholders/96x96.png" alt="Image">
												</figure>
											</div>
											<div class="column handle has-text-right">
												<p class="title">Vlad Dobrescu</p>
												<p class="subtitle">@vlad_dobrescu</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="column is-3">
							<div class="card">
								<div class="card-image">
									<figure class="image is-16by9">
										<img src="http://bulma.io/images/placeholders/1280x960.png" alt="Image">
									</figure>
								</div>
								<div class="card-content">
									<div class="content has-text-left">
										<router-link :to="{ name: 'blogSingle' }"><h2>Article Title uahfkagfagfkagfkagfkagfkagfkagfagf akgfakgf akhg</h2></router-link>
										<div class="columns author">
											<div class="column is-mobil is-3">
												<figure class="image is-36x36">
													<img class="img-circle" src="http://bulma.io/images/placeholders/96x96.png" alt="Image">
												</figure>
											</div>
											<div class="column handle has-text-right">
												<p class="title">Vlad Dobrescu</p>
												<p class="subtitle">@vlad_dobrescu</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="column is-3">
							<div class="card">
								<div class="card-image">
									<figure class="image is-16by9">
										<img src="http://bulma.io/images/placeholders/1280x960.png" alt="Image">
									</figure>
								</div>
								<div class="card-content">
									<div class="content has-text-left">
										<router-link :to="{ name: 'blogSingle' }"><h2>Article Title uahfkagfagfkagfkagfkagfkagfkagfagf akgfakgf akhg</h2></router-link>
										<div class="columns author">
											<div class="column is-mobil is-3">
												<figure class="image is-36x36">
													<img class="img-circle" src="http://bulma.io/images/placeholders/96x96.png" alt="Image">
												</figure>
											</div>
											<div class="column handle has-text-right">
												<p class="title">Vlad Dobrescu</p>
												<p class="subtitle">@vlad_dobrescu</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- //RECOMENDED  -->
			<div class="column is-8 is-offset-2" id="disqus_thread">
			<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
			</div>
		</section>
	</div>
</template>

<script>

//Class swap for responsiveness & crap
var breakp = $(window).width();
$(document).ready(function hotSwap(){
	var target = $('#target');
	if ( breakp < 1264 ) {
		target.removeClass('is-6 is-offset-3');
		target.addClass('is-8 is-offset-2');
	}
});
	//Disqus Act. Script
	var disqus_developer = 1;
	var disqus_url = '{{ url('/') }}';
	var disqus_config = function () {
		this.page.url = "http://localhost:8080/blog/single";  // Replace PAGE_URL with your page's canonical URL variable
	};
	(function () { // DON'T EDIT BELOW THIS LINE
		var d = document, s = d.createElement('script');
		s.src = 'https://foobardigital.disqus.com/embed.js';
		s.setAttribute('data-timestamp', +new Date());
		(d.head || d.body).appendChild(s);
	})();
	$(document).ready(function(){
	    $(window).scrollTop(0);
	});


	export default {
		name: 'blogSingle',
}
</script>

<style scoped lang="css">
.container.three{
	/*width: 70%;*/
}
.rec{
	background-color: #ebebeb;
	padding: 1em 0 1em 0;
}
.author{
	padding-top: 1em;
	margin-bottom: 0;
}
.auth-about{
	padding-top: 0;
}
#name{
	padding-bottom: 0;
}
small{
	font-size: .675em;
}
.card{
	box-shadow: none;
	border-radius: 10px;
}
.card-content{
	padding-bottom: 1px;
}
.card.card-content p{
	color: var(--text) !important;
}
.card-content h2{
	font-size: 1.35em;
	overflow: hidden;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}
.column.handle.has-text-right p{
	font-size: .7em;
}
.body p{
	color: var(--title);
	font-size: 1.2em;
	font-weight: 400;
    font-style: normal;
    font-size: 21px;
    line-height: 1.58;
    letter-spacing: -.003em;
}
/*FAB*/

/*//FAB*/
h1.title{
	padding-bottom: .7em;
	font-family: 'Lora', serif !important;
	color: var(--titlu)
}
h2.subtitle{
	padding-top: 2em;
	padding-bottom: 1.5em;
	font-size: 1.8em;
	font-weight: 600;
	font-family: 'Lora', serif !important;
	color: var(--titlu)
}
p{
	font-family: 'Lora', serif !important;
	color: var(--text);
	padding: 1em 0 1em 0;
}
p strong{
	font-family: 'Lora', serif !important;
	color: var(--subtitlu)
}
.img-circle{
	border-radius: 50%;
	margin-top: 0 !important;
}
figure img{
	width: 36px;
}
figure img.auth-avatar{
	width: auto;
}
small{
	padding-left: 2em;
}
.box{
	padding-top: 2em;
	webkit-box-shadow: none;
    box-shadow: none;
}
img.social{
	max-height: 15px;
	max-width: 20px;
}
.hero{
	padding-bottom: 2em;
}
@media screen and (max-width: 430px){
	p{
		font-size: 1em !important;
		padding: .4em 0 .4em 0;
	}

}
</style>
