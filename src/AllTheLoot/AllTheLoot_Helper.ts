export interface IAllTheLootItem
{
    itemId: string;
    itemLootCategory: SPTLootCategoryName;
    itemName: string;
    itemPrice: number;
    itemSpawnrate: number;
    itemHeight: number;
    itemWidth: number;
    itemFavorite: boolean;
    itemQuest: boolean;
    itemCustomAdded: boolean;
}


export enum SPTLootCategoryID
{
    BARTER_OTHERS = "5b47574386f77428ca22b2f4",
    BARTER_BUILDINGMATERIALS = "5b47574386f77428ca22b2ee",
    BARTER_ELECTRONICS = "5b47574386f77428ca22b2ef",
    BARTER_ENERGYELEMENTS = "5b47574386f77428ca22b2ed",
    BARTER_FLAMMABLEMATERIALS = "5b47574386f77428ca22b2f2",
    BARTER_HOUSEHOLDMATERIALS = "5b47574386f77428ca22b2f0",
    BARTER_MEDICALSUPPLIES = "5b47574386f77428ca22b2f3",
    BARTER_TOOLS = "5b47574386f77428ca22b2f6",
    BARTER_VALUABLES = "5b47574386f77428ca22b2f1",
    GEAR_BACKPACKS = "5b5f6f6c86f774093f2ecf0b",
    GEAR_BODYARMOR = "5b5f701386f774093f2ecf0f",
    GEAR_EYEWEAR = "5b47574386f77428ca22b331",
    GEAR_FACECOVERS = "5b47574386f77428ca22b32f",
    GEAR_GEARCOMPONENTS = "5b5f704686f77447ec5d76d7",
    GEAR_HEADGEAR = "5b47574386f77428ca22b330",
    GEAR_HEADSETS = "5b5f6f3c86f774094242ef87",
    GEAR_SECURECONTAINERS = "5b5f6fd286f774093f2ecf0d",
    GEAR_STORAGECONTAINERS = "5b5f6fa186f77409407a7eb7",
    GEAR_TACTICALRIGS = "5b5f6f8786f77447ed563642",
    WPM_FM_AUXILIARYPARTS = "5b5f74cc86f77447ec5d770a",
    WPM_FM_BIPODS = "5b5f71c186f77409407a7ec0",
    WPM_FM_FOREGRIPS = "5b5f71de86f774093f2ecf13",
    WPM_FM_LLD_FLASHLIGHTS = "5b5f73ab86f774094242f195",
    WPM_FM_LLD_LASERTARGETPOINTERS = "5b5f73c486f77447ec5d7704",
    WPM_FM_LLD_TACTICALCOMBODEVICES = "5b5f737886f774093e6cb4fb",
    WPM_FM_MD_FLASHHIDERSBRAKES = "5b5f724c86f774093f2ecf15",
    WPM_FM_MD_MUZZLEADAPTERS = "5b5f72f786f77447ec5d7702",
    WPM_FM_MD_SUPPRESSORS = "5b5f731a86f774093e6cb4f9",
    WPM_FM_S_ASSAULTSCOPES = "5b5f740a86f77447ec5d7706",
    WPM_FM_S_COLLIMATORS = "5b5f742686f774093e6cb4ff",
    WPM_FM_S_COMPACTCOLLIMATORS = "5b5f744786f774094242f197",
    WPM_FM_S_IRONSIGHTS = "5b5f746686f77447ec5d7708",
    WPM_FM_S_OPTICS = "5b5f748386f774093e6cb501",
    WPM_FM_S_SPECIALPURPOSESIGHTS = "5b5f749986f774094242f199",
    WPM_GM_CHARGINGHANDLES = "5b5f751486f77447ec5d770c",
    WPM_GM_LAUNCHERS = "5b5f752e86f774093e6cb505",
    WPM_GM_MAGAZINES = "5b5f754a86f774094242f19b",
    WPM_GM_MOUNTS = "5b5f755f86f77447ec5d770e",
    WPM_GM_STOCKSCHASSIS = "5b5f757486f774093e6cb507",
    WPM_VP_BARRELS = "5b5f75c686f774094242f19f",
    WPM_VP_GASBLOCKS = "5b5f760586f774093e6cb509",
    WPM_VP_HANDGUARDS = "5b5f75e486f77447ec5d7712",
    WPM_VP_PISTOLGRIPS = "5b5f761f86f774094242f1a1",
    WPM_VP_RECEIVERSSLIDES = "5b5f764186f77447ec5d7714",
    WEAPONS_ASSAULTCARBINES = "5b5f78e986f77447ed5636b1",
    WEAPONS_ASSAULTRIFLES = "5b5f78fc86f77409407a7f90",
    WEAPONS_BOLTACTIONRIFLES = "5b5f798886f77447ed5636b5",
    WEAPONS_GRENADELAUNCHERS = "5b5f79d186f774093f2ed3c2",
    WEAPONS_MACHINEGUNS = "5b5f79a486f77409407a7f94",
    WEAPONS_MARKSMANRIFLES = "5b5f791486f774093f2ed3be",
    WEAPONS_MELEEWEAPONS = "5b5f7a0886f77409407a7f96",
    WEAPONS_PISTOLS = "5b5f792486f77447ed5636b3",
    WEAPONS_SMGS = "5b5f796a86f774093f2ed3c0",
    WEAPONS_SHOTGUNS = "5b5f794b86f77409407a7f92",
    WEAPONS_SPECIALWEAPONS = "5b5f79eb86f77447ed5636b7",
    WEAPONS_THROWABLES = "5b5f7a2386f774093f2ed3c4",
    AMMO_AMMOPACKS = "5b47574386f77428ca22b33c",
    AMMO_ROUNDS = "5b47574386f77428ca22b33b",
    PROVISIONS_DRINKS = "5b47574386f77428ca22b335",
    PROVISIONS_FOOD = "5b47574386f77428ca22b336",
    MEDICATION_INJECTORS = "5b47574386f77428ca22b33a",
    MEDICATION_INJURYTREATMENT = "5b47574386f77428ca22b339",
    MEDICATION_MEDKITS = "5b47574386f77428ca22b338",
    MEDICATION_PILLS = "5b47574386f77428ca22b337",
    KEYS_ELECTRONICKEYS = "5c518ed586f774119a772aee",
    KEYS_MECHANICALKEYS = "5c518ec986f7743b68682ce2",
    INFOITEMS = "5b47574386f77428ca22b341",
    SPECIALEQUIPMENT = "5b47574386f77428ca22b345",
    MAPS = "5b47574386f77428ca22b343",
    MONEY = "5b5f78b786f77447ed5636af",
    QUEST = "5b619f1a86f77450a702a6f3"
}


