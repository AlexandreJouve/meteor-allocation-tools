Trucks = new Mongo.Collection("trucks");

if (Meteor.isClient) {
	Template.leftPart.helpers(
	{
		trucks: function () {
			return Trucks.find({});
		}
	});

	Template.selectedTruck.helpers(
	{
		selectedTruck: function () {
			return Trucks.findOne({ id:"0tx4556"});
		}
	});

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

