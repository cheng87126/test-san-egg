var MyApp = san.defineComponent({
	template: '<div><ul>'
				+'<li s-for="item,idx in todoList" class="{{isEdit===idx?\'edit\':\'\'}}">'
				+'<span on-click="editList(idx)">{{item.todo}}</span>'
				+'<input on-blur="update(item.id,item.todo)" value="{= item.todo =}" type="text">'
				+'<span on-click="del(item.id)">X</span>'
				+'</li>'
			+'</ul>'
			+'<input type="text" value="{=addVal=}"><button on-click="add">添加</button></div>',

	initData: function () {
		return {
			todoList: [{
				todo:'a'
			},{
				todo:'b'
			},{
				todo:'c'
			}],
			isEdit:'',
			addVal:''
		}
	},
	attached:function(){
		var data = this.data
		axios.get('/api/v1/lists/')
			.then(function (response) {
				console.log(response.data)
				var list = []
				response.data.forEach(item=>{
					list.push({
						id:item.id,
						todo:item.cont
					})
				})
				data.set('todoList', list)
		  	})
			.catch(function (error) {
		    	console.log(error)
			})
	},
	editList:function(i){
		this.data.set('isEdit', i)
	},
	update:function(id,val){
		this.data.set('isEdit','')
		var that = this
		axios.put('/api/v1/lists/'+id,{todo:val})
			.then(function (response) {
				console.log(response)
				if(response){
					that.attached()
				}
		  	})
			.catch(function (error) {
		    	console.log(error)
			})
	},
	add:function(){
		var val = this.data.get('addVal'),
			that = this
		// this.data.push('todoList', {todo:val})
		axios.post('/api/v1/lists/',{todo:val})
			.then(function (response) {
				console.log(response)
				if(response){
					that.attached()
				}
		  	})
			.catch(function (error) {
		    	console.log(error)
			})
	},
	del:function(id){
		var that = this
		axios.delete('/api/v1/lists/'+id).then(function(res){
			console.log(res)
			if(res){
				that.attached()
			}
		})
	}
})


var myApp = new MyApp()
myApp.attach(document.body)
axios.defaults.headers.common['x-csrf-token'] = document.cookie.split('=')[1]
axios.interceptors.request.use(function (config) {
	return config
  }, function (error) {
    return Promise.reject(error)
  })
	