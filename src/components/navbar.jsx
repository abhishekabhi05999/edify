import React from 'react';
import { Link } from 'react-router-dom';
import {
  Search, Bell, MoreVertical, Sparkles,
  MessageCirclePlus, Settings
} from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Left side: Gradient Edify branding */}
      <div className="navbar-left">
        <span className="brand-text">Edify</span>
      </div>

      {/* Right side: Nav links and icons */}
      <div className="navbar-right">
        <div className="nav-tabs">
          {['Dashboard', 'Campaigns', 'Leads', 'Opportunities', 'Learners', 'Batches', 'Trainers', 'Tasks', 'Analytics'].map((tab) => (
            <Link key={tab} to={`/${tab.toLowerCase()}`} className="nav-link">
              {tab}
            </Link>
          ))}
        </div>

        <div className="nav-icons">
          <Search className="nav-icon" />
          <div className="icon gray-bg">
            <MessageCirclePlus size={18} />
          </div>
          <div className="icon ask-ai">
            <Sparkles size={18} />
          </div>
          <div className="icon bell">
            <Bell size={18} />
            <span className="badge">3</span>
          </div>
          <div className="icon profile">
            <img src="https://placehold.co/24x24" alt="User" />
          </div>
          <Settings className="nav-icon" />
          <MoreVertical className="nav-icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
