import React from 'react'
import './Home.css'
import { 
    Banner, Card
} from '../indexer'



const Home = () => {
    return (
        <div className="home">
            <Banner />

            <div className="home__section">
                <Card
                    src='https://beebom.com/wp-content/uploads/2020/04/Airbnb-online-experience-feat..jpg'
                    title='Online Experiences'
                    description='Unique activities we can do together, led by a world of hosts'
                />
                <Card 
                    src='https://www.faramagan.com/wp-content/uploads/2018/08/unique-stays.jpg'
                    title='Unique Stays'
                    description='Spaces that are more than just a place to sleep'
                />
                <Card 
                    src='https://i.pinimg.com/originals/d0/80/f2/d080f23551d094f6761e6eecca355b5f.jpg'
                    title='Entire Homes'
                    description='Confortable private places, with room for friends or family'
                />
            </div>

            <div className="home__section">
            <Card
                src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                title="3 Bedroom Flat in Bournemouth"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="£130/night"
            />
            <Card
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Penthouse in London"
                description="Enjoy the amazing sights of London with this stunning penthouse"
                price="£350/night"
            />
            <Card
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="£70/night"
            />
            </div>
        </div>
    )
}

export default Home
