//            OOP          / /////////////////////////////

function Human(){

  this.name = 'Ivan';
  this.age = 18;
  this.sex = 'male';
  this.height = 1.82;
  this.weight = 65;
}

function Worker(placeOfWork){
  this.placeOfWork = placeOfWork;
  this.zp = 2000;
  this.work = function(){
    console.log('I am working');
  };
}

function Student() {
  this.placeOfStudy = 'Univer';
  this.grant = 100;
  this.action = function(){
    console.log('watch TV');
  };
}

var human1 = new Human();

Student.prototype = human1;
Worker.prototype = human1;

var worker1 = new Worker('city');
var worker2 = new Worker('village');
var student1 = new Student();
var student2 = new Student();

console.log('Worker 1 age = ' + worker1.age);
console.log('Worker 1 place = ' + worker1.placeOfWork);
console.log('Worker 2 age = ' + worker2.age);
console.log('Worker 2 place = ' + worker2.placeOfWork);
worker1.work();

console.log('Student 1 name = ' + student1.name);
console.log('Student 1 age = ' + student2.age);
student1.action();
