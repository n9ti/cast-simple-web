/* global angular */
angular.module('myapp', ['ng-chrome-cast-channels'])
  .controller('myctrl', ['$scope', '$sce', 'ChromeCastReceiverChannel', function ($scope, ChromeCastReceiverChannel, $sce) {
    $scope.callback = function (data) {
      $scope.data = data
      $scope.frameUrl = $sce.trustAsResourceUrl(data)
      $scope.$apply()
    }

    ChromeCastReceiverChannel.initialize('urn:x-cast:com.google.cast.sample.helloworld', $scope.callback)
  }])
