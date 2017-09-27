Meteor.subscribe("pizzas");

Template.pizzas.helpers({
    pizzas: function(){return Pizzas.find()}
});

Template.update.events({

    'submit .updateformpizza'(event){
        event.preventDefault();

        var newname = event.target.namepizza.value;

        Pizzas.update(this._id, {
            $set:{name:newname}

        });
        Router.go("/categories/Pizzas");
     
    },

});