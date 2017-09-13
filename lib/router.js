Router.configure({

    layoutTemplate: 'layout',

});
// affiche le template categories au lancement de la page ('/') d'accueil
Router.route('/', {
    name:'categories'
    });
//ajoute de name en parametre
Router.route('/categories/:name', function () {
    this.render(this.params.name,{
        data:{
            name:this.params.name
        }});
});
