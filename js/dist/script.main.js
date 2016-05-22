
// SEARCH
$( document ).ready(function() {


  $('#searchButton').on('click', search);

  $(document).on('keydown', function(e) {
    if (event.keyCode == 13) {
      // e.preventDefault;
      search();

      return false;
    }
  });



  function search(){
    var query = $('#searchField').val();
      // console.log(query);
    $('.resultList').children().remove();

    if (query.length > 0) {

      $.ajax({

        url:"http://api.riffsy.com/v1/search?tag=" + encodeURIComponent(query) + "&limit=10",
        dataType: 'json',
        success: function(data){
          //  console.log(data);
          if (data.results.length > 0){
            // $.each(data.results, function(){
            //   $('<li></li>').appendTo('.resultList');
            //    $('<a href="#"></a>').appendTo('li').text(this.title);
            //   console.log("title: " + this.title);
  		      //   console.log("url: " + this.url);
            //
  	        // });
            for (var i = 0; i < data.results.length; i++) {

              $('<li></li>').appendTo('.resultList');
              $('<a href="" target="_blank"> </a>').appendTo('.resultList li').eq(i).text(data.results[i].title).attr('href', data.results[i].url);
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



// $(function (){
//
//   var API_KEY = '2612659-a06243bff7542cbcab6fc731d';
//   var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('red roses');
//   $.getJSON(URL, function(data){
//     if (parseInt(data.totalHits) > 0)
//   	        $.each(data.hits, function(i, hit){ console.log(hit.pageURL); });
//
//
//   	    else{
//   	        console.log('No hits');
//   	}
//
//   });
;//            OOP          / /////////////////////////////

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
