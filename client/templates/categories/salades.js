Meteor.subscribe("salades");

Template.salades.helpers({
    salades: function(){return Salades.find()}
});
Template.salades.events({
    // au click sur l'élément avec la classe supprimer
    'click .supprsalades'(event){
        event.preventDefault();

        Salades.remove({
            _id:this._id
        })
    },
});