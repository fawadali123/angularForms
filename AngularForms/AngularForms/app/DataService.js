angularFormsApp.factory('DataService', function () {

    var getEmployee = function (id) {
        if (id == 123) {
            return {
                id:123,
                fullName: "Fawad Ali",
                notes: "Employee of nextbridge solutions (pvt) ltd.",
                department: "MIS",
                dateHired:"July 17 2014",
                perkCar: true,
                perkStock: true,
                perkSixWeeks: false,
                payrollType: "None"
            }
        }
        return undefined;
    }
    var insertEmployee = function (newEmployee) {
        return true;
    }
    var updateEmployee = function (employee) {
        return true;
    }
    return {
        insertEmployee: insertEmployee,
        updateEmployee: updateEmployee,
        getEmployee: getEmployee,
    }
});