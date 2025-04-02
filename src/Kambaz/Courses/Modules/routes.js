import * as modulesDao from "./dao.js";
export default function ModuleRoutes(app) {
    app.delete("/api/modules/:moduleId", async (req, res) => {
        const { moduleId } = req.params;
        modulesDao.deleteModule(moduleId);
        res.sendStatus(204);
    });
    app.put("/api/modules/:moduleId", async (req, res) => {
        const { moduleId } = req.params;
        const moduleUpdates = req.body;
        const status = await modulesDao.updateModule(moduleId, moduleUpdates);
        res.send(status);
    });
}

