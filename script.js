$(document).ready(function() {
getData();
   function getData() {
    $.ajax({
      type: 'GET',
      url: './data.js',
      success: function(data){
        console.log("data");
      }
    });
  }

});
