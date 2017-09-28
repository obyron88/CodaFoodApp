Meteor.subscribe("pizzas");

Template.pizzas.helpers({
    pizzas: function(){return Pizzas.find()}
});

Template.update.events({

    'submit .updateform'(event){
        event.preventDefault();

        var newname = event.target.nameup.value;
        var newprice = event.target.priceup.value;
        var newdescription = event.target.descriptionup.value;
        var newimage = event.target.imageup.value;

        Pizzas.update(this._id, {
            $set:{name:newname,
                price:newprice,
                image:newimage,
                description:newdescription}

        });
        //au submit envoie sur la page d'accueil
        Router.go("/");

    },

});