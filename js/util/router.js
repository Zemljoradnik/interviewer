define(['jquery', 'can',
        'moduls/positions', 'moduls/candidates', 'moduls/questionnaires',
        'moduls/position', 'moduls/newposition', 'moduls/newquestionnaire'],
    function($, can,
             positions, candidates, questionnaires,
             position, newPosition, newQuestionnaire) {

        var Router = can.Control({
            init : function(element, options){
                can.route.attr({'type' : 'positions'});
            },

            'positions' : positions,
            'candidates' : candidates,
            'questionnaires' : questionnaires,
            'position' : position,
            //'candidate' : candidate,
            //'questionnaire' : questionnaire,
            'newPosition' : newPosition,
            //'newCandidate' : newCandidate,
            'newQuestionnaire' : newQuestionnaire,

            ':type route' : function(){
                if(can.route.attr('id')) return;
                var type = can.route.attr('type');
                this[type]();
                this.updateMenu(type);
            },
            ':type/:id route' : function(){
                var type = can.route.attr('type');
                var id = can.route.attr('id');
                var single = type.substring(0, type.length-1);
                this[single](id);
                this.updateMenu(type);
            },

            updateMenu : function(type){
                $('#menu a').removeClass('active');
                $('#menu_' + type).addClass('active');
            }
        });
        return {
            init : function(){
                can.route.ready(false);
                new Router(document);
                can.route.ready(true);
            }
        }
});
