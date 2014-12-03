define(['jquery', 'can', 'utils/models', 'utils/mockdata'], function($, can, models, mockdata){
    return function(){
        var Candidates = can.Control({
            init : function(element, options){
                var that = this;
                models.Candidate.findAll({},
                    function(data){
                        that.element.html(can.view('candidates-template', {candidates: data}));
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

        new Candidates('#content');
    }
});
