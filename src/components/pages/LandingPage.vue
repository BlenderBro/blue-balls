<template>
	<div>
		<hero></hero>
	    <Solutions></Solutions>
		<Process></Process>
		<SocialMedia></SocialMedia>
	</div>

</template>

<script>
import Hero from '@/components/partials/Hero'
import Solutions from '@/components/partials/Solutions'
import Process from '@/components/partials/Process'
import SocialMedia from '@/components/partials/SocialMedia'
export default {
  name: 'hello',
  components: {
	  Hero,
	  Solutions,
	  Process,
	  SocialMedia
  }
}
</script>

<style scoped lang="css">

</style>
