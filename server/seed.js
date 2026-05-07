require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');

const sampleUsers = [
  {
    fullName: 'Ramesh Kumar',
    email: 'ramesh.kumar@gmail.com',
    mobile: '9876543210',
    gender: 'M',
    status: 'Active',
    location: 'Mumbai',
  },
  {
    fullName: 'Ram Singh',
    email: 'ram.singh@gmail.com',
    mobile: '9123456789',
    gender: 'M',
    status: 'Active',
    location: 'Delhi',
  },
  {
    fullName: 'Krishna Sharma',
    email: 'krishna.sharma@gmail.com',
    mobile: '8765432109',
    gender: 'M',
    status: 'Active',
    location: 'Bangalore',
  },
  {
    fullName: 'Priya Patel',
    email: 'priya.patel@gmail.com',
    mobile: '7654321098',
    gender: 'F',
    status: 'Active',
    location: 'Ahmedabad',
  },
  {
    fullName: 'Anjali Gupta',
    email: 'anjali.gupta@gmail.com',
    mobile: '6543210987',
    gender: 'F',
    status: 'Active',
    location: 'Pune',
  },
  {
    fullName: 'Arjun Verma',
    email: 'arjun.verma@gmail.com',
    mobile: '5432109876',
    gender: 'M',
    status: 'Active',
    location: 'Hyderabad',
  },
  {
    fullName: 'Kavya Nair',
    email: 'kavya.nair@gmail.com',
    mobile: '4321098765',
    gender: 'F',
    status: 'Inactive',
    location: 'Kochi',
  },
  {
    fullName: 'Aditya Rao',
    email: 'aditya.rao@gmail.com',
    mobile: '3210987654',
    gender: 'M',
    status: 'Active',
    location: 'Chennai',
  },
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');

    // Clear existing users
    await User.deleteMany({});
    console.log('Cleared existing users');

    // Insert sample users
    const createdUsers = await User.insertMany(sampleUsers);
    console.log(`✅ Successfully seeded ${createdUsers.length} users!`);

    // Display created users
    console.log('\nCreated Users:');
    createdUsers.forEach((user, index) => {
      console.log(`${index + 1}. ${user.fullName} (${user.email})`);
    });

    // Close connection
    await mongoose.connection.close();
    console.log('\n✅ Database seeded successfully! Connection closed.');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error.message);
    process.exit(1);
  }
};

// Run the seeding function
seedDatabase();
