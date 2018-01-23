var angularAppControllers = angular.module('angularAppControllers', []);

angularAppControllers.controller('UserController', [ '$scope', '$http', '$state',
		function($scope, $http, $state) {
		
			$http.get('/appValidation/user/list').success(function(response) {
				$scope.users = response.users;
				angular.forEach($scope.users, function(value) {
					value.fullName = value.firstName + " "+ value.lastName
				});
			});
			
			$scope.addUser = function() {
				$state.go('useredit', {id : 0});
			}
			
			$scope.edit = function(row) {
				$state.go('useredit', {id : row.id});
			}
						
			$scope.deleteRow = function(id) {
				if(id == undefined || id == null || id == '' || id == 0){
					return;
				}
				$http['delete']('/appValidation/user/'+id+'/').success(function(response) {
					$scope.users = response.users;
				});
			}
			
		 $scope.grid = {
			data : 'users',
			selectedItems : $scope.selected,
			multiSelect : false,
			columnDefs : [ {
				field : 'fullName',
				displayName : 'Full Name',
				width : '***'
			}, {
				field : 'userName',
				displayName : 'User Name',
				width : '***'
			}, {
				field : 'mobile',
				displayName : 'Phone Number',
				width : '***'
			}, {
				field : 'emailId',
				displayName : 'Email Address',
				width : '***'
			}, {
				field : 'indian',
				displayName : 'Is Indian User',
				resizable : true,
				width : '*'
			}, {
				field : 'isEnabled',
				displayName : 'Is Enabled',
				resizable : true,
				width : '*'
			}, {
				field : '',
				cellTemplate : '<i class="icon-pencil" ng-click="edit(row.entity)"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="icon-trash" ng-click="deleteRow(row.entity.id)"></i>',
				width : '*'
			}]
		};

} ]);
angularAppControllers.controller('editUserController', [ '$scope', '$http', '$state',
		function($scope, $http, $state) {
	$scope.id = $state.params.id;
	$scope.user = {};
	var loadObj = function() {
		if($scope.id == 0){
			return;
		}
		
		$http.get('/appValidation/user/'+$scope.id+'/edit').success(function(response) {
			$scope.user = response.user;
			$scope.user.password = '';
		});
	}

	$scope.save = function() {
//		if($scope.userForm.$invalid){
//			return;
//		}
		var data = {
			id : $scope.user.id ? $scope.user.id : 0,
			firstName: $scope.user.firstName,
			lastName:$scope.user.lastName,
			userName:$scope.user.userName,
			gender:$scope.user.gender,
			password:$scope.user.password,
			emailId:$scope.user.emailId,
			mobile:$scope.user.mobile,
			isEnabled:$scope.user.isEnabled
		}
		$http.post('/appValidation/user/edit', data).success(function(response) {
			$state.go('user');
		}).error(function() {
			console.log('aaaaaaaaaa')
		});
	}
	
	$scope.cancel = function() {
		$state.go('user');
	}
	
	loadObj();
} ]);



