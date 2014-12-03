define(['jquery', 'can', 'utils/models', 'utils/mockdata'], function($, can, models, mockdata){
    return function(){
        var Positions = can.Control({
            init : function(element, options){
                var that = this;
                models.Position.findAll({},
                    function(data){
                        that.element.html(can.view('positions-template', {positions: data}));
                    },
                    function(xhr){
                        // TODO: manage errors
                    }
                );
            },
            'tr click': function(element, event) {
                can.route.attr({id: element[0].id.split('_')[1]});
            }
        });

        new Positions('#content');
    }
});
