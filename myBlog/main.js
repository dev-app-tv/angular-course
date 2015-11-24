
var app = angular.module('myApp', []);

app.controller('BlogsController', function ($scope) {
  $scope.contents = [];
  $scope.limitRow = 4;
  this.data = { blog: {
      title: "t",
      content: "r",
      author: "a",
      postDate: ""
    }
  };
  $scope.data = this.data;

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


