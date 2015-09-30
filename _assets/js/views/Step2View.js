(function(window,App,Backbone){

    App.Step2View = Backbone.View.extend({
        id: 'step2',
        tagName: 'div',
        className: 'step',

        tmpl: _.template($('#step2Tmpl').html()),

        initialize: function() {
            //begin stuff goes here
        },

        render: function() {
            //render HTML here
            this.$el.html(this.tmpl());

            return this;
        }
    })

})(window,App,Backbone);
