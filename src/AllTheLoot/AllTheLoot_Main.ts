import { IDatabaseTables } from "@spt-aki/models/spt/server/IDatabaseTables";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";

import { IStaticAmmoDetails } from "@spt-aki/models/eft/common/tables/ILootBase";
import { IAllTheLootItem, SPTLootCategoryName, SPTLootContainerIndex, getContainerName, mapParentIdToCategoryName, mapContainerIndexToContainerName, selectedCategories } from "../AllTheLoot/AllTheLoot_Helper";
import { fillContainersWithLoot } from "./AllTheLoot_FillContainers";

import config from "../../Config/config.json";
import config_Blacklisting from "../../Config/config_Blacklisting_ID.json";
import config_Containers from "../../Config/config_Containers_ID.json";
import config_FavoriteItems from "../../Config/config_FavoriteItems_ID.json";
import config_QuestItems from "../../Config/config_QuestItems_ID.json";
import config_CategorySpawnrates from "../../Config/config_CategorySpawnrates.json";
import config_SelectedItems from "../../Config/config_SelectedItems_ID.json";

import { ConfigServer } from "@spt-aki/servers/ConfigServer";
import { ConfigTypes } from "@spt-aki/models/enums/ConfigTypes";
import { ILocationConfig } from "@spt-aki/models/spt/config/ILocationConfig";



export class allTheLoot {

    public static tables: IDatabaseTables;
    public static Logger: ILogger;

    public static config = config;
    public static config_Blacklisting = config_Blacklisting;
    public static config_Containers = config_Containers;
    public static config_FavoriteItems = config_FavoriteItems;
    public static config_QuestItems = config_QuestItems;
    public static config_CategorySpawnrates = config_CategorySpawnrates;
    public static config_SelectedItems = config_SelectedItems;

    public static staticAmmo: Record<string, IStaticAmmoDetails[]> = {};
                                 // caliber | ammo ID, spawn rate

    public static initialItems: IAllTheLootItem[] = [];
    public static lootItems: IAllTheLootItem[] = [];

    public static amountOfQuestItems: number = 0;
    public static amountOfBlacklistedItems: number = 0;
    public static pluginInitialized : boolean = false;

    public static configServer: ConfigServer;


    public static containerIndexDebug: SPTLootContainerIndex = config.debugMode_containerIndex;

    public static containerTypeDrawer: IAllTheLootItem[] = [];
    public static containerTypeCashRegister: IAllTheLootItem[] = [];
    public static containerTypePCBlock: IAllTheLootItem[] = [];
    public static containerTypeJacket: IAllTheLootItem[] = [];
    public static containerTypeToolbox: IAllTheLootItem[] = [];
    public static containerTypeMedcase: IAllTheLootItem[] = [];
    public static containerTypeSafe: IAllTheLootItem[] = [];
    public static containerTypeWeaponbox5x5: IAllTheLootItem[] = [];
    public static containerTypeWeaponbox5x2: IAllTheLootItem[] = [];
    public static containerTypeSportsbag01: IAllTheLootItem[] = [];
    public static containerTypeWeaponbox6x3: IAllTheLootItem[] = [];
    public static containerTypeWeaponbox4x4: IAllTheLootItem[] = [];
    public static containerTypeGrenadebox: IAllTheLootItem[] = [];
    public static containerTypePlasticSuitcase: IAllTheLootItem[] = [];
    public static containerTypeMedbagSMU0601: IAllTheLootItem[] = [];
    public static containerTypeWoodenCrate: IAllTheLootItem[] = [];
    public static containerTypeMedicalSupplyCrate: IAllTheLootItem[] = [];
    public static containerTypeTechnicalSupplyCrate: IAllTheLootItem[] = [];
    public static containerTypeDeadScav: IAllTheLootItem[] = [];
    public static containerTypeGroundCache: IAllTheLootItem[] = [];
    public static containerTypeBurriedBarrelCache: IAllTheLootItem[] = [];
    public static containerTypeWoodenAmmobox: IAllTheLootItem[] = [];
    public static containerTypeJacketDorms114: IAllTheLootItem[] = [];
    public static containerTypeJacketMachineryKey: IAllTheLootItem[] = [];
    public static containerTypeRationSupplyCrate: IAllTheLootItem[] = [];
    public static containerTypeJacketDorms204: IAllTheLootItem[] = [];
    public static containerTypeCommonFundStash: IAllTheLootItem[] = [];
    public static containerTypeSportsbag02: IAllTheLootItem[] = [];
    public static containerTypeMedbagSMU0602: IAllTheLootItem[] = [];
    public static containerTypeCashRegisterTAR: IAllTheLootItem[] = [];
    public static containerTypeBankCashRegister: IAllTheLootItem[] = [];
    public static containerTypeBankSafe: IAllTheLootItem[] = [];

    // 3.8.0
    public static containerTypePMCBody: IAllTheLootItem[] = [];
    public static containerTypDeadCivilian: IAllTheLootItem[] = [];
    public static containerTypeScavBody: IAllTheLootItem[] = [];
    public static containerTypeLabTechnicianBody: IAllTheLootItem[] = [];




    public static allItemsAssignedToContainers: IAllTheLootItem[][] = [
        this.containerTypeDrawer,
        this.containerTypeCashRegister,
        this.containerTypePCBlock,
        this.containerTypeJacket,
        this.containerTypeToolbox,
        this.containerTypeMedcase,
        this.containerTypeSafe,
        this.containerTypeWeaponbox5x5,
        this.containerTypeWeaponbox5x2,
        this.containerTypeSportsbag01,
        this.containerTypeWeaponbox6x3,
        this.containerTypeWeaponbox4x4,
        this.containerTypeGrenadebox,
        this.containerTypePlasticSuitcase,
        this.containerTypeMedbagSMU0601,
        this.containerTypeWoodenCrate,
        this.containerTypeMedicalSupplyCrate,
        this.containerTypeTechnicalSupplyCrate,
        this.containerTypeDeadScav,
        this.containerTypeGroundCache,
        this.containerTypeBurriedBarrelCache,
        this.containerTypeWoodenAmmobox,
        this.containerTypeJacketDorms114,
        this.containerTypeJacketMachineryKey,
        this.containerTypeRationSupplyCrate,
        this.containerTypeJacketDorms204,
        this.containerTypeCommonFundStash,
        this.containerTypeSportsbag02,
        this.containerTypeMedbagSMU0602,
        this.containerTypeCashRegisterTAR,
        this.containerTypeBankCashRegister,
        this.containerTypeBankSafe,
        this.containerTypePMCBody,
        this.containerTypDeadCivilian,
        this.containerTypeScavBody,
        this.containerTypeLabTechnicianBody
    ];


    public static readHandbook()
    {
        const handbookItems = Object.values(this.tables.templates.handbook)[1];
        const local = this.tables.locales.global.en;
        const itemsSPT = this.tables.templates.items;
        this.amountOfBlacklistedItems = 0;

        this.Logger.warning("AllTheLoot v1.0.6 initialized");

        for (let i=0; i<handbookItems.length; i++)
        {
            const currentParent = mapParentIdToCategoryName(handbookItems[i].ParentId);
            const currentName = local[`${handbookItems[i].Id} Name`];
            const currentHeight = itemsSPT[handbookItems[i].Id]._props.Height;
            const currentWidth = itemsSPT[handbookItems[i].Id]._props.Width;

            let isFavoriteItem: boolean = false;
            let isQuestItem: boolean = false;
            if (config.favoriteItems)
                isFavoriteItem = this.config_FavoriteItems.favoriteItems.includes(handbookItems[i].Id);
            if (config.questItems)
                isQuestItem = this.config_QuestItems.questItems.includes(handbookItems[i].Id);

            const isCustomAdded = false;


            if (currentParent === SPTLootCategoryName.QUEST)
                continue;

            // apply global blacklist
            if (config_Blacklisting.blacklistedItems_Global.includes(handbookItems[i].Id))
            {
                this.amountOfBlacklistedItems++;
                continue;
            }

            // if equal spawn rate for all items is active, check if pouches should be included or excluded
            if (currentParent === SPTLootCategoryName.GEAR_SECURECONTAINERS && config.equalSpawnratesForAllItems && config.equalSpawnratesForAllItemsExcludePouches)
                continue;
            
            const newItem: IAllTheLootItem = {
                itemId: handbookItems[i].Id,
                itemLootCategory: currentParent,
                itemName: currentName,
                itemPrice: handbookItems[i].Price,
                itemSpawnrate: 1,
                itemHeight: currentHeight,
                itemWidth: currentWidth,
                itemFavorite: isFavoriteItem,
                itemQuest: isQuestItem,
                itemCustomAdded: isCustomAdded,
            }

            this.lootItems.push(newItem);                   // array for debug purposes
            this.assignItemsToContainerTypes(newItem);      // put each item into one or multiple containers
        }

        let initialAmountOfItems = this.lootItems.length + this.amountOfBlacklistedItems;
        this.Logger.warning("Global blacklisting removed " + this.amountOfBlacklistedItems + " items from initially " + initialAmountOfItems + " handbook items");

        if (config.showItemListing)
        {
            this.Logger.warning("Overview of all available " + this.lootItems.length + " handbook items: ");
            this.lootItems.forEach(element => {
                this.Logger.warning(element.itemName + " || ID: " + element.itemId + " || Price: " + element.itemPrice);
            });
        }

        // create new staticAmmo database (necessary to include custom ammo types)
        this.tables.loot.staticAmmo = this.staticAmmo;
    }


    public static updateSpawnRates()
    {
        const tables = this.tables;

        // container based blacklisting
        this.applyContainerBlacklisting();

        // adjust containers with value based item assignment (Weaponbox 5x5, Weaponbox 6x3, Common Fund Stash)
        this.adjustValueBasedContainers();

        if (!this.config.equalSpawnratesForAllItems)
        {
            // main spawn rate calculation
            this.adjustInitialSpawnrates();

            // take into account the amount of items per category per container
            this.applyNormalizedWeighting();

            // consider category multipliers, jacket key multiplier, single item multipliers (defined by user), equal spawn rates in JacketDorms114 container and favorite items
            this.spawnRateFinalAdjustment();                                                                 
        }

        // assign final set of items to containers
        fillContainersWithLoot(tables, this.allItemsAssignedToContainers);
        
        // finally remove backpack restrictions - so you won't burst into tears once a T.H.I.C.C. item case pops up :-)
        const backpacks = tables.templates.items;
        this.lootItems.forEach(element => {
            if (element.itemLootCategory === SPTLootCategoryName.GEAR_BACKPACKS)
                backpacks[element.itemId]._props.Grids[0]._props.filters = [];
        });

        // and (if false in config) allow only one instance of a loot item spawn per container
        if (!this.config.allowDuplicates)
        {
            const lootConfig = this.configServer.getConfig<ILocationConfig>(ConfigTypes.LOCATION);
            lootConfig.allowDuplicateItemsInStaticContainers = false;
        }
               

        if (config.debugMode_showContainerInfo && !this.pluginInitialized)
        {
            this.Logger.warning("Items in container ||" + getContainerName(this.containerIndexDebug) + "||: " + this.allItemsAssignedToContainers[this.containerIndexDebug].length);
            for (let i=0; i<this.allItemsAssignedToContainers[this.containerIndexDebug].length; i++)
            {
                const tmpId = this.allItemsAssignedToContainers[this.containerIndexDebug][i].itemId;
                const tmpName = this.allItemsAssignedToContainers[this.containerIndexDebug][i].itemName;
                const tmpSpawnRate = this.allItemsAssignedToContainers[this.containerIndexDebug][i].itemSpawnrate;
                this.Logger.info(tmpName + " " + tmpSpawnRate);
            }
        }


        tables.loot.staticAmmo = this.staticAmmo;

        if (this.config.debugMode_ShowAmmoCalibers && !this.pluginInitialized)
        {
            let counterAmmoCalibers = 0;
            for (const caliber in this.staticAmmo)
                counterAmmoCalibers++;

            this.Logger.info("AllTheLoot registered " + counterAmmoCalibers + " different ammo calibers:");
            
            for (const caliber in this.staticAmmo)
                this.Logger.warning(caliber);
        }

        // Shuffle arrays to get even more randomness
        if (config.shuffleArrays)
        {
            this.allItemsAssignedToContainers.forEach((container, index) => {
                this.shuffleArray(container);
            });
        }

        if (!this.pluginInitialized)
            this.Logger.warning("AllTheLoot assigned " + this.lootItems.length + " items to " + this.allItemsAssignedToContainers.length + " available loot containers");

        this.pluginInitialized = true;
    }


