angular.module('starter.controllers', [])
  .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function () {
        $scope.closeLogin();
      }, 1000);
    };
  })

  .controller('PlaylistsCtrl', function ($scope) {
    $scope.playlists = [
      {title: 'Reggae', id: 1},
      {title: 'Chill', id: 2},
      {title: 'Dubstep', id: 3},
      {title: 'Indie', id: 4},
      {title: 'Rap', id: 5},
      {title: 'Cowbell', id: 6}
    ];
  })


  .controller('SearchCtrl', function ($scope, $ionicScrollDelegate,$location,$ionicPosition ) {

    var handle = $ionicScrollDelegate.$getByHandle('handle');
    $scope.scrollToBottom = function () {
      console.debug("scroll bottom......");
      handle.scrollBottom([true]);
    };
    $scope.scrollToTop = function () {
      console.debug("scroll top......");
      handle.scrollTop([true]);
    };


    $scope.scrollProduct=function () {
      console.debug('scroll......');
      var top=handle.getScrollPosition();
      //$ionicPosition.position();
      console.debug('top',top);
    };

    $scope.selectCategory=function (category) {
      console.debug("id "+category.id);
      $scope.selectedCategory=category.id;
      console.debug("#id ","#"+category.id);
      var location=$location.hash(category.id);
      handle.anchorScroll(location);
    };

    $scope.categories = [
      {
        id: "12341",
        "name": "特色套餐",
        productList: [{id: "abcda", productName: "鸡腿饭"},
          {id: "abcdb", productName: "鸡腿饭"},
          {id: "abcdc", productName: "鸡腿饭"},
          {id: "abcde", productName: "鸡腿饭"},
          {id: "abcdf", productName: "鸡腿饭"},
          {id: "abcdg", productName: "鸡腿饭"},
          {id: "abcdha", productName: "鸡腿饭"},
          {id: "abcfdsa", productName: "鸡腿饭"},
          {id: "fdsfdsf", productName: "鸡腿饭"},
          {id: "gdsfd", productName: "鸡腿饭"}
        ]
      },
      {
        id: "12342", "name": "主食",
        productList: [{id: "abcda", productName: "鸡腿饭"},
          {id: "abcdb", productName: "鸡腿饭"},
          {id: "abcdc", productName: "鸡腿饭"},
          {id: "abcde", productName: "鸡腿饭"},
          {id: "abcdf", productName: "鸡腿饭"},
          {id: "abcdg", productName: "鸡腿饭"},
          {id: "abcdha", productName: "鸡腿饭"},
          {id: "abcfdsa", productName: "鸡腿饭"},
          {id: "fdsfdsf", productName: "鸡腿饭"},
          {id: "gdsfd", productName: "鸡腿饭"}
        ]
      },
      {
        id: "12343", "name": "老火靓汤",
        productList: [{id: "abcda", productName: "鸡腿饭"},
          {id: "abcdb", productName: "鸡腿饭"},
          {id: "abcdc", productName: "鸡腿饭"},
          {id: "abcde", productName: "鸡腿饭"},
          {id: "abcdf", productName: "鸡腿饭"},
          {id: "abcdg", productName: "鸡腿饭"},
          {id: "abcdha", productName: "鸡腿饭"},
          {id: "abcfdsa", productName: "鸡腿饭"},
          {id: "fdsfdsf", productName: "鸡腿饭"},
          {id: "gdsfd", productName: "鸡腿饭"}
        ]
      },
      {
        id: "12344", "name": "水果甜点",
        productList: [{id: "abcda", productName: "鸡腿饭"},
          {id: "abcdb", productName: "鸡腿饭"},
          {id: "abcdc", productName: "鸡腿饭"},
          {id: "abcde", productName: "鸡腿饭"},
          {id: "abcdf", productName: "鸡腿饭"},
          {id: "abcdg", productName: "鸡腿饭"},
          {id: "abcdha", productName: "鸡腿饭"},
          {id: "abcfdsa", productName: "鸡腿饭"},
          {id: "fdsfdsf", productName: "鸡腿饭"},
          {id: "gdsfd", productName: "鸡腿饭"}
        ]
      },
      {
        id: "12345", "name": "饮料奶茶",
        productList: [{id: "abcda", productName: "鸡腿饭"},
          {id: "abcdb", productName: "鸡腿饭"},
          {id: "abcdc", productName: "鸡腿饭"},
          {id: "abcde", productName: "鸡腿饭"},
          {id: "abcdf", productName: "鸡腿饭"},
          {id: "abcdg", productName: "鸡腿饭"},
          {id: "abcdha", productName: "鸡腿饭"},
          {id: "abcfdsa", productName: "鸡腿饭"},
          {id: "fdsfdsf", productName: "鸡腿饭"},
          {id: "gdsfd", productName: "鸡腿饭"}
        ]
      },
      {
        id: "12346", "name": "美味小吃",
        productList: [{id: "abcda", productName: "鸡腿饭"},
          {id: "abcdb", productName: "鸡腿饭"},
          {id: "abcdc", productName: "鸡腿饭"},
          {id: "abcde", productName: "鸡腿饭"},
          {id: "abcdf", productName: "鸡腿饭"},
          {id: "abcdg", productName: "鸡腿饭"},
          {id: "abcdha", productName: "鸡腿饭"},
          {id: "abcfdsa", productName: "鸡腿饭"},
          {id: "fdsfdsf", productName: "鸡腿饭"},
          {id: "gdsfd", productName: "鸡腿饭"}
        ]
      },
      {
        id: "12347", "name": "糕饼面包",
        productList: [{id: "abcda", productName: "鸡腿饭"},
          {id: "abcdb", productName: "鸡腿饭"},
          {id: "abcdc", productName: "鸡腿饭"},
          {id: "abcde", productName: "鸡腿饭"},
          {id: "abcdf", productName: "鸡腿饭"},
          {id: "abcdg", productName: "鸡腿饭"},
          {id: "abcdha", productName: "鸡腿饭"},
          {id: "abcfdsa", productName: "鸡腿饭"},
          {id: "fdsfdsf", productName: "鸡腿饭"},
          {id: "gdsfd", productName: "鸡腿饭"}
        ]
      },
      {
        id: "343", "name": "主食",
        productList: [{id: "abcda", productName: "鸡腿饭"},
          {id: "abcdb", productName: "鸡腿饭"},
          {id: "abcdc", productName: "鸡腿饭"},
          {id: "abcde", productName: "鸡腿饭"},
          {id: "abcdf", productName: "鸡腿饭"},
          {id: "abcdg", productName: "鸡腿饭"},
          {id: "abcdha", productName: "鸡腿饭"},
          {id: "abcfdsa", productName: "鸡腿饭"},
          {id: "fdsfdsf", productName: "鸡腿饭"},
          {id: "gdsfd", productName: "鸡腿饭"}
        ]
      },
      {
        id: "fs", "name": "老火靓汤",
        productList: [{id: "abcda", productName: "鸡腿饭"},
          {id: "abcdb", productName: "鸡腿饭"},
          {id: "abcdc", productName: "鸡腿饭"},
          {id: "abcde", productName: "鸡腿饭"},
          {id: "abcdf", productName: "鸡腿饭"},
          {id: "abcdg", productName: "鸡腿饭"},
          {id: "abcdha", productName: "鸡腿饭"},
          {id: "abcfdsa", productName: "鸡腿饭"},
          {id: "fdsfdsf", productName: "鸡腿饭"},
          {id: "gdsfd", productName: "鸡腿饭"}
        ]
      },
      {
        id: "342432", "name": "水果甜点",
        productList: [{id: "abcda", productName: "鸡腿饭"},
          {id: "abcdb", productName: "鸡腿饭"},
          {id: "abcdc", productName: "鸡腿饭"},
          {id: "abcde", productName: "鸡腿饭"},
          {id: "abcdf", productName: "鸡腿饭"},
          {id: "abcdg", productName: "鸡腿饭"},
          {id: "abcdha", productName: "鸡腿饭"},
          {id: "abcfdsa", productName: "鸡腿饭"},
          {id: "fdsfdsf", productName: "鸡腿饭"},
          {id: "gdsfd", productName: "鸡腿饭"}
        ]
      },
      {
        id: "3423", "name": "饮料奶茶",
        productList: [{id: "abcda", productName: "鸡腿饭"},
          {id: "abcdb", productName: "鸡腿饭"},
          {id: "abcdc", productName: "鸡腿饭"},
          {id: "abcde", productName: "鸡腿饭"},
          {id: "abcdf", productName: "鸡腿饭"},
          {id: "abcdg", productName: "鸡腿饭"},
          {id: "abcdha", productName: "鸡腿饭"},
          {id: "abcfdsa", productName: "鸡腿饭"},
          {id: "fdsfdsf", productName: "鸡腿饭"},
          {id: "gdsfd", productName: "鸡腿饭"}
        ]
      },
      {
        id: "432", "name": "美味小吃",
        productList: [{id: "abcda", productName: "鸡腿饭"},
          {id: "abcdb", productName: "鸡腿饭"},
          {id: "abcdc", productName: "鸡腿饭"},
          {id: "abcde", productName: "鸡腿饭"},
          {id: "abcdf", productName: "鸡腿饭"},
          {id: "abcdg", productName: "鸡腿饭"},
          {id: "abcdha", productName: "鸡腿饭"},
          {id: "abcfdsa", productName: "鸡腿饭"},
          {id: "fdsfdsf", productName: "鸡腿饭"},
          {id: "gdsfd", productName: "鸡腿饭"}
        ]
      },
      {
        id: "ggg", "name": "糕饼面包",
        productList: [{id: "abcda", productName: "鸡腿饭"},
          {id: "abcdb", productName: "鸡腿饭"},
          {id: "abcdc", productName: "鸡腿饭"},
          {id: "abcde", productName: "鸡腿饭"},
          {id: "abcdf", productName: "鸡腿饭"},
          {id: "abcdg", productName: "鸡腿饭"},
          {id: "abcdha", productName: "鸡腿饭"},
          {id: "abcfdsa", productName: "鸡腿饭"},
          {id: "fdsfdsf", productName: "鸡腿饭"},
          {id: "gdsfd", productName: "鸡腿饭"}
        ]
      },
      {
        id: "a3425", "name": "主食",
        productList: [{id: "abcda", productName: "鸡腿饭"},
          {id: "abcdb", productName: "鸡腿饭"},
          {id: "abcdc", productName: "鸡腿饭"},
          {id: "abcde", productName: "鸡腿饭"},
          {id: "abcdf", productName: "鸡腿饭"},
          {id: "abcdg", productName: "鸡腿饭"},
          {id: "abcdha", productName: "鸡腿饭"},
          {id: "abcfdsa", productName: "鸡腿饭"},
          {id: "fdsfdsf", productName: "鸡腿饭"},
          {id: "gdsfd", productName: "鸡腿饭"}
        ]
      },
      {
        id: "hgf", "name": "老火靓汤",
        productList: [{id: "abcda", productName: "鸡腿饭"},
          {id: "abcdb", productName: "鸡腿饭"},
          {id: "abcdc", productName: "鸡腿饭"},
          {id: "abcde", productName: "鸡腿饭"},
          {id: "abcdf", productName: "鸡腿饭"},
          {id: "abcdg", productName: "鸡腿饭"},
          {id: "abcdha", productName: "鸡腿饭"},
          {id: "abcfdsa", productName: "鸡腿饭"},
          {id: "fdsfdsf", productName: "鸡腿饭"},
          {id: "gdsfd", productName: "鸡腿饭"}
        ]
      },
      {
        id: "r32", "name": "水果甜点",
        productList: [{id: "abcda", productName: "鸡腿饭"},
          {id: "abcdb", productName: "鸡腿饭"},
          {id: "abcdc", productName: "鸡腿饭"},
          {id: "abcde", productName: "鸡腿饭"},
          {id: "abcdf", productName: "鸡腿饭"},
          {id: "abcdg", productName: "鸡腿饭"},
          {id: "abcdha", productName: "鸡腿饭"},
          {id: "abcfdsa", productName: "鸡腿饭"},
          {id: "fdsfdsf", productName: "鸡腿饭"},
          {id: "gdsfd", productName: "鸡腿饭"}
        ]
      },
      {
        id: "fw", "name": "饮料奶茶",
        productList: [{id: "abcda", productName: "鸡腿饭"},
          {id: "abcdb", productName: "鸡腿饭"},
          {id: "abcdc", productName: "鸡腿饭"},
          {id: "abcde", productName: "鸡腿饭"},
          {id: "abcdf", productName: "鸡腿饭"},
          {id: "abcdg", productName: "鸡腿饭"},
          {id: "abcdha", productName: "鸡腿饭"},
          {id: "abcfdsa", productName: "鸡腿饭"},
          {id: "fdsfdsf", productName: "鸡腿饭"},
          {id: "gdsfd", productName: "鸡腿饭"}
        ]
      },
      {
        id: "aae4", "name": "美味小吃",
        productList: [{id: "abcda", productName: "鸡腿饭"},
          {id: "abcdb", productName: "鸡腿饭"},
          {id: "abcdc", productName: "鸡腿饭"},
          {id: "abcde", productName: "鸡腿饭"},
          {id: "abcdf", productName: "鸡腿饭"},
          {id: "abcdg", productName: "鸡腿饭"},
          {id: "abcdha", productName: "鸡腿饭"},
          {id: "abcfdsa", productName: "鸡腿饭"},
          {id: "fdsfdsf", productName: "鸡腿饭"},
          {id: "gdsfd", productName: "鸡腿饭"}
        ]
      },
      {
        id: "4323424", "name": "糕饼面包",
        productList: [{id: "abcda", productName: "鸡腿饭"},
          {id: "abcdb", productName: "鸡腿饭"},
          {id: "abcdc", productName: "鸡腿饭"},
          {id: "abcde", productName: "鸡腿饭"},
          {id: "abcdf", productName: "鸡腿饭"},
          {id: "abcdg", productName: "鸡腿饭"},
          {id: "abcdha", productName: "鸡腿饭"},
          {id: "abcfdsa", productName: "鸡腿饭"},
          {id: "fdsfdsf", productName: "鸡腿饭"},
          {id: "gdsfd", productName: "鸡腿饭"}
        ]
      },
      {
        id: "432432", "name": "主食",
        productList: [{id: "abcda", productName: "鸡腿饭"},
          {id: "abcdb", productName: "鸡腿饭"},
          {id: "abcdc", productName: "鸡腿饭"},
          {id: "abcde", productName: "鸡腿饭"},
          {id: "abcdf", productName: "鸡腿饭"},
          {id: "abcdg", productName: "鸡腿饭"},
          {id: "abcdha", productName: "鸡腿饭"},
          {id: "abcfdsa", productName: "鸡腿饭"},
          {id: "fdsfdsf", productName: "鸡腿饭"},
          {id: "gdsfd", productName: "鸡腿饭"}
        ]
      },
      {
        id: "rew", "name": "老火靓汤",
        productList: [{id: "abcda", productName: "鸡腿饭"},
          {id: "abcdb", productName: "鸡腿饭"},
          {id: "abcdc", productName: "鸡腿饭"},
          {id: "abcde", productName: "鸡腿饭"},
          {id: "abcdf", productName: "鸡腿饭"},
          {id: "abcdg", productName: "鸡腿饭"},
          {id: "abcdha", productName: "鸡腿饭"},
          {id: "abcfdsa", productName: "鸡腿饭"},
          {id: "fdsfdsf", productName: "鸡腿饭"},
          {id: "gdsfd", productName: "鸡腿饭"}
        ]
      },
      {
        id: "432", "name": "水果甜点",
        productList: [{id: "abcda", productName: "鸡腿饭"},
          {id: "abcdb", productName: "鸡腿饭"},
          {id: "abcdc", productName: "鸡腿饭"},
          {id: "abcde", productName: "鸡腿饭"},
          {id: "abcdf", productName: "鸡腿饭"},
          {id: "abcdg", productName: "鸡腿饭"},
          {id: "abcdha", productName: "鸡腿饭"},
          {id: "abcfdsa", productName: "鸡腿饭"},
          {id: "fdsfdsf", productName: "鸡腿饭"},
          {id: "gdsfd", productName: "鸡腿饭"}
        ]
      },
      {
        id: "e6546", "name": "rew",
        productList: [{id: "abcda", productName: "鸡腿饭"},
          {id: "abcdb", productName: "鸡腿饭"},
          {id: "abcdc", productName: "鸡腿饭"},
          {id: "abcde", productName: "鸡腿饭"},
          {id: "abcdf", productName: "鸡腿饭"},
          {id: "abcdg", productName: "鸡腿饭"},
          {id: "abcdha", productName: "鸡腿饭"},
          {id: "abcfdsa", productName: "鸡腿饭"},
          {id: "fdsfdsf", productName: "鸡腿饭"},
          {id: "gdsfd", productName: "鸡腿饭"}
        ]
      },
      {
        id: "654654654", "name": "fdsre",
        productList:
          [{id: "abcda", productName: "鸡腿饭"},
          {id: "abcdb", productName: "鸡腿饭"},
          {id: "abcdc", productName: "鸡腿饭"},
          {id: "abcde", productName: "鸡腿饭"},
          {id: "abcdf", productName: "鸡腿饭"},
          {id: "abcdg", productName: "鸡腿饭"},
          {id: "abcdha", productName: "鸡腿饭"},
          {id: "abcfdsa", productName: "鸡腿饭"},
          {id: "fdsfdsf", productName: "鸡腿饭"},
          {id: "gdsfd", productName: "鸡腿饭"}
        ]
      },
      {
        id: "654654", "name": "fdsfds",
        productList: [{id: "abcda", productName: "鸡腿饭"},
          {id: "abcdb", productName: "鸡腿饭"},
          {id: "abcdc", productName: "鸡腿饭"},
          {id: "abcde", productName: "鸡腿饭"},
          {id: "abcdf", productName: "鸡腿饭"},
          {id: "abcdg", productName: "鸡腿饭"},
          {id: "abcdha", productName: "鸡腿饭"},
          {id: "abcfdsa", productName: "鸡腿饭"},
          {id: "fdsfdsf", productName: "鸡腿饭"},
          {id: "gdsfd", productName: "鸡腿饭"}
        ]
      }
    ];
    $scope.selectedCategory=$scope.categories[0].id;
    $scope.productList = [
      {id: "abcda", productName: "鸡腿饭"},
      {id: "abcdb", productName: "鸡腿饭"},
      {id: "abcdc", productName: "鸡腿饭"},
      {id: "abcde", productName: "鸡腿饭"},
      {id: "abcdf", productName: "鸡腿饭"},
      {id: "abcdg", productName: "鸡腿饭"},
      {id: "abcdha", productName: "鸡腿饭"},
      {id: "abcfdsa", productName: "鸡腿饭"},
      {id: "fdsfdsf", productName: "鸡腿饭"},
      {id: "gdsfd", productName: "鸡腿饭"},

      {id: "75654", productName: "鸡腿饭11111"},
      {id: "3456", productName: "鸡腿饭"},
      {id: "4364", productName: "鸡腿饭"},
      {id: "435", productName: "鸡腿饭"},
      {id: "36", productName: "鸡腿饭"},
      {id: "542", productName: "鸡腿饭"},
      {id: "543534", productName: "鸡腿饭"},
      {id: "4", productName: "鸡腿饭"},
      {id: "33", productName: "鸡腿饭"},
      {id: "gd45sfd", productName: "鸡腿饭"},
      {id: "t45", productName: "鸡腿饭"},
      {id: "trt", productName: "鸡腿饭"},
      {id: "sss", productName: "鸡腿饭"},
      {id: "grege", productName: "鸡腿饭"},
      {id: "w454", productName: "鸡腿饭"},
      {id: "ee", productName: "鸡腿饭"},
      {id: "gg", productName: "鸡腿饭"},
      {
        id: "3g",
        productName: "鸡腿饭"
      },
      {id: "534", productName: "鸡腿饭"},
      {id: "5435435", productName: "鸡腿饭"},


      {id: "3e4sdfd", productName: "鸡腿饭34444444444444444444"}
    ];
  })

  .controller('PlaylistCtrl', function ($scope, $stateParams) {
  });
