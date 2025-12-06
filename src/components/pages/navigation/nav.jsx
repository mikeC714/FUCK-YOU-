import { NavLink } from "react-router-dom"


export const Nav = () => (

    <nav className="side-nav">
        <ul className="nav-ul">

            <li className="nav-list">
                <NavLink
                    to='/profile' 
                    className={({ isActive }) => 
                        isActive ? 'nav-links profile-link active' : 'nav-links profile-link'
                    }
                    title="Profile"
                >
                     <div className="profile-container profile-icon nav-icons"></div> 
                </NavLink>
            </li>

            <li className="nav-list">
                <NavLink 
                    to='/' 
                    className={({isActive}) => 
                        isActive ? 'nav-links dash-link active' : 'nav-links dash-link'
                    }
                    title="Dashboard"
                >
                    <i className="fa-solid fa-grip dash-icon nav-icons"></i>
                </NavLink>
            </li>

            <li className="nav-list">
                <NavLink  
                    to='/applicants' 
                    className={({isActive}) => 
                        isActive ? 'nav-links applicants-link active' : 'nav-links applicants-link'
                    } 
                    title="Applicants"
                >
                    <i className="fa-solid fa-people-group applicant-icon nav-icons"></i>  {/* Have link direct the user to applicant component
                                                                                The link is temp*/}
                </NavLink>
            </li>


            <li className="nav-list">
                <NavLink 
                    to='/analytics' 
                    className={({isActive}) => 
                        isActive ? 'nav-links analytics-link active' : 'nav-links analytics-link'
                    } 
                    title="Analytics"
                >  
                    <i className="fa-solid fa-chart-simple analytics-icon nav-icons"></i>
                </NavLink>    
            </li>
        </ul>
    </nav>
)
