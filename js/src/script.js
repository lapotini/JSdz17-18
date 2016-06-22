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


// //////////////////////////////////////////////////////////////////////////////////
// SEARCH
$( document ).ready(function() {
  $('#searchField').val('');


  $('#searchButton').on('click', function() {
    search();
    return false;
  });

  $(document).on('keydown', function(e) {
    if (e.keyCode == 13) {
      search();
      return false;
    }
  });




  function search(){
    var API_KEY = '2612659-a06243bff7542cbcab6fc731d';
    var query = $('#searchField').val();
      // console.log(query);
    $('.resultList').children().remove();

    if (query.length > 0) {

      $.ajax({
        url: "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(query),
        dataType: 'json',
        success: function(data){
            //console.log(data);
          if (data.hits.length > 0){

            for (var i = 0; i < data.hits.length; i++) {

              $('<a class="resultLink" href="" target="_blank">  <img class="image" src="" alt=""/>  </a>').appendTo('.resultBox');
              //$('<a class="resultLink" href="" target="_blank"> </a>').appendTo('.resultList li').eq(i);
              $('.resultLink').eq(i).attr('href', data.hits[i].pageURL);
              $('.image').eq(i).attr('src', data.hits[i].webformatURL);

             }
            }else{
              $('.resultList').children().remove();
              $('.resultList').append('<p>Ничего не найдено</p>');
            }
          }

      });


    }
  }





});


