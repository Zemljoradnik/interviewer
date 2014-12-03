define(['can', 'canjsutils/fixture', 'utils/models'], function(can, fixture, models){
    function randomListOfIds(itemsLimit, idLimit){
        var items = [];
        var itemNum =  can.fixture.rand(itemsLimit);
        for(var i = 0; i < itemNum; i++){
            var item;
            do {
                item = can.fixture.rand(idLimit);
            }
            while(items.indexOf(item) !== -1);
            items.push(item);
        }
        return items;
    }

    var positionsStore = can.fixture.store(7, function(i){
        return {
            id : i,
            name : "Position "+i,
            count : can.fixture.rand(10),
            questionnaires : randomListOfIds(3, 10)
        }
    });
    can.fixture({
        'GET /positions' : positionsStore.findAll,
        'GET /positions/{id}' : positionsStore.findOne,
        'POST /positions' : positionsStore.create,
        'PUT /positions/{id}' : positionsStore.update,
        'DELETE /positions/{id}' : positionsStore.destroy
    });

    var questionnairesStore = can.fixture.store(10, function(i){
        return {
            id: i,
            name: "Questionnaires "+i
        }
    });
    can.fixture({
        'GET /questionnaires' : questionnairesStore.findAll,
        'GET /questionnaires/{id}' : questionnairesStore.findOne,
        'POST /questionnaires' : questionnairesStore.create,
        'PUT /questionnaires/{id}' : questionnairesStore.update,
        'DELETE /questionnaires/{id}' : questionnairesStore.destroy
    });

    var candidatesStore = can.fixture.store(25, function(i){
        return {
            id: i,
            name: "Candidate "+i,
            position: can.fixture.rand(7)
        }
    });
    can.fixture({
        'GET /candidates' : candidatesStore.findAll,
        'GET /candidates/{id}' : candidatesStore.findOne,
        'POST /candidates' : candidatesStore.create,
        'PUT /candidates/{id}' : candidatesStore.update,
        'DELETE /candidates/{id}' : candidatesStore.destroy
    });
});
