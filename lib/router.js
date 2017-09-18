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
