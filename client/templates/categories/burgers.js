Meteor.subscribe("burgers");

Template.burgers.helpers({
    burgers: function(){return Burgers.find()}
});