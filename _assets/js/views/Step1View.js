(function(window,App,Backbone){

    App.Step1View = Backbone.View.extend({
        id: 'step1',
        tagName: 'div',
        className: 'step',

        tmpl: _.template($('#step1Tmpl').html()),

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
