define(['jquery', 'can'], function($, can){
    return function(){
        $('#content').html(can.view('new-questionnaire-template', {msg: 'world'}));
    }
});
