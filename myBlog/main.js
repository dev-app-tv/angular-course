var app = angular.module('myApp', ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "list.html",
      controller: "ListBlogsController"
    })
    .state('add', {
      url: "/add",
      templateUrl: "add.html"
    })
    .state('edit', {
      url: "/edit",
      templateUrl: "edit.html"
    })

  $urlRouterProvider.otherwise('/home');
})

app.service('BlogService',function($http) {
  this.contents = [];

  this.getContents = function() {
    return $http.get("http://localhost:4000/blogs/").then(function(resp) {
      return resp.data;
    });
  }

  this.add = function(data) {
    this.contents.push(data);
  }

  this.select = function(data) {
    this.selectecItem = data;
  };

  this.get = function() {
    return this.selectecItem;
  }

  this.updateBlog = updateBlog;
  this.createBlog = createBlog;

  function updateBlog(dat) {
    var now = new Date();
    dat.postDate = now;
    dat.preview = dat.content.substring(0, 10) + "...";
    return {
      title: dat.title,
      content: dat.content,
      preview: dat.preview,
      author: dat.author,
      postDate: dat.postDate
    }
  }

  function createBlog(dat) {
    var now = new Date();
    dat = updateBlog(dat)
    return {
      title: dat.title + now,
      content: dat.content + now,
      preview: dat.preview,
      author: dat.author + now,
      postDate: dat.postDate
    };
  }

});

app.controller('BlogsController', function($scope, BlogService, $location) {
  var init = {
      title: "book of ",
      content: "content on ",
      author: "author ",
      postDate: ""
  };

  $scope.data = init;

  $scope.add = function(dat) {
    var blog = BlogService.createBlog(dat);
    BlogService.add(blog);
    $location.path("/home");
  };

});

app.controller('EditController', function($scope, BlogService, $location) {
  $scope.data = { };

  $scope.save = function(data) {
    BlogService.updateBlog(data);
    $location.path("/home");
  }

  $scope.get = function() {
    this.data = BlogService.get();
  }

  $scope.get();
});


app.controller('ListBlogsController', function($scope, BlogService) {
  $scope.limitRow = 5;

  BlogService.getContents().then(
    function(data) {
      $scope.contents = data;
    }
  );

  $scope.select = function(data) {
    BlogService.select(data);
  };
});