var app = angular.module('myApp', ["ui.router"]);


app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "index.list.html",
      controller: "ListBlogsController"
    })
    .state('add', {
      url: "/add",
      templateUrl: "index.add.html",
      controller: "BlogsController"
    })

  $urlRouterProvider.otherwise('/home');
})

app.controller('BlogsController', function ($scope) {
  // $scope.contents = [{
  //     title: "title",
  //     content: "content",
  //     author: "author",
  //     postDate: ""
  //   }];
  // $scope.limitRow = 4;
  // this.data = { blog: {
  //     title: "title",
  //     content: "content",
  //     author: "author",
  //     postDate: ""
  //   }
  // };
  // $scope.data = this.data;

  $scope.postBlog = function(dat) {
    var n = new Date();
    dat.postDate = n;
    dat.preview = dat.content.substring(0,10)+"...";

    var b = {
      title: dat.title,
      content: dat.content,
      preview: dat.preview,
      author: dat.author,
      postDate: dat.postDate
    }
    this.contents.push(b);
    this.data = {
      blog: {
        title: "title",
        content: "content",
        author: "author",
        postDate: ""
      }
    };
  };

});

app.controller('ListBlogsController', function ($scope) {
  $scope.contents = [{
      title: "title",
      content: "content",
      author: "author",
      postDate: ""
    }];
  $scope.limitRow = 4;
  this.data = { blog: {
      title: "title",
      content: "content",
      author: "author",
      postDate: ""
    }
  };
  $scope.data = this.data;

  // $scope.postBlog = function(dat) {
  //   var n = new Date();
  //   dat.postDate = n;
  //   dat.preview = dat.content.substring(0,10)+"...";

  //   var b = {
  //     title: dat.title,
  //     content: dat.content,
  //     preview: dat.preview,
  //     author: dat.author,
  //     postDate: dat.postDate
  //   }
  //   this.contents.push(b);
  //   this.data = {
  //     blog: {
  //       title: "title",
  //       content: "content",
  //       author: "author",
  //       postDate: ""
  //     }
  //   };
  // };

});

