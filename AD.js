require('dotenv').config();

// Insert your Telegram Bot Token here
const botToken = process.env.BotToken;

// Insert the link to your Telegram channel
const channelLink = 'https://t.me/helcopro';

// User balances (you can store user data in a server or database in a real-world scenario)
const userBalances = {};

// Function to send points to users
function sendPoints(userId) {
    // Check if the user already received points
    if (userBalances[userId]) {
        return false; // User already received points
    }

    // Send 10 points to the user
    userBalances[userId] = 10;

    // Use your bot to send a message to the user
    // Example: Send a message from your bot to the user
    // bot.sendMessage(userId, 'Congratulations! You received 10 points for following our channel.');

    return true;
}

// Function to check user balance
function getUserBalance(userId) {
    return userBalances[userId] || 0;
}

// Event listener for "Follow Channel" button
document.getElementById('followChannelButton').addEventListener('click', function () {
    // Use Telegram.WebApp to open the link to your Telegram channel
    Telegram.WebApp.openLink(channelLink);
});

// Event listener for "My Balance" button
document.getElementById('checkBalanceButton').addEventListener('click', function () {
    const userId = Telegram.WebApp.currentUser.id;
    const balance = getUserBalance(userId);
    Telegram.WebApp.showAlert('Your balance: ' + balance + ' points');
});