export const selectedCategories = [
    "BARTER_OTHERS",
    "BARTER_BUILDINGMATERIALS",
    "BARTER_ELECTRONICS",
    "BARTER_ENERGYELEMENTS",
    "BARTER_FLAMMABLEMATERIALS",
    "BARTER_HOUSEHOLDMATERIALS",
    "BARTER_MEDICALSUPPLIES",
    "BARTER_TOOLS",
    "BARTER_VALUABLES",
    "AMMO_ROUNDS",
    "PROVISIONS_DRINKS",
    "PROVISIONS_FOOD",
    "MEDICATION_INJURYTREATMENT",
    "KEYS_MECHANICALKEYS",
    "MONEY"
];


export enum SPTLootContainerID{
    DRAWER = "578f87b7245977356274f2cd",
    CASHREGISTER = "578f879c24597735401e6bc6",
    PCBLOCK = "59139c2186f77411564f8e42",
    JACKET = "578f8778245977358849a9b5",
    TOOLBOX = "5909d50c86f774659e6aaebe",
    MEDCASE = "5909d4c186f7746ad34e805a",
    SAFE = "578f8782245977354405a1e3",
    WEAPONBOX5X5 = "5909d89086f77472591234a0",
    WEAPONBOX5X2 = "5909d5ef86f77467974efbd8",
    SPORTSBAG01 = "578f87a3245977356274f2cb",
    WEAPONBOX6X3 = "5909d76c86f77471e53d2adf",
    WEAPONBOX4X4 = "5909d7cf86f77470ee57d75a",
    GRENADEBOX = "5909d36d86f774660f0bb900",
    PLASTICSUITCASE = "5c052cea86f7746b2101e8d8",
    MEDBAGSMU0601 = "5909d24f86f77466f56e6855",
    WOODENCRATE = "578f87ad245977356274f2cc",
    MEDICALSUPPLYCRATE = "5d6fe50986f77449d97f7463",
    TECHNICALSUPPLYCRATE = "5d6fd45b86f774317075ed43",
    DEADSCAV = "5909e4b686f7747f5b744fa4",
    GROUNDCACHE = "5d6d2b5486f774785c2ba8ea",
    BURRIEDBARRELCACHE = "5d6d2bb386f774785b07a77a",
    WOODENAMMOBOX = "5909d45286f77465a8136dc6",
    JACKETDORMS114 = "59387ac686f77401442ddd61",
    JACKETMACHINERYKEY = "5937ef2b86f77408a47244b3",
    RATIONSUPPLYCRATE = "5d6fd13186f77424ad2a8c69",
    JACKETDORMS204 = "5914944186f774189e5e76c2",
    COMMONFUNDSTASH = "5d07b91b86f7745a077a9432",
    SPORTSBAG02 = "61aa1e9a32a4743c3453d2cf",
    MEDBAGSMU0602 = "61aa1ead84ea0800645777fd",
    CASHREGISTERTAR = "5ad74cf586f774391278f6f0",
    BANKCASHREGISTER = "64d116f41a9c6143a956127d",
    BANKSAFE = "64d11702dd0cd96ab82c3280",
    PMCBODY = "6582e6d7b14c3f72eb071420",
    DEADCIVILIAN = "658420d8085fea07e674cdb6",
    SCAVBODY = "6582e6bb0c3b9823fe6d1840",
    LABTECHNICIANBODY = "6582e6c6edf14c4c6023adf2"
}


