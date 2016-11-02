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

			<div class="form-group">
				<label for="">Deskripsi</label>
				<div id="meditor" v-low-editor:hello="content"></div>
			</div>

			<button type="submit" class="btn btn-primary" @click="submitPost">Submit</button>
	</div>
</template>

<style lang="sass" scoped>
	div#meditor {
		min-height: 20rem
	}
</style>


<script>
	import mEditor from 'medium-editor'
	import Vue from 'vue'

	Vue.directive('low-editor', {
		bind(el, binding, vnode) {
			let editor = new mEditor(el)

			editor.subscribe('editableInput', function (event, editable) {});
		}
	})
	export default {
		mounted () {
			console.log()
		},
		data () {
			return {
				title: '',
				thumbnail: '',
				content: ''
			}
		},
		methods: {
			_collectPost () {
				return {
					title: this.title,
					thumbnail: this.thumbnail,
					content: document.querySelector("#meditor").innerHTML
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