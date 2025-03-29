// src/App.jsx
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import MailboxList from './components/MailboxList/MailboxList'
import MailboxDetails from './components/MailboxDetails/MailboxDetails'
import MailboxForm from './components/MailboxForm/MailboxForm'


const App = () => {

const [mailboxes, setMailboxes] = useState([]);

const addBox = (formData ) => {
  const newBox = {
    _id: mailboxes.length + 1,
    ...formData
  };
  setMailboxes([...mailboxes, newMailbox]);

  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={ <h1>Post Office</h1>} />
        <Route path="/mailboxes" element={<MailboxList />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails />} />
        <Route path="/new-mailbox" element={<MailboxForm />} />
      </Routes>
    </>
  )
}
}
export default App; 
