// Check off specific todos by clicking.
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// Click on X to delete.
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

// get input text and add to list.
$("input[type='text']").on("keypress", function(event){
    // check for enter key.
    if (event.which === 13) {
        let todoText = $(this).val();
        $("ul").append(`<li><span><i class="fa fa-trash"></i></span> ${todoText}</li>`);
        $(this).val("");
    }
})

$("#plus").on("click", function(){
    $("input[type='text']").fadeToggle();
});