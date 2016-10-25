<template>
	
	<div id="formnews">
			<legend>Form title</legend>
			
			<div class="form-group">
				<label for="">Title</label>
				<input type="text" class="form-control"  placeholder="Input field" v-model="title">
			</div>

			<div class="form-group">
				<label for="">Picture</label>
				<input type="text" class="form-control"  placeholder="Picture Link" v-model="thumbnail">
			</div>

			<button type="submit" class="btn btn-primary" @click="submitPost">Submit</button>
	</div>
</template>


<script>
	export default {
		data () {
			return {
				title: '',
				thumbnail: ''
			}
		},
		methods: {
			_collectPost () {
				return {
					title: this.title,
					thumbnail: this.thumbnail
				}
			},
			submitPost() {
				const self = this
				const data = this._collectPost()
				const handler = (results) => {
					console.info(results)
					self.$store.dispatch('addNews', results.data)
					self.$router.push({ path: '/' })
				}

				this.$http.post('news', data, [{Accept: 'application/json'}]).then((res) => {
					handler(res)
				}).catch((res) => {
					console.warn(res.statusText)
				})
			}
		}
	}
</script>