export enum SPTLootContainerIndex{
    DRAWER = 0,
    CASHREGISTER,
    PCBLOCK,
    JACKET,
    TOOLBOX,
    MEDCASE,
    SAFE,
    WEAPONBOX5X5,
    WEAPONBOX5X2,
    SPORTSBAG01,
    WEAPONBOX6X3,
    WEAPONBOX4X4,
    GRENADEBOX,
    PLASTICSUITCASE,
    MEDBAGSMU0601,
    WOODENCRATE,
    MEDICALSUPPLYCRATE,
    TECHNICALSUPPLYCRATE,
    DEADSCAV,
    GROUNDCACHE,
    BURRIEDBARRELCACHE,
    WOODENAMMOBOX,
    JACKETDORMS114,
    JACKETMACHINERYKEY,
    RATIONSUPPLYCRATE,
    JACKETDORMS204,
    COMMONFUNDSTASH,
    SPORTSBAG02,
    MEDBAGSMU0602,
    CASHREGISTERTAR,
    BANKCASHREGISTER,
    BANKSAFE,
    PMCBODY,
    DEADCIVILIAN,
    SCAVBODY,
    LABTECHNICIANBODY
}


export enum SPTLootContainerNameConsole{
    DRAWER = "Drawer",
    CASHREGISTER = "Cash Register",
    PCBLOCK = "PC Block",
    JACKET = "Jacket",
    TOOLBOX = "Toolbox",
    MEDCASE = "Medcase",
    SAFE = "Safe",
    WEAPONBOX5X5 = "Weaponbox (5x5)",
    WEAPONBOX5X2 = "Weaponbox (5x2)",
    SPORTSBAG01 = "Sportsbag (I)",
    WEAPONBOX6X3 = "Weaponbox (6x3)",
    WEAPONBOX4X4 = "Weaponbox (4x4)",
    GRENADEBOX = "Grenadebox",
    PLASTICSUITCASE = "Plastic Suitcase",
    MEDBAGSMU0601 = "Medbag SMU06 (I)",
    WOODENCRATE = "Wooden Crate",
    MEDICALSUPPLYCRATE = "Medical Supply Crate",
    TECHNICALSUPPLYCRATE = "Technical Supply Crate",
    DEADSCAV = "Dead Scav",
    GROUNDCACHE = "Ground Cache",
    BURRIEDBARRELCACHE = "Burried Barrel Cache",
    WOODENAMMOBOX = "Wooden Ammobox",
    JACKETDORMS114 = "Jacket Dorms 114",
    JACKETMACHINERYKEY = "Jacket Machinery Key",
    RATIONSUPPLYCRATE = "Ration Supply Crate",
    JACKETDORMS204 = "Jacket Dorms 204",
    COMMONFUNDSTASH = "Common Fund Stash",
    SPORTSBAG02 = "Sportsbag (II)",
    MEDBAGSMU0602 = "Medbag SMU06 (II)",
    CASHREGISTERTAR = "Cash Register TAR2-2",
    BANKCASHREGISTER = "Bank Cash Register",
    BANKSAFE = "Bank Safe",
    PMCBODY = "PMC Body",
    DEADCIVILIAN = "Dead Civilian",
    SCAVBODY = "Scav Body",
    LABTECHNICIANBODY = "Lab Technician Body"
}


export enum SPTLootContainerName{
    DRAWER = "Drawer",
    CASHREGISTER = "CashRegister",
    PCBLOCK = "PCBlock",
    JACKET = "Jacket",
    TOOLBOX = "Toolbox",
    MEDCASE = "Medcase",
    SAFE = "Safe",
    WEAPONBOX5X5 = "Weaponbox5x5",
    WEAPONBOX5X2 = "Weaponbox5x2",
    SPORTSBAG01 = "Sportsbag",
    WEAPONBOX6X3 = "Weaponbox6x3",
    WEAPONBOX4X4 = "Weaponbox4x4",
    GRENADEBOX = "Grenadebox",
    PLASTICSUITCASE = "PlasticSuitcase",
    MEDBAGSMU0601 = "MedbagSMU06",
    WOODENCRATE = "WoodenCrate",
    MEDICALSUPPLYCRATE = "MedicalSupplyCrate",
    TECHNICALSUPPLYCRATE = "TechnicalSupplyCrate",
    DEADSCAV = "DeadScav",
    GROUNDCACHE = "GroundCache",
    BURRIEDBARRELCACHE = "BurriedBarrelCache",
    WOODENAMMOBOX = "WoodenAmmobox",
    JACKETDORMS114 = "JacketDorms114",
    JACKETMACHINERYKEY = "JacketMachineryKey",
    RATIONSUPPLYCRATE = "RationSupplyCrate",
    JACKETDORMS204 = "JacketDorms204",
    COMMONFUNDSTASH = "CommonFundStash",
    SPORTSBAG02 = "Sportsbag",
    MEDBAGSMU0602 = "MedbagSMU06",
    CASHREGISTERTAR = "CashRegisterTAR",
    BANKCASHREGISTER = "BankCashRegister",
    BANKSAFE = "BankSafe",
    PMCBODY = "PMCBody",
    DEADCIVILIAN = "DeadCivilian",
    SCAVBODY = "ScavBody",
    LABTECHNICIANBODY = "LabTechnicianBody"
}


