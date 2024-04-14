"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AllTheLoot_Init_1 = require("./AllTheLoot/AllTheLoot_Init");
class AllTheLoot {
    preAkiLoad(container) {
        (0, AllTheLoot_Init_1.AllTheLoot_Update)(container);
    }
    postDBLoad(container) {
        (0, AllTheLoot_Init_1.AllTheLoot_Init)(container);
    }
}
module.exports = { mod: new AllTheLoot() };
//# sourceMappingURL=mod.js.map