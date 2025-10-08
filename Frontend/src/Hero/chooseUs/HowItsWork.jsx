import React from 'react'
import './HowItWork.scss'

const HowItsWork = () => {

    const steps = [
        {
            title: "Set Your Goal" ,
            desc: "Define what you want to learn (e.g. JavaScript in 3 months).",
            icon : 'ri-focus-2-line'
        },
        {
            title: "Generate Micro-Goals",
            desc: "AI breaks your big goal into small, daily tasks.",
            icon : 'ri-openai-fill'
        },
        {
            title: "Track Weekly Progress", 
            desc: "Get weekly AI-generated summaries & progress insights.",
            icon : 'ri-ai-generate-2'
        },
        { 
            title: "Earn Badges", 
            desc: "Stay motivated with badges & gamified rewards.",
            icon : 'ri-award-fill'
        },
    ]
    
  return (
    <div>
        <div className='work'>
            <h2>How It Works</h2>
            <div className='work-card'>
                
                    {steps.map((item, idx) => (
                        <div key={idx} className="single-card">
                            <i className={item.icon}></i>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                
            </div>
        </div>
    </div>
  )
}

export default HowItsWork