import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LetterForm = ({ addLetter, mailboxes }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    mailboxId: mailboxes.length > 0 ? mailboxes[0]._id : '',
    recipient: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addLetter(formData);
    navigate(`/mailboxes/${formData.mailboxId}`);
  };

  return (
    <div className="mail-box">
      <h2>Send a Letter</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mailboxId">Mailbox Number:</label>
        <select
          id="mailboxId"
          name="mailboxId"
          value={formData.mailboxId}
          onChange={handleChange}
          required
        >
          {mailboxes.map((mailbox) => (
            <option key={mailbox._id} value={mailbox._id}>
              Box #{mailbox._id} ({mailbox.boxOwner})
            </option>
          ))}
        </select>

        <label htmlFor="recipient">Recipient Name:</label>
        <input
          type="text"
          id="recipient"
          name="recipient"
          value={formData.recipient}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send Letter</button>
      </form>
    </div>
  );
};

export default LetterForm;