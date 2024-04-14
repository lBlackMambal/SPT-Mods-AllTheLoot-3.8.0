import { DependencyContainer } from "tsyringe";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";

import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";
import { StaticRouterModService } from "@spt-aki/services/mod/staticRouter/StaticRouterModService";

import { allTheLoot } from "./AllTheLoot_Main";

import config from "../../Config/config.json";

import { ConfigServer } from "@spt-aki/servers/ConfigServer";



export const AllTheLoot_Update = (
    container: DependencyContainer
): undefined => {
    const staticRouterModService = container.resolve<StaticRouterModService>("StaticRouterModService");

    staticRouterModService.registerStaticRouter("AllTheLootUpdateSpawnRates", [{
        url: "/client/match/offline/end",
        action: (_url, info, _sessionId, output) => {
            allTheLoot.updateSpawnRates();
            return output
        }
    }], "aki");

}


export const AllTheLoot_Init = (
    container: DependencyContainer
) => {
    allTheLoot.tables = container.resolve<DatabaseServer>("DatabaseServer").getTables();
    allTheLoot.configServer = container.resolve<ConfigServer>("ConfigServer");
    allTheLoot.Logger = container.resolve<ILogger>("WinstonLogger");

    allTheLoot.readHandbook();
    allTheLoot.updateSpawnRates();
}
