import React from 'react';
import './Dashboard.css'; // Assuming the CSS file is named Dashboard.css

const Dashboard = () => {
    return (
        <div className="app-container">
            
            {/* TOP HEADER / NAVIGATION BAR */}
            <header className="app-header">
                <div className="logo">KnowledgeBase</div>
                <div className="search-bar-container">
                    <input type="search" placeholder="Search" className="search-input" />
                    <input type="search" placeholder="Search your knowledge base..." className="search-input full-width" />
                </div>
                <button className="new-note-btn">New Note</button>
                {/* Note: In a real app, replace 'avatar.jpg' with a proper import or prop */}
                <img src="avatar.jpg" alt="User Avatar" className="header-avatar" />
            </header>

            {/* MAIN BODY AREA (Sidebar and Content) */}
            <div className="main-body-wrapper">
                
                {/* LEFT SIDEBAR */}
                <aside className="sidebar">
                    <div className="user-profile">
                        {/* Note: In a real app, replace 'avatar-small.jpg' with a proper import or prop */}
                        <img src="avatar-small.jpg" alt="Kevin's Avatar" className="profile-avatar" />
                        <div>
                            <p className="user-name">Kevin's Space</p>
                            <p className="user-role">Personal</p>
                        </div>
                    </div>
                    
                    <nav className="nav-section">
                        {/* Highlighted Link */}
                        <a href="#" className="nav-item active">
                            <span className="icon"></span>
                            Dashboard
                        </a>
                        
                        {/* Unhighlighted Links */}
                        <a href="#" className="nav-item">All Notes</a>
                        <a href="#" className="nav-item">categarize</a>
                        <a href="#" className="nav-item">Analytics</a>
                        {/*<a href="#" className="nav-item">Notebooks</a>*/}
                    </nav>
                </aside>

                {/* MAIN CONTENT AREA */}
                <main className="content-area">
                    
                    {/*<h1 className="welcome-message">Welcome back, Kevin!</h1>*/}

                    {/* QUICK THOUGHT CARD */}
                    <section className="quick-thought-card">
                        <div className="card-header">
                            {/* Note: In a real app, replace 'avatar-icon.png' with a proper import or prop */}
                            <img src="avatar-icon.png" alt="Icon" className="icon-avatar" />
                            <p>Jot down a quick thought...</p>
                        </div>
                        <div className="card-actions">
                            <span className="action-btn">add</span>
                            <span className="action-btn">description</span>
                            <span className="action-btn">sell</span>
                            <button className="save-btn">Save</button>
                        </div>
                    </section>

                    
                </main>
            </div>
        </div>
    );
};

export default Dashboard;