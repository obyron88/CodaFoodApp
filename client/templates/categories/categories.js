Meteor.subscribe("categories");

Template.categories.helpers({
    categories: function(){return Categories.find()}
});
