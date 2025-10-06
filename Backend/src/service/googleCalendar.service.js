

// const {google} = require('googleapis')

// function getOAuthClient(){
//     return new google.auth.OAuth2(
//         process.env.GOOGLE_CLIENT_ID,
//         process.env.GOOGLE_CLIENT_SECRET,
//         process.env.GOOGLE_REDIRECT_URI,

//     )

// }


// // ক্যালেন্ডারে event যোগ করার ফাংশন
// async function addEventToCalendar(tokens, goal){
//       // নতুন OAuth2 client নিয়ে credentials সেট করা
//     const oAuth2Client = getOAuthClient();
//     oAuth2Client.setCredentials(tokens)

//       // calendar API এর ইনস্ট্যান্স নেওয়া
//     const calender = google.calender({version: 'v3', auth: oAuth2Client});

//     // event data create 
//     const event = {
//         summary:goal.title,
//         description: goal.descriptioin,
//         start: {dateTime: new Date(goal,deadline).toISOString() },
//         end: {dateTime: new Date(goal.deadline).toISOString() }
//     }
    
//     // calendar API তে ইভেন্ট insert করা
//     await calender.events.insert({
//         calenderId: 'primary',
//         resource: event
//     })


// }

// module.exports = {
//     getOAuthClient,
//     addEventToCalendar
// }









// googleCalendar.service.js
// Google Calendar API এর সাথে কাজ করার সার্ভিস ফাইল

const { google } = require('googleapis'); // googleapis প্যাকেজ ইমপোর্ট

// ✅ OAuth2 Client তৈরি করার ফাংশন
function getOAuthClient() {
  // নতুন OAuth2 client ইনস্ট্যান্স তৈরি
  // env থেকে credentials নিচ্ছে (Google Cloud Console থেকে পাওয়া)
  return new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,      // client id
    process.env.GOOGLE_CLIENT_SECRET,  // client secret
    process.env.GOOGLE_REDIRECT_URI    // redirect uri
  );
}

// ✅ ক্যালেন্ডারে ইভেন্ট যোগ করার ফাংশন
async function addEventToCalendar(tokens, goal) {
  // নতুন OAuth2 client নিয়ে credentials (tokens) সেট করা
  const oAuth2Client = getOAuthClient();
  oAuth2Client.setCredentials(tokens);

  // calendar API ইনস্ট্যান্স নেওয়া (বানান ঠিক!)
  const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });

  // event data তৈরি
  const event = {
    summary: goal.title,                // ইভেন্টের শিরোনাম
    description: goal.description,      // বর্ণনা
    start: { dateTime: new Date(goal.deadline).toISOString() }, // শুরু সময়
    end: { dateTime: new Date(goal.deadline).toISOString() }    // শেষ সময় (এখন একই দিন)
  };

  // calendar API তে ইভেন্ট insert করা
  await calendar.events.insert({
    calendarId: 'primary',  // ইউজারের মূল ক্যালেন্ডার
    resource: event         // উপরের ইভেন্ট অবজেক্ট
  });
}

// ✅ module export
module.exports = {
  getOAuthClient,
  addEventToCalendar
};













// const { google } = require('googleapis');
// const User = require('../model/user.model');

// const createEvent = async (userId, taskDetails) => {
//     try {
//         const user = await User.findById(userId);
//         if (!user || !user.googleAccessToken) {
//             throw new Error('User not found or Google Calendar not connected.');
//         }

//         const oauth2Client = new google.auth.OAuth2(
//             process.env.GOOGLE_CLIENT_ID,
//             process.env.GOOGLE_CLIENT_SECRET,
//             process.env.GOOGLE_REDIRECT_URI
//         );

//         // সংরক্ষিত টোকেনগুলো সেট করুন
//         oauth2Client.setCredentials({
//             access_token: user.googleAccessToken,
//             refresh_token: user.googleRefreshToken
//         });

//         const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

//         const event = {
//             summary: taskDetails.title, // টাস্কের টাইটেল
//             description: taskDetails.description, // টাস্কের বর্ণনা
//             start: {
//                 dateTime: taskDetails.startTime, // '2025-09-25T09:00:00-07:00' ফরম্যাটে
//                 timeZone: 'Asia/Dhaka',
//             },
//             end: {
//                 dateTime: taskDetails.endTime, // '2025-09-25T10:00:00-07:00' ফরম্যাটে
//                 timeZone: 'Asia/Dhaka',
//             },
//         };

//         const response = await calendar.events.insert({
//             calendarId: 'primary', // ব্যবহারকারীর প্রধান ক্যালেন্ডার
//             resource: event,
//         });

//         console.log('Event created: %s', response.data.htmlLink);
//         return response.data;

//     } catch (error) {
//         console.error('Error creating calendar event:', error);
//         // যদি টোকেন এক্সপায়ার হয়ে যায়, তবে রিফ্রেশ করার লজিক এখানে যোগ করা যেতে পারে
//         throw error;
//     }
// };

// module.exports = { createEvent };

