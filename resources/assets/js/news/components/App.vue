<template>
	<div>
		<h1>List News</h1>
		<router-link to="add" class="btn btn-primary">Add News</router-link>

		<div id="newsList">
			<table class="table table-hover">
				<thead>
					<tr>
						<th>Title</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item, index) in news">
						<td>{{ item.title }}</td>
						<td>{{ item.thumbnail }}</td>
						<td>
							<a  class="btn btn-danger" @click="deletePost(item, index)">Delete</a>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				nipe: [1,2]
			}
		},	
		methods: {
			deletePost(item, index){

				const url = '/news/' + item.id
				const self = this
				this.$http.delete(url, []).then((res) => {
					self.$store.dispatch('deleteNews', index)
				})
			}
		},
		computed: {
			 news: function () {
      			return this.$store.getters.allnews
    		},
		}
	}
</script>