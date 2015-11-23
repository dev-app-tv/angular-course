
var app = angular.module('myApp', []);

app.controller('ProfileController', function ($scope) {
	$scope.profiles = [
    {
      name: "Twin PanichSombat",
      nickname: "Roofimon",
      birthdate: new Date(1975, 3, 3),
      income: 50000,
      imageURL: "https://scontent.fbkk2-1.fna.fbcdn.net/hphotos-xfp1/v/t1.0-9/10988589_10152854451232047_3497922928092250734_n.jpg?oh=c89beb38e1763b711999f929efe6b0a8&oe=56C9772C",
    },
    {
      name: "Salah Chalermthai",
      nickname: "Dean",
      birthdate: new Date(1981, 2, 23),
      income: 2000,
      imageURL: "https://scontent.fbkk2-1.fna.fbcdn.net/hphotos-ash2/t31.0-8/10387080_10204775118807776_6457165136375628211_o.jpg",
    },
    {
      name: "Steven Gerrad",
      nickname: "Gerd",
      birthdate: new Date(1980, 4, 30),
      income: 464212532,
      imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Steven_Gerrard_in_2014.jpg/460px-Steven_Gerrard_in_2014.jpg",
    },
    {
      name: "Michael Owen",
      nickname: "Mike",
      birthdate: new Date(1979, 11, 14),
      income: 3494229233,
      imageURL: "https://upload.wikimedia.org/wikipedia/commons/4/49/Michael_Owen_072007_cropped.jpg",
    },
    {
      name: "Luis Suárez",
      nickname: "Yern",
      birthdate: new Date(1987, 0, 24),
      income: 342342432234,
      imageURL: "https://upload.wikimedia.org/wikipedia/commons/d/d8/U09_Luis_Su%C3%A1rez_7540.jpg",
    },
  ]


});

app.filter('superStar', function() {
  return function(data) {
    var field = data.name.split(" ");
    console.log(field);
    return data.nickname + " "+field[0];
  };
});


