$('.inputDiv').keypress(function(even){
    if(even.which === 13){
    	var todoText = $(this).val();
    	$(this).val("");
    	$('ul').append('<li>' + todoText + '<span><i class="fa fa-trash"</i></span>' );
    }
});

$("#add").click(function(){
	print('test')
	$(this).parent().fadeOut(500,funtion(){
	    $(this).remove();
	});
});


// function add









