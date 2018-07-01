var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

weatherApp.config(function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'homeController'
        })
        .when('/weather', {
            templateUrl: 'pages/weather.html',
            controller: 'weatherController'
        })
        .when('/weather/:days', {
            templateUrl: 'pages/weather.html',
            controller: 'weatherController'
        })
})

weatherApp.service('cityService', function () {
    this.zipcode = ''
})

weatherApp.controller('homeController', ['$scope', '$log', 'cityService', '$location', function (scope, log, cityService, location) {
    scope.zipcode = cityService.zipcode

    scope.$watch('zipcode', function () {
        cityService.zipcode = scope.zipcode
    })
//    scope.submit = function(){
//        location.path('/weather')
//    }
}])


weatherApp.controller('weatherController', ['$scope', '$log', 'cityService', '$routeParams', function (scope, log, cityService, routeParams) {
    scope.days = routeParams.days || 2

    scope.d = {
                city: {
                    id: 0,
                    name: "Mountain View",
                    coord: {
                        lon: -122.088,
                        lat: 37.3855
                    },
                    country: "US",
                    population: 0
                },
                cod: "200",
                message: 2.1505307,
                cnt: 7,
                list: [
                    {
                        dt: 1519070400,
                        temp: {
                            day: 283.99,
                            min: 271.86,
                            max: 283.99,
                            night: 271.86,
                            eve: 278.3,
                            morn: 280.44
                        },
                        pressure: 989.94,
                        humidity: 52,
                        weather: [
                            {
                                id: 500,
                                main: "Rain",
                                description: "light rain",
                                icon: "10d"
        }
        ],
                        speed: 3.36,
                        deg: 325,
                        clouds: 20,
                        rain: 0.31
        },
                    {
                        dt: 1519156800,
                        temp: {
                            day: 282.68,
                            min: 268.17,
                            max: 282.68,
                            night: 271.62,
                            eve: 277.16,
                            morn: 268.17
                        },
                        pressure: 996.36,
                        humidity: 50,
                        weather: [
                            {
                                id: 800,
                                main: "Clear",
                                description: "sky is clear",
                                icon: "01d"
        }
        ],
                        speed: 1.25,
                        deg: 245,
                        clouds: 0
        },
                    {
                        dt: 1519243200,
                        temp: {
                            day: 280.88,
                            min: 271.62,
                            max: 280.98,
                            night: 274.19,
                            eve: 277.8,
                            morn: 271.62
                        },
                        pressure: 996.59,
                        humidity: 84,
                        weather: [
                            {
                                id: 500,
                                main: "Rain",
                                description: "light rain",
                                icon: "10d"
        }
        ],
                        speed: 1.46,
                        deg: 232,
                        clouds: 92,
                        rain: 1.3
        },
                    {
                        dt: 1519329600,
                        temp: {
                            day: 283.8,
                            min: 282.02,
                            max: 285.94,
                            night: 284.02,
                            eve: 285.94,
                            morn: 282.02
                        },
                        pressure: 1014.12,
                        humidity: 0,
                        weather: [
                            {
                                id: 501,
                                main: "Rain",
                                description: "moderate rain",
                                icon: "10d"
        }
        ],
                        speed: 6.4,
                        deg: 173,
                        clouds: 57,
                        rain: 11.41
        },
                    {
                        dt: 1519416000,
                        temp: {
                            day: 284.36,
                            min: 281.5,
                            max: 285.85,
                            night: 281.5,
                            eve: 285.85,
                            morn: 283.32
                        },
                        pressure: 1014.73,
                        humidity: 0,
                        weather: [
                            {
                                id: 501,
                                main: "Rain",
                                description: "moderate rain",
                                icon: "10d"
        }
        ],
                        speed: 4.23,
                        deg: 114,
                        clouds: 89,
                        rain: 9.29
        },
                    {
                        dt: 1519502400,
                        temp: {
                            day: 285.58,
                            min: 279.27,
                            max: 288.96,
                            night: 282.02,
                            eve: 288.96,
                            morn: 279.27
                        },
                        pressure: 1015.81,
                        humidity: 0,
                        weather: [
                            {
                                id: 500,
                                main: "Rain",
                                description: "light rain",
                                icon: "10d"
        }
        ],
                        speed: 1.27,
                        deg: 57,
                        clouds: 9
        },
                    {
                        dt: 1519588800,
                        temp: {
                            day: 287.05,
                            min: 279.96,
                            max: 290.51,
                            night: 282.65,
                            eve: 290.51,
                            morn: 279.96
                        },
                        pressure: 1012.12,
                        humidity: 0,
                        weather: [
                            {
                                id: 800,
                                main: "Clear",
                                description: "sky is clear",
                                icon: "01d"
        }
        ],
                        speed: 1.75,
                        deg: 54,
                        clouds: 1
        }
        ]
            }

    scope.data = scope.d.list.slice(0, scope.days)

    scope.convertToFah = function(degk){
        return Math.round((1.8 * (degk - 273)) + 32)
    }
    scope.convertDate =  function(date){
        return new Date(date * 1000)
    }

    console.log(scope.data)

}])

weatherApp.directive('searchResult', function(){
    return {
        restrict: 'E', 
        templateUrl: 'directives/searchResult.html', 
        replace: true, 
        scope: {
            weatherDay: '=', 
            convertToFah: '&', 
            convertDate: '&', 
            date: '@'
        }
    }
})