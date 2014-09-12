/* Получить меню, которое будет извлекаться в соответствующем шаблоне */
app.controller('menuController',
    function menuController($scope, mainMenu){
        $scope.menus=mainMenu;
    }
);