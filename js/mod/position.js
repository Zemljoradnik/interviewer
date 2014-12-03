define(['jquery', 'can', 'utils/models', 'utils/mockdata'], function($, can, models, mockdata){
    return function(id){
        $('#content').html(can.view('position-template'));
        //var Positions = can.Control({
        //    init : function(element, options){
        //        var that = this;
        //        models.Position.findAll({},
        //            function(data){
        //                that.element.html(can.view('positions-template', {positions: data}));
        //            },
        //            function(xhr){
        //                // TODO: manage errors
        //            }
        //        );
        //    },
        //    'tr click': function(element, event) {
        //        console.log('You clicked ' + element.text());
        //    }
        //});
        //
        //new Positions('#content');
    }
});
