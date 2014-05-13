'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope) {
  $scope.phones = [
    {'name': 'Spiderman',
     'snippet': 'Web-slinging teenage hero from downtown New York!',
     'age': 1},
    {'name': 'Gambit',
     'snippet': 'A fiery Cajun with luck on his side.',
     'age': 2},
    {'name': 'Captain America',
     'snippet': 'Valiantly defnding truth and justice since 1922.',
     'age': 3}
  ];

  $scope.orderProp = 'age';
});
