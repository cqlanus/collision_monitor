const Promise = require('bluebird');
const db = require('./db');
const {
  User,
  Collision,
  Assessment,
  Observation,
  Place,
  Severity,
  Species
} = require('./models');

const users = [
  {
    firstName: 'Chris',
    lastName: 'User',
    email: 'cqlanus@gmail.com',
    password: 'hello123'
  },
  {
    firstName: 'Chris',
    lastName: 'admin',
    email: 'cqlanus+01@gmail.com',
    password: 'password123',
    isAdmin: true
  },
  {
    firstName: 'Shannon',
    lastName: 'User',
    email: 'cqlanus+02@gmail.com',
    password: 'abc123'
  }
];

const species = [
  { name: 'Red-tailed hawk' },
  { name: 'House sparrow' },
  { name: 'American goldfinch' }
];

const severities = [
  { magnitude: 'mild' },
  { magnitude: 'moderate' },
  { magnitude: 'critical' },
];

const places = [
  {
    name: 'apartment',
    location: {
      type: 'Point',
      coordinates: [41.970389, -87.683393]
    }
  },
  {
    name: 'house',
    location: {
      type: 'Point',
      coordinates: [42.003453, -88.058627]
    }
  },
  {
    name: 'Salesian',
    location: {
      type: 'Point',
      coordinates: [34.032830, -118.216349]
    }
  }
];

const collisions = [
  {
    isAlive: true,
    speciesId: 1
  },
  {
    isAlive: true,
    speciesId: 2,
  },
  {
    isAlive: false,
    speciesId: 3
  }
];

const observations = [
  {
    observedOn: Date.now(),
    userId: 1,
    placeId: 1,
    collisionId: 1
  },
  {
    observedOn: Date.now(),
    userId: 2,
    placeId: 2,
    collisionId: 2
  },
  {
    observedOn: Date.now(),
    userId: 2,
    placeId: 3,
    collisionId: 3,
    isPublic: false
  }
];

const assessments = [
  {
    userId: 3,
    isExpert: false,
    collisionId: 1,
    severityId: 2
  },
  {
    userId: 2,
    isExpert: true,
    collisionId: 2,
    severityId: 2
  },
  {
    userId: 2,
    isExpert: true,
    collisionId: 1,
    severityId: 1
  }
];

db.sync({ force: true })
  .then(() => {
    console.log('old data dropped, now inserting users');
    return Promise.map(users, user => User.create(user));
  })
  .then(() => {
    console.log('added users, creating species');
    return Promise.map(species, bird => Species.create(bird));
  })
  .then(() => {
    console.log('added species, creating severities');
    return Promise.map(severities, severity => Severity.create(severity));
  })
  .then(() => {
    console.log('added severities, creating places');
    return Promise.map(places, place => Place.create(place));
  })
  .then(() => {
    console.log('added places, creating collisions');
    return Promise.map(collisions, collision => Collision.create(collision));
  })
  .then(() => {
    console.log('added collisions, creating observations');
    return Promise.map(observations, observation => Observation.create(observation));
  })
  .then(() => {
    console.log('added observations, creating assessments');
    return Promise.map(assessments, assessment => Assessment.create(assessment));
  })
  .catch(err => console.error('problem', err))
  .finally(() => db.close());