"use strict";
app.directive('navMenu', function(){
    return {
        restrict:'C', // class='navMenu'
        templateUrl:'/templates/partials/menu-top.html'
    };
}).directive('bottomMenu', function(){
    return {
        restrict:'C', // class
        templateUrl:'/templates/partials/menu-bottom.html'
    };
});
