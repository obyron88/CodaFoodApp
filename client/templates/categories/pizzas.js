Meteor.subscribe("pizzas");

Template.pizzas.helpers({
    pizzas: function(){return Pizzas.find()}
});
Template.pizzas.events({
    // au click sur l'élément avec la classe supprimer
    'click .supprpizza'(event){
        event.preventDefault();

        Pizzas.remove({
            _id:this._id
        });

    },
});
// Template.pizzas.events({
//     'click .updatepizza'(){
//         Router.go("update", {_id:1});
//         console.log(_id);
//     }
// });

