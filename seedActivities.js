const mongoose = require('mongoose');
const Activity = require('./models/Activity');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('Connected to DB. Seeding activities...');

    await Activity.deleteMany();

    await Activity.insertMany([
      {
        title: 'Cricket Match',
        description: 'Friendly match at the city stadium.',
        location: 'City Stadium',
        date: new Date('2025-06-15T10:00:00')
      },
      {
        title: 'Movie Night',
        description: 'Latest Marvel movie screening.',
        location: 'Downtown Cinema',
        date: new Date('2025-06-20T18:00:00')
      },
      {
        title: 'Football Match',
        description: 'Evening league game.',
        location: 'Community Park',
        date: new Date('2025-06-25T17:30:00')
      }
    ]);

    console.log('Activities seeded!');
    process.exit();
  })
  .catch(err => {
    console.error('Seeding failed:', err.message);
    process.exit(1);
  });