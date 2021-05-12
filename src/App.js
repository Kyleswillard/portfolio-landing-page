import IconContainer from './icon_container'
import illus from './header.svg'
import './app.css'

function App() {
    return (
        <main className="App">
            <header className="App-header">
                <h1>Kyle S. Willard</h1>
                <div>
                    <img
                        className="illus"
                        src={illus}
                        alt="construction illustration"
                    />
                </div>
                <p>
                    New Portfolio Incoming! In the meantime take a look at my
                    information, and get in contact!
                </p>
            </header>
            <IconContainer />
        </main>
    )
}

export default App
