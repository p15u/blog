import { blog } from '../config.json'

const Footer = () => (
    <footer>
        <p>
            &copy; {new Date().getFullYear()} {blog.author}
        </p>
        <p>
            <a href="https://www.facebook.com/sang.luuphuoc.1" target="_blank" rel="noreferrer">
                <img src="/img/ko-fi.png" alt="ko-fi.com" />
            </a>
        </p>
    </footer>
)
 
export default Footer
