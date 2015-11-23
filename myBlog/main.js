
var app = angular.module('myApp', []);

app.controller('BlogsController', function ($scope) {
	this.contents = [
    {
      title: "Twin PanichSombat",
      content: "Roofimon",
      author: "author",
      postDate: "2015/11/25",
    },
    {
      title: "Twin PanichSombat",
      content: "Roofimon",
      author: "author",
      postDate: "2015/11/25",
    },
  ];


  this.data = { blog: {
      title: "t",
      content: "r",
      author: "a",
      postDate: ""
    }
  };

  $scope.postBlog = function(dat) {
    var n = new Date();
    dat.postDate = n;

    var b = {
      title: dat.title,
      content: dat.content,
      author: dat.author,
      postDate: dat.postDate
    }
    this.contents.push(b);
    this.data = { blog: {
      title: "t",
      content: "r",
      author: "a",
      postDate: ""
    }
    };
  };


  $scope.data = this.data;
  $scope.contents = this.contents;


});


