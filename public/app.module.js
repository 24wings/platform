angular.module('myApp', ['ng', 'ngComponentRouter'])
    .value('$routerRootComponent', 'app')
    .component('app', {
        templateUrl: 'app.module.html',
        $routeConfig: [{
            path: '/',
            name: 'IndexPage',
            component: 'indexPage',
            useAsDefault: true
        }]
    })
    .component('indexPage', {
        templateUrl: 'pages/index.html',
        controller: function () {
            console.log('welcome')
        }
    })