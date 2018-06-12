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
    templateUrl: 'templates/tabs.html',
     controller: 'AppCtrl'
  })


  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

    .state('tab.perfilchat', {
      url: "/perfilchat",
      views: {
        'tab-dash': {
          templateUrl: "templates/tab-perfilchat.html",
        }
      }
    })

    .state('tab.noticias', {
      url: "/noticias",
      views: {
        'tab-dash': {
          templateUrl: "templates/tab-noticias.html",
        }
      }
    })
     .state('tab.carro', {
      url: "/carro",
      views: {
        'tab-dash': {
          templateUrl: "templates/tab-carro.html",
        }
      }
    })

          .state('tab.chat', {
      url: "/chat",
      views: {
        'tab-dash': {
          templateUrl: "templates/tab-chat.html",
        }
      }
    })
    
  .state('tab.hijo', {
    url: '/hijo',
    views: {
      'tab-hijo': {
        templateUrl: 'templates/tab-hijo.html',
        controller: 'DashCtrl'
      }
    }
  })


  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })


 .state('tab.chat-detail', {
      url: "/chat-detail",
      views: {
        'tab-dash': {
          templateUrl: "templates/chat-detail.html",
        }
      }
    })

  .state('tab.control', {
      url: "/control",
      views: {
        'tab-dash': {
          templateUrl: "templates/tab-control.html",
        }
      }
    })



//sapo
/*
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-dash': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })
*/
  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });
  $urlRouterProvider.otherwise('/tab/dash');








});
