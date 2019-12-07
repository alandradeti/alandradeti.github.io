$(function(){
    $('.contatos').submit(function(){
        $(".loading").css("display", "inline-block");
        $.ajax({
            url: 'https://alandradetiemail.000webhostapp.com/classes/Support/send-form.php',
            //url: 'classes/Support/send-form.php',
            type: 'POST',
            data: $('.contatos').serialize(),
            success: function(data){
                $('.mostrar').html(data);
                $('.loading').hide();
                $(".loading").css("display", "none");
				$('.contatos')[0].reset();
            }
        });
        return false;
    });
});