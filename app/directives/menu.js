"use strict";
app.directive('navMenu', function(){
    return {
        restrict:'C', // class='navMenu'
        templateUrl:'/app/templates/menu-top.html'
    };
}).directive('bottomMenu', function(){
    return {
        restrict:'C', // class
        templateUrl:'/app/templates/menu-bottom.html'
    };
});
