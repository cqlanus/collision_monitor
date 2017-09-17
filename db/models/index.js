const Assessment = require('./assessment');
const Collision = require('./collision');
const Comment = require('./comment');
const Message = require('./message');
const Observation = require('./observation');
const Photo = require('./Photo');
const Place = require('./place');
const Severity = require('./severity');
const Species = require('./species');
const User = require('./user');


/* User Relationships */
User.hasMany(Observation);
User.hasMany(Photo);
User.hasMany(Comment);
User.hasMany(Assessment);

/* Observation Relationships */
Observation.hasMany(Photo);
Observation.hasMany(Comment);
Observation.belongsTo(Collision);
Observation.belongsTo(Place);

/* Collisision Relationships */
Collision.hasMany(Assessment);
Collision.belongsTo(Species);
// Collision.hasMany(Observation);

/* Assessment Relationships */
Assessment.belongsTo(Severity);

/* Species Relationships */
Species.hasMany(Collision);
Species.hasMany(Photo);

/* Place Relationships */
Place.hasMany(Observation);


module.exports = {
  User,
  Collision,
  Assessment,
  Comment,
  Message,
  Observation,
  Photo,
  Place,
  Severity,
  Species
};