    public static applyContainerBlacklisting()
    {
        if (config.debugMode_showContainerInfo && !this.pluginInitialized)
            this.Logger.info("Available items for container ||" + getContainerName(this.containerIndexDebug) + "||: " + this.allItemsAssignedToContainers[this.containerIndexDebug].length.toString());

        for (let i=0; i<this.allItemsAssignedToContainers.length; i++)
        {
            this.allItemsAssignedToContainers[i] = this.allItemsAssignedToContainers[i].filter(item => !config_Blacklisting["blacklistedItems_" + mapContainerIndexToContainerName(i)].includes(item.itemId));
        }

        if (config.debugMode_showContainerInfo && !this.pluginInitialized)
        {
            this.Logger.info("Remaining items after blacklisting in container ||" + getContainerName(this.containerIndexDebug) + "||: " + this.allItemsAssignedToContainers[this.containerIndexDebug].length.toString());
        }            
    }

  
    public static adjustValueBasedContainers()
    {
        if (config_Containers.highTierContainerAssignmentBySlotValue)          // Item assignment based on single slot value (weapons, body armor, tactical rigs and favorite Items based on config settings)
        {
            // adjust Weaponbox 5x5
            this.allItemsAssignedToContainers[SPTLootContainerIndex.WEAPONBOX5X5] = this.allItemsAssignedToContainers[SPTLootContainerIndex.WEAPONBOX5X5].filter(item => {
                return (
                    (
                        (item.itemPrice / (item.itemHeight * item.itemWidth)) > config_Containers.container_WeaponBox5x5_MinValuePerSlot &&
                        (item.itemPrice / (item.itemHeight * item.itemWidth)) < config_Containers.container_WeaponBox5x5_MaxValuePerSlot
                    ) ||
                    (
                        config_Containers.slotOption_alwaysInclude_Weapons &&
                        (
                            (item.itemLootCategory === SPTLootCategoryName.WEAPONS_ASSAULTCARBINES ||
                            item.itemLootCategory === SPTLootCategoryName.WEAPONS_ASSAULTRIFLES ||
                            item.itemLootCategory === SPTLootCategoryName.WEAPONS_BOLTACTIONRIFLES ||
                            item.itemLootCategory === SPTLootCategoryName.WEAPONS_GRENADELAUNCHERS ||
                            item.itemLootCategory === SPTLootCategoryName.WEAPONS_MACHINEGUNS ||
                            item.itemLootCategory === SPTLootCategoryName.WEAPONS_MARKSMANRIFLES ||
                            item.itemLootCategory === SPTLootCategoryName.WEAPONS_SMGS ||
                            item.itemLootCategory === SPTLootCategoryName.WEAPONS_SHOTGUNS ||
                            item.itemLootCategory === SPTLootCategoryName.WEAPONS_PISTOLS) && (item.itemPrice > config_Containers.container_WeaponBox5x5_MinValuePerSlot && item.itemPrice < config_Containers.container_WeaponBox5x5_MaxValuePerSlot)
                        )
                    ) ||
                    (
                        config_Containers.slotOption_alwaysInclude_BodyArmor &&
                        (
                            item.itemLootCategory === SPTLootCategoryName.GEAR_BODYARMOR && (item.itemPrice > config_Containers.container_WeaponBox5x5_MinValuePerSlot && item.itemPrice < config_Containers.container_WeaponBox5x5_MaxValuePerSlot)
                        )
                    ) ||
                    (
                        config_Containers.slotOption_alwaysInclude_TacticalRigs &&
                        (
                            item.itemLootCategory === SPTLootCategoryName.GEAR_TACTICALRIGS && (item.itemPrice > config_Containers.container_WeaponBox5x5_MinValuePerSlot && item.itemPrice < config_Containers.container_WeaponBox5x5_MaxValuePerSlot)
                        )
                    ) ||
                    (
                        item.itemFavorite
                    )
                );
            });
            // adjust Weaponbox 6x3
            this.allItemsAssignedToContainers[SPTLootContainerIndex.WEAPONBOX6X3] = this.allItemsAssignedToContainers[SPTLootContainerIndex.WEAPONBOX6X3].filter(item => {
                return (
                    (
                        (item.itemPrice / (item.itemHeight * item.itemWidth)) > config_Containers.container_WeaponBox6x3_MinValuePerSlot &&
                        (item.itemPrice / (item.itemHeight * item.itemWidth)) < config_Containers.container_WeaponBox6x3_MaxValuePerSlot
                    ) ||
                    (
                        config_Containers.slotOption_alwaysInclude_Weapons &&
                        (
                            (item.itemLootCategory === SPTLootCategoryName.WEAPONS_ASSAULTCARBINES ||
                            item.itemLootCategory === SPTLootCategoryName.WEAPONS_ASSAULTRIFLES ||
                            item.itemLootCategory === SPTLootCategoryName.WEAPONS_BOLTACTIONRIFLES ||
                            item.itemLootCategory === SPTLootCategoryName.WEAPONS_GRENADELAUNCHERS ||
                            item.itemLootCategory === SPTLootCategoryName.WEAPONS_MACHINEGUNS ||
                            item.itemLootCategory === SPTLootCategoryName.WEAPONS_MARKSMANRIFLES ||
                            item.itemLootCategory === SPTLootCategoryName.WEAPONS_SMGS ||
                            item.itemLootCategory === SPTLootCategoryName.WEAPONS_SHOTGUNS ||
                            item.itemLootCategory === SPTLootCategoryName.WEAPONS_PISTOLS) && (item.itemPrice > config_Containers.container_WeaponBox6x3_MinValuePerSlot && item.itemPrice < config_Containers.container_WeaponBox6x3_MaxValuePerSlot)
                        )
                    ) ||
                    (
                        config_Containers.slotOption_alwaysInclude_BodyArmor &&
                        (
                            item.itemLootCategory === SPTLootCategoryName.GEAR_BODYARMOR && (item.itemPrice > config_Containers.container_WeaponBox6x3_MinValuePerSlot && item.itemPrice < config_Containers.container_WeaponBox6x3_MaxValuePerSlot)
                        )
                    ) ||
                    (
                        config_Containers.slotOption_alwaysInclude_TacticalRigs &&
                        (
                            item.itemLootCategory === SPTLootCategoryName.GEAR_TACTICALRIGS && (item.itemPrice > config_Containers.container_WeaponBox6x3_MinValuePerSlot && item.itemPrice < config_Containers.container_WeaponBox6x3_MaxValuePerSlot)
                        )
                    ) ||
                    (
                        item.itemFavorite
                    )
                );
            });
            // adjust Common Fund Stash
            this.allItemsAssignedToContainers[SPTLootContainerIndex.COMMONFUNDSTASH] = this.allItemsAssignedToContainers[SPTLootContainerIndex.COMMONFUNDSTASH].filter(item => {
                return (
                    (
                        (item.itemPrice / (item.itemHeight * item.itemWidth)) > config_Containers.container_CommonFundStash_MinValuePerSlot &&
                        (item.itemPrice / (item.itemHeight * item.itemWidth)) < config_Containers.container_CommonFundStash_MaxValuePerSlot
                    ) ||
                    (
                        config_Containers.slotOption_alwaysInclude_Weapons &&
                        (
                            (item.itemLootCategory === SPTLootCategoryName.WEAPONS_ASSAULTCARBINES ||
                            item.itemLootCategory === SPTLootCategoryName.WEAPONS_ASSAULTRIFLES ||
                            item.itemLootCategory === SPTLootCategoryName.WEAPONS_BOLTACTIONRIFLES ||
                            item.itemLootCategory === SPTLootCategoryName.WEAPONS_GRENADELAUNCHERS ||
                            item.itemLootCategory === SPTLootCategoryName.WEAPONS_MACHINEGUNS ||
                            item.itemLootCategory === SPTLootCategoryName.WEAPONS_MARKSMANRIFLES ||
                            item.itemLootCategory === SPTLootCategoryName.WEAPONS_SMGS ||
                            item.itemLootCategory === SPTLootCategoryName.WEAPONS_SHOTGUNS ||
                            item.itemLootCategory === SPTLootCategoryName.WEAPONS_PISTOLS) && (item.itemPrice > config_Containers.slotOption_alwaysInclude_Weapons_MinValue)
                        )
                    ) ||
                    (
                        config_Containers.slotOption_alwaysInclude_BodyArmor && 
                        (
                            item.itemLootCategory === SPTLootCategoryName.GEAR_BODYARMOR && (item.itemPrice > config_Containers.slotOption_alwaysInclude_BodyArmor_MinValue)
                        )
                    ) ||
                    (
                        config_Containers.slotOption_alwaysInclude_TacticalRigs &&
                        (
                            item.itemLootCategory === SPTLootCategoryName.GEAR_TACTICALRIGS && (item.itemPrice > config_Containers.slotOption_alwaysInclude_TacticalRigs_MinValue)
                        )
                    )
                );
            });
        }
        else        // Item assignment solely based on item value
        {
            // adjust Weaponbox 5x5
            this.allItemsAssignedToContainers[SPTLootContainerIndex.WEAPONBOX5X5] = this.allItemsAssignedToContainers[SPTLootContainerIndex.WEAPONBOX5X5].filter(item => {
                return ((item.itemPrice > config_Containers.container_WeaponBox5x5_MinValuePerItem && item.itemPrice < config_Containers.container_WeaponBox5x5_MaxValuePerItem) || item.itemFavorite);
            });
            // adjust Weaponbox 6x3
            this.allItemsAssignedToContainers[SPTLootContainerIndex.WEAPONBOX6X3] = this.allItemsAssignedToContainers[SPTLootContainerIndex.WEAPONBOX6X3].filter(item => {
                return ((item.itemPrice > config_Containers.container_WeaponBox6x3_MinValuePerItem && item.itemPrice < config_Containers.container_WeaponBox6x3_MaxValuePerItem) || item.itemFavorite);
            });
            // adjust Common Fund Stash
            this.allItemsAssignedToContainers[SPTLootContainerIndex.COMMONFUNDSTASH] = this.allItemsAssignedToContainers[SPTLootContainerIndex.COMMONFUNDSTASH].filter(item => {
                return ((item.itemPrice > config_Containers.container_CommonFundStash_MinValuePerItem && item.itemPrice < config_Containers.container_CommonFundStash_MaxValuePerItem) || item.itemFavorite);
            });
        }
    } 


