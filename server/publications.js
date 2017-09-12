Meteor.publish("categories", function(){
    return Categories.find();
});

Meteor.publish("salades", function(){
    return Salades.find();
});

Meteor.publish("pizzas", function(){
    return Pizzas.find();
});

Meteor.publish("burgers", function(){
    return Burgers.find();
});

Meteor.publish("boissons", function(){
    return Boissons.find();
});

Meteor.publish("desserts", function(){
    return Desserts.find();
});