app.controller('defaultController',
    function defaultController($scope,mainMenu){
        console.dir(mainMenu);
        $scope.menus=mainMenu;
    });