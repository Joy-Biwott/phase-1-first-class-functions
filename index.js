const receivesAFunction = function(callback){
    console.log(callback());
};

function returnsANamedFunction(){
    return function namedFunction(){}
} ;

returnsAnAnonymousFunction = function(){
    return function(){}
};