export enum SPTLootCategoryName
{
    BARTER_OTHERS = "BARTER_OTHERS",
    BARTER_BUILDINGMATERIALS = "BARTER_BUILDINGMATERIALS",
    BARTER_ELECTRONICS = "BARTER_ELECTRONICS",
    BARTER_ENERGYELEMENTS = "BARTER_ENERGYELEMENTS",
    BARTER_FLAMMABLEMATERIALS = "BARTER_FLAMMABLEMATERIALS",
    BARTER_HOUSEHOLDMATERIALS = "BARTER_HOUSEHOLDMATERIALS",
    BARTER_MEDICALSUPPLIES = "BARTER_MEDICALSUPPLIES",
    BARTER_TOOLS = "BARTER_TOOLS",
    BARTER_VALUABLES = "BARTER_VALUABLES",
    GEAR_BACKPACKS = "GEAR_BACKPACKS",
    GEAR_BODYARMOR = "GEAR_BODYARMOR",
    GEAR_EYEWEAR = "GEAR_EYEWEAR",
    GEAR_FACECOVERS = "GEAR_FACECOVERS",
    GEAR_GEARCOMPONENTS = "GEAR_GEARCOMPONENTS",
    GEAR_HEADGEAR = "GEAR_HEADGEAR",
    GEAR_HEADSETS = "GEAR_HEADSETS",
    GEAR_SECURECONTAINERS = "GEAR_SECURECONTAINERS",
    GEAR_STORAGECONTAINERS = "GEAR_STORAGECONTAINERS",
    GEAR_TACTICALRIGS = "GEAR_TACTICALRIGS",
    WPM_FM_AUXILIARYPARTS = "WPM_FM_AUXILIARYPARTS",
    WPM_FM_BIPODS = "WPM_FM_BIPODS",
    WPM_FM_FOREGRIPS = "WPM_FM_FOREGRIPS",
    WPM_FM_LLD_FLASHLIGHTS = "WPM_FM_LLD_FLASHLIGHTS",
    WPM_FM_LLD_LASERTARGETPOINTERS = "WPM_FM_LLD_LASERTARGETPOINTERS",
    WPM_FM_LLD_TACTICALCOMBODEVICES = "WPM_FM_LLD_TACTICALCOMBODEVICES",
    WPM_FM_MD_FLASHHIDERSBRAKES = "WPM_FM_MD_FLASHHIDERSBRAKES",
    WPM_FM_MD_MUZZLEADAPTERS = "WPM_FM_MD_MUZZLEADAPTERS",
    WPM_FM_MD_SUPPRESSORS = "WPM_FM_MD_SUPPRESSORS",
    WPM_FM_S_ASSAULTSCOPES = "WPM_FM_S_ASSAULTSCOPES",
    WPM_FM_S_COLLIMATORS = "WPM_FM_S_COLLIMATORS",
    WPM_FM_S_COMPACTCOLLIMATORS = "WPM_FM_S_COMPACTCOLLIMATORS",
    WPM_FM_S_IRONSIGHTS = "WPM_FM_S_IRONSIGHTS",
    WPM_FM_S_OPTICS = "WPM_FM_S_OPTICS",
    WPM_FM_S_SPECIALPURPOSESIGHTS = "WPM_FM_S_SPECIALPURPOSESIGHTS",
    WPM_GM_CHARGINGHANDLES = "WPM_GM_CHARGINGHANDLES",
    WPM_GM_LAUNCHERS = "WPM_GM_LAUNCHERS",
    WPM_GM_MAGAZINES = "WPM_GM_MAGAZINES",
    WPM_GM_MOUNTS = "WPM_GM_MOUNTS",
    WPM_GM_STOCKSCHASSIS = "WPM_GM_STOCKSCHASSIS",
    WPM_VP_BARRELS = "WPM_VP_BARRELS",
    WPM_VP_GASBLOCKS = "WPM_VP_GASBLOCKS",
    WPM_VP_HANDGUARDS = "WPM_VP_HANDGUARDS",
    WPM_VP_PISTOLGRIPS = "WPM_VP_PISTOLGRIPS",
    WPM_VP_RECEIVERSSLIDES = "WPM_VP_RECEIVERSSLIDES",
    WEAPONS_ASSAULTCARBINES = "WEAPONS_ASSAULTCARBINES",
    WEAPONS_ASSAULTRIFLES = "WEAPONS_ASSAULTRIFLES",
    WEAPONS_BOLTACTIONRIFLES = "WEAPONS_BOLTACTIONRIFLES",
    WEAPONS_GRENADELAUNCHERS = "WEAPONS_GRENADELAUNCHERS",
    WEAPONS_MACHINEGUNS = "WEAPONS_MACHINEGUNS",
    WEAPONS_MARKSMANRIFLES = "WEAPONS_MARKSMANRIFLES",
    WEAPONS_MELEEWEAPONS = "WEAPONS_MELEEWEAPONS",
    WEAPONS_PISTOLS = "WEAPONS_PISTOLS",
    WEAPONS_SMGS = "WEAPONS_SMGS",
    WEAPONS_SHOTGUNS = "WEAPONS_SHOTGUNS",
    WEAPONS_SPECIALWEAPONS = "WEAPONS_SPECIALWEAPONS",
    WEAPONS_THROWABLES = "WEAPONS_THROWABLES",
    AMMO_AMMOPACKS = "AMMO_AMMOPACKS",
    AMMO_ROUNDS = "AMMO_ROUNDS",
    PROVISIONS_DRINKS = "PROVISIONS_DRINKS",
    PROVISIONS_FOOD = "PROVISIONS_FOOD",
    MEDICATION_INJECTORS = "MEDICATION_INJECTORS",
    MEDICATION_INJURYTREATMENT = "MEDICATION_INJURYTREATMENT",
    MEDICATION_MEDKITS = "MEDICATION_MEDKITS",
    MEDICATION_PILLS = "MEDICATION_PILLS",
    KEYS_ELECTRONICKEYS = "KEYS_ELECTRONICKEYS",
    KEYS_MECHANICALKEYS = "KEYS_MECHANICALKEYS",
    INFOITEMS = "INFOITEMS",
    SPECIALEQUIPMENT = "SPECIALEQUIPMENT",
    MAPS = "MAPS",
    MONEY = "MONEY",
    QUEST = "QUEST"
}


