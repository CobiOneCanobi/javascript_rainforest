$(document).on('ready page:load', function() {
  $('#search-form').submit(function(event) {
    event.preventDefault();
    var searchValue = $('#search').val();

  //   $.ajax({
  //     url: '/products?search=' + searchValue,
  //     type: 'GET',
  //     dataType: 'html'
  //   }).done(function(data){
  //     $('#products').html.(data);
  //   });
  // });
  // $.get('/products?search=' + searchValue)
  //   .done(function(data){
  //     console.log(data);
  //     $('#products').html(data);
  //   });
   $.getScript('/products?search=' + searchValue);
  });

  $(window).scroll(function() {
     var url = $('.pagination span.next').children().attr('href');
     if (url && $(window).scrollTop() > $(document).height() - $(window).height() - 50) {
      $('.pagination').text("Fetching more products...");list
      console.log($('.pagination span.next').children().attr('href'));
       $.getScript(url);
     }
   });
});
