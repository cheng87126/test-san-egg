const Service = require('egg').Service

class ListService extends Service {
	async index() {
		// const list = await this.app.mysql.get('list')
		// console.log(this.app.config.mysql)
		const list = await this.app.mysql.select('list')
		// console.log(list)
		return list
	}
	async create(cont){
		const result = await this.app.mysql.insert('list', { cont:cont })
		// insertSuccess 
		return result.affectedRows === 1
	}
	async destroy(id){
		const result = await this.app.mysql.delete('list', {id: id})
		return result.affectedRows === 1
	}
	async update(id,cont){
		const result = await this.app.mysql.update('list', {
			id:id,
			cont:cont
		})
		return result.affectedRows === 1
	}
}

module.exports = ListService