    public static adjustInitialSpawnrates()
    {
        const initSpawnrate_Tier7 = config.initSpawnrate_Tier7;
        const initSpawnrate_Tier6 = config.initSpawnrate_Tier6;
        const initSpawnrate_Tier5 = config.initSpawnrate_Tier5;
        const initSpawnrate_Tier4 = config.initSpawnrate_Tier4;
        const initSpawnrate_Tier3 = config.initSpawnrate_Tier3;
        const initSpawnrate_Tier2 = config.initSpawnrate_Tier2;
        const initSpawnrate_Tier1 = config.initSpawnrate_Tier1;

        const randomize = config.randomizerActive;

        const rndPercentage_Tier7 = config.randomizerPercentage_Tier7;
        const rndPercentage_Tier6 = config.randomizerPercentage_Tier6;
        const rndPercentage_Tier5 = config.randomizerPercentage_Tier5;
        const rndPercentage_Tier4 = config.randomizerPercentage_Tier4;
        const rndPercentage_Tier3 = config.randomizerPercentage_Tier3;
        const rndPercentage_Tier2 = config.randomizerPercentage_Tier2;
        const rndPercentage_Tier1 = config.randomizerPercentage_Tier1;
        

        this.allItemsAssignedToContainers.forEach(container => {
            container.forEach(element => {
                if (element.itemPrice < 2000 && (selectedCategories.includes(element.itemLootCategory)))
                    element.itemSpawnrate = Math.floor((randomize ? ((1 - rndPercentage_Tier6)  + rndPercentage_Tier6 * Math.random()) : 1) * initSpawnrate_Tier6);
                else if (element.itemPrice < 2000 && (!selectedCategories.includes(element.itemLootCategory)))
                    element.itemSpawnrate = Math.floor((randomize ? ((1 - rndPercentage_Tier7)  + rndPercentage_Tier7 * Math.random()) : 1) * initSpawnrate_Tier7);
                else if (element.itemPrice >= 2000 && element.itemPrice < 20000)
                    element.itemSpawnrate = Math.floor((randomize ? ((1 - rndPercentage_Tier6)  + rndPercentage_Tier6 * Math.random()) : 1) * initSpawnrate_Tier6);
                else if (element.itemPrice >= 20000 && element.itemPrice < 50000)
                    element.itemSpawnrate = Math.floor((randomize ? ((1 - rndPercentage_Tier5)  + rndPercentage_Tier5 * Math.random()) : 1) * initSpawnrate_Tier5);
                else if (element.itemPrice >= 50000 && element.itemPrice < 100000)
                    element.itemSpawnrate = Math.floor((randomize ? ((1 - rndPercentage_Tier4)  + rndPercentage_Tier4 * Math.random()) : 1) * initSpawnrate_Tier4);
                else if (element.itemPrice >= 100000 && element.itemPrice < 400000)
                    element.itemSpawnrate = Math.floor((randomize ? ((1 - rndPercentage_Tier3)  + rndPercentage_Tier3 * Math.random()) : 1) * initSpawnrate_Tier3);
                else if (element.itemPrice >= 400000 && element.itemPrice < 1000000)
                    element.itemSpawnrate = Math.floor((randomize ? ((1 - rndPercentage_Tier2)  + rndPercentage_Tier2 * Math.random()) : 1) * initSpawnrate_Tier2);
                else if (element.itemPrice >= 1000000)
                    element.itemSpawnrate = Math.floor((randomize ? ((1 - rndPercentage_Tier1)  + rndPercentage_Tier1 * Math.random()) : 1) * initSpawnrate_Tier1);
                else
                    element.itemSpawnrate = initSpawnrate_Tier6;
            });
        })
    }


    public static applyNormalizedWeighting()
    {
        // loop over each container
        this.allItemsAssignedToContainers.forEach((container, index) => {
            
            const itemsByCategory = {};
            let categoriesInContainer = [];
 
            // get categories available in each container
            container.forEach(item => {
                // check if lootCategory is already covered in iterator
                if (!categoriesInContainer.includes(item.itemLootCategory))
                    categoriesInContainer.push(item.itemLootCategory);
            });

            if (config.debugMode_showContainerInfo && index == this.containerIndexDebug && !this.pluginInitialized)
                this.Logger.info("Container " + getContainerName(index) + " has " + container.length + " item(s) from " + categoriesInContainer.length.toString() + " categories");

  
            // iterate through all available categories
            categoriesInContainer.forEach(category => {
                const itemsInCategory = container.filter(item =>item.itemLootCategory === category);
                itemsByCategory[category] = itemsInCategory;
            });


            const itemCountsByCategory = {};
            container.forEach(item => {
                const category = item.itemLootCategory;
                itemCountsByCategory[category] = (itemCountsByCategory[category] || 0) + 1;
            });

            const totalItemsInContainer = container.length;

            // calculate spawn weights for each category
            const spawnWeightsByCategory = {};
            let totalSpawnWeight = 0;
          
            for (const category in itemCountsByCategory) {
                if (itemCountsByCategory.hasOwnProperty(category))
                {
                    const itemCount = itemCountsByCategory[category];
                    const spawnWeight = totalItemsInContainer / itemCount;
                    spawnWeightsByCategory[category] = spawnWeight.toFixed(4);

                    // calculate the total sum of all category spawn weights
                    totalSpawnWeight += spawnWeight;
                }
            }

            const normalizedSpawnWeightsByCategory = {};
            for (const category in spawnWeightsByCategory)
            {
                if (spawnWeightsByCategory.hasOwnProperty(category))
                {
                    const itemCount = itemCountsByCategory[category];
                    const normalizedSpawnWeight = spawnWeightsByCategory[category] / totalSpawnWeight;
                    normalizedSpawnWeightsByCategory[category] = normalizedSpawnWeight.toFixed(4);

                    if (config.debugMode_showContainerInfo && index == this.containerIndexDebug && !this.pluginInitialized)
                        this.Logger.warning(category + " has " + itemCount.toString() + " items with a normalized weighting factor of " + normalizedSpawnWeightsByCategory[category].toString());
                }
            }

            let weightingLimit = 0.05;

            container.forEach(item => {
                const category = item.itemLootCategory;
                let normalizedSpawnWeight = normalizedSpawnWeightsByCategory[category];
                
                if (item.itemCustomAdded && normalizedSpawnWeight > weightingLimit)
                    normalizedSpawnWeight = weightingLimit;

                const adjustedSpawnRate = Math.floor(item.itemSpawnrate * normalizedSpawnWeight * 10);

                if (!item.itemFavorite && !item.itemQuest)
                    item.itemSpawnrate = adjustedSpawnRate;
            })
        })
    }


    public static spawnRateFinalAdjustment()
    {
        this.allItemsAssignedToContainers.forEach((container, index) => {
            container.forEach(category => {
 
                category.itemSpawnrate = Math.floor(category.itemSpawnrate * config_CategorySpawnrates["rate_" + category.itemLootCategory]);                                               // adjust spawn rate on category basis
                if(category.itemLootCategory === SPTLootCategoryName.KEYS_MECHANICALKEYS && (index === SPTLootContainerIndex.JACKET || index === SPTLootContainerIndex.JACKETDORMS204))     // increase key spawn rates in jackets
                    category.itemSpawnrate = Math.floor(category.itemSpawnrate * config.keysInJacketsMultiplier);
                if(config_SelectedItems.selectedItems_AdjustSpawnChance.includes(category.itemId))                                                                                          // adjust spawn rate on item basis
                {
                    const selectedItemIndex = config_SelectedItems.selectedItems_AdjustSpawnChance.indexOf(category.itemId);
                    category.itemSpawnrate *= parseFloat(config_SelectedItems.selectedItems_spawnChance[selectedItemIndex]);
                    category.itemSpawnrate = Math.floor(category.itemSpawnrate);
                }
            })
            if (index === SPTLootContainerIndex.JACKETDORMS114)                 // adjust spawn rates of JacketDorms114 to an equal rate for all contained items
            {
                container.forEach(element => {
                    element.itemSpawnrate = 1;
                })
            }
            if (index === SPTLootContainerIndex.COMMONFUNDSTASH)                // adjust spawn rates of Common Fund Stash to an equal rate for all contained items
            {
                container.forEach(element => {
                    element.itemSpawnrate = 1;
                })
            }

            // Calculate median, minimum and maximum - to get a better understanding of the spawn rates
            const standardItems = container.filter(item => !item.itemFavorite && !item.itemQuest);
            const spawnratesStandardItems = standardItems.map(item => item.itemSpawnrate);

            const itemsKeys = container.filter(item => item.itemLootCategory === SPTLootCategoryName.KEYS_MECHANICALKEYS);
            const spawnratesKeys = itemsKeys.map(item => item.itemSpawnrate);

            spawnratesStandardItems.sort((a, b) => a - b);
            let median = 0;
            const length = spawnratesStandardItems.length;

            
            // Median
            if (length % 2 === 0)
            {
                const middle1 = spawnratesStandardItems[length / 2 -1];
                const middle2 = spawnratesStandardItems[length / 2];
                median = Math.floor((middle1 + middle2) / 2);
            }
            else
                median = spawnratesStandardItems[Math.floor(length / 2)];

            const totalSpawnrate = spawnratesStandardItems.reduce((acc, spawnrate) => acc + spawnrate, 0);
            const averageSpawnrate = totalSpawnrate / spawnratesStandardItems.length;


            if (config.debugMode_showContainerInfo && index == this.containerIndexDebug && !this.pluginInitialized)
            {
                this.Logger.info("Spawn rates in container " + getContainerName(index));
                this.Logger.info("Average (Non-favorite): " + Math.floor(averageSpawnrate));
                this.Logger.info("Median (Non-favorite): " + median.toString());
                this.Logger.info("Minimum (Non-favorite): " + Math.min(...spawnratesStandardItems).toString());
                this.Logger.info("Maximum (Non-favorite): " + Math.max(...spawnratesStandardItems));
            }
            

            // finally adjust the quest/favorite items spawn rate based on the rate of the standard items
            container.forEach(element => {
                
                let selectedItemMultiplier = 1;
                if (config_SelectedItems.selectedItems_AdjustSpawnChance.includes(element.itemId))
                {
                    const selectedItemIndex = config_SelectedItems.selectedItems_AdjustSpawnChance.indexOf(element.itemId);
                    selectedItemMultiplier = parseFloat(config_SelectedItems.selectedItems_spawnChance[selectedItemIndex]);
                }
                
                if (element.itemQuest)
                {
                    if (index === SPTLootContainerIndex.WEAPONBOX5X5 ||
                        index === SPTLootContainerIndex.WEAPONBOX5X2 ||
                        index === SPTLootContainerIndex.WEAPONBOX6X3 ||
                        index === SPTLootContainerIndex.WEAPONBOX4X4 ||
                        index === SPTLootContainerIndex.WOODENCRATE)
                            element.itemSpawnrate = Math.floor(averageSpawnrate * selectedItemMultiplier * config.questItemsMultiplierWeaponboxes);
                    else if (index === SPTLootContainerIndex.JACKETDORMS114)
                        element.itemSpawnrate = 1;
                    else if (index === SPTLootContainerIndex.COMMONFUNDSTASH)
                        element.itemSpawnrate = 1;
                    else
                        element.itemSpawnrate = Math.floor(averageSpawnrate * selectedItemMultiplier * config.questItemsMultiplierStandardContainer);
                }
                if (element.itemFavorite)
                {
                    if (index === SPTLootContainerIndex.WEAPONBOX5X5 ||
                        index === SPTLootContainerIndex.WEAPONBOX5X2 ||
                        index === SPTLootContainerIndex.WEAPONBOX6X3 ||
                        index === SPTLootContainerIndex.WEAPONBOX4X4 ||
                        index === SPTLootContainerIndex.WOODENCRATE ||
                        index === SPTLootContainerIndex.DEADSCAV ||
                        index === SPTLootContainerIndex.PMCBODY)
                        {
                            if (element.itemLootCategory === SPTLootCategoryName.AMMO_AMMOPACKS || element.itemLootCategory === SPTLootCategoryName.AMMO_ROUNDS)
                                element.itemSpawnrate = Math.floor(averageSpawnrate * selectedItemMultiplier * config.favoriteItemsMultiplierWeaponboxes * config.favoriteItemsMultiplierWeaponboxesAmmoMulti);
                            else
                                element.itemSpawnrate = Math.floor(averageSpawnrate * selectedItemMultiplier * config.favoriteItemsMultiplierWeaponboxes);
                        }
                    else if (index === SPTLootContainerIndex.JACKETDORMS114)
                        element.itemSpawnrate = 1;
                    else if (index === SPTLootContainerIndex.COMMONFUNDSTASH)
                        element.itemSpawnrate = 1;
                    else
                        element.itemSpawnrate = Math.floor(averageSpawnrate * selectedItemMultiplier * config.favoriteItemsMultiplierStandardContainer);
                }

                // equal key spawn rates in drawers and jackets
                if (element.itemLootCategory === SPTLootCategoryName.KEYS_MECHANICALKEYS && this.config.equalSpawnratesForAllKeys)
                {
                    element.itemSpawnrate = Math.floor(Math.max(...spawnratesKeys) * this.config_CategorySpawnrates.rate_KEYS_MECHANICALKEYS * this.config.equalSpawnratesForAllKeysMulti);
                    if (index === SPTLootContainerIndex.JACKET || index === SPTLootContainerIndex.JACKETDORMS204)
                        element.itemSpawnrate *= config.keysInJacketsMultiplier;
                }
            })
        })
    }


