Meteor.subscribe("boissons");

Template.boissons.helpers({
    boissons: function(){return Boissons.find()}
});