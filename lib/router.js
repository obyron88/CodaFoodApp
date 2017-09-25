Router.configure({
//layout devient la page d'accueil
    layoutTemplate: 'layout',

});
// affiche le template categories au lancement de la page ('/') d'accueil
Router.route('/', {
    name:'categories'
    });

//signifie que quand on est sur la page /panierlist, il affiche le template panierlist
Router.route('/panierlist', {
    name:'panierlist'
});
//ajoute name en parametre
Router.route('/categories/:name', function () {
    this.render(this.params.name,{
        data:{
            name:this.params.name
        }});
});
Router.route('/panierlist/:_id', function () {
    this.render(this.params._id,{
        data:{
            _id:this.params._id
        }});
});
// var requireLogin = function() {
//     if (! Meteor.user()) {
//         this.render('header');
//     } else {
//         this.next();
//     }
// }
// Router.onBeforeAction(requireLogin, 'categories', 'panierlist', 'pizzas', 'burgers', 'boissons', 'desserts', 'salades' );
