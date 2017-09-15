$(document).ready(function () {
    $('form').on('submit', function () {
        var name = $('#input').val();
        var done = false;
        $.ajax({
            method: "post",
            url: "/api/todos/",
            body:{
                name:name,
                done:done
            },
            success: function(item){
                $('#todo').append('<li id="'+item.id+'">'+item.name+'</li>')
            }
        });
        return false;
    })

   $('#button').click(function(event) {
      $('form').submit();
   });

});