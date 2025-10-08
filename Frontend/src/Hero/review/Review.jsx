
import studentImg1 from '../../assets/image/students-1.jpg'
import studentImg2 from '../../assets/image/students-2.jpg'
import studentImg3 from '../../assets/image/students-3.jpg'
import './Review.scss'

const Review = () => {

const users = [
    {
        image: studentImg1,
        name: 'Sarah J.',
        icon: 'ri-star-s-fill',
        review: 4.6,
        desc: 'Micro-Mentor kept me consistent and I finally completed my JavaScript course!',

    },
    {
        image: studentImg2,
        name: 'David R.',
        icon: 'ri-star-s-fill',
        review: 4.9,
        desc: 'The weekly AI reports are a game-changer. I know exactly what to improve.',

    },{
        image: studentImg3,
        name: 'Emma D.',
        icon: 'ri-star-s-fill',
        review: 4.4,
        desc: 'Earning badges keeps me motivated, it feels like a game but for learning!',

    },
]

  return (
    <div>
        <div className="review">
            <h1>What Our Learners Say</h1>
            <div className="review-card">
                {users.map((s, i) => (
                    <div key={i} className='single-review'>
                        <img src={s.image} alt="" />
                        <div className='name-review'>
                            <h2>{s.name}</h2>
                            <span><i className={s.icon}></i> {s.review}</span>
                        </div>
                        <p>{s.desc}</p>
                    </div>
                ))}

            </div>
        </div>
    </div>
  )
}

export default Review