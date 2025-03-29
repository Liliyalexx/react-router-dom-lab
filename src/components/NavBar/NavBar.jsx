import { Link } from 'react-router-dom';
import MailboxForm from '../MailboxForm/MailboxForm';
import MailboxList from '../MailboxList/MailboxList';
import MailboxDetails from '../MailboxDetails/MailboxDetails';

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/mailboxes">Mailboxes</Link>
      <Link to="/new-mailbox">New Mailbox</Link>
    </nav>
  );
}
export default NavBar;