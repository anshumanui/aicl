import Head from 'next/head';

import Layout from './../components/common/Layout';
import Header from './../components/home/Header';
import Promo from './../components/home/Promo';
import About from './../components/home/About';
import Stats from './../components/home/Stats';
import Services from './../components/home/Services';
import Highlights from './../components/home/Highlights';
import Testimonials from './../components/home/Testimonials';


const Home = () => {  
    return (
        <Layout home>
            <Header />
            <Promo />
            <About />
            <Stats />
            <Services />
            <Highlights />
            <Testimonials />
        </Layout>
    )
};

export default Home;
