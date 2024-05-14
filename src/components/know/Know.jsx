import React from 'react'
import './style.css'
const data = [
    {
        image:'https://surojitpalmal.com/wp-content/uploads/2023/08/Nandi-Hills-Bangalore.webp',
        title:'Nandi Hills',
        desc:' Nandi Hills (Anglicised forms include Nandidurg and Nandydoorg) is an ancient hill station built by Ganga Dynasty in the Chikkaballapur district of Karnataka state.  In traditional belief, the hills are the origin of the Arkavathy river, Ponnaiyar River, Palar River, Papagni River and Penna River. Watching the sunrise at Nandi Hills is popular with tourists.'
    },
    {
        image:'https://vidyasury.com/wp-content/uploads/2014/09/Vidya-Sury-Ghati-Subramanya-Temple-8-500x375.jpg',
        title:'  Shri Ghati Subrahmanya Temple',
        desc:' Ghati Subramanya is a Hindu temple, situated in the village of Sri Subamanya Ghati near Tubagere, Doddaballapura, Karnataka, India. It is 60 km from the city of Bangalore and is a popular pilgrimage centre. The uniqueness of this temple is that the prime deity Lord Karthikeya, is found together with Lord Narasimha.'
    },
    {
        image:'https://static.sadhguru.org/d/46272/1687922109-image-4.jpg',
        title:' Isha Foundation',
        desc:' The Isha Foundation is a nonprofit, spiritual organisation that was founded in 1992 near Coimbatore, Tamil Nadu, India, by Sadhguru. It hosts the Isha Yoga Centre, which offers yoga programs under the name Isha Yoga. The foundation is run "almost entirely" by volunteers.'
    }
]

function Know() {
  return (
    <div className='know container-fluid p-3 p-md-5'>
        <h1 className="display-3 italic-heading text-white text-center">Are you Know about these Places?</h1>
        
        <div className="row mt-5">
            {
                data.map((item, index)=>(
                    <div className="col-md-4 mb-3">
                        <div className="card p-3 h-100 shadow border-0" data-aos="zoom-in">
                            <img src={item.image} alt={item.title} className="w-100 rounded mb-3"/>
                            <h1 className="fs-4">{item.title}</h1>
                            <p className="fs-6">{item.desc}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Know