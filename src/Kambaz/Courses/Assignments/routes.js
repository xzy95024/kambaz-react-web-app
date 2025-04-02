import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
    app.get("/api/courses/:courseId/assignments", (req, res) => {
        const { courseId } = req.params;
        const result = dao.findAssignmentsForCourse(courseId);
        res.send(result);
    });

    app.post("/api/courses/:courseId/assignments", (req, res) => {
        const { courseId } = req.params;
        const assignment = { ...req.body, course: courseId };
        const created = dao.createAssignment(assignment);
        res.send(created);
    });

    app.put("/api/assignments/:assignmentId", (req, res) => {
        const { assignmentId } = req.params;
        const updated = dao.updateAssignment(assignmentId, req.body);
        if (!updated) {
            res.status(404).send({ message: "Assignment not found" });
        } else {
            res.send(updated);
        }
    });

    app.delete("/api/assignments/:assignmentId", (req, res) => {
        const { assignmentId } = req.params;
        const result = dao.deleteAssignment(assignmentId);
        res.send(result);
    });
}