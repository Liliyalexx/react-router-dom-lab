import { Link } from "react-router-dom";

function MailboxList ({mailboxes}) {
    return (
        <div className = "mailbox-container">
            {mailboxes.map(mailbox =>(
                <Link to={`/mailboxes/${mailbox._id}`}key={mailbox._id}>
                    <div className="mail-box">{mailbox._id}</div>
                </Link>
            ))}
        </div>
    );
}
export default MailboxList;