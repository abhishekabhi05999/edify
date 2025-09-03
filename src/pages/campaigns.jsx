



// import React, { useState } from 'react';
// import Navbar from '../components/Navbar';
// import CampaignsHeaderBar from './CampaignsHeaderBar';
// import CampaignsTable from './CampaignsTable';
// import CreateCampaignModal from './CreateCampaignModal';

// const Campaigns = () => {
//   const [showModal, setShowModal] = useState(false);
// const [campaigns, setCampaigns] = useState([
//   {
//     name: 'HRMS LAUNCH',
//     type: 'Webinar',
//     status: 'Planned',
//     startDate: '2024-08-18',
//     endDate: '2024-08-18',
//     active: 'Yes',
//     description: 'Initial campaign launch',
//     owner: 'John Doe'
//   },
//   {
//     name: 'Email Campaign May',
//     type: 'Email',
//     status: 'Completed',
//     startDate: '2024-05-01',
//     endDate: '2024-05-31',
//     active: 'No',
//     description: 'Monthly newsletter for May',
//     owner: 'Jane Smith'
//   },
//   {
//     name: 'Summer Workshop',
//     type: 'Webinar',
//     status: 'Planned',
//     startDate: '2024-07-10',
//     endDate: '2024-07-15',
//     active: 'Yes',
//     description: '5-day skill-building webinar',
//     owner: 'John Doe'
//   },
//   {
//     name: 'Product Update Campaign',
//     type: 'Email',
//     status: 'Completed',
//     startDate: '2024-06-05',
//     endDate: '2024-06-10',
//     active: 'No',
//     description: 'Product update release announcement',
//     owner: 'Jane Smith'
//   },
//   {
//     name: 'Recruitment Drive',
//     type: 'Webinar',
//     status: 'Planned',
//     startDate: '2024-09-01',
//     endDate: '2024-09-05',
//     active: 'Yes',
//     description: 'Hiring campaign for new batch',
//     owner: 'HR Manager'
//   }
// ]);

//   const handleCreateCampaign = (newCampaign) => {
//     setCampaigns((prev) => [...prev, newCampaign]);
//   };

//   return (
//     <div>
//       <Navbar />
//       <CampaignsHeaderBar onCreateClick={() => setShowModal(true)} />
//       <CampaignsTable campaigns={campaigns} />
//       {showModal && (
//         <CreateCampaignModal
//           onClose={() => setShowModal(false)}
//           onCreate={handleCreateCampaign}
//         />
//       )}
//     </div>
//   );
// };

// export default Campaigns;

// import React, { useState, useEffect } from 'react';
// import Navbar from '../components/Navbar';
// import CampaignsHeaderBar from './CampaignsHeaderBar';
// import CampaignsTable from './CampaignsTable';
// import CreateCampaignModal from './CreateCampaignModal';
// import KanbanView from './KanbanView';

// const Campaigns = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [viewMode, setViewMode] = useState('table');

//   const getInitialCampaigns = () => {
//     const stored = localStorage.getItem('campaigns');
//     if (stored) return JSON.parse(stored);
//     return [
//       {
//         name: 'Az-900 DevOps',
//         type: 'Webinar',
//         status: 'Upcoming',
//         startDate: '2024-08-18',
//         endDate: '2024-08-20',
//         active: 'Yes',
//         description: 'Azure beginner course',
//       },
//       {
//         name: 'Python',
//         type: 'Email',
//         status: 'Ongoing',
//         startDate: '2024-07-01',
//         endDate: '2024-07-30',
//         active: 'Yes',
//         description: 'Python learning campaign',
//       },
//       {
//         name: 'SQL',
//         type: 'Webinar',
//         status: 'On Hold',
//         startDate: '2024-07-10',
//         endDate: '2024-07-25',
//         active: 'No',
//         description: 'Database campaign paused',
//       },
//       {
//         name: 'React',
//         type: 'Webinar',
//         status: 'Completed',
//         startDate: '2024-06-01',
//         endDate: '2024-06-30',
//         active: 'No',
//         description: 'Frontend campaign done',
//       },
//       {
//         name: 'React (Evening)',
//         type: 'Email',
//         status: 'Completed',
//         startDate: '2024-05-01',
//         endDate: '2024-05-31',
//         active: 'No',
//         description: 'Evening batch closed',
//       },
//     ];
//   };

//   const [campaigns, setCampaigns] = useState(getInitialCampaigns);

//   useEffect(() => {
//     localStorage.setItem('campaigns', JSON.stringify(campaigns));
//   }, [campaigns]);

//   const handleCreate = (newCampaign) => {
//     setCampaigns(prev => [...prev, newCampaign]);
//   };

//   return (
//     <div>
//       <Navbar />
//       <CampaignsHeaderBar
//         onCreateClick={() => setShowModal(true)}
//         viewMode={viewMode}
//         setViewMode={setViewMode}
//       />