const containerIndexToName: Record<number, SPTLootContainerNameConsole> = {
    [SPTLootContainerIndex.DRAWER]: SPTLootContainerNameConsole.DRAWER,
    [SPTLootContainerIndex.CASHREGISTER]: SPTLootContainerNameConsole.CASHREGISTER,
    [SPTLootContainerIndex.PCBLOCK]: SPTLootContainerNameConsole.PCBLOCK,
    [SPTLootContainerIndex.JACKET]: SPTLootContainerNameConsole.JACKET,
    [SPTLootContainerIndex.TOOLBOX]: SPTLootContainerNameConsole.TOOLBOX,
    [SPTLootContainerIndex.MEDCASE]: SPTLootContainerNameConsole.MEDCASE,
    [SPTLootContainerIndex.SAFE]: SPTLootContainerNameConsole.SAFE,
    [SPTLootContainerIndex.WEAPONBOX5X5]: SPTLootContainerNameConsole.WEAPONBOX5X5,
    [SPTLootContainerIndex.WEAPONBOX5X2]: SPTLootContainerNameConsole.WEAPONBOX5X2,
    [SPTLootContainerIndex.SPORTSBAG01]: SPTLootContainerNameConsole.SPORTSBAG01,
    [SPTLootContainerIndex.WEAPONBOX6X3]: SPTLootContainerNameConsole.WEAPONBOX6X3,
    [SPTLootContainerIndex.WEAPONBOX4X4]: SPTLootContainerNameConsole.WEAPONBOX4X4,
    [SPTLootContainerIndex.GRENADEBOX]: SPTLootContainerNameConsole.GRENADEBOX,
    [SPTLootContainerIndex.PLASTICSUITCASE]: SPTLootContainerNameConsole.PLASTICSUITCASE,
    [SPTLootContainerIndex.MEDBAGSMU0601]: SPTLootContainerNameConsole.MEDBAGSMU0601,
    [SPTLootContainerIndex.WOODENCRATE]: SPTLootContainerNameConsole.WOODENCRATE,
    [SPTLootContainerIndex.MEDICALSUPPLYCRATE]: SPTLootContainerNameConsole.MEDICALSUPPLYCRATE,
    [SPTLootContainerIndex.TECHNICALSUPPLYCRATE]: SPTLootContainerNameConsole.TECHNICALSUPPLYCRATE,
    [SPTLootContainerIndex.DEADSCAV]: SPTLootContainerNameConsole.DEADSCAV,
    [SPTLootContainerIndex.GROUNDCACHE]: SPTLootContainerNameConsole.GROUNDCACHE,
    [SPTLootContainerIndex.BURRIEDBARRELCACHE]: SPTLootContainerNameConsole.BURRIEDBARRELCACHE,
    [SPTLootContainerIndex.WOODENAMMOBOX]: SPTLootContainerNameConsole.WOODENAMMOBOX,
    [SPTLootContainerIndex.JACKETDORMS114]: SPTLootContainerNameConsole.JACKETDORMS114,
    [SPTLootContainerIndex.JACKETMACHINERYKEY]: SPTLootContainerNameConsole.JACKETMACHINERYKEY,
    [SPTLootContainerIndex.RATIONSUPPLYCRATE]: SPTLootContainerNameConsole.RATIONSUPPLYCRATE,
    [SPTLootContainerIndex.JACKETDORMS204]: SPTLootContainerNameConsole.JACKETDORMS204,
    [SPTLootContainerIndex.COMMONFUNDSTASH]: SPTLootContainerNameConsole.COMMONFUNDSTASH,
    [SPTLootContainerIndex.SPORTSBAG02]: SPTLootContainerNameConsole.SPORTSBAG02,
    [SPTLootContainerIndex.MEDBAGSMU0602]: SPTLootContainerNameConsole.MEDBAGSMU0602,
    [SPTLootContainerIndex.CASHREGISTERTAR]: SPTLootContainerNameConsole.CASHREGISTERTAR,
    [SPTLootContainerIndex.BANKCASHREGISTER]: SPTLootContainerNameConsole.BANKCASHREGISTER,
    [SPTLootContainerIndex.BANKSAFE]: SPTLootContainerNameConsole.BANKSAFE,
    [SPTLootContainerIndex.PMCBODY]: SPTLootContainerNameConsole.PMCBODY,
    [SPTLootContainerIndex.DEADCIVILIAN]: SPTLootContainerNameConsole.DEADCIVILIAN,
    [SPTLootContainerIndex.SCAVBODY]: SPTLootContainerNameConsole.SCAVBODY,
    [SPTLootContainerIndex.LABTECHNICIANBODY]: SPTLootContainerNameConsole.LABTECHNICIANBODY,
}


