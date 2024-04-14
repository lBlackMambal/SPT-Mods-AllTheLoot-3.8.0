import { IStaticLootDetails } from "@spt-aki/models/eft/common/tables/ILootBase";
import { IAllTheLootItem, SPTLootContainerID, SPTLootContainerIndex, SPTLootContainerName } from "../AllTheLoot/AllTheLoot_Helper";

import * as path from "path";
import * as fs from "fs";



function generateContainerStructure(containerId: SPTLootContainerID, containerName: SPTLootContainerName, containerIndex: SPTLootContainerIndex, overwriteSPTContainer: boolean, jsonData: any, assignedItemsData: any, staticLoot: any): any
{
    if (overwriteSPTContainer)
    {
        return {
            [containerId]: {
                itemcountDistribution: jsonData[`itemsDistribution_${containerName}`].map(Number).map((count: number, index: number) => ({
                    count,
                    relativeProbability: jsonData[`itemsDistributionProbabilities_${containerName}`].map(Number)[index] || 1,
                })),
                itemDistribution: assignedItemsData[containerIndex].map((item: any) => ({
                    tpl: item.itemId,
                    relativeProbability: item.itemSpawnrate || 1,
                })),
            },
        };
    }
    else
    {
        return {
            [containerId]: {
                itemcountDistribution: staticLoot[containerId].itemcountDistribution,
                itemDistribution: staticLoot[containerId].itemDistribution,
            },
        };
    }
}


