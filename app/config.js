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
            //if(typeof section == 'object') console.log('%csection is object', 'color: blue');
            //else console.log('%csection type is ' + typeof section + ', value: [' + section + ']', 'color: violet');
            // если нужно загрузить раздел в секции
            if(typeof section == 'object'){
                console.groupCollapsed('section ['+i+'] is the object');
                // ►dir[string]
                // ►links[Array]
                //  ►0: Array ["one","one-text"]    (link:alias)
                //  ►1: Array ["two","two"]         (link:alias)
                menus = section['links']; // default, workflow, architecture, resources, xtra
                for (var j in menus) {
                    alias = menus[j][0];
                    path = '/' + section['dir'] + '/' + alias;
                    //console.dir(menus[j]);
                    console.log('alias: '+alias+', %cpath: '+path, 'color: rgba(0,155,0,0.5)');
                    // http://weblogs.asp.net/dwahlin/dynamically-loading-controllers-and-views-with-angularjs-and-requirejs
                    $routeProvider.when(path, {
                        /** http://stackoverflow.com/questions/22595878/tried-to-load-angular-more-than-once
                            проблема с зацикленной попыткой загрузки angular'а
                         */
                        templateUrl: 'views' + path + '.html',
                        //templateUrl: 'app/views/404.html',
                        controller:  'defaultController'
                        //resolve: resolveController('controllers'+path+'.js')
                        //controller: alias + 'Controller'
                    });
                    console.log('templateUrl: %cviews' + path + '.html', 'color: blue' ,'controller: controllers'+path + '.js');
                }
                console.groupEnd();
            }else{
                console.groupCollapsed('%csection is not the object', 'color: darkorange');
                    if(section) {
                        console.log('section = '+section);
                        $routeProvider
                            .when('/' + section, {
                                templateUrl: 'views/' + section + '.html',
                                //controller: 'menuController'
                                controller: section+'Controller'
                            })
                    }else {
                        console.log('%csection is empty...', 'color:#888');
                        var views = 'views/';
                        $routeProvider
                            .when('/'||'/index.html', {
                                templateUrl: views+'default.html',
                                controller:     'defaultController'
                            })
                            .when('/temp', {
                                templateUrl: views+'temp.html',
                                controller: 'testController' // NOT temp!
                            }).otherwise({
                                templateUrl: views+'404.html',
                                controller:  'defaultController'
                            });
                    }
                    //console.log('templateUrl: %cviews/' + alias + '.html', 'color:violet','controller: '+alias + 'Controller');
                console.groupEnd();
            }
        }
    }
    $locationProvider.html5Mode(true);
});