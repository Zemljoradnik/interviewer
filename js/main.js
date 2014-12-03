require.config({
    paths : {
        jquery : 'lib/jquery',
        can : 'lib/canjs/amd/can',
        canjsutils : 'lib/canjs/amd/can/util',
        utils : 'util',
        moduls : 'mod'
    }
});

require(['utils/router'], function(router){
    router.init();
});