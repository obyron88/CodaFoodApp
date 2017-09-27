Meteor.subscribe("panierlist");
Meteor.subscribe('commandesubmitted');
// transfère les données du local au serveur
    Template.panierlist.events({
        'submit .passercommande'() {

            Panierlist.find().observe({
                added: function (item) {
                    Commandesubmitted.insert(item);
                }
            });
        }
    });
    Template.panierlist.helpers({
        panierlist: function () {
            return Commandesubmitted.find();
        }
    });
