import Emails from './Emails'
import './Main.css'




export default function Main(props) {


    let filteredEmails = props.emails

    if (props.hideRead) filteredEmails = props.getReadEmails(filteredEmails)

    if (props.currentTab === 'starred')
        filteredEmails = props.getStarredEmails(filteredEmails)

    return (
        <main className="emails">
            <ul>
                {filteredEmails.map((email, index) => (
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