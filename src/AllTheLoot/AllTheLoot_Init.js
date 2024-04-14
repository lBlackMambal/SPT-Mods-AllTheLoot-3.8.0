"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllTheLoot_Init = exports.AllTheLoot_Update = void 0;
const AllTheLoot_Main_1 = require("./AllTheLoot_Main");
const AllTheLoot_Update = (container) => {
    const staticRouterModService = container.resolve("StaticRouterModService");
    staticRouterModService.registerStaticRouter("AllTheLootUpdateSpawnRates", [{
            url: "/client/match/offline/end",
            action: (_url, info, _sessionId, output) => {
                AllTheLoot_Main_1.allTheLoot.updateSpawnRates();
                return output;
            }
        }], "aki");
};
exports.AllTheLoot_Update = AllTheLoot_Update;
const AllTheLoot_Init = (container) => {
    AllTheLoot_Main_1.allTheLoot.tables = container.resolve("DatabaseServer").getTables();
    AllTheLoot_Main_1.allTheLoot.configServer = container.resolve("ConfigServer");
    AllTheLoot_Main_1.allTheLoot.Logger = container.resolve("WinstonLogger");
    AllTheLoot_Main_1.allTheLoot.readHandbook();
    AllTheLoot_Main_1.allTheLoot.updateSpawnRates();
};
exports.AllTheLoot_Init = AllTheLoot_Init;
//# sourceMappingURL=AllTheLoot_Init.js.map