//       {viewMode === 'table' ? (
//         <CampaignsTable campaigns={campaigns} />
//       ) : (
//         <KanbanView campaigns={campaigns} />
//       )}

//       {showModal && (
//         <CreateCampaignModal
//           onClose={() => setShowModal(false)}
//           onCreate={handleCreate}
//         />
//       )}
//     </div>
//   );
// };

// export default Campaigns;




// import React, { useState, useEffect } from 'react';
// import Navbar from '../components/Navbar';
// import CampaignsHeaderBar from './CampaignsHeaderBar';
// import CampaignsTable from './CampaignsTable';
// import CreateCampaignModal from './CreateCampaignModal';
// import KanbanView from './KanbanView';

// const Campaigns = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [viewMode, setViewMode] = useState('table');

//   const getInitialCampaigns = () => {
//     const stored = localStorage.getItem('campaigns');
//     if (stored) return JSON.parse(stored);
//     return [
//       {
//         name: 'Az-900 DevOps',
//         type: 'Webinar',
//         status: 'Upcoming',
//         startDate: '2024-08-18',
//         endDate: '2024-08-20',
//         active: 'Yes',
//         description: 'Azure beginner course',
//       },
//       {
//         name: 'Python',
//         type: 'Email',
//         status: 'Ongoing',
//         startDate: '2024-07-01',
//         endDate: '2024-07-30',
//         active: 'Yes',
//         description: 'Python learning campaign',
//       },
//       {
//         name: 'SQL',
//         type: 'Webinar',
//         status: 'On Hold',
//         startDate: '2024-07-10',
//         endDate: '2024-07-25',
//         active: 'No',
//         description: 'Database campaign paused',
//       },
//       {
//         name: 'React',
//         type: 'Webinar',
//         status: 'Completed',
//         startDate: '2024-06-01',
//         endDate: '2024-06-30',
//         active: 'No',
//         description: 'Frontend campaign done',
//       },
//       {
//         name: 'React (Evening)',
//         type: 'Email',
//         status: 'Completed',
//         startDate: '2024-05-01',
//         endDate: '2024-05-31',
//         active: 'No',
//         description: 'Evening batch closed',
//       },
//     ];
//   };

//   const [campaigns, setCampaigns] = useState(getInitialCampaigns);

//   useEffect(() => {
//     localStorage.setItem('campaigns', JSON.stringify(campaigns));
//   }, [campaigns]);

//   const handleCreate = (newCampaign) => {
//     setCampaigns(prev => [...prev, newCampaign]);
//   };

//   return (
//     <div>
//       <Navbar />
//       <CampaignsHeaderBar onCreateClick={() => setShowModal(true)} />
      
//       {viewMode === 'table' ? (
//         <CampaignsTable
//           campaigns={campaigns}
//           viewMode={viewMode}
//           setViewMode={setViewMode}
//         />
//       ) : (
//    <KanbanView campaigns={campaigns} setCampaigns={setCampaigns} />

//       )}

//       {showModal && (
//         <CreateCampaignModal
//           onClose={() => setShowModal(false)}
//           onCreate={handleCreate}
//         />
//       )}
//     </div>
//   );
// };

// export default Campaigns;



import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import CampaignsHeaderBar from './CampaignsHeaderBar';
import CampaignsTable from './CampaignsTable';
import CreateCampaignModal from './CreateCampaignModal';
import KanbanView from './KanbanView';
import DefaultCampaigns from './defaultcampaigns';


const Campaigns = () => {
  const getInitialCampaigns = () => {
    const stored = localStorage.getItem('campaigns');
    return stored ? JSON.parse(stored) : DefaultCampaigns; // ✅ use correct variable
  };

  const [campaigns, setCampaigns] = useState(getInitialCampaigns);
  const [showModal, setShowModal] = useState(false);
  const [viewMode, setViewMode] = useState('table');

  useEffect(() => {
    localStorage.setItem('campaigns', JSON.stringify(campaigns));
  }, [campaigns]);

  const handleCreate = (newCampaign) => {
    setCampaigns(prev => [...prev, newCampaign]);
  };

  return (
    <div>
      <Navbar />
      <CampaignsHeaderBar onCreateClick={() => setShowModal(true)} />

      {viewMode === 'table' ? (
        // <CampaignsTable
        //   campaigns={campaigns}
        //   setCampaigns={setCampaigns}
        //   viewMode={viewMode}
        //   setViewMode={setViewMode}
        // />
        <CampaignsTable
            campaigns={campaigns}
            setCampaigns={setCampaigns}
             viewMode={viewMode}
             setViewMode={setViewMode}
             />
      ) : (
        <KanbanView campaigns={campaigns} setCampaigns={setCampaigns} />
      )}

      {showModal && (
        <CreateCampaignModal
          onClose={() => setShowModal(false)}
          onCreate={handleCreate}
        />
      )}
    </div>
  );
};

export default Campaigns;