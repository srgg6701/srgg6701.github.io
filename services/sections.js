"use strict";

app.provider('mainMenu', function(){
    // http://stackoverflow.com/questions/15666048/angular-js-service-vs-provider-vs-factory
    this.$get = function() {
        return [{
            'Главная':''},{
            'Первая': { // текст секции
                dir:'first', // название директории
                links:[ // адрес_ссылки, текст_ссылки
                    ['one', 'one-text'],
                    ['two', 'two'],
                    ['three', 'three'],
                    ['fourth', 'fourth'],
                    ['fife', 'fife']
                ]}
            },{
            'Вторая':{
                dir:'second',
                links:[
                    ['one','one'],
                    ['two','two'],
                    ['three','three'],
                    ['fourth','fourth'],
                    ['fife','fife']
                ]}
            },{
            'Третья':{
                dir:'third',
                links:[
                    ['one','one'],
                    ['two','two'],
                    ['three','three'],
                    ['four','four'],
                    ['fife','fife']
                ]}
            },{
            'Четвёртая':{
                dir:'fourth',
                links:[
                    ['one','one'],
                    ['two','two'],
                    ['three','three'],
                    ['four','four'],
                    ['fife','fife']
                ]}
            },{
            'Дополнительно':{
                dir:'xtra',
                links:[
                    ['contacts','Контакты'],
                    ['test','Тестовый раздел']
                ]}
            }]  // return end
    };  // function end
});