
// const express = require('express')
// const router = express.Router()

// const {getOAuthClient, addEventToCalendar} = require('../service/googleCalendar.service')


// // Step 1: Google login রুট
// // controllers/google.controller.js
// const googleLogin = (req, res) => {
//     const oAuth2Client = getOAuthClient();
//     // ক্যালেন্ডার স্কোপ সেট
//     const scopes = ['https://www.googleapis.com/auth/calendar'];
//     // Auth URL তৈরি
//     const url = oAuth2Client.generateAuthUrl({
//         access_type: 'offline',
//         scope: scopes,
//         redirect_uri: process.env.GOOGLE_REDIRECT_URI
//     });
//     // ইউজারকে Google Auth consent পেজে পাঠানো
//     res.redirect(url);
// }
// // http://localhost:5000/api/google/callback


// // Step 2: Google callback রুট
// const googleCallback = async (req, res) => {
  
//   const oAuth2Client = getOAuthClient();
//   const { code } = req.query; // Google থেকে আসা code
//   console.log(code);
  
//   const { tokens } = await oAuth2Client.getToken(code); // টোকেন আনা
//   console.log(tokens);
  

//   // tokens DB বা session এ রাখো
//   req.session.googleTokens = tokens;

//   res.send('Google Calendar connected!');
// }



// const eventExample = async (req, res) => {
//   const goal = req.body; // ফ্রন্টএন্ড থেকে আসা goal ডেটা
//   await addEventToCalendar(req.session.googleTokens, goal); // ক্যালেন্ডারে যোগ করা
//   res.json({ message: 'Event added to Google Calendar' });
// }

// module.exports = {
//     googleLogin,
//     googleCallback,
//     eventExample
// }






// google.controller.js
// Google login, callback এবং calendar ইভেন্ট তৈরি কন্ট্রোলার

const { getOAuthClient, addEventToCalendar } = require('../service/googleCalendar.service');

// ✅ Step 1: Google login route
const googleLogin = (req, res) => {
  // OAuth2 client তৈরি
  const oAuth2Client = getOAuthClient();

  // ক্যালেন্ডার স্কোপ সেট (ইভেন্ট পড়া/লেখার জন্য)
  const scopes = ['https://www.googleapis.com/auth/calendar'];

  // Auth URL তৈরি (redirect_uri অবশ্যই পাস করো)
  const url = oAuth2Client.generateAuthUrl({
    access_type: 'offline',                 // refresh token পাওয়ার জন্য
    scope: scopes,
    redirect_uri: process.env.GOOGLE_REDIRECT_URI // এইটা env থেকে
  });

  // ইউজারকে Google Auth consent পেজে পাঠানো
  res.redirect(url);
};

// ✅ Step 2: Google callback route
const googleCallback = async (req, res) => {
  // OAuth2 client তৈরি
  const oAuth2Client = getOAuthClient();

  // Google থেকে আসা code নেওয়া
  const { code } = req.query;
  console.log('Google auth code:', code); // debug

  // code undefined হলে redirect URI মেলাচ্ছে কিনা চেক করো

  // টোকেন আনা
  const { tokens } = await oAuth2Client.getToken(code);
  console.log('Tokens:', tokens); // debug

  // tokens session বা DB তে রাখো
  req.session.googleTokens = tokens;

  res.send('Google Calendar connected!');
};

// ✅ ক্যালেন্ডারে ইভেন্ট যোগ করার উদাহরণ route
const eventExample = async (req, res) => {
  // ফ্রন্টএন্ড থেকে আসা goal ডেটা
  const goal = req.body;

  // ক্যালেন্ডারে যোগ করা
  await addEventToCalendar(req.session.googleTokens, goal);

  res.json({ message: 'Event added to Google Calendar' });
};

// ✅ export controllers
module.exports = {
  googleLogin,
  googleCallback,
  eventExample
};














// const {google} = require('googleapis')
// const User = require('../model/user.model')


// const oauth2Client = new google.auth.OAuth2(
//     process.env.GOOGLE_CLIENT_ID,
//     process.env.GOOGLE_CLIENT_SECRET,
//     process.env.GOOGLE_REDIRECT_URI,


//     // console.log('GOOGLE_CLIENT_ID', process.env.GOOGLE_CLIENT_ID),
//     // console.log('GOOGLE_CLIENT_SECRET', process.env.GOOGLE_CLIENT_SECRET),
//     // console.log('GOOGLE_REDIRECT_URI', process.env.GOOGLE_REDIRECT_URI),
    
// )





// // ব্যবহারকারীকে যে পেজে পাঠাবেন তার URL তৈরি
// exports.getAuthUrl = (req, res) => {
//     const scopes = [
//         'https://www.googleapis.com/auth/calendar' // ক্যালেন্ডার অ্যাক্সেসের জন্য স্কোপ
//     ];

//     const url = oauth2Client.generateAuthUrl({
//         access_type: 'offline', // refresh_token পাওয়ার জন্য জরুরি
//         scope: scopes
//     });
//     res.redirect(url);
// };

// // Google থেকে ফিরে আসা কোড হ্যান্ডেল করা
// exports.handleCallback = async (req, res) => {
//     const { code } = req.query;
//     try {
//         // কোডের বিনিময়ে টোকেন নিন
//         const { tokens } = await oauth2Client.getToken(code);

//         // টোকেনগুলো ডাটাবেসে ব্যবহারকারীর সাথে সংরক্ষণ করুন
//         // এখানে ধরে নিচ্ছি, আপনি JWT বা সেশন থেকে user id পাচ্ছেন
//         const userId = req.user.id; // এটা আপনার অথেন্টিকেশন সিস্টেম অনুযায়ী হবে
//         await User.findByIdAndUpdate(userId, {
//             googleAccessToken: tokens.access_token,
//             googleRefreshToken: tokens.refresh_token,
//             // টোকেনের মেয়াদ শেষ হওয়ার সময়ও সেভ করতে পারেন
//             googleTokenExpiry: tokens.expiry_date 
//         });

//         // ব্যবহারকারীকে ফ্রন্টএন্ডের কোনো একটি পেজে রিডাইরেক্ট করে দিন
//         res.redirect('/dashboard?message=calendar-connected');

//     } catch (error) {
//         console.error('Error getting tokens', error);
//         res.status(500).send('Authentication failed');
//     }
// };



// // https://t.me/+_-1izaNQCQ5jMWQ1