"use strict";
/**
 *  menuController загружается автоматически, т.к. явно указан
 *  для HTML-элемента, содержащего меню
 */
app.config( function($routeProvider, $locationProvider, mainMenuProvider){
    // адреса разделов:
    var alias,menus,path,section,sections = mainMenuProvider.$get();
    for(var i in sections) {
        for(var page in sections[i]){
            section = sections[i][page];
            // если нужно загрузить раздел в секции
            if(typeof section == 'object'){
                menus = section['links']; // default, workflow, architecture, resources, xtra
                for (var i in menus) {
                    alias = menus[i][0];
                    path = '/' + section['dir'] + '/' + alias;
                    //console.dir(menus[i]);
                    // http://weblogs.asp.net/dwahlin/dynamically-loading-controllers-and-views-with-angularjs-and-requirejs
                    $routeProvider.when(path, {
                        templateUrl: 'views' + path + '.html'/*,
                        resolve: resolveController('controllers'+path+'.js')
                        //controller: alias + 'Controller'*/
                    });
                    console.log('templateUrl: '+'views' + path + '.html\ncontroller: controllers'+path + '.js');
                }
            }else{
                console.log('section = '+section);
                $routeProvider
                    .when('/' + section, {
                        templateUrl: 'views/' + section + '.html',
                        //controller: 'menuController'
                        controller: section+'Controller'
                    }).when('/temp', {
                        templateUrl: 'views/temp.html',
                        controller: 'testController' // NOT temp!
                    });
                console.log('templateUrl: '+'views/' + alias + '.html\ncontroller: '+alias + 'Controller');
            }
        }
    }
    $routeProvider
        .when('/'||'/index.html',{
            templateUrl:    'views/default.html',
            controller:     'defaultController'
        }).otherwise({
            templateUrl:    'views/404.html',
            controller:     'defaultController'
        });
    $locationProvider.html5Mode(true);
});