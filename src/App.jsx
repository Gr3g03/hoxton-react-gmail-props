import { useState } from 'react'

import initialEmails from './data/emails'

import './App.css'
import Header from './components/Header/Header'
import LeftNav from './components/LeftNav/LeftNav'
import Main from './components/Main/Main'

const getReadEmails = emails => emails.filter(email => !email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')
  const [searchTitle, setsearchTitle] = useState("")



  // console.log(emailsToDisplay)
  return (
    <div className="app">

      <Header
        emails={emails}
        searchTitle={searchTitle}
        setsearchTitle={setsearchTitle}
      />

      <LeftNav
        emails={emails}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        hideRead={hideRead}
        setHideRead={setHideRead} />
      <Main
        emails={emails}
        setEmails={setEmails}
        hideRead={hideRead}
        getReadEmails={getReadEmails}
        getStarredEmails={getStarredEmails}
      />
    </div>


  )
}

export default App
