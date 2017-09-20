Template.panierlist.onCreated(function(){
    Meteor.subscribe("panierlist");
    Meteor.subscribe('commandesubmitted');
    Panierlist.find().observe({
        added: function(item){
            Commandesubmitted.insert(item);
        }
    });
    });
Template.panierlist.helpers({
    panierlist: function(){
        return Commandesubmitted.find();
    }
    });
