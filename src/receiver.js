/* global angular */
angular.module('myapp', ['ng-chrome-cast-channels'])
  .controller('myctrl', ['$scope', 'ChromeCastReceiverChannel', function ($scope, ChromeCastReceiverChannel) {
    $scope.callback = function (data) {
      $scope.data = data
      $scope.$apply()
    }

    ChromeCastReceiverChannel.initialize('urn:x-cast:com.google.cast.sample.helloworld', $scope.callback)
  }])
