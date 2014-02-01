'use strict';

angular.module('ndc')
    .config(function ($stateProvider, stateFactory) {
        $stateProvider.state('index', stateFactory('Index', {
            url:'/'
        }));
    })
    .controller('IndexCtrl', function ($scope, VideoContext) {

        VideoContext.getAll().then(function (response) {
            $scope.videos = response;
        });

    });
