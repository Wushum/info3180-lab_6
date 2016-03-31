var app = angular.module("myShoppingList", []);

app.controller("myCtrl", function($scope) {
    $scope.products = ["Milk", "Bread", "Cheese"];
    $scope.addItem = function () {
        $scope.errortext="";
        if (!$scope.addMe){
            return;
        }
        if ($scope.products.indexOf($scope.addMe)==-1){
            $scope.products.push($scope.addMe);
        } else{
            $scope.errortext = "The item is already in your shopping list.";
        }
        target_url = "shop.html" + $scope.addMe
        stateObject = {item: $scope.addMe};
        history.pushState(stateObject, "Added new item to Shopping List", target_url);
    };
    $scope.removeItem = function(x){
        $scope.errortext = "";
        $scope.products.splice(x,1);
    };
});