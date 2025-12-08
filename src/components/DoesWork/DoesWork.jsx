import './DoesWork.css'

export default function DoesWork({ work }) {
    return (
        <>
            <div className='cont-work-main'>
                <img src={work.img} alt="DoesWorkImg" />
                <span className='work-title'>{work.title}</span>
                <span className='work-description'>{work.description}</span>
            </div>
        </>
    )
}