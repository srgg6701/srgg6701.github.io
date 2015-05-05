requirejs.config({
    baseUrl: 'libs', // директория с require
    paths: {
        scripts: '../scripts' // директория с подключаемыми скриптами
    }
});
requirejs(['scripts/main']);
