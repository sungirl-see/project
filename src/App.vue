<template>
	<div>
		<main-header></main-header>
		<main-todo></main-todo>
		<main-foot></main-foot>
	</div>
</template>

<script>
	// import img from './assets/img/bgm.jpg'
	import './assets/img/bgm.jpg'
	import './assets/css/test.css'
	// import './assets/css/global.styl'
	import MainHeader from './components/MainHeader.vue'
	import MainTodo from './components/MainTodo/MainTodo.vue'
	import MainFoot from './components/MainFoot.vue'
	export default{
		name:'App',
		components:{
			MainHeader,
			MainTodo,
			MainFoot
		}
	}	
</script>

<style scoped>
</style>
