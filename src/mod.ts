import { DependencyContainer } from "tsyringe";

import { IPreAkiLoadMod } from "@spt-aki/models/external/IPreAkiLoadMod";
import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";

import { AllTheLoot_Init, AllTheLoot_Update } from "./AllTheLoot/AllTheLoot_Init";



class AllTheLoot implements IPreAkiLoadMod, IPostDBLoadMod
{
    preAkiLoad(container: DependencyContainer): void {
        AllTheLoot_Update(container)
    }
    postDBLoad(container: DependencyContainer): void {
        AllTheLoot_Init(container)
    }    
}

module.exports = { mod: new AllTheLoot() }
