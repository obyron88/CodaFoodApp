Meteor.subscribe("desserts");

Template.desserts.helpers({
    desserts: function(){return Desserts.find()}
});