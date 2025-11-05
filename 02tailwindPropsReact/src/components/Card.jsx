import React from 'react';
function Card({post = "intern", experience = "Fresher"}) {
    return(
        <div className='flex justify-center items-center'>
            
            <h2 className='m-2 p-3 text-2xl bg-amber-300 rounded-2xl'>Card for demonstration</h2>
            <img src="https://media.istockphoto.com/id/1156837650/photo/javascript-code-computer-language-programming-internet-text-editor-components-display-screen.jpg?s=2048x2048&w=is&k=20&c=HRe5QixBjaBULPXU5hldznpPnQ1kSdhVL5AfPxsXG8I="  alt="image placed " className='h-30 mx-auto m-2 p-3 rounded-bl-sm' />
            <p className='m-2 p- '>This is a simple card component using Tailwind CSS.</p>
            <h2 className='m-2 p-3 text-2xl bg-amber-300 rounded-2xl'>post:- {post} </h2>
            <h2 className='m-2 p-3 text-2xl bg-amber-300 rounded-2xl'>experience:- {experience} </h2>
        </div>
    )
}

export default Card;