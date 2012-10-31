function CommentModel (){
	var self = this;
	self.text = ko.observable(String);
	self.author = ko.observable(String);
	self.created = ko.observable(String);
}

function EntityModel (){
	var self = this;

	self.name = ko.observable(String);
	self.description = ko.observable(String);
	self.status = ko.observable(String);
	self.link = ko.observable(String);
	self.comments = ko.observableArray([]);

	self.addComment = function(params){
		var comment = new CommentModel();
		comment.text(params.text);
		comment.author(params.author);
		comment.created(params.created);

		self.comments.push(comment);
	};
}

function ViewModel(){
	var self = this;

	self.entities = ko.observableArray([]);

	self.addEntity = function(params){
		var entity = new EntityModel();
		entity.name(params.name);
		entity.description(params.description);
		entity.status(params.status);
		entity.link(params.link);
		entity.comments([]);

		params.comments.map(entity.addComment);

		self.entities.push(entity);
	};
}