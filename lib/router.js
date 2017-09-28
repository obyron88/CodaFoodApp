Router.configure({
//layout devient la page d'accueil
    layoutTemplate: 'layout',

});
// affiche le template categories au lancement de la page ('/') d'accueil
Router.route('/', {
    name:'categories'
    });
Router.route('update', {
    name:'update'
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
Router.route('/update/:_id', function () {
    // donne l'id à la page update
    this.render("/update",{
        data:{
            _id:this.params._id
        }});
});
Router.route('/update/:name', function () {

    this.render("/update",{
        data:{
            name:this.params.name
        }});
});
// Router.route('/update/:image', function () {
//
//     this.render("/update",{
//         data:{
//             image:this.params.image
//         }});
// });
// Router.route('/update/:description', function () {
//     this.render("/update",{
//         data:{
//             description:this.params.description
//         }});
// });
// Router.route('/update/:price', function () {
//     this.render("/update",{
//         data:{
//            price:this.params.price
//         }});
// });
// Router.route('/update/:name', function () {
//     this.render(this.params._id,{
//         data:{
//             _id:this.params._id
//         }});
// });
// Router.route('/categories/Pizzas/:_id', function () {
//     this.render(this.params._id,{
//         data:{
//             _id:this.params._id
//         }});
// });
// Router.route('/categories/Pizzas/:name', function () {
//     this.render(this.params._id,{
//         data:{
//             _id:this.params._id
//         }});
// });
// var requireLogin = function() {
//     if (! Meteor.user()) {
//         this.render('header');
//     } else {
//         this.next();
//     }
// }
// Router.onBeforeAction(requireLogin, 'categories', 'panierlist', 'pizzas', 'burgers', 'boissons', 'desserts', 'salades' );
