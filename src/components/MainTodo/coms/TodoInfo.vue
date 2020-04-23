<template>
	<div class="todo-info">
		<span class="total">{{total}}</span>
		<div class="tabs">
			<a 
			v-for="(item,index) in states" 
			:class="['btn',state==item?'active':'']"
			:key='index'
			@click="togoleState(item)">{{item}}</a>
		</div>
		<button class="clear" @click="clearCompleted">Clear Completed</button>
	</div>
	
</template>

<script>
	export default{
		name:'TodoInfo',
		props:{
			total:Number
		},
		data(){
			return {
				states:['all','active','completed'],
				state:'all'
			}
		},
		methods:{
			togoleState(state){
				this.state=state;
				this.$emit('togoleState',state)
			},
			clearCompleted(){
				this.$emit('clearCompleted')
			}
		}
	}
</script>

<style scoped="scoped">
	.todo-info{
		display: flex;
		justify-content: space-between;
		font-weight: 400;
		padding: 5px 10px;
		line-height: 30px;
		border-top: 1px solid rgba(0,0,0,.1);
	}
	.total{
		color: rgb(252,157,154);
	}
	.tabs{
		display: flex;
		justify-content: space-between;
		width: 200px;
	}
	.btn{
		border:1px solid #FC8C84;
		border-radius: 5px;
		padding: 0 10px;
		cursor:pointer;
	}
	.btn.active{
		background-color: #FC8C84;
		color: #FFFFFF;
	}
	.clear{
		color: #FFFFFF;
		border-radius: 5px;
		padding: 0 10px;
		background-color: #669933;
		appearance: none;
		border: none;
		outline: none;
		font-weight: 600;
		cursor: pointer;
	}
</style>
