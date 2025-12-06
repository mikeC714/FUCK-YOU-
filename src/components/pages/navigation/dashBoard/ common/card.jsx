import {Badge} from './badge.jsx'

//add flagging for specific key words
// FELON, No experienc, etc. 
// Allow user to input and remove certain  SOME key words 


export const Card = () => (
    <div className="card-content">
        <header className="card-headers">
            <h3 className='applicant-card-name'>Name</h3>  <br /> <h3 className='applicant-card-email'>Email</h3>
        </header>
        <div className='card-list-container'>
            <ul className='card-positive-list'>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <br />
            <ul className='card-negative-list'>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div> 
        <div>
            <button className="remove-card"></button> {/* replace with score badge*/}
        </div>
        <div>
            <button className='push-card'></button>
        </div>
    </div>
)


//Card contents needs to be based on props from data that has been pulled from reviewing the applicants resume