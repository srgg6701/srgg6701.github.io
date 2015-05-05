"use strict";
app.controller('testController',
    function testController($scope,mainMenu){
        console.log('testController is loaded');
        //console.dir(mainMenu);
        $scope.menus=mainMenu;
    });