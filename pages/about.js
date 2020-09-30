import Layout from '../components/layout'

const About = () => (
    <Layout title="About">
        <h1>about</h1>
        <div>
            <p className="center">
                i'm Sang
            </p>
        </div>
        <style jsx>{`
            .center {
                text-align: center;
            }
        `}</style>
    </Layout>
)

export default About
