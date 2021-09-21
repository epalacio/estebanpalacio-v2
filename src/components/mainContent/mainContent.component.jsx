import Hero from '../hero/hero.component'
import About from '../about/about.component'
import Work from '../work/work.component'
import TechStack from '../techStack/techStack.component'
import Contact from '../contact/contact.component'

const mainContent = () => {
    return ( 
    <div className="order-first lg:order-last">
        <Hero/>
        <About/>
        <Work/>
        <TechStack/>
        <Contact/>
    </div> 
    );
}
 
export default mainContent;