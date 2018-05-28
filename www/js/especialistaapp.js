// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom');
    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      // setup an abstract state for the tabs directive

      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs-especialista.html',
        controller: 'AppCtrl'
      })

      .state('tab.inicioespecialista', {
        url: '/inicioespecialista',
        views: {
          'tab-inicioespecialista': {
            templateUrl: 'templates/tab-inicioespecialista.html',
            controller: 'DashCtrl'
          }
        }
      })
      .state('tab.perfilespecialista', {
        url: "/perfilespecialista",
        views: {
          'tab-perfilespecialista': {
            templateUrl: "templates/tab-perfilespecialista.html",
          }
        }
      })

      .state('tab.noticiaespecialista', {
        url: "/noticiaespecialista",
        views: {
          'tab-noticiaespecialista': {
            templateUrl: "templates/tab-noticiaespecialista.html",
          }
        }
      })

      .state('tab.perfilchat', {
        url: "/perfilchat",
        views: {
          'tab-inicioespecialista': {
            templateUrl: "templates/tab-perfilchat.html",
          }
        }
      })
      .state('tab.noticias', {
        url: "/noticias",
        views: {
          'tab-inicioespecialista': {
            templateUrl: "templates/tab-noticias.html",
          }
        }
      })
      .state('tab.carro', {
        url: "/carro",
        views: {
          'tab-inicioespecialista': {
            templateUrl: "templates/tab-carro.html",
          }
        }
      })

      .state('tab.detailpadrehijo', {
        url: "/detailpadrehijo",
        views: {
          'tab-inicioespecialista': {
            templateUrl: "templates/tab-detailpadrehijo.html",
          }
        }
      })

      .state('tab.chat', {
        url: "/chat",
        views: {
          'tab-inicioespecialista': {
            templateUrl: "templates/tab-chat.html",
          }
        }
      })

    $urlRouterProvider.otherwise('/tab/inicioespecialista');








  });