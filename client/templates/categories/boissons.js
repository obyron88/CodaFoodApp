Meteor.subscribe("boissons");

Template.boissons.helpers({
    boissons: function(){return Boissons.find()}
});
Template.boissons.events({
    // au click sur l'élément avec la classe supprimer
    'click .supprboissons'(event){
        event.preventDefault();

        Boissons.remove({
            _id:this._id
        })
    },
});