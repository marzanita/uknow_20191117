$(document).ready(function(){

    $(".button-collapse").sideNav({ // Open mobile sidenav on click
        closeOnClick: true,
        edge: 'right',
        draggable: true,
        menuWidth: 325
    });

    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
    $('.materialboxed').materialbox();
});
