
var app = angular.module('myApp', []);

angular.module('myApp').controller('TestController', 
  function(helloService1, helloService2, greet){
    helloService1.sayHello('AngularJS');
    helloService2.echo('echo AngularJS');
    greet("hola");
  }
);

// ================= service =================
angular.module('myApp').service('helloService1',function($timeout){
  this.sayHello = function(name){
    $timeout(function(){
      alert('Hello '+name + ', from service');
		},2000);
	}
});

// ================= factory =================
angular.module('myApp').factory('helloService2',function(){
  return {
    sayHello: function(name){
      console.log('Hello '+name+', from factory');
    },
    echo: function(message){
      alert(message);
    }
	}
});

// ================= provider =================
angular.module('myApp').provider('greet', function() {
  this.greeting = 'Hello';

	this.$get = function() {
    var greeting = this.greeting;
    return function(name) {
      alert(greeting + ', ' + name);
    }
	}

	this.setGreeting = function(greeting) { //setter for greeting text
    this.greeting = greeting;
	}
});

angular.module('myApp').config(function(greetProvider) {
  greetProvider.setGreeting('Hola');
});

// ================= value =================
angular.module('myApp').value('appVersion','1.0');

// ================= constant =================
angular.module('myApp').constant('API_TOKEN','XXXXX');
