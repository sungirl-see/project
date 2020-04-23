<template>
	<div :class="['todo-item',todo.completed?'completed':'']">
		<input type="checkbox" v-model="todo.completed">
		<label>{{todo.content}}</label>
		<button @click="delItem"></button>
	</div>
</template>

<script>
	export default{
		name:'TodoItem',
		props:{
			todo:Object
		},
		methods:{
			delItem(){
				this.$emit('del',this.todo.id)
			}
		}
	}
</script>

<style scoped="scoped">
	.todo-item{
		display: flex;
		justify-content: space-between;
		padding: 10px;
		font-size: 24px;
		border-top: 1px solid rgba(0,0,0,.1);
	}
	.todo-item:hover button:after{
		content: 'X';
		font-size: 24px;
		color: #FC8C84;
		cursor: pointer;
	}
	.todo-item.completed{
		color: #d9d9d9;
		text-decoration: line-through;
	}
	input{
			width:25px;
			height:25px;
			background-color:#ffffff;
			border:solid 1px #dddddd;
			-webkit-border-radius:50%;
			border-radius:50%;
			font-size:0.8rem;
			margin-right:20px;
			position:relative;
			display:inline-block;
			vertical-align:top;
			cursor:default;
			-webkit-appearance:none;
			-webkit-user-select:none;
			user-select:none;
			-webkit-transition:background-color ease 0.1s;
			transition:background-color ease 0.1s;
			outline: none;
			appearance: none;
	}
	input:checked{
			background:#1673ff;
	}
	input:checked:after{
			content:'';
			top:5px;
			left:5px;
			position:absolute;
			background:transparent;
			border:#fff solid 2px;
			border-top:none;
			border-right:none;
			height:6px;
			width:10px;
			transform:rotate(-45deg);
		
	}
	.todo-item>label{
		flex: 1;
		transform: color .4;
	}
	button{
		width: 40px;
		border: none;
		outline: none;
		appearance: none;
		background-color: transparent;
	}
</style>
