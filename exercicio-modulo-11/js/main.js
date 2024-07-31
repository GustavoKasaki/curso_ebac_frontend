$(document).ready(function() { 

    /* auto scroll - sobre */
    $('#sobre').on('click', function() { 
        const destino = $('.sobre');

        $('html').animate ({
            scrollTop: destino.offset().top
        },1000)
    })

    /* auto scroll - produtos */
    $('#produtos').on('click', function() { 
        const destino = $('.secao-produtos');

        $('html').animate ({
            scrollTop: destino.offset().top
        },1000)
    })

})