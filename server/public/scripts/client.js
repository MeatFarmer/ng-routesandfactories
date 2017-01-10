console.log('js');

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){

  $routeProvider
    .when('/home', {
      templateUrl: 'views/routes/home.html',
      controller: 'homeController'
    })
    .when('/hulk', {
      templateUrl: 'views/routes/hulk.html',
      controller: 'highfiveController'
    })
    .when('/mightymouse', {
      templateUrl: 'views/routes/mightymouse.html',
      controller: 'highfiveController'
    })
    .when('/fieri', {
      templateUrl: 'views/routes/fieri.html',
      controller: 'highfiveController'
    })
    .otherwise({
      redirectTo: 'home'
    });
}]); // end config

myApp.factory( 'gameFactory', function(){
  var thisFacotory = {};

  thisFactory.characters = [
    {
      name: 'Hulk',
      info: 'Green, tempermental, secretely a lover at heart, and known for his power high-five',
      picUrl: 'http://vignette2.wikia.nocookie.net/hulk/images/2/22/Avengers_hulk.jpg/revision/latest?cb=20151118045112'
    },
    {
      name: 'Mighty Mouse',
      info: 'Small and powerfull and here to give you a high-five',
      picUrl: 'http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/franchises/270.jpg'
    },
    {
      name: 'Guy Fieri',
      info: 'This bro likes to eat and offering up tasty high-fives',
      picUrl: 'http://flowjournal.org/wp-content/uploads/2012/09/Image-1-Guy-Fieri.png'
    }
  ]; // end characters

  return thisFactory;
} );// end factory
