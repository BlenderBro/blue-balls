<template lang="html">
	<div class="single">
		<section>
			<div class="columns is-mobile is-centered">
				<div class="column is-8 is-narrow is-full-mobile">
					<div class="box">
						<article class="media">
							<div class="media-left">
								<figure class="image is-96x96">
									<img class="img-circle" src="/static/img/auth.jpg" alt="Image">
								</figure>
							</div>
							<div class="media-content">
								<div class="content">
									<p>
										<strong>Vlad Dobrescu</strong>
										<small><img class="social" src="/static/img/svg/facebook.svg" alt="Facebook">
										<img class="social" src="/static/img/svg/twitter.svg" alt="Twitter">
										<img class="social" src="/static/img/svg/linkedin.svg" alt="LinkedIn"></small>
										<br>
										<p class="is-hidden-mobile">Descriere sit amet, consectetur adipiscing elit. <br>Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.<p>
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

				<!-- <div id="target" class="target column is-6 is-offset-3 body"> -->
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
			<div class="column is-8 is-offset-2" id="disqus_thread">
			<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
			</div>
		</section>
	</div>
</template>

<script>

//Class swap for responsiveness & crap
$(document).ready(function(){
	var target = $('#target');
	var breakp = $(window).width();
	var cls = 'is-6 is-offset-3'
	if ( breakp < 1264 ) {
		target.removeClass('is-6 is-offset-3');
		target.addClass('is-8 is-offset-2');
		console.log(target +'scoped');
	}
	console.log(target);
})

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
