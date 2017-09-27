Meteor.subscribe("desserts");

Template.desserts.helpers({
    desserts: function(){return Desserts.find()}
});
Template.desserts.events({
    // au click sur l'élément avec la classe supprimer
    'click .supprdesserts'(event){
        event.preventDefault();

        Desserts.remove({
            _id:this._id
        })
    },
});
