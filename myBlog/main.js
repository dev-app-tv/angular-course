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
  this.posts = [];

  this.getposts = function() {
    return $http.get("http://localhost:4000/blogs/").then(function(resp) {
      return resp.data;
    });
  }

  this.add = function(data) {
    // this.posts.push(data);
    return $http.post("http://localhost:4000/blogs/", data);
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
    dat.timestamp = now;
    dat.preview = dat.post.substring(0, 10) + "...";
    return {
      title: dat.title,
      post: dat.post,
      preview: dat.preview,
      author: dat.author,
      timestamp: dat.timestamp
    }
  }

  function createBlog(dat) {
    var now = new Date();
    dat = updateBlog(dat)
    return {
      title: dat.title + now,
      post: dat.post + now,
      preview: dat.preview,
      author: dat.author + now,
      timestamp: dat.timestamp
    };
  }

});

app.controller('BlogsController', function($scope, BlogService, $location) {
  var init = {
      title: "book of ",
      post: "post on ",
      author: "author ",
      timestamp: ""
  };

  $scope.data = init;

  $scope.add = function(dat) {
    var blog = BlogService.createBlog(dat);
    // BlogService.add(blog);
    // $location.path("/home");
    BlogService.add(blog).then(function(resp) {
      console.info("add success.");
      $location.path("/home");
    });

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

  BlogService.getposts().then(
    function(data) {
      $scope.contents = data;
    }
  );

  $scope.select = function(data) {
    BlogService.select(data);
  };
});