module.exports = {
	keys:'test-egg',
	security:{
		csrf:{
			headerName: 'x-csrf-token' // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
		}
	},
	mysql:{
		// 单数据库信息配置
		client: {
			// host
			host: '127.0.0.1',
			// 端口号
			port: '3306',
			// 用户名
			user: 'root',
			// 密码
			password: '123456',
			// 数据库名
			database: 'egg',
		},
		// 是否加载到 app 上，默认开启
		app: true,
		// 是否加载到 agent 上，默认关闭
		agent: false
	}
}