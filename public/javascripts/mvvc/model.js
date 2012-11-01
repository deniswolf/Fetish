function CommentModel (){
	var self = this;
	self.id = ko.observable(String);
	self.text = ko.observable(String);
	self.author = ko.observable(String);
	self.created = ko.observable(String);
}

function EntityModel (){
	var self = this;

	self.id = ko.observable(String);
	self.name = ko.observable(String);
	self.description = ko.observable(String);
	self.status = ko.observable(String);
	self.link = ko.observable(String);
	self.comments = ko.observableArray([]);

	self.publishComment = function(params){
		var comment = new CommentModel(),
			author = params.author;

		comment.id(params._id);
		comment.author(author ? author.name : undefined);
		comment.text(params.text);
		comment.created(params.created);
		self.comments.push(comment);
	};

	self.removeComment = function(koComment){
		var comment = koComment.$data,
			id = comment.id(),
			entity = koComment.$parent;
		console.log(comment, id, entity);
		entity.comments.remove(comment);
	};
}

function ViewModel(){
	var self = this;

	self.entities = ko.observableArray([]);

	self.publishEntity = function(params){
		var entity = new EntityModel();
		entity.id = params._id;
		entity.name(params.name);
		entity.description(params.description);
		entity.status(params.status);
		entity.link(params.link);
		entity.comments([]);

		params.comments.map(entity.publishComment);

		self.entities.push(entity);
	};

	self.removeEntity = function(id){
		self.entities.remove(function(ent){
			return ent.id === id;
		});
	};
}