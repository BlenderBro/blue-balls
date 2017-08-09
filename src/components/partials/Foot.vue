<template lang="html">
	<footer class="footer is-mobile">
		<div class="container">
			<div class="columns">
				<div class="column is-three-quarters">
					<ul>
						<li><a href="#">About Us</a></li>
						<li><a href="#">Careers</a></li>
						<li><a href="#">Terms of Service</a></li>
						<li><a href="#">Privacy Policy</a></li>
					</ul>
				</div>
				<div class="column">
					<ul class="copyright">
						<li>© Foobar Digital 2017</li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'Foot'
}
</script>

<style scoped lang="css">
.footer{
	background-color: #3c4859;
	min-height: 100px;
	background-color: #151a2d;
	padding: 0;
	margin: 0;
}
.footer ul li {
	padding-top: 2em;
	display: block;
	float: left;
	margin-right: 1.4rem;
}
.footer ul li a{
	color: #687581;
}
</style>
