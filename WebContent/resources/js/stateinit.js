var angularApp = angular.module('angularspring', [ 'ui.router', 'ui.bootstrap',
		'ngGrid', 'ui.select2', 'ui', 'ngMessages', 'angularAppControllers' ]);

angularApp.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
	httpHeaders = $httpProvider.defaults.headers;
	$httpProvider.defaults.headers.common['X-CSRF-Token'] = $(
			'meta[name=csrf-token]').attr('content');
	$httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
	$stateProvider.state('user', {
		url : '/user',
		templateUrl : _context+'/user/user.html',
		controller : 'UserController'
	}).state('useredit', {
		 url: '/useredit/:id',
		templateUrl : _context+ '/user/user-edit.html',
		controller : 'editUserController'
	});

	$urlRouterProvider.otherwise('/user');
	
});