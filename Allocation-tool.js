Trucks = new Mongo.Collection("trucks");

if (Meteor.isClient) {
	Template.leftPart.helpers(
	{
		trucks: function () {
			return Trucks.find({});
		}
	});

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

