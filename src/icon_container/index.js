import './icons.css'

const IconContainer = () => {
    return (
        <div className="card">
            <div className="icon-container">
                <ul>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/kyleswillard/"
                            alt="Kyle's Linkedin"
                        >
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/Kyleswillard"
                            alt="Kyle's Github"
                        >
                            <i className="fab fa-github-square"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://kyleswillard.medium.com/"
                            alt="Kyle's Medium"
                        >
                            <i className="fab fa-medium"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://twitter.com/kyleswillard"
                            alt="Kyle's Twitter"
                        >
                            <i className="fab fa-twitter-square"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="mailto:kyleswillard@gmail.com?subject=Portfolio Contact"
                            alt="Kyle's Email"
                        >
                            <i className="fas fa-envelope-square"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default IconContainer
