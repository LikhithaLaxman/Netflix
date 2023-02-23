import React, { useState } from 'react'
import "../../Home/Home.css"

const Faq = () => {
    const data = [{
        question: "What is netflix ?",
        answers: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price.There's always something new to discover, and new TV shows and movies are added every week!"
    },
    {
        question: "How much does netflix cost ?",
        answers: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts."
    },
    {
        question: "Where can i watch ?",
        answers: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
    },
    {
        question: "How do i cancel ?",
        answers: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },
    {
        question: "What can i watch in netflix ?",
        answers: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    },

    ]

    const[selected, setSelected]=useState(null);
    const handleSelect=(i)=>{
        if(selected===i){
            return setSelected(null)
        }
        setSelected(i);
    }
    return (
        <>
            <h2 className='heading'>Frequently asked questions</h2>
            <section className='faq'>
                <div className="item">
                    {data.map((item,i) => {
                        return (
                            <>
                                <div className='wrapper' key={i}>
                                    <div className='question' onClick={() =>handleSelect(i)}>
                                        <h3>{item.question}</h3>
                                        <img src={require("../../../../src/assets/down-arrow.png")} alt="" className={selected===i ? "reverse" : " "}/>
                                    </div>
                                    <div className={selected ===i ? "answer show" : "answers"}>
                                        <h3>{item.answers}</h3>
                                        
                                    </div>
                                </div>

                            </>
                        )
                    })}
                </div>                                                                                                                                                                                                      '
            </section>
            <div className='rr'>
                <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
                <div className='shiv'>
                    <input type="text" placeholder='Enter your email'></input>
                    <button>Get Started</button>
                </div>
            </div>
        </>






    )
}

export default Faq