export function fillContainersWithLoot(tables : any, assignedItemsData : IAllTheLootItem[][]): void
{
    const staticLoot = tables.loot.staticLoot;

    const scriptDirectory = __dirname;
    const configFilePath = path.join(scriptDirectory, '../../Config/config_Containers_ID.json');
    const fileContents = fs.readFileSync(configFilePath, "utf-8");
    const jsonData = JSON.parse(fileContents);

    const lootRecordsAll: Record<string, IStaticLootDetails> = {
        ...generateContainerStructure(SPTLootContainerID.DRAWER, SPTLootContainerName.DRAWER, SPTLootContainerIndex.DRAWER, jsonData.overwriteSPT_Drawer, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(SPTLootContainerID.CASHREGISTER, SPTLootContainerName.CASHREGISTER, SPTLootContainerIndex.CASHREGISTER, jsonData.overwriteSPT_CashRegister, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(SPTLootContainerID.PCBLOCK, SPTLootContainerName.PCBLOCK, SPTLootContainerIndex.PCBLOCK,jsonData.overwriteSPT_PCBlock, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(SPTLootContainerID.JACKET, SPTLootContainerName.JACKET, SPTLootContainerIndex.JACKET, jsonData.overwriteSPT_Jacket, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(SPTLootContainerID.TOOLBOX, SPTLootContainerName.TOOLBOX, SPTLootContainerIndex.TOOLBOX, jsonData.overwriteSPT_Toolbox, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(SPTLootContainerID.MEDCASE, SPTLootContainerName.MEDCASE, SPTLootContainerIndex.MEDCASE, jsonData.overwriteSPT_Medcase, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(SPTLootContainerID.SAFE, SPTLootContainerName.SAFE, SPTLootContainerIndex.SAFE, jsonData.overwriteSPT_Safe, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(SPTLootContainerID.WEAPONBOX5X5, SPTLootContainerName.WEAPONBOX5X5, SPTLootContainerIndex.WEAPONBOX5X5, jsonData.overwriteSPT_Weaponbox5x5, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(SPTLootContainerID.WEAPONBOX5X2, SPTLootContainerName.WEAPONBOX5X2, SPTLootContainerIndex.WEAPONBOX5X2, jsonData.overwriteSPT_Weaponbox5x2, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(SPTLootContainerID.SPORTSBAG01, SPTLootContainerName.SPORTSBAG01, SPTLootContainerIndex.SPORTSBAG01, jsonData.overwriteSPT_Sportsbag, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(SPTLootContainerID.WEAPONBOX6X3, SPTLootContainerName.WEAPONBOX6X3, SPTLootContainerIndex.WEAPONBOX6X3, jsonData.overwriteSPT_Weaponbox6x3, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(SPTLootContainerID.WEAPONBOX4X4, SPTLootContainerName.WEAPONBOX4X4, SPTLootContainerIndex.WEAPONBOX4X4, jsonData.overwriteSPT_Weaponbox4x4, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(SPTLootContainerID.GRENADEBOX, SPTLootContainerName.GRENADEBOX, SPTLootContainerIndex.GRENADEBOX, jsonData.overwriteSPT_Grenadebox, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(SPTLootContainerID.PLASTICSUITCASE, SPTLootContainerName.PLASTICSUITCASE, SPTLootContainerIndex.PLASTICSUITCASE, jsonData.overwriteSPT_PlasticSuitcase, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(SPTLootContainerID.MEDBAGSMU0601, SPTLootContainerName.MEDBAGSMU0601, SPTLootContainerIndex.MEDBAGSMU0601, jsonData.overwriteSPT_MedbagSMU06, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(SPTLootContainerID.WOODENCRATE, SPTLootContainerName.WOODENCRATE, SPTLootContainerIndex.WOODENCRATE, jsonData.overwriteSPT_WoodenCrate, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(SPTLootContainerID.MEDICALSUPPLYCRATE, SPTLootContainerName.MEDICALSUPPLYCRATE, SPTLootContainerIndex.MEDICALSUPPLYCRATE, jsonData.overwriteSPT_MedicalSupplyCrate, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(SPTLootContainerID.TECHNICALSUPPLYCRATE, SPTLootContainerName.TECHNICALSUPPLYCRATE, SPTLootContainerIndex.TECHNICALSUPPLYCRATE, jsonData.overwriteSPT_TechnicalSupplyCrate, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(SPTLootContainerID.DEADSCAV, SPTLootContainerName.DEADSCAV, SPTLootContainerIndex.DEADSCAV, jsonData.overwriteSPT_DeadScav, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(SPTLootContainerID.GROUNDCACHE, SPTLootContainerName.GROUNDCACHE, SPTLootContainerIndex.GROUNDCACHE, jsonData.overwriteSPT_GroundCache, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(SPTLootContainerID.BURRIEDBARRELCACHE, SPTLootContainerName.BURRIEDBARRELCACHE, SPTLootContainerIndex.BURRIEDBARRELCACHE, jsonData.overwriteSPT_BurriedBarrelCache, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(SPTLootContainerID.WOODENAMMOBOX, SPTLootContainerName.WOODENAMMOBOX, SPTLootContainerIndex.WOODENAMMOBOX, jsonData.overwriteSPT_WoodenAmmobox, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(SPTLootContainerID.JACKETDORMS114, SPTLootContainerName.JACKETDORMS114, SPTLootContainerIndex.JACKETDORMS114, jsonData.overwriteSPT_JacketDorms114, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(SPTLootContainerID.JACKETMACHINERYKEY, SPTLootContainerName.JACKETMACHINERYKEY, SPTLootContainerIndex.JACKETMACHINERYKEY, jsonData.overwriteSPT_JacketMachineryKey, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(SPTLootContainerID.RATIONSUPPLYCRATE, SPTLootContainerName.RATIONSUPPLYCRATE, SPTLootContainerIndex.RATIONSUPPLYCRATE, jsonData.overwriteSPT_RationSupplyCrate, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(SPTLootContainerID.JACKETDORMS204, SPTLootContainerName.JACKETDORMS204, SPTLootContainerIndex.JACKETDORMS204, jsonData.overwriteSPT_JacketDorms204, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(SPTLootContainerID.COMMONFUNDSTASH, SPTLootContainerName.COMMONFUNDSTASH, SPTLootContainerIndex.COMMONFUNDSTASH, jsonData.overwriteSPT_CommonFundStash, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(SPTLootContainerID.SPORTSBAG02, SPTLootContainerName.SPORTSBAG02, SPTLootContainerIndex.SPORTSBAG02, jsonData.overwriteSPT_Sportsbag, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(SPTLootContainerID.MEDBAGSMU0602, SPTLootContainerName.MEDBAGSMU0602, SPTLootContainerIndex.MEDBAGSMU0602, jsonData.overwriteSPT_MedbagSMU06, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(SPTLootContainerID.CASHREGISTERTAR, SPTLootContainerName.CASHREGISTERTAR, SPTLootContainerIndex.CASHREGISTERTAR, jsonData.overwriteSPT_CashRegisterTAR, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(SPTLootContainerID.BANKCASHREGISTER, SPTLootContainerName.BANKCASHREGISTER, SPTLootContainerIndex.BANKCASHREGISTER, jsonData.overwriteSPT_BankCashRegister, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(SPTLootContainerID.BANKSAFE, SPTLootContainerName.BANKSAFE, SPTLootContainerIndex.BANKSAFE, jsonData.overwriteSPT_BankSafe, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(SPTLootContainerID.PMCBODY, SPTLootContainerName.PMCBODY, SPTLootContainerIndex.PMCBODY, jsonData.overwriteSPT_PMCBody, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(SPTLootContainerID.DEADCIVILIAN, SPTLootContainerName.DEADCIVILIAN, SPTLootContainerIndex.DEADCIVILIAN, jsonData.overwriteSPT_DeadCivilian, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(SPTLootContainerID.SCAVBODY, SPTLootContainerName.SCAVBODY, SPTLootContainerIndex.SCAVBODY, jsonData.overwriteSPT_ScavBody, jsonData, assignedItemsData, staticLoot),
        ...generateContainerStructure(SPTLootContainerID.LABTECHNICIANBODY, SPTLootContainerName.LABTECHNICIANBODY, SPTLootContainerIndex.LABTECHNICIANBODY, jsonData.overwriteSPT_LabTechnicianBody, jsonData, assignedItemsData, staticLoot),
    }

    tables.loot.staticLoot = lootRecordsAll;

}
