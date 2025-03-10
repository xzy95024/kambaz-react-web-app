import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer.ts";

export default function DeleteAssignmentButton({ assignment }: { assignment: any }) {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const dispatch = useDispatch();

    // Open confirmation modal
    const handleDelete = () => {
        setShowDeleteModal(true);
    };

    // Confirm and delete the assignment
    const confirmDelete = () => {
        dispatch(deleteAssignment(assignment._id));
        setShowDeleteModal(false);
    };

    return (
        <>
            {/* Trash Icon Button */}
            <FaTrash
                className="text-danger cursor-pointer"
                onClick={handleDelete}
            />

            {/* Delete Confirmation Modal */}
            <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete the assignment <strong>{assignment.title}</strong>?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>Cancel</Button>
                    <Button variant="danger" onClick={confirmDelete}>Delete</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
