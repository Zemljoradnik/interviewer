define(['jquery', 'can', 'utils/models', 'utils/mockdata'], function($, can, models, mockdata){
    return function(){
        var Questionnaires = can.Control({
            init : function(element, options){
                var that = this;
                models.Questionnaire.findAll({},
                    function(data){
                        that.element.html(can.view('questionnaires-template', {questionnaires: data}));
                    },
                    function(xhr){
                        // TODO:
                        console.log(xhr);
                    }
                );
            },
            'tr click': function(element) {
                console.log('You clicked ' + element.text());
            }
        });

        new Questionnaires('#content');
    }
});
