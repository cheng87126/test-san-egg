const fs = require("fs")

const Controller = require('egg').Controller

function readFile (fileName){
	return new Promise(function (resolve, reject){
		fs.readFile(fileName, function(error, data){
			if (error) reject(error)
			resolve(data)
		})
	})
}

class HomeController extends Controller {
	async index() {
		let indexFile = await readFile('app/view/index.html')
		this.ctx.body = indexFile.toString()
	}
}

module.exports = HomeController