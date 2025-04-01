import { useParams } from "react-router-dom";

function MailboxDetails({ mailboxes, letters = [] }) {
    const { mailboxId } = useParams();
    const mailbox = mailboxes.find(m => m._id === Number(mailboxId));
    const mailboxLetters = letters.filter(l => l.mailboxId ===Number(mailboxId));
  
    if (!mailbox) {
      return <h2>Mailbox Not Found!</h2>;
    }

    return (
      <div className="mail-box">
        <h2>Mailbox Details</h2>
        <p>Box Number: {mailbox._id}</p>
        <p>Owner: {mailbox.boxOwner}</p>
        <p>Size: {mailbox.boxSize}</p>
  
        <h3>Letters:</h3>
        {mailboxLetters.length > 0 ? (
          <ul>
            {mailboxLetters.map((letter, index) => (
              <li key={index}>
                <p>To: {letter.recipient}</p>
                <p>Message: {letter.message}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No letters for this mailbox</p>
        )}
      </div>
    );
  };
  export default MailboxDetails;