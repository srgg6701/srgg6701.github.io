"use strict";
app.directive('navMenu', function(){
    return {
        restrict:'C', // class='navMenu'
        templateUrl:'/templates/menu-top.html'
    };
}).directive('bottomMenu', function(){
    return {
        restrict:'C', // class
        templateUrl:'/templates/menu-bottom.html'
    };
});