export function getContainerName(index: SPTLootContainerIndex): string
{
    return containerIndexToName[index] || "Unknown";
}


export function mapParentIdToCategoryName(parentId: string): SPTLootCategoryName
{
    switch (parentId)
    {
        case SPTLootCategoryID.BARTER_OTHERS:
            return SPTLootCategoryName.BARTER_OTHERS;
        case SPTLootCategoryID.BARTER_BUILDINGMATERIALS:
            return SPTLootCategoryName.BARTER_BUILDINGMATERIALS;
        case SPTLootCategoryID.BARTER_ELECTRONICS:
            return SPTLootCategoryName.BARTER_ELECTRONICS;
        case SPTLootCategoryID.BARTER_ENERGYELEMENTS:
            return SPTLootCategoryName.BARTER_ENERGYELEMENTS;
        case SPTLootCategoryID.BARTER_FLAMMABLEMATERIALS:
            return SPTLootCategoryName.BARTER_FLAMMABLEMATERIALS;
        case SPTLootCategoryID.BARTER_HOUSEHOLDMATERIALS:
            return SPTLootCategoryName.BARTER_HOUSEHOLDMATERIALS;
        case SPTLootCategoryID.BARTER_MEDICALSUPPLIES:
            return SPTLootCategoryName.BARTER_MEDICALSUPPLIES;
        case SPTLootCategoryID.BARTER_TOOLS:
            return SPTLootCategoryName.BARTER_TOOLS;
        case SPTLootCategoryID.BARTER_VALUABLES:
            return SPTLootCategoryName.BARTER_VALUABLES;
        case SPTLootCategoryID.GEAR_BACKPACKS:
            return SPTLootCategoryName.GEAR_BACKPACKS;
        case SPTLootCategoryID.GEAR_BODYARMOR:
            return SPTLootCategoryName.GEAR_BODYARMOR;
        case SPTLootCategoryID.GEAR_EYEWEAR:
            return SPTLootCategoryName.GEAR_EYEWEAR;
        case SPTLootCategoryID.GEAR_FACECOVERS:
            return SPTLootCategoryName.GEAR_FACECOVERS;
        case SPTLootCategoryID.GEAR_GEARCOMPONENTS:
            return SPTLootCategoryName.GEAR_GEARCOMPONENTS;
        case SPTLootCategoryID.GEAR_HEADGEAR:
            return SPTLootCategoryName.GEAR_HEADGEAR;
        case SPTLootCategoryID.GEAR_HEADSETS:
            return SPTLootCategoryName.GEAR_HEADSETS;
        case SPTLootCategoryID.GEAR_SECURECONTAINERS:
            return SPTLootCategoryName.GEAR_SECURECONTAINERS;
        case SPTLootCategoryID.GEAR_STORAGECONTAINERS:
            return SPTLootCategoryName.GEAR_STORAGECONTAINERS;
        case SPTLootCategoryID.GEAR_TACTICALRIGS:
            return SPTLootCategoryName.GEAR_TACTICALRIGS;
        case SPTLootCategoryID.WPM_FM_AUXILIARYPARTS:
            return SPTLootCategoryName.WPM_FM_AUXILIARYPARTS;
        case SPTLootCategoryID.WPM_FM_BIPODS:
            return SPTLootCategoryName.WPM_FM_BIPODS;
        case SPTLootCategoryID.WPM_FM_FOREGRIPS:
            return SPTLootCategoryName.WPM_FM_FOREGRIPS;
        case SPTLootCategoryID.WPM_FM_LLD_FLASHLIGHTS:
            return SPTLootCategoryName.WPM_FM_LLD_FLASHLIGHTS;
        case SPTLootCategoryID.WPM_FM_LLD_LASERTARGETPOINTERS:
            return SPTLootCategoryName.WPM_FM_LLD_LASERTARGETPOINTERS;
        case SPTLootCategoryID.WPM_FM_LLD_TACTICALCOMBODEVICES:
            return SPTLootCategoryName.WPM_FM_LLD_TACTICALCOMBODEVICES;
        case SPTLootCategoryID.WPM_FM_MD_FLASHHIDERSBRAKES:
            return SPTLootCategoryName.WPM_FM_MD_FLASHHIDERSBRAKES;
        case SPTLootCategoryID.WPM_FM_MD_MUZZLEADAPTERS:
            return SPTLootCategoryName.WPM_FM_MD_MUZZLEADAPTERS;
        case SPTLootCategoryID.WPM_FM_MD_SUPPRESSORS:
            return SPTLootCategoryName.WPM_FM_MD_SUPPRESSORS;
        case SPTLootCategoryID.WPM_FM_S_ASSAULTSCOPES:
            return SPTLootCategoryName.WPM_FM_S_ASSAULTSCOPES;
        case SPTLootCategoryID.WPM_FM_S_COLLIMATORS:
            return SPTLootCategoryName.WPM_FM_S_COLLIMATORS;
        case SPTLootCategoryID.WPM_FM_S_COMPACTCOLLIMATORS:
            return SPTLootCategoryName.WPM_FM_S_COMPACTCOLLIMATORS;
        case SPTLootCategoryID.WPM_FM_S_IRONSIGHTS:
            return SPTLootCategoryName.WPM_FM_S_IRONSIGHTS;
        case SPTLootCategoryID.WPM_FM_S_OPTICS:
            return SPTLootCategoryName.WPM_FM_S_OPTICS;
        case SPTLootCategoryID.WPM_FM_S_SPECIALPURPOSESIGHTS:
            return SPTLootCategoryName.WPM_FM_S_SPECIALPURPOSESIGHTS;
        case SPTLootCategoryID.WPM_GM_CHARGINGHANDLES:
            return SPTLootCategoryName.WPM_GM_CHARGINGHANDLES;
        case SPTLootCategoryID.WPM_GM_LAUNCHERS:
            return SPTLootCategoryName.WPM_GM_LAUNCHERS;
        case SPTLootCategoryID.WPM_GM_MAGAZINES:
            return SPTLootCategoryName.WPM_GM_MAGAZINES;
        case SPTLootCategoryID.WPM_GM_MOUNTS:
            return SPTLootCategoryName.WPM_GM_MOUNTS;
        case SPTLootCategoryID.WPM_GM_STOCKSCHASSIS:
            return SPTLootCategoryName.WPM_GM_STOCKSCHASSIS;
        case SPTLootCategoryID.WPM_VP_BARRELS:
            return SPTLootCategoryName.WPM_VP_BARRELS;
        case SPTLootCategoryID.WPM_VP_GASBLOCKS:
            return SPTLootCategoryName.WPM_VP_GASBLOCKS;
        case SPTLootCategoryID.WPM_VP_HANDGUARDS:
            return SPTLootCategoryName.WPM_VP_HANDGUARDS;
        case SPTLootCategoryID.WPM_VP_PISTOLGRIPS:
            return SPTLootCategoryName.WPM_VP_PISTOLGRIPS;
        case SPTLootCategoryID.WPM_VP_RECEIVERSSLIDES:
            return SPTLootCategoryName.WPM_VP_RECEIVERSSLIDES;
        case SPTLootCategoryID.WEAPONS_ASSAULTCARBINES:
            return SPTLootCategoryName.WEAPONS_ASSAULTCARBINES;
        case SPTLootCategoryID.WEAPONS_ASSAULTRIFLES:
            return SPTLootCategoryName.WEAPONS_ASSAULTRIFLES;
        case SPTLootCategoryID.WEAPONS_BOLTACTIONRIFLES:
            return SPTLootCategoryName.WEAPONS_BOLTACTIONRIFLES;
        case SPTLootCategoryID.WEAPONS_GRENADELAUNCHERS:
            return SPTLootCategoryName.WEAPONS_GRENADELAUNCHERS;
        case SPTLootCategoryID.WEAPONS_MACHINEGUNS:
            return SPTLootCategoryName.WEAPONS_MACHINEGUNS;
        case SPTLootCategoryID.WEAPONS_MARKSMANRIFLES:
            return SPTLootCategoryName.WEAPONS_MARKSMANRIFLES;
        case SPTLootCategoryID.WEAPONS_MELEEWEAPONS:
            return SPTLootCategoryName.WEAPONS_MELEEWEAPONS;
        case SPTLootCategoryID.WEAPONS_PISTOLS:
            return SPTLootCategoryName.WEAPONS_PISTOLS;
        case SPTLootCategoryID.WEAPONS_SMGS:
            return SPTLootCategoryName.WEAPONS_SMGS;
        case SPTLootCategoryID.WEAPONS_SHOTGUNS:
            return SPTLootCategoryName.WEAPONS_SHOTGUNS;
        case SPTLootCategoryID.WEAPONS_SPECIALWEAPONS:
            return SPTLootCategoryName.WEAPONS_SPECIALWEAPONS;
        case SPTLootCategoryID.WEAPONS_THROWABLES:
            return SPTLootCategoryName.WEAPONS_THROWABLES;
        case SPTLootCategoryID.AMMO_AMMOPACKS:
            return SPTLootCategoryName.AMMO_AMMOPACKS;
        case SPTLootCategoryID.AMMO_ROUNDS:
            return SPTLootCategoryName.AMMO_ROUNDS;
        case SPTLootCategoryID.PROVISIONS_DRINKS:
            return SPTLootCategoryName.PROVISIONS_DRINKS;
        case SPTLootCategoryID.PROVISIONS_FOOD:
            return SPTLootCategoryName.PROVISIONS_FOOD;
        case SPTLootCategoryID.MEDICATION_INJECTORS:
            return SPTLootCategoryName.MEDICATION_INJECTORS;
        case SPTLootCategoryID.MEDICATION_INJURYTREATMENT:
            return SPTLootCategoryName.MEDICATION_INJURYTREATMENT;
        case SPTLootCategoryID.MEDICATION_MEDKITS:
            return SPTLootCategoryName.MEDICATION_MEDKITS;
        case SPTLootCategoryID.MEDICATION_PILLS:
            return SPTLootCategoryName.MEDICATION_PILLS;
        case SPTLootCategoryID.KEYS_ELECTRONICKEYS:
            return SPTLootCategoryName.KEYS_ELECTRONICKEYS;
        case SPTLootCategoryID.KEYS_MECHANICALKEYS:
            return SPTLootCategoryName.KEYS_MECHANICALKEYS;
        case SPTLootCategoryID.INFOITEMS:
            return SPTLootCategoryName.INFOITEMS;
        case SPTLootCategoryID.SPECIALEQUIPMENT:
            return SPTLootCategoryName.SPECIALEQUIPMENT;
        case SPTLootCategoryID.MAPS:
            return SPTLootCategoryName.MAPS;
        case SPTLootCategoryID.MONEY:
            return SPTLootCategoryName.MONEY;
        case SPTLootCategoryID.QUEST:
            return SPTLootCategoryName.QUEST;
    }
}

