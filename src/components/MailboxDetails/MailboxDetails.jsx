function MailboxDetails({ mailboxes }) {
    const { mailboxId } = useParams();
    const mailbox = mailboxes.find(m => m._id === Number(mailboxId));
  
    if(!mailbox) return <div>Mailbox Not Found!</div>;
    
    return (
      <div>
        <h2>Box Number: {mailbox._id}</h2>
        <p>Owner: {mailbox.boxOwner}</p>
        <p>Size: {mailbox.boxSize}</p>
      </div>
    );
  }
  export default MailboxDetails;