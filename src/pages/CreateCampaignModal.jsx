
// import React from 'react';
// import '../styles/CreateCampaignModal.css';


// const CreateCampaignModal = ({ onClose }) => {
//   return (
//     <div className="modal-overlay">
//       <div className="modal-box">
//         <div className="modal-header">
//           <h3>Create Campaign</h3>
//           <button className="close-btn" onClick={onClose}>×</button>
//         </div>

//         <div className="modal-body">
//           <div className="form-grid">
//             <div>
//               <label>Campaign Owner</label>
//               <select><option>None</option></select>
//             </div>
//             <div>
//               <label>Type</label>
//               <select><option>Webinar</option><option>Email</option></select>
//             </div>

//             <div>
//               <label>Campaign Name</label>
//               <input type="text" />
//             </div>
//             <div>
//               <label>Status</label>
//               <select><option>Planned</option><option>Completed</option></select>
//             </div>

//             <div>
//               <label>Start Date</label>
//               <input type="date" />
//             </div>
//             <div>
//               <label>End Date</label>
//               <input type="date" />
//             </div>

//             <div>
//               <label>Active</label>
//               <select><option>Yes</option><option>No</option></select>
//             </div>
//           </div>

//           <label>Description</label>
//           <textarea rows="3" placeholder="Write here..." />
//         </div>

//         <div className="modal-footer">
//           <button className="cancel-btn" onClick={onClose}>Cancel</button>
//           <button className="create-btn">Create</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateCampaignModal;
// import React, { useState } from 'react';
// import '../styles/CreateCampaignModal.css';

// const CreateCampaignModal = ({ onClose, onCreate }) => {
//   const [formData, setFormData] = useState({
//     owner: '',
//     type: 'Webinar',
//     name: '',
//     status: 'Planned',
//     startDate: '',
//     endDate: '',
//     active: 'Yes',
//     description: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = () => {
//     if (formData.name && formData.startDate && formData.endDate) {
//       onCreate({
//         name: formData.name,
//         type: formData.type,
//         status: formData.status,
//         startDate: formData.startDate,
//         endDate: formData.endDate,
//         active: formData.active,
//         description: formData.description,
//       });
//       onClose();
//     } else {
//       alert("Please fill in the required fields.");
//     }
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal-box">
//         <div className="modal-header">
//           <h3>Create Campaign</h3>
//           <button className="close-btn" onClick={onClose}>×</button>
//         </div>

//         <div className="modal-body">
//           <div className="form-grid">
//             <div>
//               <label>Campaign Owner</label>
//               <select name="owner" onChange={handleChange}><option>None</option></select>
//             </div>
//             <div>
//               <label>Type</label>
//               <select name="type" value={formData.type} onChange={handleChange}>
//                 <option>Webinar</option>
//                 <option>Email</option>
//               </select>
//             </div>

//             <div>
//               <label>Campaign Name</label>
//               <input type="text" name="name" value={formData.name} onChange={handleChange} />
//             </div>
//             <div>
//               <label>Status</label>
//               <select name="status" value={formData.status} onChange={handleChange}>
//                 <option>Planned</option>
//                 <option>Completed</option>
//               </select>
//             </div>

//             <div>
//               <label>Start Date</label>
//               <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} />
//             </div>
//             <div>
//               <label>End Date</label>
//               <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} />
//             </div>

//             <div>
//               <label>Active</label>
//               <select name="active" value={formData.active} onChange={handleChange}>
//                 <option>Yes</option>
//                 <option>No</option>
//               </select>
//             </div>
//           </div>

//           <label>Description</label>
//           <textarea name="description" rows="3" placeholder="Write here..." value={formData.description} onChange={handleChange} />
//         </div>

//         <div className="modal-footer">
//           <button className="cancel-btn" onClick={onClose}>Cancel</button>
//           <button className="create-btn" onClick={handleSubmit}>Create</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateCampaignModal;


// import React, { useState } from 'react';
// import '../styles/CreateCampaignModal.css';

// const CreateCampaignModal = ({ onClose, onCreate }) => {
//   const [formData, setFormData] = useState({
//     owner: '',
//     type: 'Webinar',
//     name: '',
//     status: 'Planned',
//     startDate: '',
//     endDate: '',
//     active: 'Yes',
//     description: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = () => {
//     if (formData.name && formData.startDate && formData.endDate) {
//       onCreate({
//         name: formData.name,
//         type: formData.type,
//         status: formData.status,
//         startDate: formData.startDate,
//         endDate: formData.endDate,
//         active: formData.active,
//         description: formData.description,
//         owner: formData.owner,
//       });
//       onClose();
//     } else {
//       alert("Please fill in the required fields.");
//     }
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal-box">
//         <div className="modal-header">
//           <h3>Create Campaign</h3>
//           <button className="close-btn" onClick={onClose}>×</button>
//         </div>

//         <div className="modal-body">
//           <div className="form-grid">
//             <div>
//               <label>Campaign Owner</label>
//               <select name="owner" value={formData.owner} onChange={handleChange}>
//                 <option value="">None</option>
//                 <option value="John Doe">John Doe</option>
//                 <option value="Jane Smith">Jane Smith</option>
//               </select>
//             </div>

//             <div>
//               <label>Type</label>
//               <select name="type" value={formData.type} onChange={handleChange}>
//                 <option>Webinar</option>
//                 <option>Email</option>
//               </select>
//             </div>

//             <div>
//               <label>Campaign Name</label>
//               <input type="text" name="name" value={formData.name} onChange={handleChange} />
//             </div>

//             <div>
//               <label>Status</label>
//               <select name="status" value={formData.status} onChange={handleChange}>
//                 <option>Planned</option>
//                 <option>Completed</option>
//               </select>
//             </div>

