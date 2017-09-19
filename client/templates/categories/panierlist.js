Meteor.subscribe("panierlist");

Template.panierlist.helpers({
    panierlist: function(){return Panierlist.find()}
});
//applique un event sur le template pizzas
Template.pizzas.events({
    // aplique l'event quand on submit à partir du formulaire de classe formu
    'submit .formu'(event) {
        //reste sur la page même après avoir submit à partir du bouton
    event.preventDefault();
// crée une variable qui va appliquer un event sur la value de l'input avec pour name countitem ciblé par target
        var inputcount = event.target.countitem.value;
// insère dans la collection Panierlist
    Panierlist.insert({
        //crée le template countitem qui est égal  à la value de l'input count
        // (affiche la value inputcount dans l'html en marquant {{countitem}}
        countitem:inputcount,
        //crée le template itemprice qui est égal  à la value de l'inputcount* le prix
        itemprice:this.price*inputcount,
        //créer un tamplate qui est égal au name de la collection Panierlist
        name:this.name,
        price:this.price,
        image:this.image
    });
},

});
Template.burgers.events({
    'submit .formu'(event) {
        event.preventDefault();

        var inputcount = event.target.countitem.value;

        Panierlist.insert({
            countitem:inputcount,
            itemprice:this.price*inputcount,
            name:this.name,
            price:this.price,
            image:this.image
        });
    },
});
Template.desserts.events({
    'submit .formu'(event) {
        event.preventDefault();

        var inputcount = event.target.countitem.value;

        Panierlist.insert({
            countitem:inputcount,
            itemprice:this.price*inputcount,
            name:this.name,
            price:this.price,
            image:this.image
        });
    },
});

Template.salades.events({
    'submit .formu'(event) {
        event.preventDefault();

        var inputcount = event.target.countitem.value;

        Panierlist.insert({
            countitem:inputcount,
            itemprice:this.price*inputcount,
            name:this.name,
            price:this.price,
            image:this.image
        });
    },
});

Template.boissons.events({
    'submit .formu'(event) {
        event.preventDefault();

        var inputcount = event.target.countitem.value;

        Panierlist.insert({
            countitem:inputcount,
            itemprice:this.price*inputcount,
            name:this.name,
            price:this.price,
            image:this.image
        });
    },
});

Template.panierlist.events({
    'click .supprimer'(event){
        event.preventDefault();

        Panierlist.remove({
            _id:this._id
        })
    },
});
