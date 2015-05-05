app.controller('defaultController',
    function defaultController($scope,mainMenu){
        console.log('defaultController is loaded');
        console.dir(mainMenu);
        $scope.menus=mainMenu;
    });