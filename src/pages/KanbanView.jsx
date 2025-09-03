// import React from 'react';
// import '../styles/KanbanView.css';

// const statusGroups = ['Upcoming', 'Ongoing', 'On Hold', 'Completed'];

// const KanbanView = ({ campaigns }) => {
//   // Group campaigns by status
//   const grouped = statusGroups.map(status => ({
//     title: status,
//     items: campaigns.filter(c => c.status === status)
//   }));

//   return (
//     <div className="kanban-container">
//       {grouped.map((group, index) => (
//         <div key={index} className="kanban-column">
//           <div className={`kanban-column-header ${group.title.toLowerCase().replace(' ', '-')}`}>
//             <strong>{group.title}</strong> <span>({group.items.length})</span>
//           </div>
//           <div className="kanban-cards">
//             {group.items.map((campaign, i) => (
//               <div key={i} className="kanban-card">
//                 <div className="campaign-title">{campaign.name}</div>
//                 <div className="campaign-badge">{campaign.type}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default KanbanView;







// KanbanView.js (Simple Drag and Drop without libraries)
// 








import React from 'react';
import '../styles/KanbanView.css';

const KanbanView = ({ campaigns, setCampaigns }) => {
  const statuses = ['Upcoming', 'Ongoing', 'On Hold', 'Completed'];

  const handleDragStart = (e, campaignName) => {
    e.dataTransfer.setData('campaignName', campaignName);
  };

  const handleDrop = (e, newStatus) => {
    const name = e.dataTransfer.getData('campaignName');
    const updated = campaigns.map(c =>
      c.name === name ? { ...c, status: newStatus } : c
    );
    setCampaigns(updated);
  };

  const allowDrop = (e) => e.preventDefault();

  return (
    <div className="kanban-board">
      {statuses.map(status => (
        <div
          key={status}
          className={`kanban-column ${status.toLowerCase().replace(' ', '-')}`}
          onDrop={e => handleDrop(e, status)}
          onDragOver={allowDrop}
        >
          <h3>
            {status} ({campaigns.filter(c => c.status === status).length})
          </h3>

          {campaigns
            .filter(c => c.status === status)
            .map(campaign => (
              <div
                key={campaign.name}
                className="kanban-card"
                draggable
                onDragStart={e => handleDragStart(e, campaign.name)}
              >
                <strong>{campaign.name}</strong>
                <p>{campaign.type}</p>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanView;