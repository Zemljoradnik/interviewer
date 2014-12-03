define(['jquery', 'can'], function($, can){
    return function(){
        $('#content').html(can.view('new-position-template', {msg: 'world'}));
    }
});
