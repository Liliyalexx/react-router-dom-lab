import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/mailboxes">Mailboxes</Link></li>
        <li><Link to="/new-mailbox">New Mailbox</Link></li>
        <li><Link to="/new-letter">New Letter</Link></li>
    </nav>
  );
}
export default NavBar;