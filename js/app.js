var app = angular.module("NearMeApp",['leaflet-directive','ngRoute']);
  app.config(function ($routeProvider) { 
    $routeProvider 
    		.when('/', { 
    		  controller: 'MainController', 
    		  templateUrl: 'views/main.html' 
    		}) 
      .otherwise({ 
        redirectTo: '/' 
      }); 
  });
