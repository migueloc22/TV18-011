// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
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

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
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
    templateUrl: 'programar/vista/templates/tabs-index.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.crear', {
    url: '/crear',
    views: {
      'tab-crear': {
        templateUrl: 'programar/vista/templates/tab-crear.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.recuperar', {
      url: '/recuperar',
      views: {
        'tab-recuperar': {
          templateUrl: 'programar/vista/templates/tab-recuperar.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.validarUser', {
      url: '/validarUser',
      views: {
        'tab-validarUser': {
          templateUrl: 'programar/vista/templates/tab-validarUser.html',
          controller: 'ChatsCtrl'
        }
      }
    })


  .state('tab.cuenta', {
      url: '/cuenta',
      views: {
        'tab-cuenta': {
          templateUrl: 'programar/vista/templates/tab-cuenta.html',
          controller: 'ChatsCtrl'
        }
      }
    })
  /*
  .state('tab.usuario', {
      url: '/usuario',
      views: {
        'usuario': {
          templateUrl: 'programar/vista/usuario.html',
          controller: 'ChatsCtrl'
        }
      }
    })
  */


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/cuenta');

});
