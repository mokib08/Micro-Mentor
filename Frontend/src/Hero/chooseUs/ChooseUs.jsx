import React from 'react'
import './chooseUs.scss'

const ChooseUs = () => {

      const features = [
            {
                title: "Personalized Learning Tracker",
                description: "Set your own learning goals, such as 'I want to learn JavaScript in 3 months.' The app will track all activities based on your goals.",
                icon: "ri-user-heart-line" // শুধু ক্লাস নাম
            },
            {
                title: "Generates Micro-Goals",
                description: [
                "Break down big goals into small, achievable tasks. Example: ",
                { text: "Learn variables today", style: "highlight" },
                ", ",
                { text: "Practice functions tomorrow", style: "highlight" },
                " or ",
                { text: "Build a mini calculator this week", style: "highlight" }
                ],
                icon: "ri-focus-2-line"
            },
            {
                title: "Weekly Review Reports",
                description: "At the end of each week, get a progress summary powered by Gemini AI. It shows what you achieved, your improvements, and where to focus more.",
                icon: "ri-bar-chart-box-ai-line"
            },
            {
                title: "Custom Dashboard",
                description: "Access your personalized dashboard to see goals, daily/weekly progress, earned badges, and all learning data in one place.",
                icon: "ri-dashboard-line"
            },
            {
                title: "Google Calendar Sync",
                description: "All generated micro-goals are automatically synced to your Google Calendar so you can manage your study routine with daily life.",
                icon: "ri-google-fill"
            },
            {
                title: "Badge System for Gamified Learning",
                description: "Earn digital badges for milestones like 7 days of continuous learning or completing a topic. Make learning fun like a game!",
                icon: "ri-medal-line"
            },
        ];

  return (
    <div className='chooseUs-main'>
        <div className="Wrapper">
            <h1>Why Choose <span>Micro-Mentor?</span></h1>
            <div className="card">
                {features.map((featur, index) => (
                    <div key={index} className='card-row'>
                        <i className={featur.icon}></i>
                        <h3>{featur.title}</h3>
                         <p>
                            {Array.isArray(featur.description) ? (
                                featur.description.map((desc, i) =>
                                typeof desc === "string" ? (
                                    <span key={i}>{desc}</span>
                                ) : (
                                    <strong key={i}>{desc.text}</strong>
                                )
                                )
                            ) : (
                                featur.description
                            )}
                        </p>
                       
                    </div>
                ))}
            </div>
           
        </div>
    </div>
  )
}

export default ChooseUs