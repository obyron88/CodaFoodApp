Meteor.subscribe("panierlist");
Meteor.subscribe('commandesubmitted');

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
