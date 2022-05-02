import './Home.scss'
import vn_icon from '../../images/vietnamflag.svg'
import usa_icon from '../../images/usaflag.svg'
import japan_icon from '../../images/japanflag.svg'


function Home() {
    return (
        <>
            <div className="wrapper">
                <header className='home-header'>
                    <div className='home-language'>
                        <div className='home-language-img'>
                            <img className="home-icon" src={vn_icon} alt="" />
                        </div>
                        <div className='home-language-img'>
                            <img className="home-icon" src={usa_icon} alt="" />
                        </div>
                        <div className='home-language-img'>
                            <img className="home-icon" src={japan_icon} alt="" />
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}

export default Home