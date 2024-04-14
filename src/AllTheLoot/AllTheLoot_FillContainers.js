"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fillContainersWithLoot = void 0;
const AllTheLoot_Helper_1 = require("../AllTheLoot/AllTheLoot_Helper");
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
function generateContainerStructure(containerId, containerName, containerIndex, overwriteSPTContainer, jsonData, assignedItemsData, staticLoot) {
    if (overwriteSPTContainer) {
        return {
            [containerId]: {
                itemcountDistribution: jsonData[`itemsDistribution_${containerName}`].map(Number).map((count, index) => ({
                    count,
                    relativeProbability: jsonData[`itemsDistributionProbabilities_${containerName}`].map(Number)[index] || 1,
                })),
                itemDistribution: assignedItemsData[containerIndex].map((item) => ({
                    tpl: item.itemId,
                    relativeProbability: item.itemSpawnrate || 1,
                })),
            },
        };
    }
    else {
        return {
            [containerId]: {
                itemcountDistribution: staticLoot[containerId].itemcountDistribution,
                itemDistribution: staticLoot[containerId].itemDistribution,
            },
        };
    }
}
function fillContainersWithLoot(tables, assignedItemsData) {
    const staticLoot = tables.loot.staticLoot;
    const scriptDirectory = __dirname;
    const configFilePath = path.join(scriptDirectory, '../../Config/config_Containers_ID.json');
    const fileContents = fs.readFileSync(configFilePath, "utf-8");
    const jsonData = JSON.parse(fileContents);
    const lootRecordsAll = {
        ...generateContainerStructure(AllTheLoot_Helper_1.SPTLootContainerID.DRAWER, AllTheLoot_Helper_1.SPTLootContainerName.DRAWER, AllTheLoot_Helper_1.SPTLootContainerIndex.DRAWER, jsonData.overwriteSPT_Drawer, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(AllTheLoot_Helper_1.SPTLootContainerID.CASHREGISTER, AllTheLoot_Helper_1.SPTLootContainerName.CASHREGISTER, AllTheLoot_Helper_1.SPTLootContainerIndex.CASHREGISTER, jsonData.overwriteSPT_CashRegister, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(AllTheLoot_Helper_1.SPTLootContainerID.PCBLOCK, AllTheLoot_Helper_1.SPTLootContainerName.PCBLOCK, AllTheLoot_Helper_1.SPTLootContainerIndex.PCBLOCK, jsonData.overwriteSPT_PCBlock, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(AllTheLoot_Helper_1.SPTLootContainerID.JACKET, AllTheLoot_Helper_1.SPTLootContainerName.JACKET, AllTheLoot_Helper_1.SPTLootContainerIndex.JACKET, jsonData.overwriteSPT_Jacket, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(AllTheLoot_Helper_1.SPTLootContainerID.TOOLBOX, AllTheLoot_Helper_1.SPTLootContainerName.TOOLBOX, AllTheLoot_Helper_1.SPTLootContainerIndex.TOOLBOX, jsonData.overwriteSPT_Toolbox, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(AllTheLoot_Helper_1.SPTLootContainerID.MEDCASE, AllTheLoot_Helper_1.SPTLootContainerName.MEDCASE, AllTheLoot_Helper_1.SPTLootContainerIndex.MEDCASE, jsonData.overwriteSPT_Medcase, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(AllTheLoot_Helper_1.SPTLootContainerID.SAFE, AllTheLoot_Helper_1.SPTLootContainerName.SAFE, AllTheLoot_Helper_1.SPTLootContainerIndex.SAFE, jsonData.overwriteSPT_Safe, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(AllTheLoot_Helper_1.SPTLootContainerID.WEAPONBOX5X5, AllTheLoot_Helper_1.SPTLootContainerName.WEAPONBOX5X5, AllTheLoot_Helper_1.SPTLootContainerIndex.WEAPONBOX5X5, jsonData.overwriteSPT_Weaponbox5x5, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(AllTheLoot_Helper_1.SPTLootContainerID.WEAPONBOX5X2, AllTheLoot_Helper_1.SPTLootContainerName.WEAPONBOX5X2, AllTheLoot_Helper_1.SPTLootContainerIndex.WEAPONBOX5X2, jsonData.overwriteSPT_Weaponbox5x2, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(AllTheLoot_Helper_1.SPTLootContainerID.SPORTSBAG01, AllTheLoot_Helper_1.SPTLootContainerName.SPORTSBAG01, AllTheLoot_Helper_1.SPTLootContainerIndex.SPORTSBAG01, jsonData.overwriteSPT_Sportsbag, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(AllTheLoot_Helper_1.SPTLootContainerID.WEAPONBOX6X3, AllTheLoot_Helper_1.SPTLootContainerName.WEAPONBOX6X3, AllTheLoot_Helper_1.SPTLootContainerIndex.WEAPONBOX6X3, jsonData.overwriteSPT_Weaponbox6x3, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(AllTheLoot_Helper_1.SPTLootContainerID.WEAPONBOX4X4, AllTheLoot_Helper_1.SPTLootContainerName.WEAPONBOX4X4, AllTheLoot_Helper_1.SPTLootContainerIndex.WEAPONBOX4X4, jsonData.overwriteSPT_Weaponbox4x4, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(AllTheLoot_Helper_1.SPTLootContainerID.GRENADEBOX, AllTheLoot_Helper_1.SPTLootContainerName.GRENADEBOX, AllTheLoot_Helper_1.SPTLootContainerIndex.GRENADEBOX, jsonData.overwriteSPT_Grenadebox, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(AllTheLoot_Helper_1.SPTLootContainerID.PLASTICSUITCASE, AllTheLoot_Helper_1.SPTLootContainerName.PLASTICSUITCASE, AllTheLoot_Helper_1.SPTLootContainerIndex.PLASTICSUITCASE, jsonData.overwriteSPT_PlasticSuitcase, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(AllTheLoot_Helper_1.SPTLootContainerID.MEDBAGSMU0601, AllTheLoot_Helper_1.SPTLootContainerName.MEDBAGSMU0601, AllTheLoot_Helper_1.SPTLootContainerIndex.MEDBAGSMU0601, jsonData.overwriteSPT_MedbagSMU06, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(AllTheLoot_Helper_1.SPTLootContainerID.WOODENCRATE, AllTheLoot_Helper_1.SPTLootContainerName.WOODENCRATE, AllTheLoot_Helper_1.SPTLootContainerIndex.WOODENCRATE, jsonData.overwriteSPT_WoodenCrate, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(AllTheLoot_Helper_1.SPTLootContainerID.MEDICALSUPPLYCRATE, AllTheLoot_Helper_1.SPTLootContainerName.MEDICALSUPPLYCRATE, AllTheLoot_Helper_1.SPTLootContainerIndex.MEDICALSUPPLYCRATE, jsonData.overwriteSPT_MedicalSupplyCrate, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(AllTheLoot_Helper_1.SPTLootContainerID.TECHNICALSUPPLYCRATE, AllTheLoot_Helper_1.SPTLootContainerName.TECHNICALSUPPLYCRATE, AllTheLoot_Helper_1.SPTLootContainerIndex.TECHNICALSUPPLYCRATE, jsonData.overwriteSPT_TechnicalSupplyCrate, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(AllTheLoot_Helper_1.SPTLootContainerID.DEADSCAV, AllTheLoot_Helper_1.SPTLootContainerName.DEADSCAV, AllTheLoot_Helper_1.SPTLootContainerIndex.DEADSCAV, jsonData.overwriteSPT_DeadScav, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(AllTheLoot_Helper_1.SPTLootContainerID.GROUNDCACHE, AllTheLoot_Helper_1.SPTLootContainerName.GROUNDCACHE, AllTheLoot_Helper_1.SPTLootContainerIndex.GROUNDCACHE, jsonData.overwriteSPT_GroundCache, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(AllTheLoot_Helper_1.SPTLootContainerID.BURRIEDBARRELCACHE, AllTheLoot_Helper_1.SPTLootContainerName.BURRIEDBARRELCACHE, AllTheLoot_Helper_1.SPTLootContainerIndex.BURRIEDBARRELCACHE, jsonData.overwriteSPT_BurriedBarrelCache, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(AllTheLoot_Helper_1.SPTLootContainerID.WOODENAMMOBOX, AllTheLoot_Helper_1.SPTLootContainerName.WOODENAMMOBOX, AllTheLoot_Helper_1.SPTLootContainerIndex.WOODENAMMOBOX, jsonData.overwriteSPT_WoodenAmmobox, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(AllTheLoot_Helper_1.SPTLootContainerID.JACKETDORMS114, AllTheLoot_Helper_1.SPTLootContainerName.JACKETDORMS114, AllTheLoot_Helper_1.SPTLootContainerIndex.JACKETDORMS114, jsonData.overwriteSPT_JacketDorms114, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(AllTheLoot_Helper_1.SPTLootContainerID.JACKETMACHINERYKEY, AllTheLoot_Helper_1.SPTLootContainerName.JACKETMACHINERYKEY, AllTheLoot_Helper_1.SPTLootContainerIndex.JACKETMACHINERYKEY, jsonData.overwriteSPT_JacketMachineryKey, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(AllTheLoot_Helper_1.SPTLootContainerID.RATIONSUPPLYCRATE, AllTheLoot_Helper_1.SPTLootContainerName.RATIONSUPPLYCRATE, AllTheLoot_Helper_1.SPTLootContainerIndex.RATIONSUPPLYCRATE, jsonData.overwriteSPT_RationSupplyCrate, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(AllTheLoot_Helper_1.SPTLootContainerID.JACKETDORMS204, AllTheLoot_Helper_1.SPTLootContainerName.JACKETDORMS204, AllTheLoot_Helper_1.SPTLootContainerIndex.JACKETDORMS204, jsonData.overwriteSPT_JacketDorms204, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(AllTheLoot_Helper_1.SPTLootContainerID.COMMONFUNDSTASH, AllTheLoot_Helper_1.SPTLootContainerName.COMMONFUNDSTASH, AllTheLoot_Helper_1.SPTLootContainerIndex.COMMONFUNDSTASH, jsonData.overwriteSPT_CommonFundStash, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(AllTheLoot_Helper_1.SPTLootContainerID.SPORTSBAG02, AllTheLoot_Helper_1.SPTLootContainerName.SPORTSBAG02, AllTheLoot_Helper_1.SPTLootContainerIndex.SPORTSBAG02, jsonData.overwriteSPT_Sportsbag, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(AllTheLoot_Helper_1.SPTLootContainerID.MEDBAGSMU0602, AllTheLoot_Helper_1.SPTLootContainerName.MEDBAGSMU0602, AllTheLoot_Helper_1.SPTLootContainerIndex.MEDBAGSMU0602, jsonData.overwriteSPT_MedbagSMU06, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(AllTheLoot_Helper_1.SPTLootContainerID.CASHREGISTERTAR, AllTheLoot_Helper_1.SPTLootContainerName.CASHREGISTERTAR, AllTheLoot_Helper_1.SPTLootContainerIndex.CASHREGISTERTAR, jsonData.overwriteSPT_CashRegisterTAR, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(AllTheLoot_Helper_1.SPTLootContainerID.BANKCASHREGISTER, AllTheLoot_Helper_1.SPTLootContainerName.BANKCASHREGISTER, AllTheLoot_Helper_1.SPTLootContainerIndex.BANKCASHREGISTER, jsonData.overwriteSPT_BankCashRegister, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(AllTheLoot_Helper_1.SPTLootContainerID.BANKSAFE, AllTheLoot_Helper_1.SPTLootContainerName.BANKSAFE, AllTheLoot_Helper_1.SPTLootContainerIndex.BANKSAFE, jsonData.overwriteSPT_BankSafe, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(AllTheLoot_Helper_1.SPTLootContainerID.PMCBODY, AllTheLoot_Helper_1.SPTLootContainerName.PMCBODY, AllTheLoot_Helper_1.SPTLootContainerIndex.PMCBODY, jsonData.overwriteSPT_PMCBody, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(AllTheLoot_Helper_1.SPTLootContainerID.DEADCIVILIAN, AllTheLoot_Helper_1.SPTLootContainerName.DEADCIVILIAN, AllTheLoot_Helper_1.SPTLootContainerIndex.DEADCIVILIAN, jsonData.overwriteSPT_DeadCivilian, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(AllTheLoot_Helper_1.SPTLootContainerID.SCAVBODY, AllTheLoot_Helper_1.SPTLootContainerName.SCAVBODY, AllTheLoot_Helper_1.SPTLootContainerIndex.SCAVBODY, jsonData.overwriteSPT_ScavBody, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(AllTheLoot_Helper_1.SPTLootContainerID.LABTECHNICIANBODY, AllTheLoot_Helper_1.SPTLootContainerName.LABTECHNICIANBODY, AllTheLoot_Helper_1.SPTLootContainerIndex.LABTECHNICIANBODY, jsonData.overwriteSPT_LabTechnicianBody, jsonData, assignedItemsData, staticLoot),
    };
    tables.loot.staticLoot = lootRecordsAll;
}
exports.fillContainersWithLoot = fillContainersWithLoot;
//# sourceMappingURL=AllTheLoot_FillContainers.js.map