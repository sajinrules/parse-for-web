$(function() {
    Parse.$ = jQuery;
    Parse.initialize("RdiSw9pfrD9LNaal1WR5OmtCSa3ARuLjma1aZGSv", "ZcUNWegk7FmR8iPSqYwmMt1Y5VCIGavEVkRSZCkj");
    
    /**
    **
    **  View
    **
    ***/
    var $container = $('.main-container'),
    qc =[
            {
                "category1":{
                    'description':'1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                    'questions' : [
                        {
                            'question':'JavaScript Multiple Choice Questions and Answers',
                            'choice' : [
                                        'JavaScript is a stripped-down version of Java',
                                        'JavaScripts syntax is loosely based on Javas',
                                        'They both originated on the island of Java',
                                        'None of the above'
                            ]
                        },{
                            'question':'When a user views a page containing a JavaScript program, which machine actually executes the script?',
                            'choice' : [
                                        'The Users machine running a Web browser',
                                        'The Web server',
                                        'A central machine deep within Netscapes corporate offices',
                                        'None of the above'
                            ]
                        },{
                            'question':'______ JavaScript is also called client-side JavaScript.',
                            'choice' : [
                                        'Microsoft',
                                        'Navigator',
                                        'LiveWire',
                                        'Native'
                            ]
                        },{
                            'question':'__________ JavaScript is also called server-side JavaScript.',
                            'choice' : [
                                        'Microsoft',
                                        'Navigator',
                                        'LiveWire',
                                        'Native'
                            ]
                        },{
                            'question':'What are variables used for in JavaScript Programs?',
                            'choice' : [
                                        'Storing numbers, dates, or other values',
                                        'Varying randomly',
                                        'Causing high-school algebra flashbacks',
                                        ' None of the above'
                            ]
                        }
                    ]
                }
            },{
                "category2":{
                    'description':'2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                    'questions':[
                        {
                            'question':'_____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.',
                            'choice' : [
                                        'Client-side',
                                        'Server-side',
                                        'Local',
                                        'Native'
                            ]
                        },{
                            'question':'What should appear at the very end of your JavaScript?.The <script LANGUAGE="JavaScript">tag',
                            'choice' : [
                                        'The </script>',
                                        ' The <script>',
                                        'The END statement',
                                        'None of the above'
                            ]
                        },{
                            'question':'Which of the following cant be done with client-side JavaScript?',
                            'choice' : [
                                        'Validating a form',
                                        'Sending a forms contents by email',
                                        'Storing the forms contents to a database file on the server',
                                        'None of the above'
                            ]
                        },{
                            'question':'Which of the following are capabilities of functions in JavaScript?',
                            'choice' : [
                                        'Return a value',
                                        'Accept parameters and Return a value',
                                        'Accept parameters',
                                        'None of the above'
                            ]
                        },{
                            'question':'Which of the following is not a valid JavaScript variable name?',
                            'choice' : [
                                        '2names',
                                        '_first_and_last_names',
                                        'FirstAndLast',
                                        'None of the above'
                            ]
                        }
                    ]
                }
            }
        ],
    categories=[{'name':'Category 1','value':'category1'},{'name':'Category 2','value':'category2'}],
    
    qa =[
        {
            'category'      : 'Category 1',
            'description'   : 'Category 1 description',
            'questions'     : [
                {
                    'question'  :'JavaScript Multiple Choice Questions and Answers',
                    'choice'    : [
                            'JavaScript is a stripped-down version of Java',
                            'JavaScripts syntax is loosely based on Javas',
                            'They both originated on the island of Java',
                            'None of the above'
                    ]
                },{
                    'question'  :'When a user views a page containing a JavaScript program, which machine actually executes the script?',
                    'choice'    : [
                            'The Users machine running a Web browser',
                            'The Web server',
                            'A central machine deep within Netscapes corporate offices',
                            'None of the above'
                    ]
                },{
                    'question'  :'______ JavaScript is also called client-side JavaScript.',
                    'choice'    : [
                            'Microsoft',
                            'Navigator',
                            'LiveWire',
                            'Native'
                    ]
                },{
                    'question'  :'__________ JavaScript is also called server-side JavaScript.',
                    'choice'    : [
                            'Microsoft',
                            'Navigator',
                            'LiveWire',
                            'Native'
                    ]
                },{
                    'question'  :'What are variables used for in JavaScript Programs?',
                    'choice'    : [
                            'Storing numbers, dates, or other values',
                            'Varying randomly',
                            'Causing high-school algebra flashbacks',
                            ' None of the above'
                    ]
                }
            ]
        },{
            'category'  : 'Category 2',
            'description':'Category 2 description',
            'questions':[
                {
                    'question':'_____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.',
                    'choice' : [
                                'Client-side',
                                'Server-side',
                                'Local',
                                'Native'
                    ]
                },{
                    'question':'What should appear at the very end of your JavaScript?.The <script LANGUAGE="JavaScript">tag',
                    'choice' : [
                                'The </script>',
                                ' The <script>',
                                'The END statement',
                                'None of the above'
                    ]
                },{
                    'question':'Which of the following cant be done with client-side JavaScript?',
                    'choice' : [
                                'Validating a form',
                                'Sending a forms contents by email',
                                'Storing the forms contents to a database file on the server',
                                'None of the above'
                    ]
                },{
                    'question':'Which of the following are capabilities of functions in JavaScript?',
                    'choice' : [
                                'Return a value',
                                'Accept parameters and Return a value',
                                'Accept parameters',
                                'None of the above'
                    ]
                },{
                    'question':'Which of the following is not a valid JavaScript variable name?',
                    'choice' : [
                                '2names',
                                '_first_and_last_names',
                                'FirstAndLast',
                                'None of the above'
                    ]
                }
            ]
        }
    ],
    
    $loginModal = $("#loginModal"),
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

    SurveyView = Parse.View.extend({
        template: Handlebars.compile($('#survey-tpl').html()),
        events:{
            'click a.cat' : 'catSelect',
            'click ul.pagination a.page':'pagination',
            'click button.choice' : 'selectChoice'
        },
        getQuestion:function(selected,from,to){
          var a;
          $.each(qa,function(key,value){
            if(value.category==selected){
              value.questions=value.questions.slice(from,to);
              console.log("value:",value);
              a=value;    
              return false;
            }
          })
          return a;
        },
        catSelect: function(e){
          var selected = $(e.target).text().trim();
          var qaFiltered=this.getQuestion(selected,0,3)
          var source = $("#survey-tpl").html();
          var template = Handlebars.compile(source);
          var html = template({categories:categories,questions:qaFiltered});
          this.$el.html(html);

          e.preventDefault();
        },
        pagination : function(e){
          e.preventDefault();
          var limit=3;
          console.log("clicked:",$(e.target).text().trim());
          $('li.list').removeClass('active')
          $(e.target).parent('li.list').addClass('active')
        },
        selectChoice:function(e){
          var queNo= "."+$(e.target).val().split('-')[0];
          var other =$(queNo).removeClass('active');
          $(e.target).addClass('active');
        },
        render: function() {
            var qaFiltered=this.getQuestion('Category 1',0,3)
            this.$el.html(this.template({categories:categories,questions:qaFiltered}));
        }
    }),


    NavbarView = Parse.View.extend({
        template: Handlebars.compile($('#navbar-tpl').html()),
        events: {
            'submit #form-sign-in': 'login',
            'submit #formSignUp': 'signUp',
            'submit #form-reset-pass': 'resetPassword'
        },
        login: function(e) {
            //console.log("e:",e);
            e.preventDefault();
            var data = $("#form-sign-in").serializeArray(),
                username = data[0].value,
                password = data[1].value;

            Parse.User.logIn(username, password, {
                success: function(user) {
                    $(".modal-backdrop").css("display", "none");
                    $("body").css("overflow", "auto");
                    blogRouter.navigate('#/admin/home', { trigger: true });
                },
                error: function(user, error) {
                    if(error.code===101)
                        alert("The email and password you entered don't match. Please reset your password if needed.");
                    else
                        alert(error.message);
                }
            });
        },
        signUp: function(e) {
            //console.log("e:",e);
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
            user.signUp(null, {
                success: function(user) {
                    $(".modal-backdrop").css("display", "none");
                    blogRouter.navigate('#/admin/home', { trigger: true });
                },
                error: function(user, error) {
                    alert("Error: "+ error.message);
                }
            });
        },
        resetPassword: function(e) {
            e.preventDefault();
            var data = $("#form-reset-pass").serializeArray(),
                email = data[0].value;
            
            Parse.User.requestPasswordReset(email, {
                success: function(data) {
                    $(".modal-backdrop").css("display", "none");
                    blogRouter.navigate('#/', { trigger: true });
                },
                error: function(error) {
                    alert("Error: " + error.code + " " + error.message);
                }
            });
        },
        render: function() {
            var collection = { 
                username: this.options.username,
                fname: this.options.fname,
                company: this.options.company
            };
            this.$el.html(this.template(collection));
        }
    }),

    /*NavbarViewNotLogged = Parse.View.extend({
        template: Handlebars.compile($('#navbar-not-logged-tpl').html()),
        events: {
            'submit #form-sign-in': 'login',
            'submit #formSignUp': 'signUp',
            'submit #form-reset-pass': 'resetPassword'
        },
        login: function(e) {
            //console.log("e:",e);
            e.preventDefault();
            var data = $("#form-sign-in").serializeArray(),
                username = data[0].value,
                password = data[1].value;

            Parse.User.logIn(username, password, {
                success: function(user) {
                    $(".modal-backdrop").css("display", "none");
                    $("body").css("overflow", "auto");
                    blogRouter.navigate('#/admin/home', { trigger: true });
                },
                error: function(user, error) {
                    if(error.code===101)
                        alert("The email and password you entered don't match. Please reset your password if needed.");
                    else
                        alert(error.message);
                }
            });
        },
        signUp: function(e) {
            //console.log("e:",e);
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
            user.signUp(null, {
                success: function(user) {
                    $(".modal-backdrop").css("display", "none");
                    blogRouter.navigate('#/admin/home', { trigger: true });
                },
                error: function(user, error) {
                    alert("Error: "+ error.message);
                }
            });
        },
        resetPassword: function(e) {
            e.preventDefault();
            var data = $("#form-reset-pass").serializeArray(),
                email = data[0].value;
            
            Parse.User.requestPasswordReset(email, {
                success: function(data) {
                    $(".modal-backdrop").css("display", "none");
                    blogRouter.navigate('#/', { trigger: true });
                },
                error: function(error) {
                    alert("Error: " + error.code + " " + error.message);
                }
            });
        },
        render: function() {
            this.$el.html(this.template());
        }
    }),*/
    
    AssessmentView = Parse.View.extend({
        template: Handlebars.compile($('#assessment-tpl').html()),
        render: function() {
            this.$el.html(this.template());
        }
    }),
    
    LoggedAssessmentView = Parse.View.extend({
        template: Handlebars.compile($('#logged-assessment-tpl').html()),
        render: function() {
            var collection = { 
                username: this.options.username,
                fname: this.options.fname
            };
            this.$el.html(this.template(collection));
            console.log("$('#logged-assessment-tpl'):",$('#logged-assessment-tpl').children());
        }
    }),

