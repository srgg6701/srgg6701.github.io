"use strict";

app.provider('mainMenu', function(){
    // http://stackoverflow.com/questions/15666048/angular-js-service-vs-provider-vs-factory
    this.$get = function() {
        return [
            {xtra:[
                ['contacts','Контакты'],
                ['test','Тестовый раздел']
            ]},
            {fourth:[
                ['one','one'],
                ['two','two'],
                ['three','three'],
                ['fourth','fourth'],
                ['fife','fife']
            ]},
            {third:[
                ['one','one'],
                ['two','two'],
                ['three','three'],
                ['fourth','fourth'],
                ['fife','fife']
            ]},
            {second:[
                ['one','one'],
                ['two','two'],
                ['three','three'],
                ['fourth','fourth'],
                ['fife','fife']
            ]},
            {first:[
                ['one','one'],
                ['two','two'],
                ['three','three'],
                ['fourth','fourth'],
                ['fife','fife']
            ]},
            {default:[
                ['default','Главная']
            ]}
        ]
    };
});