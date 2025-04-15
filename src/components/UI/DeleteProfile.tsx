import React from 'react'
import '../style/Delete.scss'

export interface DeleteProfileProps {
    isOpen: boolean;
    onClose: () => void;
    onDelete: () => void;
  }

const  DeleteProfile : React.FC<DeleteProfileProps>=({ isOpen, onClose, onDelete })=> {
    if (!isOpen) return null;
  return (
    <div className="modal-overlay">
    <div className="modal-content">
      <h2>Delete Account</h2>
      <p>Are you sure you want to permanently delete your account?</p>
      <div className="modal-buttons">
        <button className="cancel-btn" onClick={onClose}>Cancel</button>
        <button className="delete-btn" onClick={onDelete}>Delete</button>
      </div>
    </div>
  </div>
  )
}

export default DeleteProfile