$(function(){
	//adds color code to documents
	function highlightCode() {
		$('pre.code').highlight({source:1, zebra:1, indent:'space', list:'ol',attribute: 'data-language'});
	}
	
	//adds color code to documents
	function zoominScreenshot() {
		$(".screenshot").on('click', function(){
			$(".screenshot").addClass("zoomin");
			$(this).parent().siblings().children().removeClass('zoomin');
		});
		
		$(this).on('mouseleave', function(){
			$(".screenshot").removeClass("zoomin").addClass(".zoomin-transition");
		});
	}

	var ApplicationRouter = Backbone.Router.extend({

		//map url routes to contained methods
		routes: {
			"": "introduction",
			"introduction": "introduction",
			"styles": "styles",
			"widgets": "widgets",
			"dependencies": "dependencies",
			"dev": "dev",
			"headings": "headings",
			"login": "login",
			"tables": "tables"
		},

		introduction: function() {
			$.get('introduction.html', function(data) {
				$('.main-content').html(data)
			})
		},

		styles: function() {
			$.get('general-styles.html', function(data) {
				$('.main-content').html(data)
			})
		},

		widgets: function() {
			$.get('widgets.html', function(data) {
				$('.main-content').html(data)
			})
		},
		
		dependencies: function() {
			$.get('dependencies.html', function(data) {
				$('.main-content').html(data)
			})
		},
		
		dev: function() {
			$.get('dev.html', function(data) {
				$('.main-content').html(data)
			})
		},
		headings: function() {
			$.get('headings.html', function(data) {
				$('.main-content').html(data)
			})
		},
		login: function() {
			$.get('login.html', function(data) {
				$('.main-content').html(data)
				highlightCode();
				zoominScreenshot();
			})
		},
		tables: function() {
			$.get('tables.html', function(data) {
				$('.main-content').html(data)
				highlightCode();
			})
		}
	});

	var ApplicationView = Backbone.View.extend({

		//bind view to body element (all views should be bound to DOM elements)
		el: $('body'),

		//observe navigation click events and map to contained methods
		events: {
			'click .main-nav #introduction-nav': 'displayIntroduction',
			'click .main-nav #styles-nav': 'displayStyles',
			'click .main-nav #widgets-nav': 'displayWidgets',
			'click .main-nav #dependencies-nav': 'displayDependencies',
			'click .main-nav #dev-nav': 'displayDev',
			'click .main-nav #headings-nav': 'displayHeadings',
			'click .main-nav #login-nav': 'displayLogins',
			'click .main-nav #tables-nav': 'displayTables'
		},

		//called on instantiation
		initialize: function(){
			//set dependency on ApplicationRouter
			this.router = new ApplicationRouter();

			//call to begin monitoring uri and route changes
			Backbone.history.start();
		},

		displayIntroduction: function(){
			//update url and pass true to execute route method
			this.router.navigate("introduction", true);
		},

		displayStyles: function(){
			this.router.navigate("styles", true);
		},

		displayWidgets: function(){
			this.router.navigate("widgets", true);
		},
		
		displayDependencies: function(){
			this.router.navigate("dependencies", true);
		},
		
		displayDev: function(){
			this.router.navigate("dev", true);
		},
		
		displayHeadings: function(){
			this.router.navigate("headings", true);
		},
		
		displayLogins: function(){
			this.router.navigate("login", true);
		},
		
		displayTables: function(){
			this.router.navigate("tables", true);
		}

	});

	//load application
	new ApplicationView();

});
