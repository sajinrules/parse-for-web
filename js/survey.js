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
			e.preventDefault();
			var data = $("#form-sign-in").serializeArray(),
				username = data[0].value,
				password = data[1].value;

			Parse.User.logIn(username, password, {
				success: function(user) {
					blogRouter.navigate('#/home', { trigger: true });
				},
				error: function(user, error) {
					alert("Error: "+ error.message);
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
                    Parse.User.logOut();
                }
			// Get data from the form and put them into variables
			var data = $("#formSignUp").serializeArray(),
				fname = data[0].value,
				lname = data[1].value,
				email = data[2].value,
				company = data[3].value;
				jobtitle = data[4].value;
				password = data[5].value;
				Name = fname+" "+lname;
			
			var user = new Parse.User();
			user.set("Name",Name);
			user.set("fname",fname);
			user.set("lname",lname);
			user.set("email",email);
			user.set("username",email);
			user.set("company",company);
			user.set("jobtitle",jobtitle);
			user.set("password",password);
			console.log("user:",user);
			user.signUp(null, {
				success: function(user) {
					blogRouter.navigate('#/home', { trigger: true });
				},
				error: function(user, error) {
					alert("Error: "+ error.message);
				}
			});
		},
			render: function(){
			this.$el.html(this.template());
		}
	}),

	PassResetView = Parse.View.extend({
		template: Handlebars.compile($('#resetpass-tpl').html()),
		events: {
			'submit #form-reset-pass': 'resetPassword'
		},
		resetPassword: function(e) {
			e.preventDefault();
			var data = $("#form-reset-pass").serializeArray(),
				email = data[0].value;
			
			Parse.User.requestPasswordReset(email, {
				success: function(data) {
					blogRouter.navigate('#/login', { trigger: true });
				},
				error: function(error) {
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

	NavbarView = Parse.View.extend({
		template: Handlebars.compile($('#navbar-tpl').html()),
		render: function() {
			var collection = { 
				username: this.options.username,
				fname: this.options.fname
			};
			this.$el.html(this.template(collection));
		}
	}),

	NavbarViewNotLogged = Parse.View.extend({
		template: Handlebars.compile($('#navbar-not-logged-tpl').html()),
		render: function() {
			this.$el.html(this.template());
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
			
		},
			
		// This is where you map functions to urls.
		// Just add '{{URL pattern}}': '{{function name}}'
		routes: {
			'': 'login',
			'register': 'signUp',
			'password-recovery': 'resetPassword',
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
				/*
				*
				* navbar render
				**/
				var navbarView = new NavbarView({ 
					username: currentUser.get('username'),
					fname: currentUser.get('fname')
				});
				navbarView.render();
				$('.navbar-container').html(navbarView.el);
				
				/*
				*
				* Admin panel render
				**/
				var blogsAdminView = new BlogsAdminView({ 
					username: currentUser.get('username'),
					message: "Welcome "+currentUser.get('username')+ "!"
				});
				blogsAdminView.render();
				$container.html(blogsAdminView.el);

			}
		},
		login: function() {
			/*
			*
			* navbar not logged render
			**/
			var navbarViewNotLogged = new NavbarViewNotLogged();
			navbarViewNotLogged.render();
			$('.navbar-container').html(navbarViewNotLogged.el);
			
			/*
			*
			* Login view render
			**/
			var loginView = new LoginView();
			loginView.render();
			$container.html(loginView.el);

		},
		signUp: function() {
			/*
			*
			* navbar not logged render
			**/
			var navbarViewNotLogged = new NavbarViewNotLogged();
			navbarViewNotLogged.render();
			$('.navbar-container').html(navbarViewNotLogged.el);
			
			/*
			*
			* Sign up view render
			**/
			var signUpView = new SignUpView();
			signUpView.render();
			$container.html(signUpView.el);
		},
		resetPassword: function() {
			/*
			*
			* navbar not logged render
			**/
			var navbarViewNotLogged = new NavbarViewNotLogged();
			navbarViewNotLogged.render();
			$('.navbar-container').html(navbarViewNotLogged.el);
			
			/*
			*
			* password reset view view render
			**/
			var passResetView = new PassResetView();
			passResetView.render();
			$container.html(passResetView.el);
		},

		logout: function () {
			Parse.User.logOut();
			this.navigate('#/login', { trigger: true });
		}
	}),
	blogRouter = new BlogRouter();
	
	blogRouter.start();
});