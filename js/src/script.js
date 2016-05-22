
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
