(function(window,App){

    App.MainRouter = Backbone.Router.extend({
        initialize: function() {
            //alert("Router created");
            //

            this.mainView = new App.MainView();

            this.step1View = new App.Step1View();
            this.step2View = new App.Step2View();
            this.step3View = new App.Step3View();
        },

        routes: {
            'step1' : 'step1Action',
            'step2' : 'step2Action',
            'step3' : 'step3Action'
        },

        step1Action: function() {
            this.mainView.render(this.step1View);
        },
        step2Action: function() {
            this.mainView.render(this.step2View);
        },
        step3Action: function() {
            this.mainView.render(this.step3View);
        }

    });



})(window,App);
