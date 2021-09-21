import Hero from '../hero/hero.component'
import About from '../about/hero.component'
import Work from '../work/hero.component'
import Stack from '../stack/hero.component'
import Contact from '../contact/hero.component'

const mainContent = () => {
    return ( 
    <div className="order-first lg:order-last">
        <Hero/>
        <About/>
        <Work/>
        <Stack/>
        <Contact/>
    </div> 
    );
}
 
export default mainContent;