    public static assignItemsToContainerTypes(currentItem : IAllTheLootItem)
    {
        const currentItemCopy: IAllTheLootItem = {...currentItem};          // create shallow copy to have independent spawn rates

        switch(currentItem.itemLootCategory)
        {
            case SPTLootCategoryName.BARTER_OTHERS:
                this.containerTypeDrawer.push({...currentItemCopy});
                this.containerTypeJacket.push({...currentItemCopy});
                if (currentItem.itemId === "5d1b2f3f86f774252167a52c" ||                        // FP-100 filter absorber
                    currentItem.itemId === "5e2af47786f7746d404f3aaa" ||                        // Fleece fabric
                    currentItem.itemId === "590c595c86f7747884343ad7" ||                        // Gas mask air filter
                    currentItem.itemId === "5c12688486f77426843c7d32" ||                        // Paracord
                    currentItem.itemId === "5e2af4a786f7746d3f3c3400" ||                        // Ripstop fabric
                    currentItem.itemId === "5d1b385e86f774252167b98a")                          // Water filter
                    {
                        const adjustedCopy = {...currentItemCopy};
                        adjustedCopy.itemCustomAdded = true;
                        this.containerTypeToolbox.push({...adjustedCopy});
                        this.containerTypeTechnicalSupplyCrate.push({...adjustedCopy});
                    }
                this.containerTypeSportsbag01.push({...currentItemCopy});
                this.containerTypePlasticSuitcase.push({...currentItemCopy});         
                this.containerTypeDeadScav.push({...currentItemCopy});
                this.containerTypeGroundCache.push({...currentItemCopy});
                this.containerTypeBurriedBarrelCache.push({...currentItemCopy});
                if (currentItem.itemId === "5bc9be8fd4351e00334cae6e" ||                        // 42 Signature Blend English Tea
                    currentItem.itemId === "573475fb24597737fb1379e1" ||                        // Apollo Soyuz cigarettes
                    currentItem.itemId === "5e54f6af86f7742199090bf3" ||                        // Can of Dr. Lupo's coffee beans
                    currentItem.itemId === "5af0484c86f7740f02001f7f" ||                        // Can of Majaica coffee beans
                    currentItem.itemId === "573476d324597737da2adc13" ||                        // Malboro Cigarettes
                    currentItem.itemId === "6389c6463485cf0eeb260715" ||                        // Pack of Arseniy buckwheat
                    currentItem.itemId === "5734770f24597738025ee254" ||                        // Strike Cigarettes
                    currentItem.itemId === "573476f124597737e04bf328")                          // Wilston cigarettes
                    {   
                        const adjustedCopy = {...currentItemCopy};
                        adjustedCopy.itemCustomAdded = true;
                        this.containerTypeRationSupplyCrate.push({...adjustedCopy});
                    }
                this.containerTypeJacketDorms204.push({...currentItemCopy});
                this.containerTypeSportsbag02.push({...currentItemCopy});
                if (currentItem.itemId === "5e2af51086f7746d3f3c3402")                          // UZRGM grenade fuze
                    {   
                        const adjustedCopy = {...currentItemCopy};
                        adjustedCopy.itemCustomAdded = true;
                        this.containerTypeGrenadebox.push({...adjustedCopy});
                    }
                if (currentItem.itemId === "5d0379a886f77420407aa271")                          // OFZ 30x160mm shell
                    {   
                        const adjustedCopy = {...currentItemCopy};
                        adjustedCopy.itemCustomAdded = true;
                        this.containerTypeWeaponbox5x5.push({...adjustedCopy});
                        this.containerTypeWeaponbox5x2.push({...adjustedCopy});
                        this.containerTypeWeaponbox4x4.push({...adjustedCopy});
                    }
                if (currentItem.itemId === "5d1c819a86f774771b0acd6c")                          // Weapon parts
                    {   
                        const adjustedCopy = {...currentItemCopy};
                        adjustedCopy.itemCustomAdded = true;
                        this.containerTypeWeaponbox5x2.push({...adjustedCopy});
                        this.containerTypeWeaponbox4x4.push({...adjustedCopy});
                        this.containerTypeWoodenCrate.push({...adjustedCopy});
                    }
                this.containerTypePMCBody.push({...currentItemCopy});
                this.containerTypDeadCivilian.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.BARTER_BUILDINGMATERIALS:
                this.containerTypeDrawer.push({...currentItemCopy});
                this.containerTypeJacket.push({...currentItemCopy});
                this.containerTypeToolbox.push({...currentItemCopy});
                this.containerTypeSportsbag01.push({...currentItemCopy});
                this.containerTypePlasticSuitcase.push({...currentItemCopy});
                this.containerTypeTechnicalSupplyCrate.push({...currentItemCopy});
                this.containerTypeDeadScav.push({...currentItemCopy});
                this.containerTypeGroundCache.push({...currentItemCopy});
                this.containerTypeBurriedBarrelCache.push({...currentItemCopy});
                this.containerTypeJacketDorms204.push({...currentItemCopy});
                this.containerTypeSportsbag02.push({...currentItemCopy});
                this.containerTypePMCBody.push({...currentItemCopy});
                this.containerTypDeadCivilian.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.BARTER_ELECTRONICS:
                this.containerTypeDrawer.push({...currentItemCopy});
                if (currentItem.itemId === "5c06779c86f77426e00dd782" ||                        // Bundle of wires
                    currentItem.itemId === "5c06782b86f77426df5407d2" ||                        // Capacitors
                    currentItem.itemId === "5734779624597737e04bf329" ||                        // CPU fan
                    currentItem.itemId === "590a386e86f77429692b27ab" ||                        // Damaged hard drive
                    currentItem.itemId === "5734781f24597737e04bf32a" ||                        // DVD drive
                    currentItem.itemId === "57347ca924597744596b4e71" ||                        // Graphics card
                    currentItem.itemId === "573477e124597737dd42e191" ||                        // PC CPU
                    currentItem.itemId === "59e36c6f86f774176c10a2a7" ||                        // Power cord
                    currentItem.itemId === "57347c2e24597744902c94a1" ||                        // Power supply unit
                    currentItem.itemId === "590a3b0486f7743954552bdb" ||                        // Printed circuit board
                    currentItem.itemId === "57347baf24597738002c6178")                          // RAM
                    {   this.containerTypePCBlock.push({...currentItemCopy});}
                if (currentItem.itemId === "56742c324bdc2d150f8b456d" ||                        // Broken GPhone smartphone
                    currentItem.itemId === "5c1265fc86f7743f896a21c2" ||                        // Broken GPhone X smartphone
                    currentItem.itemId === "6389c70ca33d8c4cdf4932c6" ||                        // Electronic components
                    currentItem.itemId === "590a3cd386f77436f20848cb" ||                        // Energy-saving lamp
                    currentItem.itemId === "590a3efd86f77437d351a25b" ||                        // Gas analyzer
                    currentItem.itemId === "5bc9b720d4351e450201234b" ||                        // Golden 1GPhone smartphone
                    currentItem.itemId === "5c12620d86f7743f8b198b72" ||                        // Tetriz portable game console
                    currentItem.itemId === "590a3d9c86f774385926e510")                          // Ultraviolet lamp
                    {   
                        const adjustedCopy = {...currentItemCopy};
                        adjustedCopy.itemCustomAdded = true;    
                        this.containerTypeJacket.push({...adjustedCopy});
                        this.containerTypeJacketDorms204.push({...adjustedCopy});
                    }
                this.containerTypeToolbox.push({...currentItemCopy});
                this.containerTypeSportsbag01.push({...currentItemCopy});
                this.containerTypePlasticSuitcase.push({...currentItemCopy});
                this.containerTypeTechnicalSupplyCrate.push({...currentItemCopy});
                this.containerTypeDeadScav.push({...currentItemCopy});
                this.containerTypeGroundCache.push({...currentItemCopy});
                this.containerTypeBurriedBarrelCache.push({...currentItemCopy});
                this.containerTypeSportsbag02.push({...currentItemCopy});
                if (currentItem.itemId === "6389c85357baa773a825b356" ||                        // Advanced current converter
                    currentItem.itemId === "6389c7f115805221fb410466" ||                        // Far-forward GPS Signal Amplifier Unit
                    currentItem.itemId === "5d0377ce86f774186372f689" ||                        // Iridium military thermal vision module
                    currentItem.itemId === "6389c7750ef44505c87f5996" ||                        // Microcontroller board
                    currentItem.itemId === "5c052f6886f7746b1e3db148" ||                        // Military COFDM Wireless Signal Transmitter
                    currentItem.itemId === "5c052fb986f7746b2101e909" ||                        // UHF RFID Reader
                    currentItem.itemId === "5c05308086f7746b2101e90b" ||                        // Virtex programmable processor
                    currentItem.itemId === "5c05300686f7746dce784e5d")                          // VPX Flash Storage Module
                    {
                        const adjustedCopy = {...currentItemCopy};
                        adjustedCopy.itemCustomAdded = true; 
                        this.containerTypeWeaponbox5x5.push({...adjustedCopy});
                        this.containerTypeCommonFundStash.push({...adjustedCopy});
                    }
                this.containerTypePMCBody.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.BARTER_ENERGYELEMENTS:
                this.containerTypeDrawer.push({...currentItemCopy});
                this.containerTypeJacket.push({...currentItemCopy});
                this.containerTypeToolbox.push({...currentItemCopy});
                this.containerTypeSportsbag01.push({...currentItemCopy});
                this.containerTypePlasticSuitcase.push({...currentItemCopy});
                this.containerTypeTechnicalSupplyCrate.push({...currentItemCopy});
                this.containerTypeDeadScav.push({...currentItemCopy});
                this.containerTypeGroundCache.push({...currentItemCopy});
                this.containerTypeBurriedBarrelCache.push({...currentItemCopy});
                this.containerTypeJacketDorms204.push({...currentItemCopy});
                this.containerTypeSportsbag02.push({...currentItemCopy});
                this.containerTypePMCBody.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.BARTER_FLAMMABLEMATERIALS:
                if (currentItem.itemId === "57347b8b24597737dd42e192" ||                        // Classic matches
                    currentItem.itemId === "56742c284bdc2d98058b456d" ||                        // Crickent lighter
                    currentItem.itemId === "56742c2e4bdc2d95058b456d")                          // Zibbo lighter
                    {
                        const adjustedCopy = {...currentItemCopy};
                        adjustedCopy.itemCustomAdded = true;    
                        this.containerTypeDrawer.push({...adjustedCopy});
                        this.containerTypDeadCivilian.push({...adjustedCopy});
                    }
                this.containerTypeJacket.push({...currentItemCopy});
                this.containerTypeToolbox.push({...currentItemCopy});
                this.containerTypeSportsbag01.push({...currentItemCopy});
                this.containerTypePlasticSuitcase.push({...currentItemCopy});
                this.containerTypeTechnicalSupplyCrate.push({...currentItemCopy});
                this.containerTypeDeadScav.push({...currentItemCopy});
                this.containerTypeGroundCache.push({...currentItemCopy});
                this.containerTypeBurriedBarrelCache.push({...currentItemCopy});
                this.containerTypeJacketDorms204.push({...currentItemCopy});
                this.containerTypeSportsbag02.push({...currentItemCopy});
                this.containerTypePMCBody.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.BARTER_HOUSEHOLDMATERIALS:
                if (currentItem.itemId === "62a09ee4cf4a99369e262453" ||                        // Can of white salt
                    currentItem.itemId === "5bc9b9ecd4351e3bac122519" ||                        // Deadlyslob's beard oil
                    currentItem.itemId === "60b0f561c4449e4cb624c1d7" ||                        // LVNDMARK's rat poison
                    currentItem.itemId === "5e2af02c86f7746d420957d4" ||                        // Pack of chlorine
                    currentItem.itemId === "577e1c9d2459773cd707c525")                          // Printer paper
                    {
                        const adjustedCopy = {...currentItemCopy};
                        adjustedCopy.itemCustomAdded = true; 
                        this.containerTypeDrawer.push({...adjustedCopy});
                    }
                if (currentItem.itemId === "59faf98186f774067b6be103" ||                        // Alkaline cleaner for heat exchangers
                    currentItem.itemId === "5d4041f086f7743cac3f22a7" ||                        // Ortodontox toothpaste
                    currentItem.itemId === "59e35abd86f7741778269d82" ||                        // Pack of sodium bicarbonate
                    currentItem.itemId === "5c13cd2486f774072c757944" ||                        // Soap
                    currentItem.itemId === "5c13cef886f774072e618e82" ||                        // Toilet paper
                    currentItem.itemId === "57347c93245977448d35f6e3")                          // Toothpaste
                    {
                        const adjustedCopy = {...currentItemCopy};
                        adjustedCopy.itemCustomAdded = true;  
                        this.containerTypeMedicalSupplyCrate.push({...adjustedCopy});
                    }
                this.containerTypeSportsbag01.push({...currentItemCopy});
                this.containerTypePlasticSuitcase.push({...currentItemCopy});
                this.containerTypeDeadScav.push({...currentItemCopy});
                this.containerTypeGroundCache.push({...currentItemCopy});
                this.containerTypeBurriedBarrelCache.push({...currentItemCopy});
                if (currentItem.itemId === "62a09ee4cf4a99369e262453")                          // Can of white salt
                    {
                        const adjustedCopy = {...currentItemCopy};
                        adjustedCopy.itemCustomAdded = true;   
                        this.containerTypeRationSupplyCrate.push({...adjustedCopy});
                    }
                this.containerTypeSportsbag02.push({...currentItemCopy});
                this.containerTypePMCBody.push({...currentItemCopy});
                this.containerTypDeadCivilian.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.BARTER_MEDICALSUPPLIES:
                this.containerTypeMedcase.push({...currentItemCopy});
                this.containerTypeSportsbag01.push({...currentItemCopy});
                this.containerTypePlasticSuitcase.push({...currentItemCopy});
                this.containerTypeMedbagSMU0601.push({...currentItemCopy});
                this.containerTypeMedicalSupplyCrate.push({...currentItemCopy});
                this.containerTypeDeadScav.push({...currentItemCopy});
                this.containerTypeGroundCache.push({...currentItemCopy});
                this.containerTypeBurriedBarrelCache.push({...currentItemCopy});
                this.containerTypeSportsbag02.push({...currentItemCopy});
                this.containerTypeMedbagSMU0602.push({...currentItemCopy});
                this.containerTypePMCBody.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.BARTER_TOOLS:
                this.containerTypeJacket.push({...currentItemCopy});
                this.containerTypeToolbox.push({...currentItemCopy});
                this.containerTypeSportsbag01.push({...currentItemCopy});
                this.containerTypePlasticSuitcase.push({...currentItemCopy});
                this.containerTypeTechnicalSupplyCrate.push({...currentItemCopy});
                this.containerTypeDeadScav.push({...currentItemCopy});
                this.containerTypeGroundCache.push({...currentItemCopy});
                this.containerTypeBurriedBarrelCache.push({...currentItemCopy});
                this.containerTypeJacketDorms204.push({...currentItemCopy});
                this.containerTypeSportsbag02.push({...currentItemCopy});
                this.containerTypePMCBody.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.BARTER_VALUABLES:
                if (currentItem.itemId === "5bc9c049d4351e44f824d360")                          // Battered antique book
                    {   
                        const adjustedCopy = {...currentItemCopy};
                        adjustedCopy.itemCustomAdded = true;
                        this.containerTypeDrawer.push({...adjustedCopy});
                    }
                if (currentItem.itemId === "5bc9c377d4351e3bac12251b")                          // Old firesteel
                    {   
                        const adjustedCopy = {...currentItemCopy};
                        adjustedCopy.itemCustomAdded = true; 
                        this.containerTypeToolbox.push({...adjustedCopy});
                        this.containerTypeTechnicalSupplyCrate.push({...adjustedCopy});
                    }
                if (currentItem.itemId === "573474f924597738002c6174" ||                        // Chainlet
                    currentItem.itemId === "5d235a5986f77443f6329bc6" ||                        // Gold skull ring
                    currentItem.itemId === "5734758f24597738025ee253" ||                        // Golden neck chain
                    currentItem.itemId === "5d235b4d86f7742e017bc88a" ||                        // GP coin
                    currentItem.itemId === "59faff1d86f7746c51718c9c" ||                        // Physical Bitcoin
                    currentItem.itemId === "5bc9bdb8d4351e003562b8a1")                          // Silver Badge
                    {
                        const adjustedCopy = {...currentItemCopy};
                        adjustedCopy.itemCustomAdded = true; 
                        this.containerTypeJacket.push({...adjustedCopy});
                        this.containerTypeJacketDorms204.push({...adjustedCopy});
                    }
                if (currentItem.itemId !== "5bc9c377d4351e3bac12251b")                          // Old firesteel (exclude from Safe)
                    {   this.containerTypeSafe.push({...currentItemCopy});}
                this.containerTypeSportsbag01.push({...currentItemCopy});
                this.containerTypePlasticSuitcase.push({...currentItemCopy});
                this.containerTypeDeadScav.push({...currentItemCopy});
                this.containerTypeGroundCache.push({...currentItemCopy});
                this.containerTypeBurriedBarrelCache.push({...currentItemCopy});
                this.containerTypeCommonFundStash.push({...currentItemCopy});
                this.containerTypeSportsbag02.push({...currentItemCopy});
                this.containerTypePMCBody.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.GEAR_BACKPACKS:
                this.containerTypeWeaponbox5x5.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.GEAR_BODYARMOR:
                this.containerTypeGroundCache.push({...currentItemCopy});
                this.containerTypeBurriedBarrelCache.push({...currentItemCopy});
                this.containerTypeWeaponbox5x5.push({...currentItemCopy});
                this.containerTypeWeaponbox6x3.push({...currentItemCopy});
                this.containerTypeWeaponbox4x4.push({...currentItemCopy});
                this.containerTypeCommonFundStash.push({...currentItemCopy});
                this.containerTypeDeadScav.push({...currentItemCopy});
                this.containerTypePMCBody.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.GEAR_EYEWEAR:
                this.containerTypeGroundCache.push({...currentItemCopy});
                this.containerTypeBurriedBarrelCache.push({...currentItemCopy});
                this.containerTypeWeaponbox5x2.push({...currentItemCopy});
                this.containerTypeWeaponbox6x3.push({...currentItemCopy});
                this.containerTypeWeaponbox4x4.push({...currentItemCopy});
                this.containerTypeWoodenCrate.push({...currentItemCopy});
                this.containerTypeDeadScav.push({...currentItemCopy});
                this.containerTypePMCBody.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.GEAR_FACECOVERS:
                this.containerTypeJacket.push({...currentItemCopy});
                this.containerTypeSportsbag01.push({...currentItemCopy});
                this.containerTypeGroundCache.push({...currentItemCopy});
                this.containerTypeBurriedBarrelCache.push({...currentItemCopy});
                this.containerTypeJacketDorms204.push({...currentItemCopy});
                this.containerTypeSportsbag02.push({...currentItemCopy});
                this.containerTypeWeaponbox5x2.push({...currentItemCopy});
                this.containerTypeWeaponbox6x3.push({...currentItemCopy});
                this.containerTypeWeaponbox4x4.push({...currentItemCopy});
                this.containerTypeWoodenCrate.push({...currentItemCopy});
                this.containerTypeDeadScav.push({...currentItemCopy});
                this.containerTypePMCBody.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.GEAR_GEARCOMPONENTS:
                this.containerTypeGroundCache.push({...currentItemCopy});
                this.containerTypeBurriedBarrelCache.push({...currentItemCopy});
                this.containerTypeWeaponbox5x2.push({...currentItemCopy});
                this.containerTypeWeaponbox6x3.push({...currentItemCopy});
                this.containerTypeWeaponbox4x4.push({...currentItemCopy});
                this.containerTypeWoodenCrate.push({...currentItemCopy});
                this.containerTypeDeadScav.push({...currentItemCopy});
                this.containerTypePMCBody.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.GEAR_HEADGEAR:
                this.containerTypeGroundCache.push({...currentItemCopy});
                this.containerTypeBurriedBarrelCache.push({...currentItemCopy});
                this.containerTypeWeaponbox5x5.push({...currentItemCopy});
                this.containerTypeWeaponbox5x2.push({...currentItemCopy});
                this.containerTypeWeaponbox6x3.push({...currentItemCopy});
                this.containerTypeWeaponbox4x4.push({...currentItemCopy});
                this.containerTypeWoodenCrate.push({...currentItemCopy});
                this.containerTypeCommonFundStash.push({...currentItemCopy});
                this.containerTypeDeadScav.push({...currentItemCopy});
                this.containerTypePMCBody.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.GEAR_HEADSETS:
                this.containerTypeGroundCache.push({...currentItemCopy});
                this.containerTypeBurriedBarrelCache.push({...currentItemCopy});
                this.containerTypeWeaponbox5x5.push({...currentItemCopy});
                this.containerTypeWeaponbox5x2.push({...currentItemCopy});
                this.containerTypeWeaponbox6x3.push({...currentItemCopy});
                this.containerTypeWeaponbox4x4.push({...currentItemCopy});
                this.containerTypeWoodenCrate.push({...currentItemCopy});
                this.containerTypeCommonFundStash.push({...currentItemCopy});
                this.containerTypePMCBody.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.GEAR_SECURECONTAINERS:
                this.containerTypeTechnicalSupplyCrate.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.GEAR_STORAGECONTAINERS:
                this.containerTypeTechnicalSupplyCrate.push({...currentItemCopy});
                if (currentItem.itemId === "62a09d3bcf4a99369e262447" ||                        // Gingy keychain
                    currentItem.itemId === "5783c43d2459774bbe137486" ||                        // Simple wallet
                    currentItem.itemId === "60b0f6c058e0b0481a09ad11")                          // WZ Wallet
                    {
                        const adjustedCopy = {...currentItemCopy};
                        adjustedCopy.itemCustomAdded = true; 
                        this.containerTypeJacket.push({...adjustedCopy});
                        this.containerTypeGroundCache.push({...adjustedCopy});
                        this.containerTypeBurriedBarrelCache.push({...adjustedCopy});
                    }
                break;
            case SPTLootCategoryName.GEAR_TACTICALRIGS:
                this.containerTypeGroundCache.push({...currentItemCopy});
                this.containerTypeBurriedBarrelCache.push({...currentItemCopy});
                this.containerTypeWeaponbox5x5.push({...currentItemCopy});
                this.containerTypeWeaponbox6x3.push({...currentItemCopy});
                this.containerTypeWeaponbox4x4.push({...currentItemCopy});
                this.containerTypeWoodenCrate.push({...currentItemCopy});
                this.containerTypePMCBody.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.WPM_FM_AUXILIARYPARTS:
                this.containerTypeWeaponbox5x5.push({...currentItemCopy});
                this.containerTypeWeaponbox5x2.push({...currentItemCopy});
                this.containerTypeWeaponbox6x3.push({...currentItemCopy});
                this.containerTypeWeaponbox4x4.push({...currentItemCopy});
                this.containerTypeWoodenCrate.push({...currentItemCopy});
                this.containerTypeCommonFundStash.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.WPM_FM_BIPODS:
                this.containerTypeWeaponbox5x5.push({...currentItemCopy});
                this.containerTypeWeaponbox5x2.push({...currentItemCopy});
                this.containerTypeWeaponbox6x3.push({...currentItemCopy});
                this.containerTypeWeaponbox4x4.push({...currentItemCopy});
                this.containerTypeWoodenCrate.push({...currentItemCopy});
                this.containerTypeCommonFundStash.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.WPM_FM_FOREGRIPS:
                this.containerTypeWeaponbox5x5.push({...currentItemCopy});
                this.containerTypeWeaponbox5x2.push({...currentItemCopy});
                this.containerTypeWeaponbox6x3.push({...currentItemCopy});
                this.containerTypeWeaponbox4x4.push({...currentItemCopy});
                this.containerTypeWoodenCrate.push({...currentItemCopy});
                this.containerTypeCommonFundStash.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.WPM_FM_LLD_FLASHLIGHTS:
                this.containerTypeWeaponbox5x5.push({...currentItemCopy});
                this.containerTypeWeaponbox5x2.push({...currentItemCopy});
                this.containerTypeWeaponbox6x3.push({...currentItemCopy});
                this.containerTypeWeaponbox4x4.push({...currentItemCopy});
                this.containerTypeWoodenCrate.push({...currentItemCopy});
                this.containerTypeCommonFundStash.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.WPM_FM_LLD_LASERTARGETPOINTERS:
                this.containerTypeWeaponbox5x5.push({...currentItemCopy});
                this.containerTypeWeaponbox5x2.push({...currentItemCopy});
                this.containerTypeWeaponbox6x3.push({...currentItemCopy});
                this.containerTypeWeaponbox4x4.push({...currentItemCopy});
                this.containerTypeWoodenCrate.push({...currentItemCopy});
                this.containerTypeCommonFundStash.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.WPM_FM_LLD_TACTICALCOMBODEVICES:
                this.containerTypeWeaponbox5x5.push({...currentItemCopy});
                this.containerTypeWeaponbox5x2.push({...currentItemCopy});
                this.containerTypeWeaponbox6x3.push({...currentItemCopy});
                this.containerTypeWeaponbox4x4.push({...currentItemCopy});
                this.containerTypeWoodenCrate.push({...currentItemCopy});
                this.containerTypeCommonFundStash.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.WPM_FM_MD_FLASHHIDERSBRAKES:
                this.containerTypeWeaponbox5x5.push({...currentItemCopy});
                this.containerTypeWeaponbox5x2.push({...currentItemCopy});
                this.containerTypeWeaponbox6x3.push({...currentItemCopy});
                this.containerTypeWeaponbox4x4.push({...currentItemCopy});
                this.containerTypeWoodenCrate.push({...currentItemCopy});
                this.containerTypeCommonFundStash.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.WPM_FM_MD_MUZZLEADAPTERS:
                this.containerTypeWeaponbox5x5.push({...currentItemCopy});
                this.containerTypeWeaponbox5x2.push({...currentItemCopy});
                this.containerTypeWeaponbox6x3.push({...currentItemCopy});
                this.containerTypeWeaponbox4x4.push({...currentItemCopy});
                this.containerTypeWoodenCrate.push({...currentItemCopy});
                this.containerTypeCommonFundStash.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.WPM_FM_MD_SUPPRESSORS:
                this.containerTypeWeaponbox5x5.push({...currentItemCopy});
                this.containerTypeWeaponbox5x2.push({...currentItemCopy});
                this.containerTypeWeaponbox6x3.push({...currentItemCopy});
                this.containerTypeWeaponbox4x4.push({...currentItemCopy});
                this.containerTypeWoodenCrate.push({...currentItemCopy});
                this.containerTypeCommonFundStash.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.WPM_FM_S_ASSAULTSCOPES:
                this.containerTypeWeaponbox5x5.push({...currentItemCopy});
                this.containerTypeWeaponbox5x2.push({...currentItemCopy});
                this.containerTypeWeaponbox6x3.push({...currentItemCopy});
                this.containerTypeWeaponbox4x4.push({...currentItemCopy});
                this.containerTypeWoodenCrate.push({...currentItemCopy});
                this.containerTypeCommonFundStash.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.WPM_FM_S_COLLIMATORS:
                this.containerTypeWeaponbox5x5.push({...currentItemCopy});
                this.containerTypeWeaponbox5x2.push({...currentItemCopy});
                this.containerTypeWeaponbox6x3.push({...currentItemCopy});
                this.containerTypeWeaponbox4x4.push({...currentItemCopy});
                this.containerTypeWoodenCrate.push({...currentItemCopy});
                this.containerTypeCommonFundStash.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.WPM_FM_S_COMPACTCOLLIMATORS:
                this.containerTypeWeaponbox5x5.push({...currentItemCopy});
                this.containerTypeWeaponbox5x2.push({...currentItemCopy});
                this.containerTypeWeaponbox6x3.push({...currentItemCopy});
                this.containerTypeWeaponbox4x4.push({...currentItemCopy});
                this.containerTypeWoodenCrate.push({...currentItemCopy});
                this.containerTypeCommonFundStash.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.WPM_FM_S_IRONSIGHTS:
                this.containerTypeWeaponbox5x5.push({...currentItemCopy});
                this.containerTypeWeaponbox5x2.push({...currentItemCopy});
                this.containerTypeWeaponbox6x3.push({...currentItemCopy});
                this.containerTypeWeaponbox4x4.push({...currentItemCopy});
                this.containerTypeWoodenCrate.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.WPM_FM_S_OPTICS:
                this.containerTypeWeaponbox5x5.push({...currentItemCopy});
                this.containerTypeWeaponbox5x2.push({...currentItemCopy});
                this.containerTypeWeaponbox6x3.push({...currentItemCopy});
                this.containerTypeWeaponbox4x4.push({...currentItemCopy});
                this.containerTypeWoodenCrate.push({...currentItemCopy});
                this.containerTypeCommonFundStash.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.WPM_FM_S_SPECIALPURPOSESIGHTS:
                this.containerTypeWeaponbox5x5.push({...currentItemCopy});
                this.containerTypeWeaponbox5x2.push({...currentItemCopy});
                this.containerTypeWeaponbox6x3.push({...currentItemCopy});
                this.containerTypeWeaponbox4x4.push({...currentItemCopy});
                this.containerTypeWoodenCrate.push({...currentItemCopy});
                this.containerTypeCommonFundStash.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.WPM_GM_CHARGINGHANDLES:
                this.containerTypeWeaponbox5x5.push({...currentItemCopy});
                this.containerTypeWeaponbox5x2.push({...currentItemCopy});
                this.containerTypeWeaponbox6x3.push({...currentItemCopy});
                this.containerTypeWeaponbox4x4.push({...currentItemCopy});
                this.containerTypeWoodenCrate.push({...currentItemCopy});
                this.containerTypeCommonFundStash.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.WPM_GM_LAUNCHERS:
                this.containerTypeWeaponbox5x5.push({...currentItemCopy});
                this.containerTypeWeaponbox5x2.push({...currentItemCopy});
                this.containerTypeWeaponbox6x3.push({...currentItemCopy});
                this.containerTypeWeaponbox4x4.push({...currentItemCopy});
                this.containerTypeWoodenCrate.push({...currentItemCopy});
                this.containerTypeCommonFundStash.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.WPM_GM_MAGAZINES:
                this.containerTypeWeaponbox5x5.push({...currentItemCopy});
                this.containerTypeWeaponbox5x2.push({...currentItemCopy});
                this.containerTypeWeaponbox6x3.push({...currentItemCopy});
                this.containerTypeWeaponbox4x4.push({...currentItemCopy});
                this.containerTypeWoodenCrate.push({...currentItemCopy});
                this.containerTypeCommonFundStash.push({...currentItemCopy});
                this.containerTypePMCBody.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.WPM_GM_MOUNTS:
                this.containerTypeWeaponbox5x5.push({...currentItemCopy});
                this.containerTypeWeaponbox5x2.push({...currentItemCopy});
                this.containerTypeWeaponbox6x3.push({...currentItemCopy});
                this.containerTypeWeaponbox4x4.push({...currentItemCopy});
                this.containerTypeWoodenCrate.push({...currentItemCopy});
                this.containerTypeCommonFundStash.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.WPM_GM_STOCKSCHASSIS:
                this.containerTypeWeaponbox5x5.push({...currentItemCopy});
                this.containerTypeWeaponbox5x2.push({...currentItemCopy});
                this.containerTypeWeaponbox6x3.push({...currentItemCopy});
                this.containerTypeWeaponbox4x4.push({...currentItemCopy});
                this.containerTypeWoodenCrate.push({...currentItemCopy});
                this.containerTypeCommonFundStash.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.WPM_VP_BARRELS:
                this.containerTypeWeaponbox5x5.push({...currentItemCopy});
                this.containerTypeWeaponbox5x2.push({...currentItemCopy});
                this.containerTypeWeaponbox6x3.push({...currentItemCopy});
                this.containerTypeWeaponbox4x4.push({...currentItemCopy});
                this.containerTypeWoodenCrate.push({...currentItemCopy});
                this.containerTypeCommonFundStash.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.WPM_VP_GASBLOCKS:
                this.containerTypeWeaponbox5x5.push({...currentItemCopy});
                this.containerTypeWeaponbox5x2.push({...currentItemCopy});
                this.containerTypeWeaponbox6x3.push({...currentItemCopy});
                this.containerTypeWeaponbox4x4.push({...currentItemCopy});
                this.containerTypeWoodenCrate.push({...currentItemCopy});
                this.containerTypeCommonFundStash.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.WPM_VP_HANDGUARDS:
                this.containerTypeWeaponbox5x5.push({...currentItemCopy});
                this.containerTypeWeaponbox5x2.push({...currentItemCopy});
                this.containerTypeWeaponbox6x3.push({...currentItemCopy});
                this.containerTypeWeaponbox4x4.push({...currentItemCopy});
                this.containerTypeWoodenCrate.push({...currentItemCopy});
                this.containerTypeCommonFundStash.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.WPM_VP_PISTOLGRIPS:
                this.containerTypeWeaponbox5x5.push({...currentItemCopy});
                this.containerTypeWeaponbox5x2.push({...currentItemCopy});
                this.containerTypeWeaponbox6x3.push({...currentItemCopy});
                this.containerTypeWeaponbox4x4.push({...currentItemCopy});
                this.containerTypeWoodenCrate.push({...currentItemCopy});
                this.containerTypeCommonFundStash.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.WPM_VP_RECEIVERSSLIDES:
                this.containerTypeWeaponbox5x5.push({...currentItemCopy});
                this.containerTypeWeaponbox5x2.push({...currentItemCopy});
                this.containerTypeWeaponbox6x3.push({...currentItemCopy});
                this.containerTypeWeaponbox4x4.push({...currentItemCopy});
                this.containerTypeWoodenCrate.push({...currentItemCopy});
                this.containerTypeCommonFundStash.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.WEAPONS_ASSAULTCARBINES:
                this.containerTypeWeaponbox5x5.push({...currentItemCopy});
                this.containerTypeWeaponbox5x2.push({...currentItemCopy});
                this.containerTypeWeaponbox6x3.push({...currentItemCopy});
                this.containerTypeWeaponbox4x4.push({...currentItemCopy});
                this.containerTypeWoodenCrate.push({...currentItemCopy});
                this.containerTypeCommonFundStash.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.WEAPONS_ASSAULTRIFLES:
                this.containerTypeWeaponbox5x5.push({...currentItemCopy});
                this.containerTypeWeaponbox5x2.push({...currentItemCopy});
                this.containerTypeWeaponbox6x3.push({...currentItemCopy});
                this.containerTypeWeaponbox4x4.push({...currentItemCopy});
                this.containerTypeWoodenCrate.push({...currentItemCopy});
                this.containerTypeCommonFundStash.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.WEAPONS_BOLTACTIONRIFLES:
                this.containerTypeWeaponbox5x5.push({...currentItemCopy});
                this.containerTypeWeaponbox5x2.push({...currentItemCopy});
                this.containerTypeWeaponbox6x3.push({...currentItemCopy});
                this.containerTypeWeaponbox4x4.push({...currentItemCopy});
                this.containerTypeWoodenCrate.push({...currentItemCopy});
                this.containerTypeCommonFundStash.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.WEAPONS_GRENADELAUNCHERS:
                this.containerTypeWeaponbox5x5.push({...currentItemCopy});
                this.containerTypeWeaponbox5x2.push({...currentItemCopy});
                this.containerTypeWeaponbox6x3.push({...currentItemCopy});
                this.containerTypeWeaponbox4x4.push({...currentItemCopy});
                this.containerTypeWoodenCrate.push({...currentItemCopy});
                this.containerTypeCommonFundStash.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.WEAPONS_MACHINEGUNS:
                this.containerTypeWeaponbox5x5.push({...currentItemCopy});
                this.containerTypeWeaponbox5x2.push({...currentItemCopy});
                this.containerTypeWeaponbox6x3.push({...currentItemCopy});
                this.containerTypeWeaponbox4x4.push({...currentItemCopy});
                this.containerTypeWoodenCrate.push({...currentItemCopy});
                this.containerTypeCommonFundStash.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.WEAPONS_MARKSMANRIFLES:
                this.containerTypeWeaponbox5x5.push({...currentItemCopy});
                this.containerTypeWeaponbox5x2.push({...currentItemCopy});
                this.containerTypeWeaponbox6x3.push({...currentItemCopy});
                this.containerTypeWeaponbox4x4.push({...currentItemCopy});
                this.containerTypeWoodenCrate.push({...currentItemCopy});
                this.containerTypeCommonFundStash.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.WEAPONS_MELEEWEAPONS:
                
                if (currentItem.itemId !== "5bffe7930db834001b734a39" &&                          // Crash Axe (exclude)
                    currentItem.itemId !== "5bffdd7e0db834001b734a1a" &&                          // Miller Bros. Blades M-2 Tactical Sword (exclude)
                    currentItem.itemId !== "5c0126f40db834002a125382" &&                          // Red Rebel ice pick (exclude)
                    currentItem.itemId !== "63920105a83e15700a00f168" &&                          // SOG Voodoo Hawk tactical tomahawk (exclude)
                    currentItem.itemId !== "601948682627df266209af05")                            // UVSR Taiga-1 survival machete (exclude)
                    {
                        this.containerTypeWeaponbox5x2.push({...currentItemCopy});
                        this.containerTypeWeaponbox4x4.push({...currentItemCopy});
                        this.containerTypeWoodenCrate.push({...currentItemCopy});
                    }
                this.containerTypeWeaponbox5x5.push({...currentItemCopy});
                this.containerTypeCommonFundStash.push({...currentItemCopy});
                this.containerTypePMCBody.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.WEAPONS_PISTOLS:
                this.containerTypeWeaponbox5x5.push({...currentItemCopy});
                this.containerTypeWeaponbox5x2.push({...currentItemCopy});
                this.containerTypeWeaponbox6x3.push({...currentItemCopy});
                this.containerTypeWeaponbox4x4.push({...currentItemCopy});
                this.containerTypeWoodenCrate.push({...currentItemCopy});
                this.containerTypeCommonFundStash.push({...currentItemCopy});
                this.containerTypeDeadScav.push({...currentItemCopy});
                this.containerTypePMCBody.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.WEAPONS_SMGS:
                this.containerTypeWeaponbox5x5.push({...currentItemCopy});
                this.containerTypeWeaponbox5x2.push({...currentItemCopy});
                this.containerTypeWeaponbox6x3.push({...currentItemCopy});
                this.containerTypeWeaponbox4x4.push({...currentItemCopy});
                this.containerTypeWoodenCrate.push({...currentItemCopy});
                this.containerTypeCommonFundStash.push({...currentItemCopy});
                this.containerTypeDeadScav.push({...currentItemCopy});
                this.containerTypePMCBody.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.WEAPONS_SHOTGUNS:
                this.containerTypeWeaponbox5x5.push({...currentItemCopy});
                this.containerTypeWeaponbox5x2.push({...currentItemCopy});
                this.containerTypeWeaponbox6x3.push({...currentItemCopy});
                this.containerTypeWeaponbox4x4.push({...currentItemCopy});
                this.containerTypeWoodenCrate.push({...currentItemCopy});
                this.containerTypeCommonFundStash.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.WEAPONS_SPECIALWEAPONS:
                this.containerTypeWeaponbox5x5.push({...currentItemCopy});
                this.containerTypeWeaponbox5x2.push({...currentItemCopy});
                this.containerTypeWeaponbox6x3.push({...currentItemCopy});
                this.containerTypeWeaponbox4x4.push({...currentItemCopy});
                this.containerTypeWoodenCrate.push({...currentItemCopy});
                this.containerTypeCommonFundStash.push({...currentItemCopy});
                if (currentItem.itemId === "6217726288ed9f0845317459")                          // RSP-30 reactive signal cartridge (Green)
                    {  this.containerTypeScavBody.push({...currentItemCopy});}
                break;
            case SPTLootCategoryName.WEAPONS_THROWABLES:
                this.containerTypeGrenadebox.push({...currentItemCopy});
                this.containerTypeWeaponbox5x5.push({...currentItemCopy});
                this.containerTypeWeaponbox5x2.push({...currentItemCopy});
                this.containerTypeWeaponbox6x3.push({...currentItemCopy});
                this.containerTypeWeaponbox4x4.push({...currentItemCopy});
                this.containerTypeWoodenCrate.push({...currentItemCopy});
                this.containerTypeCommonFundStash.push({...currentItemCopy});
                this.containerTypePMCBody.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.AMMO_AMMOPACKS:
                this.containerTypeWoodenAmmobox.push({...currentItemCopy});
                this.containerTypeWeaponbox5x5.push({...currentItemCopy});
                this.containerTypeWeaponbox5x2.push({...currentItemCopy});
                this.containerTypeWeaponbox6x3.push({...currentItemCopy});
                this.containerTypeWeaponbox4x4.push({...currentItemCopy});
                this.containerTypeWoodenCrate.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.AMMO_ROUNDS:
                this.checkAmmoCaliber(currentItem);
                if (currentItem.itemId !== "5656eb674bdc2d35148b457c" &&                        // 40mm VOG-25 grenade (exclude from Ammobox)
                    currentItem.itemId !== "5ede474b0c226a66f5402622" &&                        // 40x46mm M381 (HE) grenade
                    currentItem.itemId !== "5ede475b549eed7c6d5c18fb" &&                        // 40x46mm M386 (HE) grenade
                    currentItem.itemId !== "5ede4739e0350d05467f73e8" &&                        // 40x46mm M406 (HE) grenade
                    currentItem.itemId !== "5f0c892565703e5c461894e9" &&                        // 40x46mm M433 (HEDP) grenade
                    currentItem.itemId !== "5ede47405b097655935d7d16" &&                        // 40x46mm M441 (HE) grenade
                    currentItem.itemId !== "5ede475339ee016e8c534742")                          // 40x46mm M576 (MP-APERS) grenade
                    {   this.containerTypeWoodenAmmobox.push({...currentItemCopy});}
                if (currentItem.itemId === "5656eb674bdc2d35148b457c" ||                        // 40mm VOG-25 grenade (include to Grenadebox)
                    currentItem.itemId === "5ede474b0c226a66f5402622" ||                        // 40x46mm M381 (HE) grenade
                    currentItem.itemId === "5ede475b549eed7c6d5c18fb" ||                        // 40x46mm M386 (HE) grenade
                    currentItem.itemId === "5ede4739e0350d05467f73e8" ||                        // 40x46mm M406 (HE) grenade
                    currentItem.itemId === "5f0c892565703e5c461894e9" ||                        // 40x46mm M433 (HEDP) grenade
                    currentItem.itemId === "5ede47405b097655935d7d16" ||                        // 40x46mm M441 (HE) grenade
                    currentItem.itemId === "5ede475339ee016e8c534742")                          // 40x46mm M576 (MP-APERS) grenade
                    {
                        const adjustedCopy = {...currentItemCopy};
                        adjustedCopy.itemCustomAdded = true;   
                        this.containerTypeGrenadebox.push({...adjustedCopy});
                    }
                this.containerTypeWeaponbox5x5.push({...currentItemCopy});
                this.containerTypeWeaponbox5x2.push({...currentItemCopy});
                this.containerTypeWeaponbox6x3.push({...currentItemCopy});
                this.containerTypeWeaponbox4x4.push({...currentItemCopy});
                this.containerTypeWoodenCrate.push({...currentItemCopy});
                this.containerTypeDeadScav.push({...currentItemCopy});
                this.containerTypePMCBody.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.PROVISIONS_DRINKS:
                if (currentItem.itemId === "5751496424597720a27126da" ||                        // Can of Hot Rod energy drink
                    currentItem.itemId === "57514643245977207f2c2d09")                          // Can of TarCola soda
                    {
                        const adjustedCopy = {...currentItemCopy};
                        adjustedCopy.itemCustomAdded = true;
                        this.containerTypeJacket.push({...adjustedCopy});
                        this.containerTypeJacketDorms204.push({...adjustedCopy});
                    }
                if (currentItem.itemId === "590c5d4b86f774784e1b9c45")                          // Iskra ration pack
                    {   
                        const adjustedCopy = {...currentItemCopy};
                        adjustedCopy.itemCustomAdded = true;
                        this.containerTypeWeaponbox4x4.push({...adjustedCopy});
                    }
                this.containerTypeSportsbag01.push({...currentItemCopy});
                this.containerTypePlasticSuitcase.push({...currentItemCopy});
                this.containerTypeDeadScav.push({...currentItemCopy});
                this.containerTypeGroundCache.push({...currentItemCopy});
                this.containerTypeBurriedBarrelCache.push({...currentItemCopy});
                this.containerTypeRationSupplyCrate.push({...currentItemCopy});
                this.containerTypeSportsbag02.push({...currentItemCopy});
                this.containerTypePMCBody.push({...currentItemCopy});
                this.containerTypDeadCivilian.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.PROVISIONS_FOOD:
                if (currentItem.itemId === "57505f6224597709a92585a9" ||                        // Alyonka chocolate bar
                    currentItem.itemId === "5751487e245977207e26a315" ||                        // Emelya rye croutons
                    currentItem.itemId === "57347d3d245977448f7b7f61" ||                        // Rye croutons
                    currentItem.itemId === "544fb6cc4bdc2d34748b456e")                          // Slickers chocolate bar
                    {
                        const adjustedCopy = {...currentItemCopy};
                        adjustedCopy.itemCustomAdded = true;
                        this.containerTypeJacket.push({...adjustedCopy});
                        this.containerTypeJacketDorms204.push({...adjustedCopy});
                    }
                this.containerTypeSportsbag01.push({...currentItemCopy});
                this.containerTypePlasticSuitcase.push({...currentItemCopy});
                this.containerTypeDeadScav.push({...currentItemCopy});
                this.containerTypeGroundCache.push({...currentItemCopy});
                this.containerTypeBurriedBarrelCache.push({...currentItemCopy});
                this.containerTypeRationSupplyCrate.push({...currentItemCopy});
                this.containerTypeSportsbag02.push({...currentItemCopy});
                this.containerTypePMCBody.push({...currentItemCopy});
                this.containerTypDeadCivilian.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.MEDICATION_INJECTORS:
                if(currentItem.itemId === "544fb3f34bdc2d03748b456a")                           // Morphine injector
                    {   
                        const adjustedCopy = {...currentItemCopy};
                        adjustedCopy.itemCustomAdded = true;
                        this.containerTypeMedcase.push({...adjustedCopy});
                    }
                this.containerTypeSportsbag01.push({...currentItemCopy});
                this.containerTypePlasticSuitcase.push({...currentItemCopy});
                this.containerTypeMedbagSMU0601.push({...currentItemCopy});
                if (currentItem.itemId === "5c10c8fd86f7743d7d706df3" ||                        // Adrenaline injector
                    currentItem.itemId === "544fb3f34bdc2d03748b456a" ||                        // Morphine injector
                    currentItem.itemId === "5c0e530286f7747fa1419862")                          // Propital regenerative stimulant injector
                    {   
                        const adjustedCopy = {...currentItemCopy};
                        adjustedCopy.itemCustomAdded = true;
                        this.containerTypeMedicalSupplyCrate.push({...adjustedCopy});
                    }
                this.containerTypeDeadScav.push({...currentItemCopy});
                this.containerTypeGroundCache.push({...currentItemCopy});
                this.containerTypeBurriedBarrelCache.push({...currentItemCopy});
                this.containerTypeSportsbag02.push({...currentItemCopy});
                this.containerTypeMedbagSMU0602.push({...currentItemCopy});
                this.containerTypePMCBody.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.MEDICATION_INJURYTREATMENT:
                this.containerTypeMedcase.push({...currentItemCopy});
                this.containerTypeSportsbag01.push({...currentItemCopy});
                this.containerTypePlasticSuitcase.push({...currentItemCopy});
                this.containerTypeMedbagSMU0601.push({...currentItemCopy});
                this.containerTypeMedicalSupplyCrate.push({...currentItemCopy});
                this.containerTypeDeadScav.push({...currentItemCopy});
                this.containerTypeGroundCache.push({...currentItemCopy});
                this.containerTypeBurriedBarrelCache.push({...currentItemCopy});
                this.containerTypeSportsbag02.push({...currentItemCopy});
                this.containerTypeMedbagSMU0602.push({...currentItemCopy});
                this.containerTypePMCBody.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.MEDICATION_MEDKITS:
                this.containerTypeMedcase.push({...currentItemCopy});
                this.containerTypeSportsbag01.push({...currentItemCopy});
                this.containerTypePlasticSuitcase.push({...currentItemCopy});
                this.containerTypeJacketDorms114.push({...currentItemCopy});
                this.containerTypeMedbagSMU0601.push({...currentItemCopy});
                this.containerTypeMedicalSupplyCrate.push({...currentItemCopy});
                this.containerTypeDeadScav.push({...currentItemCopy});
                this.containerTypeGroundCache.push({...currentItemCopy});
                this.containerTypeBurriedBarrelCache.push({...currentItemCopy});
                this.containerTypeSportsbag02.push({...currentItemCopy});
                this.containerTypeMedbagSMU0602.push({...currentItemCopy});
                this.containerTypePMCBody.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.MEDICATION_PILLS:
                this.containerTypeMedcase.push({...currentItemCopy});
                this.containerTypeSportsbag01.push({...currentItemCopy});
                this.containerTypePlasticSuitcase.push({...currentItemCopy});
                this.containerTypeJacketDorms114.push({...currentItemCopy});
                this.containerTypeMedbagSMU0601.push({...currentItemCopy});
                this.containerTypeMedicalSupplyCrate.push({...currentItemCopy});
                this.containerTypeDeadScav.push({...currentItemCopy});
                this.containerTypeGroundCache.push({...currentItemCopy});
                this.containerTypeBurriedBarrelCache.push({...currentItemCopy});
                this.containerTypeSportsbag02.push({...currentItemCopy});
                this.containerTypeMedbagSMU0602.push({...currentItemCopy});
                this.containerTypePMCBody.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.KEYS_ELECTRONICKEYS:
                this.containerTypeDrawer.push({...currentItemCopy});
                if (config.keycardsInJackets)
                {
                    this.containerTypeJacket.push({...currentItemCopy});
                    this.containerTypeJacketDorms204.push({...currentItemCopy});
                }
                break;
            case SPTLootCategoryName.KEYS_MECHANICALKEYS:
                this.containerTypeDrawer.push({...currentItemCopy});
                this.containerTypeJacket.push({...currentItemCopy});
                this.containerTypeJacketDorms204.push({...currentItemCopy});
                if (currentItem.itemId === "59387a4986f77401cc236e62")                          // Dorm room 114 key
                    {   this.containerTypeJacketDorms114.push({...currentItemCopy});}
                if (currentItem.itemId === "5937ee6486f77408994ba448")                          // Machinery key
                    {   this.containerTypeJacketMachineryKey.push({...currentItemCopy});}
                if (currentItem.itemId === "658199aa38c79576a2569e13")                          // TerraGroup science office key
                    {   this.containerTypeLabTechnicianBody.push({...currentItemCopy});}
                break;
            case SPTLootCategoryName.INFOITEMS:
                this.containerTypeDrawer.push({...currentItemCopy});
                if (currentItem.itemId === "590c392f86f77444754deb29")                          // SSD drive
                    {   
                        const adjustedCopy = {...currentItemCopy};
                        adjustedCopy.itemCustomAdded = true;
                        this.containerTypePCBlock.push({...adjustedCopy});
                    }
                this.containerTypeJacket.push({...currentItemCopy});
                this.containerTypeSafe.push({...currentItemCopy});
                this.containerTypeSportsbag01.push({...currentItemCopy});
                this.containerTypePlasticSuitcase.push({...currentItemCopy});
                this.containerTypeDeadScav.push({...currentItemCopy});
                this.containerTypeGroundCache.push({...currentItemCopy});
                this.containerTypeBurriedBarrelCache.push({...currentItemCopy});
                this.containerTypeJacketDorms204.push({...currentItemCopy});
                this.containerTypeCommonFundStash.push({...currentItemCopy});
                this.containerTypeSportsbag02.push({...currentItemCopy});
                this.containerTypePMCBody.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.SPECIALEQUIPMENT:
                this.containerTypeDrawer.push({...currentItemCopy});
                this.containerTypeJacket.push({...currentItemCopy});
                this.containerTypeSportsbag01.push({...currentItemCopy});
                this.containerTypePlasticSuitcase.push({...currentItemCopy});
                this.containerTypeDeadScav.push({...currentItemCopy});
                this.containerTypeGroundCache.push({...currentItemCopy});
                this.containerTypeBurriedBarrelCache.push({...currentItemCopy});
                this.containerTypeJacketDorms204.push({...currentItemCopy});
                this.containerTypeSportsbag02.push({...currentItemCopy});
                this.containerTypePMCBody.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.MAPS:
                this.containerTypeDrawer.push({...currentItemCopy});
                break;
            case SPTLootCategoryName.MONEY:
                this.containerTypeDrawer.push({...currentItemCopy});
                this.containerTypeJacket.push({...currentItemCopy});
                this.containerTypeCashRegister.push({...currentItemCopy});
                this.containerTypeSafe.push({...currentItemCopy});
                this.containerTypeDeadScav.push({...currentItemCopy});
                this.containerTypeJacketDorms204.push({...currentItemCopy});
                this.containerTypeCashRegisterTAR.push({...currentItemCopy});
                this.containerTypeBankCashRegister.push({...currentItemCopy});
                this.containerTypeBankSafe.push({...currentItemCopy});
                this.containerTypePMCBody.push({...currentItemCopy});
                this.containerTypDeadCivilian.push({...currentItemCopy});
                break;
        }
    }


    public static checkAmmoCaliber(currentItem : IAllTheLootItem)
    {
        // check if the user wants high-tier ammo spawn as frequently as low tier (Default: true)
        let probabilityAmmo = 0;
        if (this.config.noAmmoValueWeightingForMagazines)
            probabilityAmmo = 1000;
        else
        {
            if (currentItem.itemPrice < 100)
                probabilityAmmo = 1000;
            else if (currentItem.itemPrice >= 100 && currentItem.itemPrice < 1000)
                probabilityAmmo = 500;
            else
                probabilityAmmo = 200;
        }

        let currentCaliberType = this.tables.templates.items[currentItem.itemId]._props.Caliber;
        if (!(currentCaliberType in this.staticAmmo))
        {
            this.staticAmmo[currentCaliberType] = [
                { tpl: currentItem.itemId, relativeProbability: probabilityAmmo},
            ]
        }
        else
            this.staticAmmo[currentCaliberType].push({ tpl: currentItem.itemId, relativeProbability: probabilityAmmo});
    }


    public static shuffleArray<T>(array: T[]): void {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // Generate random index from 0 to i
            // Swap elements between current index i and random index j
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
}
