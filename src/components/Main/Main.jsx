import Emails from './Emails'
import './Main.css'




export default function Main(props) {
    return (
        <main className="emails">
            <ul>
                {props.filteredEmails.map((email, index) => (
                    <Emails
                        email={email}
                        index={index}
                        setEmails={props.setEmails}
                    />
                ))}
            </ul>
        </main>
    )
}