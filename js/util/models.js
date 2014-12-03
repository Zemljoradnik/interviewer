define(['can'], function(can){
    var Models = function(){
        this.Position = can.Model({
            findAll: 'GET /positions',
            findOne: 'GET /positions/{id}',
            create:  'POST /positions',
            update:  'PUT /positions/{id}',
            destroy: 'DELETE /positions/{id}'
        }, {});

        this.Candidate = can.Model({
            findAll: 'GET /candidates',
            findOne: 'GET /candidates/{id}',
            create:  'POST /candidates',
            update:  'PUT /candidates/{id}',
            destroy: 'DELETE /candidates/{id}'
        }, {});

        this.Questionnaire = can.Model({
            findAll: 'GET /questionnaires',
            findOne: 'GET /questionnaires/{id}',
            create:  'POST /questionnaires',
            update:  'PUT /questionnaires/{id}',
            destroy: 'DELETE /questionnaires/{id}'
        }, {});
    }

    return new Models();
});

