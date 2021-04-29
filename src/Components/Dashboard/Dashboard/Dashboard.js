import React from 'react';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageService from '../ManageService/ManageService';
import Services from '../Services/Services';
import Sidebar from '../Sidebar/Sidebar'

const containerStyle = {
  backgroundColor: "#f5f5f5"
}

const Dashboard = () => {
  return (
    <div style={containerStyle} className='row'>
      <div className="col-md-2 col-sm-6 col-12">
        <Sidebar />
      </div>
      <div className="col-md-5 col-sm-12 col-12 d-flex justify-content-center">
        <MakeAdmin/>
      </div>
      <div className="col-md-5 col-sm-12 col-12">
        <ManageService/>
        <Services/>
      </div>
    </div>
  );
};

export default Dashboard;