<template>
	<header class="main-header">
		<h1>TodoList</h1>
	</header>
</template>

<script>
	export default {
		name:'MainHeader'
	}
</script>

<style scoped="scoped" lang="scss">
	@import url("../assets/css/global.css");
	.main-header{
		text-align: center;
	}
	.main-header>h1{
		font-size: 100px;
		font-weight: 100;
		color: $lightred;
		text-shadow: 5px 5px 5px rgba(0,0,0,0.1);
		margin: 20px;
	}
</style>
