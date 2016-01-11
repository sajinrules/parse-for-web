$(function() {
    Parse.$ = jQuery;
    Parse.initialize("RdiSw9pfrD9LNaal1WR5OmtCSa3ARuLjma1aZGSv", "ZcUNWegk7FmR8iPSqYwmMt1Y5VCIGavEVkRSZCkj");
 
/**
**
**	View
**
***/
	var $container = $('.main-container'),
	LoginView = Parse.View.extend({
		template: Handlebars.compile($('#login-tpl').html()),
		events: {
			'submit #form-sign-in': 'login'
		},
		login: function(e) {

			// Prevent Default Submit Event
			e.preventDefault();

			// Get data from the form and put them into variables
			var data = $("#form-sign-in").serializeArray(),
				username = data[0].value,
				password = data[1].value;

			// Call Parse Login function with those variables
			Parse.User.logIn(username, password, {
				// If the username and password matches
				success: function(user) {
					blogRouter.navigate('#/home', { trigger: true });
				},
				// If there is an error
				error: function(user, error) {
					alert(error);
					blogRouter.navigate('#/register', { trigger: true });
				}
			});
		},
			render: function(){
			this.$el.html(this.template());
		}
	}),

	SignUpView = Parse.View.extend({
		template: Handlebars.compile($('#sign-up-tpl').html()),
		events: {
			'submit #formSignUp': 'signUp'
		},
		signUp: function(e) {
			e.preventDefault();
			var currentUser = Parse.User.current();
                if (currentUser) {
                    // do stuff with the user
                    Parse.User.logOut();
                }
			// Get data from the form and put them into variables
			var data = $("#formSignUp").serializeArray(),
				Name = data[0].value,
				username = data[1].value,
				email = data[2].value,
				password = data[3].value;
							
			var user = new Parse.User();
			user.set("username",username);
			user.set("password",password);
			user.set("email",email);
			user.set("Name",Name);
			user.signUp(null, {
				success: function(user) {
					this.navigate('#/home', { trigger: true });
					// Hooray! Let them use the app now.
				},
				error: function(user, error) {
				// Show the error message somewhere and let the user try again.
				alert("Error: " + error.code + " " + error.message);
				}
			});
		},
			render: function(){
			this.$el.html(this.template());
		}
	}),
	BlogsAdminView = Parse.View.extend({
		template: Handlebars.compile($('#dahsboard-tpl').html()),
		render: function() {
			var collection = { 
				username: this.options.username,
				message: this.message
			};
			this.$el.html(this.template(collection));
		}
	}),
	
/**
**
**	Route
**
***/
	BlogRouter = Parse.Router.extend({
		
		// Here you can define some shared variables
		initialize: function(options){
			//this.blogs = new Blogs();
			//this.categories = new Categories();
		},
		
		// This runs when we start the router. Just leave it for now.
		start: function(){
			Parse.history.start({
				// put in your directory below
				root: '/'
			});
			/*this.categories.fetch().then(function(categories){
				var categoriesView = new CategoriesView({ collection: categories });
				categoriesView.render();
				$('.blog-sidebar').html(categoriesView.el);
			});*/
		},
			
		// This is where you map functions to urls.
		// Just add '{{URL pattern}}': '{{function name}}'
		routes: {
			'': 'login',
			'register': 'signUp',
			'home': 'dashboard',
			'admin': 'admin',
			'login': 'login',
			'add': 'add',
			'edit/:id': 'edit',
			'del/:id': 'del',
			'logout': 'logout',
			'category/:id': 'category'
		},

		dashboard: function() {
			var currentUser = Parse.User.current();
			if (!currentUser) {
				this.navigate('#/login', { trigger: true });
			} else {
				//console.log("currentUser:",currentUser.get('username'));
				var blogsAdminView = new BlogsAdminView({ 
					// Pass in current username to be rendered in #admin-tpl
					username: currentUser.get('username'),
					message: "Welcome "+currentUser.get('username')+ "!"
				});
				blogsAdminView.render();
				$container.html(blogsAdminView.el);
			}
		},
		login: function() {
			var loginView = new LoginView();
			loginView.render();
			$container.html(loginView.el);
		},
		signUp: function() {
			var signUpView = new SignUpView();
			signUpView.render();
			$container.html(signUpView.el);
		},
		logout: function () {
			Parse.User.logOut();
			this.navigate('#/login', { trigger: true });
		}
	}),
	blogRouter = new BlogRouter();
	
	blogRouter.start();
});