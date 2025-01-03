// test.js
import User from "./db_models/User.js"
import History from "./db_models/History.js"


async function testInsert() {
  try {
    // Create a new user
    const user = await User.create({
      username: 'JohnDoe',
      emailId: 'johndoe@example.com',
      password: 'securepassword123',
      secondaryEmail: 'johndoe_secondary@example.com',
      appKey: 'lock1234',
    });

    // Add history record for this user
    const history=  await History.create({
      userId: user.userId,
      url: 'https://example.com/suicide-help',
      score: 9,
    });

    console.log('Data inserted successfully.');
  } catch (error) {
    console.error('Error inserting data:', error);
  }
}

function testEmail(emailId) {
  User.findOne({ where: { emailId } })
  .then(users => {
    console.log(users);
  })
  .catch(err => {
    console.error('Error:', err);
  });
}

// testInsert();
testEmail("johndoe@example.com");
