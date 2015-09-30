(function(window,App,Backbone){

    App.MainView = Backbone.View.extend({
        el:'#content',
        render: function(nestedView) {
            this.$el.html(
                nestedView.render().el
            );
            return this;
        }
    });

})(window,App,Backbone);
