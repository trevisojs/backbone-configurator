(function(window,App,Backbone){

    App.Step3View = Backbone.View.extend({
        id: 'step3',
        tagName: 'div',
        className: 'step',

        tmpl: _.template($('#step3Tmpl').html()),

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
