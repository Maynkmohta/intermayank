Accounts.onLogin(function(){
    FlowRouter.go('news-feed');
}); /*client side code*/

Accounts.onLogout(function(){
    FlowRouter.go('home');
}); /*client side code can also be written with If else of client*/




FlowRouter.triggers.enter([function(context, redirect){
    if(!Meteor.userId()){
        FlowRouter.go('home');
    }
}]);

FlowRouter.route('/',{
	name: 'home',
	action(){
        if(Meteor.userId()){
            FlowRouter.go('news-feed');
        }
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/news-feed',{
	name: 'news-feed',
	action(){
    
		BlazeLayout.render('MainLayout',{main:'Recipes'});
	}
});

FlowRouter.route('/recipe/:id',{
	name: 'recipe',
	action(){
		BlazeLayout.render('MainLayout',{main:'RecipeSingle'});
	}
});


FlowRouter.route('/menu',{
   name: 'menu',
    action(){
        BlazeLayout.render('MainLayout',{main: 'Menu'});
    }
});


FlowRouter.route('/shopping-list',{
	name: 'shopping-list',
	action(){
		BlazeLayout.render('MainLayout',{main:'ShoppingList'});
	}
});



