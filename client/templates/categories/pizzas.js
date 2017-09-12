Meteor.subscribe("pizzas");

Template.pizzas.helpers({
    pizzas: function(){return Pizzas.find()}
});