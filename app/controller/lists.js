const Controller = require('egg').Controller

class ListsController extends Controller {
	async index(){
		const list = await this.ctx.service.list.index()
		this.ctx.body = list
	}
	async show(){
		this.ctx.body = `show---${this.ctx.params.id}`
	}
	async create() {
		const req = this.ctx.request.body
		this.ctx.body = await this.ctx.service.list.create(req.todo)
	}
	async update(){
		const id = this.ctx.params.id,
			req = this.ctx.request.body.todo
		this.ctx.body = await this.ctx.service.list.update(id,req)
	}
	async destroy(){
		const id = this.ctx.params.id
		this.ctx.body = await this.ctx.service.list.destroy(id)
	}
}

module.exports = ListsController