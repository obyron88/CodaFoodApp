Meteor.subscribe("burgers");

Template.burgers.helpers({
    burgers: function(){return Burgers.find()}
});
Template.burgers.events({
    // au click sur l'élément avec la classe supprimer
    'click .supprburgers'(event){
        event.preventDefault();

        Burgers.remove({
            _id:this._id
        })
    },
});
