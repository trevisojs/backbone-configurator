(function(window,App) {

    $(function(){
        new App.MainRouter();
        Backbone.history.start();
    })

}(window,App));
