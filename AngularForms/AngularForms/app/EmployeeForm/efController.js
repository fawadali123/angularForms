angularFormsApp.controller("efController",
    function efController($scope, $window, $routeParams,  DataService) {
        
        if ($routeParams.id ) {
            $scope.employee = DataService.getEmployee($routeParams.id);
        }
        else {
            $scope.employee = {id:0};
        }
        //$scope.employee = DataService.employee;
        $scope.editableEmployee = angular.copy($scope.employee);
        $scope.departments = ["Engineering", "Marketing", "Finance", "Administration", "Software Development"];
        $scope.ProgrammingLanguages = ["C", "C++", "C#", "Python", "PHP", "Java", "Javascript", "Ruby On Rails", "VB.Net", "Other"];

        $scope.hoveringOver = function (value) {
            $scope.overStar = value;
            $scope.percent = (value / 10) * 100;

        }
        $scope.submitForm = function () {

            $scope.$broadcast('show-errors-event');
            if ($scope.employeeForm.$invalid)
                return;
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


