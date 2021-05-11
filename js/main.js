$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 100,
        easing: 'ease',
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnFocus: true,
        pauseOnHover: true,
        swipe: true,
        responsive:[
            {
                breakpoint: 521,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]

    });
    $('.slider-card').slick({
        arrows: false,
        dots: false,
        adaptiveHeight: true,
        slidesToShow: 3,
        responsive:[
            {
                breakpoint: 521,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('#myForm').validate({
        rules: {
            name:{
                required: true,
                minlength: 3
            },
            surname:{
                required: true,
                minlength: 3
            },
            email:{
                required: true,
                email: true
            },
            message:{
                required: true,
                minlength: 15
            }
        },
        messages:{
            name:{
                required: "Поле обязательно для заполнения",
                minlength: jQuery.format("Длина имени не должно быть меньше {3} букв")
            },
            surname:{
                required: "Поле обязательно для заполнения",
                minlength: jQuery.format("Длина фамилии не должно быть меньше {3} букв")
            },
            email:{
                required:  "Поле обязательно для заполнения",
            },
            message:{
                required:"Поле обязательно для заполнения",
                minlength: jQuery.format("Длина сообщения не должно быть меньше {15} букв")
            },
        }
    });
});
