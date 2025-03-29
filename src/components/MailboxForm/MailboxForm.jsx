import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MailboxForm = ({addBox}) => {
    const [formData, setFormData] = useState({
       boxOwner: '',
       boxSize: 'Small'

    });

    const navigate = useNavigate();
    const handleSubmit = (evt) => {
        evt.preventDefault();
        addBox(formData);
        navigate('/mailboxes');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
            value={formData.boxOwner}
            onChange = {(e) => setFormData({...formData, boxOwner:e.target.value})}
            placeholder="Owner name"
            required
            />

            <select
            value={formData.boxSize}
            onChange = {(e) => setFormData({...formData, boxSize:e.target.value})}
            >
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
            </select>
            <button type="submit">Create Mailbox</button>
        </form>
    )
}   
export default MailboxForm;