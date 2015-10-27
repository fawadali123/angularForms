angularFormsApp.controller("efController",
    function efController($scope, $window, $routeParams, $modalInstance, DataService) {
        
        if ($routeParams.id ) {
            $scope.employee = DataService.getEmployee($routeParams.id);
        }
        else {
            $scope.employee = {id:0};
        }
        //$scope.employee = DataService.employee;
        $scope.editableEmployee = angular.copy($scope.employee);
        $scope.departments = ["Engineering", "Marketing", "Finance", "Administration", "MIS"];
        $scope.submitForm = function () {
            if ($scope.editableEmployee.id == 0) {
                DataService.insertEmployee($scope.editableEmployee);
            }
            else {
                DataService.updateEmployee($scope.editableEmployee);
            }

            $scope.employee = angular.copy($scope.editableEmployee);
            $window.history.back();
            //$modalInstance.close();
        }
        $scope.cancelForm = function () {           
            $window.history.back();
            //$modalInstance.dismiss();
        }
    });


