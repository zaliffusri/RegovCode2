import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

// Home page component

function Home() {
    const [aboutMe, setAboutMe] = useState('');
    const [statusMessage, setStatusMessage] = useState('');
    const navigate = useNavigate();

    const handleTextChange = (event) => {
        setAboutMe(event.target.value);
    };

    const saveDraft = () => {
        setStatusMessage(`Draft saved on ${new Date().toLocaleString()}`);
    };

    const submitText = () => {
        setStatusMessage(`About Me submitted on ${new Date().toLocaleString()}`);
    };

    const handleLogout = () => {
        navigate('/login', { replace: true });
    }

    return (
        <div className="home-container">
            <h1>Welcome to the Home Page</h1>
            <div className="user-profile">
                <h2>Your Profile</h2>
                <textarea
                    value={aboutMe}
                    onChange={handleTextChange}
                    placeholder="Describe yourself here..."
                />
                <button className="save-draft" onClick={saveDraft}>Save as Draft</button>
                <button className="submit" onClick={submitText}>Submit</button>
                {statusMessage && <p>{statusMessage}</p>}
            </div>
            <button onClick={handleLogout} className="btn btn-danger mt-3">Logout</button>
        </div>
    );
}

export default Home;
