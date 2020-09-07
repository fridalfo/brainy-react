
import HomePage from './Home'
import AboutPage from './About'
import ContactPage from './Contact'
import ServicesPage from './Services'




export default [
    {
        "to" : "/",
        "name" : "Home",
        "exact" : true,
        "component" : HomePage
    },
    {
        "to" : "/about",
        "name" : "About",
        "component" : AboutPage
    },
    {
        "to" : "/services",
        "name" : "Services",
        "component" : ServicesPage
    },
    {
        "to" : "/contact-us",
        "name" : "Contact Us",
        "component" : ContactPage
    }
]
