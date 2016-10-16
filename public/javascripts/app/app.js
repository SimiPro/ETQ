$(function() {

    ajaxCall();

});

var ajaxCall = function() {
    var ajaxCallBack = {
        success : onSuccess,
        error : onError
    };

    jsRoutes.controllers.Application.ajaxCall().ajax(ajaxCallBack);
};

var  onSuccess = function(data) {
    console.log(data);
};

var onError = function(error) {
    console.log(error);
};