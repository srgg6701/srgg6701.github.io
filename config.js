app.config( function($routeProvider, $locationProvider, mainMenuProvider){
    //console.dir(mainMenuProvider.$get().menu);
    // адреса разделов:
    var alias,menus,sections = mainMenuProvider.$get();
    for(var section in sections) {
        menus = sections[section]; // default, workflow, architecture, resources, xtra
        if(section!='default')
            $routeProvider
                .when('/' + section, {
                    templateUrl: 'templates/sections/' + section + '.html',
                    controller: 'menuController'
                }).when('/temp', {
                    templateUrl: 'templates/temp.html',
                    controller: 'testController' // NOT temp!
                });
        for (var i in menus) {
            alias = menus[i][0];
            var start = (alias === 'default') ? '' : alias;
            $routeProvider.when('/' + start, {
                templateUrl: 'templates/' + alias + '.html',
                controller: alias + 'Controller'
            });
        }
    }
    $routeProvider.when('/index.html',{
        templateUrl:    'templates/default.html',
        controller:     'defaultController'
    }).otherwise({
        templateUrl:    'templates/404.html',
        controller:     'defaultController'
    });
    $locationProvider.html5Mode(true);
});