export function mapContainerIndexToContainerName(containerId: number): SPTLootContainerName
{
    switch (containerId)
    {
        case SPTLootContainerIndex.DRAWER:
            return SPTLootContainerName.DRAWER;
        case SPTLootContainerIndex.CASHREGISTER:
            return SPTLootContainerName.CASHREGISTER;
        case SPTLootContainerIndex.PCBLOCK:
            return SPTLootContainerName.PCBLOCK;
        case SPTLootContainerIndex.JACKET:
            return SPTLootContainerName.JACKET;
        case SPTLootContainerIndex.TOOLBOX:
            return SPTLootContainerName.TOOLBOX;
        case SPTLootContainerIndex.MEDCASE:
            return SPTLootContainerName.MEDCASE;
        case SPTLootContainerIndex.SAFE:
            return SPTLootContainerName.SAFE;
        case SPTLootContainerIndex.WEAPONBOX5X5:
            return SPTLootContainerName.WEAPONBOX5X5;
        case SPTLootContainerIndex.WEAPONBOX5X2:
            return SPTLootContainerName.WEAPONBOX5X2;
        case SPTLootContainerIndex.SPORTSBAG01:
            return SPTLootContainerName.SPORTSBAG01;
        case SPTLootContainerIndex.WEAPONBOX6X3:
            return SPTLootContainerName.WEAPONBOX6X3;
        case SPTLootContainerIndex.WEAPONBOX4X4:
            return SPTLootContainerName.WEAPONBOX4X4;
        case SPTLootContainerIndex.GRENADEBOX:
            return SPTLootContainerName.GRENADEBOX;
        case SPTLootContainerIndex.PLASTICSUITCASE:
            return SPTLootContainerName.PLASTICSUITCASE;
        case SPTLootContainerIndex.MEDBAGSMU0601:
            return SPTLootContainerName.MEDBAGSMU0601;
        case SPTLootContainerIndex.WOODENCRATE:
            return SPTLootContainerName.WOODENCRATE;
        case SPTLootContainerIndex.MEDICALSUPPLYCRATE:
            return SPTLootContainerName.MEDICALSUPPLYCRATE;
        case SPTLootContainerIndex.TECHNICALSUPPLYCRATE:
            return SPTLootContainerName.TECHNICALSUPPLYCRATE;
        case SPTLootContainerIndex.DEADSCAV:
            return SPTLootContainerName.DEADSCAV;
        case SPTLootContainerIndex.GROUNDCACHE:
            return SPTLootContainerName.GROUNDCACHE;
        case SPTLootContainerIndex.BURRIEDBARRELCACHE:
            return SPTLootContainerName.BURRIEDBARRELCACHE;
        case SPTLootContainerIndex.WOODENAMMOBOX:
            return SPTLootContainerName.WOODENAMMOBOX;
        case SPTLootContainerIndex.JACKETDORMS114:
            return SPTLootContainerName.JACKETDORMS114;
        case SPTLootContainerIndex.JACKETMACHINERYKEY:
            return SPTLootContainerName.JACKETMACHINERYKEY;
        case SPTLootContainerIndex.RATIONSUPPLYCRATE:
            return SPTLootContainerName.RATIONSUPPLYCRATE;
        case SPTLootContainerIndex.JACKETDORMS204:
            return SPTLootContainerName.JACKETDORMS204;
        case SPTLootContainerIndex.COMMONFUNDSTASH:
            return SPTLootContainerName.COMMONFUNDSTASH;
        case SPTLootContainerIndex.SPORTSBAG02:
            return SPTLootContainerName.SPORTSBAG02;
        case SPTLootContainerIndex.MEDBAGSMU0602:
            return SPTLootContainerName.MEDBAGSMU0602;
        case SPTLootContainerIndex.CASHREGISTERTAR:
            return SPTLootContainerName.CASHREGISTERTAR;
        case SPTLootContainerIndex.BANKCASHREGISTER:
            return SPTLootContainerName.BANKCASHREGISTER;
        case SPTLootContainerIndex.BANKSAFE:
            return SPTLootContainerName.BANKSAFE;
        case SPTLootContainerIndex.PMCBODY:
            return SPTLootContainerName.PMCBODY;
        case SPTLootContainerIndex.DEADCIVILIAN:
            return SPTLootContainerName.DEADCIVILIAN;
        case SPTLootContainerIndex.SCAVBODY:
            return SPTLootContainerName.SCAVBODY;
        case SPTLootContainerIndex.LABTECHNICIANBODY:
            return SPTLootContainerName.LABTECHNICIANBODY;
    }
}
