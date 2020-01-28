var app = angular.module('myApp',[]);
app.controller("ctrl",function($scope){
	$scope.name="Sam";
	$scope.age=22;
	$scope.Edit = function(){
		$scope.value = true;
		return $scope.value;
	}
	$scope.Update = function(name,age){
		console.log(name,age);
		//$scope.name = name;
		//$scope.age = age;	
		$scope.value = false;
		return $scope.value;
		
	}
})
