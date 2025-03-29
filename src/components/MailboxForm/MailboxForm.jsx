import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MailboxForm = () => {
    const [formData, setFormData] = useState({
       boxOwner: '',
       boxSize: 'Small'

    });
    const handleSubmit = (evt) => {
        evt.preventDefault();
        
    }
    return (
        <div>
            <h1>Mailbox Form</h1>
        </div>
    )
}   
export default MailboxForm;