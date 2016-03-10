var monApp = angular.module('ISIMGApp',['ui.router']);

monApp.config(function ($stateProvider,$urlRouterProvider) {
  $stateProvider
      .state('accueil',{
        url:'/accueil',
        templateUrl:'views/accueil.html'
      })
      .state('photo',{
        url:'/photo',
        templateUrl:'views/photo.html',
        controller:'photosCtrl'
      })
      .state('video',{
        url:'/video',
        templateUrl:'views/video.html'
      })
      .state('contact',{
        url:'/contact',
        templateUrl:'views/contact.html'
      })
      .state('login',{
        url:'/login',
        templateUrl:'views/login.html'
      });
  $urlRouterProvider.otherwise('/accueil');

})

monApp.controller('NavCtrl',function ($scope,$state) {
  $scope.test = function () {
    console.log($state);
  }
  $scope.isActive = function (viewLocation) {
    return $state.is(viewLocation);
        // return viewLocation === $state.path();
    };
})

monApp.controller('photosCtrl',function ($scope) {
  $scope.photos = [{alt:'Image',src:'imgs/image1.png'},{alt:'Image',src:'imgs/image1.png'},{alt:'Image',src:'imgs/image1.png'},{alt:'Image',src:'imgs/image1.png'},{alt:'Image',src:'imgs/image1.png'},{alt:'Image',src:'imgs/image1.png'},{alt:'Image',src:'imgs/image1.png'},{alt:'Image',src:'imgs/image1.png'}];
})
