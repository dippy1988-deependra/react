
import { ContantWrapper } from "../Contant/ContantStyle";
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar'

const About = () => {
    return (
        <div>
            <Header/>
            <Sidebar/>
            <ContantWrapper>
                <h1>About area</h1>
            </ContantWrapper>
        </div>
    )
}

export default About;