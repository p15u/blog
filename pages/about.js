import Layout from '../components/layout'

const About = () => (
    <Layout title="About">
        <h1>about</h1>
        <div>
             <br/>
            <p className="center">
                Còn Là Sinh viên(newbie) 😢. <br/>
                Mới chơi được java, c# vẫn còn non. <br/> 
                Đặc thù là thường code Giả Cầy 🐶 .
            </p>
            <hr/>             
        </div>
        <style jsx>{`
            .center {
                text-align: center;
            }
        `}</style>
    </Layout>
)

export default About