/**
**
**  Route
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
            '': 'assessment',
            'survey': 'survey',
            'assessment': 'assessment',
            'admin/home': 'dashboard',
            'admin/assessment': 'loggedAssessment',
            'admin': 'admin',
            'add': 'add',
            'edit/:id': 'edit',
            'del/:id': 'del',
            'logout': 'logout',
            'category/:id': 'category'
        },

        dashboard: function() {
            var currentUser = Parse.User.current();
            if (!currentUser) {
                this.navigate('#/', { trigger: true });
            } else {
                /*
                *
                * navbar render
                **/
                var navbarView = new NavbarView({ 
                    username: currentUser.get('username'),
                    fname: currentUser.get('fname'),
                    company:currentUser.get('company')
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
        assessment: function() {
            /*
            *
            * navbar not logged render
            **/
            var currentUser = Parse.User.current();
            if(currentUser){
              var navbarView = new NavbarView({
                username: currentUser.get('username'),
                fname: currentUser.get('fname'),
                company:currentUser.get('company')
              });
            }else{
              var navbarView = new NavbarView();
            }
            
            navbarView.render();
            $('.navbar-container').html(navbarView.el);
            
            /*
            *
            * Assessment render
            **/
            var assessmentView = new AssessmentView();
            assessmentView.render();
            $container.html(assessmentView.el);
        },
        survey : function(){
            /*
            *
            * navbar not logged render
            **/
            var currentUser = Parse.User.current();
            if(currentUser){
              var navbarView = new NavbarView({
                username: currentUser.get('username'),
                fname: currentUser.get('fname'),
                company:currentUser.get('company')
              });
            }else{
              var navbarView = new NavbarView();
            }
            
            navbarView.render();
            $('.navbar-container').html(navbarView.el);
            
            /*
            *
            * Assessment render
            **/
            var surveyView = new SurveyView({
                questions:qc
            });
            surveyView.render();
            $container.html(surveyView.el);
        },
        loggedAssessment: function() {
            var currentUser = Parse.User.current();
            if (!currentUser) {
                this.navigate('#/', { trigger: true });
            } else {
            
                /*
                *
                * navbar render
                **/
                var navbarView = new NavbarView({ 
                    username: currentUser.get('username'),
                    fname: currentUser.get('fname'),
                    company:currentUser.get('company')
                });
                navbarView.render();
                $('.navbar-container').html(navbarView.el);
                
                /*
                *
                * Assessment render
                **/
                var loggedAssessmentView = new LoggedAssessmentView({ 
                    username: currentUser.get('username'),
                    fname: currentUser.get('fname')
                });
                loggedAssessmentView.render();
                $container.html(loggedAssessmentView.el);
            }
        },
        logout: function () {
            Parse.User.logOut();
            this.navigate('#/', { trigger: true });
        }
    }),
    blogRouter = new BlogRouter();
    Handlebars.registerHelper("inc", function(value, options){
        return parseInt(value) + 1;
    });

    Handlebars.registerHelper('setIndex', function(value){
        this.index = Number(value + 1);
        return parseInt(value) + 1; //I needed human readable index, not zero based
    });
    blogRouter.start();
});