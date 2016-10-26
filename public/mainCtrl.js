angular.module('userProfiles')
.controller('mainCtrl', function( $scope, friendService, $location ) {

	$scope.login = function( user ) {
		console.log('user on controller', user)
		friendService.login(user).then(function( response ) {
			console.log('this is response', response)
			if (response.data.userFound) {
				$location.path('/profile');
			} else {
				alert('user not found');
			}
		});
	}

});