//             <div>
//               <label>Start Date</label>
//               <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} />
//             </div>
//             <div>
//               <label>End Date</label>
//               <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} />
//             </div>

//             <div>
//               <label>Active</label>
//               <select name="active" value={formData.active} onChange={handleChange}>
//                 <option>Yes</option>
//                 <option>No</option>
//               </select>
//             </div>
//           </div>

//           <label>Description</label>
//           <textarea
//             name="description"
//             rows="3"
//             placeholder="Write here..."
//             value={formData.description}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="modal-footer">
//           <button className="cancel-btn" onClick={onClose}>Cancel</button>
//           <button className="create-btn" onClick={handleSubmit}>Create</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateCampaignModal;




// import React, { useState } from 'react';
// import '../styles/CreateCampaignModal.css';

// const CreateCampaignModal = ({ onClose, onCreate }) => {
//   const [formData, setFormData] = useState({
//     owner: '',
//     type: '',
//     name: '',
//     status: '',
//     startDate: '',
//     endDate: '',
//     active: 'Yes',
//     description: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = () => {
//     if (formData.name && formData.startDate && formData.endDate) {
//       onCreate({
//         name: formData.name,
//         type: formData.type,
//         status: formData.status,
//         startDate: formData.startDate,
//         endDate: formData.endDate,
//         active: formData.active,
//         description: formData.description,
//         owner: formData.owner,
//       });
//       onClose();
//     } else {
//       alert("Please fill in the required fields.");
//     }
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal-box">
//         <div className="modal-header">
//           <h3>Create Campaign</h3>
//           <button className="close-btn" onClick={onClose}>×</button>
//         </div>

//         <div className="modal-body">
//           <div className="form-grid">
//             <div>
//               <label>Campaign Owner</label>
//               <select name="owner" value={formData.owner} onChange={handleChange}>
//                 <option value="">None</option>
//                 <option value="John Doe">John Doe</option>
//                 <option value="Jane Smith">Jane Smith</option>
//               </select>
//             </div>

//             <div>
//               <label>Type</label>
//               <select name="type" value={formData.type} onChange={handleChange}>
//                 <option value="Webinar">Webinar</option>
//                 <option value="Email">Email</option>
//                 <option value="Meta">Meta</option>
//                 <option value="Google">Google</option>
//                 <option value="LinkedIn">LinkedIn</option>
//               </select>
//             </div>

//             <div>
//               <label>Campaign Name</label>
//               <input type="text" name="name" value={formData.name} onChange={handleChange} />
//             </div>

//             <div>
//               <label>Status</label>
//               <select name="status" value={formData.status} onChange={handleChange}>
            
//                 <option value="Ongoing">Ongoing</option>
//                 <option value="On Hold">On Hold</option>
//                 <option value="Upcoming">Upcoming</option>
//                 <option value="Completed">Completed</option>
//               </select>
//             </div>

//             <div>
//               <label>Start Date</label>
//               <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} />
//             </div>
//             <div>
//               <label>End Date</label>
//               <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} />
//             </div>

//             <div>
//               <label>Active</label>
//               <select name="active" value={formData.active} onChange={handleChange}>
//                 <option value="Yes">Yes</option>
//                 <option value="No">No</option>
//               </select>
//             </div>
//           </div>

//           <label>Description</label>
//           <textarea
//             name="description"
//             rows="3"
//             placeholder="Write here..."
//             value={formData.description}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="modal-footer">
//           <button className="cancel-btn" onClick={onClose}>Cancel</button>
//           <button className="create-btn" onClick={handleSubmit}>Create</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateCampaignModal;







import React, { useState } from 'react';
import '../styles/CreateCampaignModal.css';

const CreateCampaignModal = ({ onClose, onCreate }) => {
  const [formData, setFormData] = useState({
    owner: '',
    type: '',
    name: '',
    status: '',
    startDate: '',
    endDate: '',
    active: 'Yes',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const { name, type, status, startDate, endDate } = formData;

    if (name && type && status && startDate && endDate) {
      onCreate(formData);
      onClose();
    } else {
      alert("Please fill in all required fields including Status and Type.");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <div className="modal-header">
          <h3>Create Campaign</h3>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="modal-body">
          <div className="form-grid">
            <div>
              <label>Campaign Owner</label>
              <select name="owner" value={formData.owner} onChange={handleChange}>
                <option value="">None</option>
                <option value="John Doe">John Doe</option>
                <option value="Jane Smith">Jane Smith</option>
              </select>
            </div>

            <div>
              <label>Type</label>
              <select name="type" value={formData.type} onChange={handleChange}>
                <option value="">-- Select Type --</option>
                <option value="Webinar">Webinar</option>
                <option value="Email">Email</option>
                <option value="Meta">Meta</option>
                <option value="Google">Google</option>
                <option value="LinkedIn">LinkedIn</option>
              </select>
            </div>

            <div>
              <label>Campaign Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </div>

            <div>
              <label>Status</label>
              <select name="status" value={formData.status} onChange={handleChange}>
                <option value="">-- Select Status --</option>
                <option value="Upcoming">Upcoming</option>
                <option value="Ongoing">Ongoing</option>
                <option value="On Hold">On Hold</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            <div>
              <label>Start Date</label>
              <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} />
            </div>

            <div>
              <label>End Date</label>
              <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} />
            </div>

            <div>
              <label>Active</label>
              <select name="active" value={formData.active} onChange={handleChange}>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>

          <label>Description</label>
          <textarea
            name="description"
            rows="3"
            placeholder="Write here..."
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div className="modal-footer">
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
          <button className="create-btn" onClick={handleSubmit}>Create</button>
        </div>
      </div>
    </div>
  );
};

export default CreateCampaignModal;