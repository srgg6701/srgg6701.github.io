"use strict";
app.controller('oneController',
    function oneController($scope,mainMenu){
        console.log('oneController is loaded');
        //console.dir(mainMenu);
        $scope.menus=mainMenu;
    });