Meteor.subscribe("salades");

Template.salades.helpers({
    salades: function(){return Salades.find()}
});