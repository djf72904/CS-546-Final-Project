import app from "../../app.js";

export const handleMiddleware = (app, ...functions) => {

    for (const func of functions) {
        app.use(func);
    }
}

export const handleRoutes = (app, ...[routes]) => {
    for (const route of routes) {
        //route name, route function
        app.use(route[0], route[1]);
    }
}

