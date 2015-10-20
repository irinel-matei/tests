'use strict';

angular.module('wizard').controller('WizardController', ['$scope', '$http', 
	function($scope, $http) {
		

 $http.get("http://www.w3schools.com/angular/customers.php")
    .success(function (response) {
        $scope.names = response.records.slice(0,5);

         console.log(response.records.length);
    });


   $scope.dummyValues = ["t1","t2","t3","t4"];

$scope.dummyValuesEx = [];

  $scope.changeMeChange = function(){
$scope.dummyValuesEx.length = 0;
    
    for (var i = 0;i < (Math.random() * 10); i++) {
        $scope.dummyValuesEx.push($scope.changeMe + "-" + i);
    };

  }

var ctrl = this,
        index = -1, // points to the current step in the steps array
        steps = ctrl.steps = $scope.steps = [];

    $scope.nextEnabled = true;
    $scope.previousEnabled = false;
    $scope.submitEnabled = false;

    /*
     * Moves to the next step
     */
    $scope.next = function () {
        if (steps.length === 0) {
            console.debug('No steps provided.');
            return;
        }
        // If we're at the last step, then stay there.
        if (index == steps.length - 1) {
            console.debug('At last step.');
            return;
        }

        steps[index++].isDisplayed = false;
        steps[index].isDisplayed = true;

        ctrl.setButtons();
    }; // $scope.next

    /*
     * Moves to the previous step
     */
    $scope.previous = function () {
        if (steps.length === 0) {
            console.debug('No steps provided.');
            return;
        }

        if (index === 0) {
            console.debug('At first step');
            return;
        }
        steps[index--].isDisplayed = false;
        steps[index].isDisplayed = true;
        ctrl.setButtons();
    }; // $scope.previous

    $scope.submit = function () {
      
      alert("done")
    };

    /*
     * Adds a step to the end of the step list and
     * sets the index to 0 if it's the first step added.
     */
    ctrl.addStep = function (obj) {
        ctrl.steps.push(obj);
        if (index == -1) {
            index = 0;
            steps[0].isDisplayed = true;
        }
    };

    /*
     * Sets the correct buttons to be enabled or disabled.
     */
    ctrl.setButtons = function () {
        if (index == steps.length - 1) {
            $scope.nextEnabled = false;
            $scope.submitEnabled = true;
        } else if (index === 0) {
            $scope.previousEnabled = false;
        } else {
            $scope.nextEnabled = true;
            $scope.previousEnabled = true;
            $scope.submitEnabled = false;
        }
    };



	}
]);