$('#view-work').on('click',function(){
    console.log("This is working");
    const images = $('#images').position().top;

    $('html,body').animate(
        {
        scrollTop:images
    },900
        );
    });
