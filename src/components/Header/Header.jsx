import './Header.css'
import Search from './Search'


export default function Header(props) {

    let emailsToDisplay = props.emails
    emailsToDisplay.filter(post => {
        if (props.searchTitle === "") {
            return post.title;
        } else if (post.title.toLowerCase().includes(props.searchTitle.toLowerCase())) {
            return post.title;
        }
    });





    return (

        <header className="header">
            <div className="left-menu">
                <svg className="menu-icon" focusable="false" viewBox="0 0 24 24">
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                </svg>

                <img
                    src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
                    alt="gmail logo"
                />
            </div>
            <Search
                emailsToDisplay={props.emailsToDisplay}
                setsearchTitle={props.setsearchTitle}

            />
        </header>
    )
}