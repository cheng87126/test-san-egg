module.exports = app => {
	const { router, controller } = app
	router.get('/', controller.home.index)
	router.resources('lists', '/api/v1/lists/', controller.lists)
}