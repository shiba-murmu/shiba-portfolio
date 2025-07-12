import React from 'react';
import { useParams } from 'react-router-dom';

function Window_view_project_details() {

    const { id } = useParams();

  return (
    <div>Window_view_project_details ID : { id }</div>
  )
}

export default Window_view_project_details;