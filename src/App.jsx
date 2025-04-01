import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import MailboxForm from './components/MailboxForm/MailboxForm';
import LetterForm from './components/LetterForm/LetterForm';
import './App.css';

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);
  const [letters, setLetters] = useState([]);

  const addBox = (formData) => {
    const newBox = {
      _id: mailboxes.length + 1,
      boxSize: formData.boxSize,
      boxOwner: formData.boxOwner,
    };
    setMailboxes([...mailboxes, newBox]);
  };

  const addLetter = (formData) =>{
    const newLetter={
      mailboxId: Number(formData.mailboxId), 
      recipient: formData.recipient, 
      message: formData.message,
    };
    setLetters([...letters, newLetter]);
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Post Office</h1>} />
        <Route 
          path="/mailboxes" 
          element={<MailboxList mailboxes={mailboxes} />} 
        />
        <Route 
          path="/mailboxes/:mailboxId" 
          element={
            <MailboxDetails 
              mailboxes={mailboxes} 
              letters={letters} 
            />
          } 
        />
        <Route 
          path="/new-mailbox" 
          element={<MailboxForm addBox={addBox} />} 
        />
        <Route 
          path="/new-letter" 
          element={
            <LetterForm 
              addLetter={addLetter} 
              mailboxes={mailboxes} 
            />
          } 
        />
      </Routes>
    </>
  );
};

export default App;
