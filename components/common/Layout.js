import Head from 'next/head';
import Navigation from './Navigation';
import Footer from './Footer';


const Layout = ({ children, home }) => {
    return (
        <div>
            <Head>
                <meta name="description" content="AICL is a collective of individuals who pick up trash together to make their communities cleaner, greener and friendlier." />
                <link rel="icon" href="/favicon.ico" />
                <title>AICL</title>
            </Head>
            <Navigation />
            <main>{ children }</main>
            <Footer />
        </div>
    )
};

export default Layout;