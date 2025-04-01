import { Link } from 'react-router-dom';

const MailboxList = ({ mailboxes }) => {
  return (
    <div>
      <h2>Mailboxes</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {mailboxes.map((mailbox) => (
          <Link 
            key={mailbox._id} 
            to={`/mailboxes/${mailbox._id}`}
            className="mail-box"
            style={{ margin: '10px', padding: '20px' }}
          >
            Box #{mailbox._id}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MailboxList;