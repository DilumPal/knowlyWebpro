import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return (
        // CORRECTED: All content is wrapped inside this single root element
        <div className="app-container">
            <div className="flex h-screen w-full flex-col">
                {/* Top Nav Bar */}
                <header className="top-nav">
                    <div className="nav-left">
                        <span className="material-symbols-outlined icon-hub">hub</span>
                        <h2 className="logo-title">KnowledgeBase</h2>
                    </div>
                    <div className="nav-right">
                        <div className="search-container">
                            <label className="search-label">
                                <div className="search-input-group">
                                    <div className="search-icon-wrapper">
                                        <span className="material-symbols-outlined">search</span>
                                    </div>
                                    {/* Self-closing tag corrected */}
                                    <input className="search-input" placeholder="Search your knowledge base..." defaultValue=""/>
                                </div>
                            </label>
                        </div>
                        <button className="btn-primary">
                            <span className="truncate">New Note</span>
                        </button>
                        {/* Inline style uses double curly braces and camelCase */}
                        <div className="user-avatar" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBSHGQ43IkIL4_7uhOXp8Df-aYmwfzlkh9s08TcgLLQ3b0L-R1k5PQjTunwNW2lIeTKL4O-ItH341LzKdjSefP9DhNAcgr3dOjERpu7jNnyrtzauJDxjDZuSrtT00SwR7K-cMnHXqJxbFpJAl0Bztzyv-yCV2fZL6wrS-A-KEfk_4GG9MzxZ6WqsiqKSngtrhDUXZt_N4u_w5LMIkV2ewC9trZZ6NhwDWL4uoC97gWvzBBKfZwHMfspRxZ9VW3D5CcZKZeektY0XWg")'}} data-alt="User avatar"></div>
                    </div>
                </header>

                <div className="main-layout">
                    {/* Side Nav Bar */}
                    <aside className="side-nav">
                        <div className="side-nav-content">
                            <div className="user-space-info">
                                <div className="user-avatar-small" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAT10vTDwND4TYcGmtazEI6MEi6s2GP5BfTvVojfxaW4uXrTG1SIq5ls-W37Kldi-XSIzEllt4NSvVNaX-NiJ48WWFEcxI8xInU9Jd57k1riUcrfBwpk0-feqDz_akhMFKAw80QhCp1ws06vKdbBH3tpnUa3NdlHOsHaA5b9dnKS2RLTxZfoagWrVRqBtyegnpgSQmF2KdLDO1Q70jkYVMPO67arDEq54mwMnUFe8-OXiwz4IoyIKVYmWtQds0j1gIrs7sJRe4JqLM")'}} data-alt="User avatar"></div>
                                <div className="user-details">
                                    <h1 className="space-title">Kevin's Space</h1>
                                    <p className="space-type">Personal</p>
                                </div>
                            </div>
                            <nav className="nav-links">
                                <a className="nav-item active" href="#">
                                    <span className="material-symbols-outlined">dashboard</span>
                                    <p>Dashboard</p>
                                </a>
                                <a className="nav-item" href="#">
                                    <span className="material-symbols-outlined">description</span>
                                    <p>All Notes</p>
                                </a>
                                <a className="nav-item" href="#">
                                    <span className="material-symbols-outlined">book</span>
                                    <p>Notebooks</p>
                                </a>
                                <a className="nav-item" href="#">
                                    <span className="material-symbols-outlined">sell</span>
                                    <p>Tags</p>
                                </a>
                            </nav>
                        </div>
                        <div className="nav-utility">
                            <a className="nav-item" href="#">
                                <span className="material-symbols-outlined">delete</span>
                                <p>Trash</p>
                            </a>
                            <a className="nav-item" href="#">
                                <span className="material-symbols-outlined">settings</span>
                                <p>Settings</p>
                            </a>
                        </div>
                    </aside>

                    {/* Main Content (The semantic <main> tag is correctly used here) */}
                    <main className="main-content-area">
                        <div className="page-wrapper">
                            {/* Page Heading */}
                            <div className="page-heading">
                                <p className="greeting-text">Welcome back, Kevin!</p>
                            </div>

                            {/* Quick Composer */}
                            <div className="quick-composer-section">
                                <div className="composer-card">
                                    <div className="user-avatar-composer" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDATXRSE0fA0J4yL49tybh_m3sc5utmvPm5Z_qtoA4UACIt_wtywOj3cwQu77FYsIA90mprec6Je90KsS0-LsK2t8xkseVwEhmS115tTv8S--_xHvyMfOsSNeiUyb3G3wVvUdSbaQzTRHIOjS_bd6LHGZT-b05yZCGJaFeOMzVpZhwgnJPWi_OZCpn18L53oTR7S9fXZCcpGPg9JVvwRoiSmI8XyUaVizwib2-2TT3lK35Rib7rLL0tHyPs0lQE-K0OXtBPsDq_iHc")'}} data-alt="User avatar"></div>
                                    <div className="composer-body">
                                        {/* Self-closing tag corrected */}
                                        <textarea className="composer-input" placeholder="Jot down a quick thought..." rows="2"></textarea>
                                        <div className="composer-actions">
                                            <div className="composer-tool-buttons">
                                                <button className="tool-button">
                                                    <span className="material-symbols-outlined">add</span>
                                                </button>
                                                <button className="tool-button">
                                                    <span className="material-symbols-outlined">description</span>
                                                </button>
                                                <button className="tool-button">
                                                    <span className="material-symbols-outlined">sell</span>
                                                </button>
                                            </div>
                                            <button className="btn-save">
                                                <span className="truncate">Save</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Grid Layout */}
                            <div className="dashboard-grid">
                                {/* Recent Notes Section */}
                                <div className="recent-notes-container">
                                    <div className="card">
                                        <h2 className="card-title">Recent Notes</h2>
                                        <div className="note-list">
                                            {/* Note Item 1 */}
                                            <div className="note-item">
                                                <div className="note-details">
                                                    <h3 className="note-title">Project Phoenix Kick-off Meeting</h3>
                                                    <p className="note-timestamp">Edited 2 hours ago</p>
                                                </div>
                                                <div className="note-tags">
                                                    <span className="tag tag-primary">#project</span>
                                                    <span className="tag tag-green">#meeting</span>
                                                </div>
                                            </div>
                                            {/* Note Item 2 */}
                                            <div className="note-item">
                                                <div className="note-details">
                                                    <h3 className="note-title">My Favorite Productivity Apps</h3>
                                                    <p className="note-timestamp">Edited yesterday</p>
                                                </div>
                                                <div className="note-tags">
                                                    <span className="tag tag-yellow">#list</span>
                                                    <span className="tag tag-purple">#tools</span>
                                                </div>
                                            </div>
                                            {/* Note Item 3 */}
                                            <div className="note-item">
                                                <div className="note-details">
                                                    <h3 className="note-title">Initial Thoughts on Q3 Strategy</h3>
                                                    <p className="note-timestamp">Edited 3 days ago</p>
                                                </div>
                                                <div className="note-tags">
                                                    <span className="tag tag-primary">#work</span>
                                                </div>
                                            </div>
                                            {/* Note Item 4 */}
                                            <div className="note-item">
                                                <div className="note-details">
                                                    <h3 className="note-title">Book Summary: "Atomic Habits"</h3>
                                                    <p className="note-timestamp">Edited 1 week ago</p>
                                                </div>
                                                <div className="note-tags">
                                                    <span className="tag tag-orange">#reading</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Sidebar Content */}
                                <div className="sidebar-content">
                                    {/* Tag Cloud */}
                                    <div className="card tag-cloud-card">
                                        <h2 className="card-title">Tag Cloud</h2>
                                        <div className="tag-cloud">
                                            <span className="cloud-tag cloud-tag-large tag-primary">#project</span>
                                            <span className="cloud-tag cloud-tag-medium tag-green">#meeting</span>
                                            <span className="cloud-tag cloud-tag-medium tag-orange">#reading</span>
                                            <span className="cloud-tag cloud-tag-medium tag-purple">#tools</span>
                                            <span className="cloud-tag cloud-tag-small tag-yellow">#list</span>
                                            <span className="cloud-tag cloud-tag-medium tag-primary">#work</span>
                                            <span className="cloud-tag cloud-tag-medium tag-red">#ideas</span>
                                        </div>
                                    </div>
                                    {/* Discover Connections */}
                                    <div className="card connections-card">
                                        <div className="connections-header">
                                            <span className="material-symbols-outlined icon-orange">auto_awesome</span>
                                            <h2 className="card-title">Discover Connections</h2>
                                        </div>
                                        <div className="connection-body">
                                            <p className="connection-text">Your note on <strong className="highlight">"Productivity Apps"</strong> might relate to your thoughts on <strong className="highlight">"Q3 Strategy"</strong>.</p>
                                            <a className="link-primary" href="#">Explore connection →</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;