/* Получить меню, которое будет извлекаться в соответствующем шаблоне */
app.controller('menuController',
    function menuController($scope, mainMenu){
        console.log('menuController is working...');
        $scope.menus=mainMenu;
    }
);