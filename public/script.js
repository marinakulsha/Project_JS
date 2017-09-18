$(document).ready(function () {
    $('form').on('submit', function () {
        var name = $('#input').val();
        var done = false;
        $.ajax({
            type: "post",
            url: "/api/todos/",
            dataType:"JSON",
            data:{
                name: name,
                done: done
            },
            success: function(item){
                console.log(item)
               $('#todo').append('<li id="'+item.id+'">'+getStrikeText(item)+'</li>')
            }

        });
        return false;
    })

   $('#button').click(function(event) {
      $('form').submit();
   });

    $('#todo').on('click', '.close', function () {
        var id = $(this).parent().attr("id");
        $.ajax({
            type: "delete",
            url: "/api/todos/" + id,
            dataType: "JSON",
            success: function (item) {
                console.log(item)
                $('#' + id).remove();
            },
            done: function (item) {
               console.log(item);
            }


        });
    })
});