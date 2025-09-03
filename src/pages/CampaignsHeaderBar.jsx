// import React from 'react';
// import '../styles/CampaignsHeaderBar.css';

// const CampaignsHeaderBar = () => {
//   return (
//     <div className="campaigns-header">
//       <div className="campaigns-left">
//         <select className="campaigns-dropdown">
//           <option>All Active Campaigns</option>
//         </select>

//         <div className="campaigns-filters">
//           <button className="filter-btn active">Upcoming</button>
//           <button className="filter-btn">Ongoing</button>
//           <button className="filter-btn">On Hold</button>
//           <button className="filter-btn">Completed</button>
//         </div>
//       </div>

//       <div className="campaigns-right">
//         <input className="search-input" type="text" placeholder="Search..." />

//         <div className="view-toggle">
//           <button className="view-btn active">In Table</button>
//           <button className="view-btn">In Kanban</button>
//         </div>

//         <button className="create-btn">Create Campaign</button>
//         <button className="export-btn">Export</button>
//       </div>
//     </div>
//   );
// };

// export default CampaignsHeaderBar;


// import React from 'react';
// import { Calendar } from 'lucide-react';
// import '../styles/CampaignsHeaderBar.css';

// const CampaignsHeaderBar = ({ onCreateClick }) => {
//   return (
//     <div className="campaigns-header-bar">
//       {/* Left: Campaign dropdown */}
//       <div className="left-section">
//         <select className="campaigns-dropdown">
//           <option>All Active Campaigns</option>
//           <option>My Campaigns</option>
//           <option>Archived Campaigns</option>
//         </select>
//       </div>

//       {/* Right: Calendar icon, Create Campaign dropdown, Actions button */}
//        <div className="right-section">
//         {/* Date Picker */}
//         <div className="date-picker-wrapper">
//           <input type="date" className="date-picker-input" />
//           <Calendar className="calendar-icon" />
//         </div>

//      <select className="create-dropdown">
//   <option disabled selected>Create Campaign</option>
//   <option>New Campaign</option>
//   <option>Import Campaign</option>
// </select>


//       <button className="btn actions-btn">
//        Actions
//       </button>
//       </div>
//         <button className="create-btn" onClick={onCreateClick}>
//         Create Campaign
//       </button>
//     </div>

//   );
// };

// export default CampaignsHeaderBar;

import React from 'react';
import { Calendar } from 'lucide-react';
import '../styles/CampaignsHeaderBar.css';

const CampaignsHeaderBar = ({ onCreateClick }) => {
  const handleCreateChange = (e) => {
    const value = e.target.value;

    if (value === 'new') {
      onCreateClick(); // open modal
    }

    // Reset the dropdown to default
    e.target.selectedIndex = 0;
  };

  return (
    <div className="campaigns-header-bar">
      {/* Left: Campaign dropdown */}
      <div className="left-section">
        <select className="campaigns-dropdown">
          <option>All Active Campaigns</option>
          <option>My Campaigns</option>
          <option>recently viewed campaigns</option>
        </select>
      </div>

      {/* Right section */}
      <div className="right-section">
        {/* Date Picker */}
        <div className="date-picker-wrapper">
          <input type="date" className="date-picker-input" />
          <Calendar className="calendar-icon" />
        </div>

        {/* Create Campaign Dropdown */}
        <select className="create-dropdown" onChange={handleCreateChange}>
          <option disabled selected>
            Create Campaign
          </option>
          <option value="new">New Campaign</option>
          <option value="import">Import Campaign</option>
        </select>

      </div>
    </div>
  );
};

export default CampaignsHeaderBar;