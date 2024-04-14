"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapContainerIndexToContainerName = exports.mapParentIdToCategoryName = exports.getContainerName = exports.SPTLootCategoryName = exports.SPTLootContainerName = exports.SPTLootContainerNameConsole = exports.SPTLootContainerIndex = exports.SPTLootContainerID = exports.selectedCategories = exports.SPTLootCategoryID = void 0;
var SPTLootCategoryID;
(function (SPTLootCategoryID) {
    SPTLootCategoryID["BARTER_OTHERS"] = "5b47574386f77428ca22b2f4";
    SPTLootCategoryID["BARTER_BUILDINGMATERIALS"] = "5b47574386f77428ca22b2ee";
    SPTLootCategoryID["BARTER_ELECTRONICS"] = "5b47574386f77428ca22b2ef";
    SPTLootCategoryID["BARTER_ENERGYELEMENTS"] = "5b47574386f77428ca22b2ed";
    SPTLootCategoryID["BARTER_FLAMMABLEMATERIALS"] = "5b47574386f77428ca22b2f2";
    SPTLootCategoryID["BARTER_HOUSEHOLDMATERIALS"] = "5b47574386f77428ca22b2f0";
    SPTLootCategoryID["BARTER_MEDICALSUPPLIES"] = "5b47574386f77428ca22b2f3";
    SPTLootCategoryID["BARTER_TOOLS"] = "5b47574386f77428ca22b2f6";
    SPTLootCategoryID["BARTER_VALUABLES"] = "5b47574386f77428ca22b2f1";
    SPTLootCategoryID["GEAR_BACKPACKS"] = "5b5f6f6c86f774093f2ecf0b";
    SPTLootCategoryID["GEAR_BODYARMOR"] = "5b5f701386f774093f2ecf0f";
    SPTLootCategoryID["GEAR_EYEWEAR"] = "5b47574386f77428ca22b331";
    SPTLootCategoryID["GEAR_FACECOVERS"] = "5b47574386f77428ca22b32f";
    SPTLootCategoryID["GEAR_GEARCOMPONENTS"] = "5b5f704686f77447ec5d76d7";
    SPTLootCategoryID["GEAR_HEADGEAR"] = "5b47574386f77428ca22b330";
    SPTLootCategoryID["GEAR_HEADSETS"] = "5b5f6f3c86f774094242ef87";
    SPTLootCategoryID["GEAR_SECURECONTAINERS"] = "5b5f6fd286f774093f2ecf0d";
    SPTLootCategoryID["GEAR_STORAGECONTAINERS"] = "5b5f6fa186f77409407a7eb7";
    SPTLootCategoryID["GEAR_TACTICALRIGS"] = "5b5f6f8786f77447ed563642";
    SPTLootCategoryID["WPM_FM_AUXILIARYPARTS"] = "5b5f74cc86f77447ec5d770a";
    SPTLootCategoryID["WPM_FM_BIPODS"] = "5b5f71c186f77409407a7ec0";
    SPTLootCategoryID["WPM_FM_FOREGRIPS"] = "5b5f71de86f774093f2ecf13";
    SPTLootCategoryID["WPM_FM_LLD_FLASHLIGHTS"] = "5b5f73ab86f774094242f195";
    SPTLootCategoryID["WPM_FM_LLD_LASERTARGETPOINTERS"] = "5b5f73c486f77447ec5d7704";
    SPTLootCategoryID["WPM_FM_LLD_TACTICALCOMBODEVICES"] = "5b5f737886f774093e6cb4fb";
    SPTLootCategoryID["WPM_FM_MD_FLASHHIDERSBRAKES"] = "5b5f724c86f774093f2ecf15";
    SPTLootCategoryID["WPM_FM_MD_MUZZLEADAPTERS"] = "5b5f72f786f77447ec5d7702";
    SPTLootCategoryID["WPM_FM_MD_SUPPRESSORS"] = "5b5f731a86f774093e6cb4f9";
    SPTLootCategoryID["WPM_FM_S_ASSAULTSCOPES"] = "5b5f740a86f77447ec5d7706";
    SPTLootCategoryID["WPM_FM_S_COLLIMATORS"] = "5b5f742686f774093e6cb4ff";
    SPTLootCategoryID["WPM_FM_S_COMPACTCOLLIMATORS"] = "5b5f744786f774094242f197";
    SPTLootCategoryID["WPM_FM_S_IRONSIGHTS"] = "5b5f746686f77447ec5d7708";
    SPTLootCategoryID["WPM_FM_S_OPTICS"] = "5b5f748386f774093e6cb501";
    SPTLootCategoryID["WPM_FM_S_SPECIALPURPOSESIGHTS"] = "5b5f749986f774094242f199";
    SPTLootCategoryID["WPM_GM_CHARGINGHANDLES"] = "5b5f751486f77447ec5d770c";
    SPTLootCategoryID["WPM_GM_LAUNCHERS"] = "5b5f752e86f774093e6cb505";
    SPTLootCategoryID["WPM_GM_MAGAZINES"] = "5b5f754a86f774094242f19b";
    SPTLootCategoryID["WPM_GM_MOUNTS"] = "5b5f755f86f77447ec5d770e";
    SPTLootCategoryID["WPM_GM_STOCKSCHASSIS"] = "5b5f757486f774093e6cb507";
    SPTLootCategoryID["WPM_VP_BARRELS"] = "5b5f75c686f774094242f19f";
    SPTLootCategoryID["WPM_VP_GASBLOCKS"] = "5b5f760586f774093e6cb509";
    SPTLootCategoryID["WPM_VP_HANDGUARDS"] = "5b5f75e486f77447ec5d7712";
    SPTLootCategoryID["WPM_VP_PISTOLGRIPS"] = "5b5f761f86f774094242f1a1";
    SPTLootCategoryID["WPM_VP_RECEIVERSSLIDES"] = "5b5f764186f77447ec5d7714";
    SPTLootCategoryID["WEAPONS_ASSAULTCARBINES"] = "5b5f78e986f77447ed5636b1";
    SPTLootCategoryID["WEAPONS_ASSAULTRIFLES"] = "5b5f78fc86f77409407a7f90";
    SPTLootCategoryID["WEAPONS_BOLTACTIONRIFLES"] = "5b5f798886f77447ed5636b5";
    SPTLootCategoryID["WEAPONS_GRENADELAUNCHERS"] = "5b5f79d186f774093f2ed3c2";
    SPTLootCategoryID["WEAPONS_MACHINEGUNS"] = "5b5f79a486f77409407a7f94";
    SPTLootCategoryID["WEAPONS_MARKSMANRIFLES"] = "5b5f791486f774093f2ed3be";
    SPTLootCategoryID["WEAPONS_MELEEWEAPONS"] = "5b5f7a0886f77409407a7f96";
    SPTLootCategoryID["WEAPONS_PISTOLS"] = "5b5f792486f77447ed5636b3";
    SPTLootCategoryID["WEAPONS_SMGS"] = "5b5f796a86f774093f2ed3c0";
    SPTLootCategoryID["WEAPONS_SHOTGUNS"] = "5b5f794b86f77409407a7f92";
    SPTLootCategoryID["WEAPONS_SPECIALWEAPONS"] = "5b5f79eb86f77447ed5636b7";
    SPTLootCategoryID["WEAPONS_THROWABLES"] = "5b5f7a2386f774093f2ed3c4";
    SPTLootCategoryID["AMMO_AMMOPACKS"] = "5b47574386f77428ca22b33c";
    SPTLootCategoryID["AMMO_ROUNDS"] = "5b47574386f77428ca22b33b";
    SPTLootCategoryID["PROVISIONS_DRINKS"] = "5b47574386f77428ca22b335";
    SPTLootCategoryID["PROVISIONS_FOOD"] = "5b47574386f77428ca22b336";
    SPTLootCategoryID["MEDICATION_INJECTORS"] = "5b47574386f77428ca22b33a";
    SPTLootCategoryID["MEDICATION_INJURYTREATMENT"] = "5b47574386f77428ca22b339";
    SPTLootCategoryID["MEDICATION_MEDKITS"] = "5b47574386f77428ca22b338";
    SPTLootCategoryID["MEDICATION_PILLS"] = "5b47574386f77428ca22b337";
    SPTLootCategoryID["KEYS_ELECTRONICKEYS"] = "5c518ed586f774119a772aee";
    SPTLootCategoryID["KEYS_MECHANICALKEYS"] = "5c518ec986f7743b68682ce2";
    SPTLootCategoryID["INFOITEMS"] = "5b47574386f77428ca22b341";
    SPTLootCategoryID["SPECIALEQUIPMENT"] = "5b47574386f77428ca22b345";
    SPTLootCategoryID["MAPS"] = "5b47574386f77428ca22b343";
    SPTLootCategoryID["MONEY"] = "5b5f78b786f77447ed5636af";
    SPTLootCategoryID["QUEST"] = "5b619f1a86f77450a702a6f3";
})(SPTLootCategoryID || (exports.SPTLootCategoryID = SPTLootCategoryID = {}));
exports.selectedCategories = [
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
var SPTLootContainerID;
(function (SPTLootContainerID) {
    SPTLootContainerID["DRAWER"] = "578f87b7245977356274f2cd";
    SPTLootContainerID["CASHREGISTER"] = "578f879c24597735401e6bc6";
    SPTLootContainerID["PCBLOCK"] = "59139c2186f77411564f8e42";
    SPTLootContainerID["JACKET"] = "578f8778245977358849a9b5";
    SPTLootContainerID["TOOLBOX"] = "5909d50c86f774659e6aaebe";
    SPTLootContainerID["MEDCASE"] = "5909d4c186f7746ad34e805a";
    SPTLootContainerID["SAFE"] = "578f8782245977354405a1e3";
    SPTLootContainerID["WEAPONBOX5X5"] = "5909d89086f77472591234a0";
    SPTLootContainerID["WEAPONBOX5X2"] = "5909d5ef86f77467974efbd8";
    SPTLootContainerID["SPORTSBAG01"] = "578f87a3245977356274f2cb";
    SPTLootContainerID["WEAPONBOX6X3"] = "5909d76c86f77471e53d2adf";
    SPTLootContainerID["WEAPONBOX4X4"] = "5909d7cf86f77470ee57d75a";
    SPTLootContainerID["GRENADEBOX"] = "5909d36d86f774660f0bb900";
    SPTLootContainerID["PLASTICSUITCASE"] = "5c052cea86f7746b2101e8d8";
    SPTLootContainerID["MEDBAGSMU0601"] = "5909d24f86f77466f56e6855";
    SPTLootContainerID["WOODENCRATE"] = "578f87ad245977356274f2cc";
    SPTLootContainerID["MEDICALSUPPLYCRATE"] = "5d6fe50986f77449d97f7463";
    SPTLootContainerID["TECHNICALSUPPLYCRATE"] = "5d6fd45b86f774317075ed43";
    SPTLootContainerID["DEADSCAV"] = "5909e4b686f7747f5b744fa4";
    SPTLootContainerID["GROUNDCACHE"] = "5d6d2b5486f774785c2ba8ea";
    SPTLootContainerID["BURRIEDBARRELCACHE"] = "5d6d2bb386f774785b07a77a";
    SPTLootContainerID["WOODENAMMOBOX"] = "5909d45286f77465a8136dc6";
    SPTLootContainerID["JACKETDORMS114"] = "59387ac686f77401442ddd61";
    SPTLootContainerID["JACKETMACHINERYKEY"] = "5937ef2b86f77408a47244b3";
    SPTLootContainerID["RATIONSUPPLYCRATE"] = "5d6fd13186f77424ad2a8c69";
    SPTLootContainerID["JACKETDORMS204"] = "5914944186f774189e5e76c2";
    SPTLootContainerID["COMMONFUNDSTASH"] = "5d07b91b86f7745a077a9432";
    SPTLootContainerID["SPORTSBAG02"] = "61aa1e9a32a4743c3453d2cf";
    SPTLootContainerID["MEDBAGSMU0602"] = "61aa1ead84ea0800645777fd";
    SPTLootContainerID["CASHREGISTERTAR"] = "5ad74cf586f774391278f6f0";
    SPTLootContainerID["BANKCASHREGISTER"] = "64d116f41a9c6143a956127d";
    SPTLootContainerID["BANKSAFE"] = "64d11702dd0cd96ab82c3280";
    SPTLootContainerID["PMCBODY"] = "6582e6d7b14c3f72eb071420";
    SPTLootContainerID["DEADCIVILIAN"] = "658420d8085fea07e674cdb6";
    SPTLootContainerID["SCAVBODY"] = "6582e6bb0c3b9823fe6d1840";
    SPTLootContainerID["LABTECHNICIANBODY"] = "6582e6c6edf14c4c6023adf2";
})(SPTLootContainerID || (exports.SPTLootContainerID = SPTLootContainerID = {}));
var SPTLootContainerIndex;
(function (SPTLootContainerIndex) {
    SPTLootContainerIndex[SPTLootContainerIndex["DRAWER"] = 0] = "DRAWER";
    SPTLootContainerIndex[SPTLootContainerIndex["CASHREGISTER"] = 1] = "CASHREGISTER";
    SPTLootContainerIndex[SPTLootContainerIndex["PCBLOCK"] = 2] = "PCBLOCK";
    SPTLootContainerIndex[SPTLootContainerIndex["JACKET"] = 3] = "JACKET";
    SPTLootContainerIndex[SPTLootContainerIndex["TOOLBOX"] = 4] = "TOOLBOX";
    SPTLootContainerIndex[SPTLootContainerIndex["MEDCASE"] = 5] = "MEDCASE";
    SPTLootContainerIndex[SPTLootContainerIndex["SAFE"] = 6] = "SAFE";
    SPTLootContainerIndex[SPTLootContainerIndex["WEAPONBOX5X5"] = 7] = "WEAPONBOX5X5";
    SPTLootContainerIndex[SPTLootContainerIndex["WEAPONBOX5X2"] = 8] = "WEAPONBOX5X2";
    SPTLootContainerIndex[SPTLootContainerIndex["SPORTSBAG01"] = 9] = "SPORTSBAG01";
    SPTLootContainerIndex[SPTLootContainerIndex["WEAPONBOX6X3"] = 10] = "WEAPONBOX6X3";
    SPTLootContainerIndex[SPTLootContainerIndex["WEAPONBOX4X4"] = 11] = "WEAPONBOX4X4";
    SPTLootContainerIndex[SPTLootContainerIndex["GRENADEBOX"] = 12] = "GRENADEBOX";
    SPTLootContainerIndex[SPTLootContainerIndex["PLASTICSUITCASE"] = 13] = "PLASTICSUITCASE";
    SPTLootContainerIndex[SPTLootContainerIndex["MEDBAGSMU0601"] = 14] = "MEDBAGSMU0601";
    SPTLootContainerIndex[SPTLootContainerIndex["WOODENCRATE"] = 15] = "WOODENCRATE";
    SPTLootContainerIndex[SPTLootContainerIndex["MEDICALSUPPLYCRATE"] = 16] = "MEDICALSUPPLYCRATE";
    SPTLootContainerIndex[SPTLootContainerIndex["TECHNICALSUPPLYCRATE"] = 17] = "TECHNICALSUPPLYCRATE";
    SPTLootContainerIndex[SPTLootContainerIndex["DEADSCAV"] = 18] = "DEADSCAV";
    SPTLootContainerIndex[SPTLootContainerIndex["GROUNDCACHE"] = 19] = "GROUNDCACHE";
    SPTLootContainerIndex[SPTLootContainerIndex["BURRIEDBARRELCACHE"] = 20] = "BURRIEDBARRELCACHE";
    SPTLootContainerIndex[SPTLootContainerIndex["WOODENAMMOBOX"] = 21] = "WOODENAMMOBOX";
    SPTLootContainerIndex[SPTLootContainerIndex["JACKETDORMS114"] = 22] = "JACKETDORMS114";
    SPTLootContainerIndex[SPTLootContainerIndex["JACKETMACHINERYKEY"] = 23] = "JACKETMACHINERYKEY";
    SPTLootContainerIndex[SPTLootContainerIndex["RATIONSUPPLYCRATE"] = 24] = "RATIONSUPPLYCRATE";
    SPTLootContainerIndex[SPTLootContainerIndex["JACKETDORMS204"] = 25] = "JACKETDORMS204";
    SPTLootContainerIndex[SPTLootContainerIndex["COMMONFUNDSTASH"] = 26] = "COMMONFUNDSTASH";
    SPTLootContainerIndex[SPTLootContainerIndex["SPORTSBAG02"] = 27] = "SPORTSBAG02";
    SPTLootContainerIndex[SPTLootContainerIndex["MEDBAGSMU0602"] = 28] = "MEDBAGSMU0602";
    SPTLootContainerIndex[SPTLootContainerIndex["CASHREGISTERTAR"] = 29] = "CASHREGISTERTAR";
    SPTLootContainerIndex[SPTLootContainerIndex["BANKCASHREGISTER"] = 30] = "BANKCASHREGISTER";
    SPTLootContainerIndex[SPTLootContainerIndex["BANKSAFE"] = 31] = "BANKSAFE";
    SPTLootContainerIndex[SPTLootContainerIndex["PMCBODY"] = 32] = "PMCBODY";
    SPTLootContainerIndex[SPTLootContainerIndex["DEADCIVILIAN"] = 33] = "DEADCIVILIAN";
    SPTLootContainerIndex[SPTLootContainerIndex["SCAVBODY"] = 34] = "SCAVBODY";
    SPTLootContainerIndex[SPTLootContainerIndex["LABTECHNICIANBODY"] = 35] = "LABTECHNICIANBODY";
})(SPTLootContainerIndex || (exports.SPTLootContainerIndex = SPTLootContainerIndex = {}));
var SPTLootContainerNameConsole;
(function (SPTLootContainerNameConsole) {
    SPTLootContainerNameConsole["DRAWER"] = "Drawer";
    SPTLootContainerNameConsole["CASHREGISTER"] = "Cash Register";
    SPTLootContainerNameConsole["PCBLOCK"] = "PC Block";
    SPTLootContainerNameConsole["JACKET"] = "Jacket";
    SPTLootContainerNameConsole["TOOLBOX"] = "Toolbox";
    SPTLootContainerNameConsole["MEDCASE"] = "Medcase";
    SPTLootContainerNameConsole["SAFE"] = "Safe";
    SPTLootContainerNameConsole["WEAPONBOX5X5"] = "Weaponbox (5x5)";
    SPTLootContainerNameConsole["WEAPONBOX5X2"] = "Weaponbox (5x2)";
    SPTLootContainerNameConsole["SPORTSBAG01"] = "Sportsbag (I)";
    SPTLootContainerNameConsole["WEAPONBOX6X3"] = "Weaponbox (6x3)";
    SPTLootContainerNameConsole["WEAPONBOX4X4"] = "Weaponbox (4x4)";
    SPTLootContainerNameConsole["GRENADEBOX"] = "Grenadebox";
    SPTLootContainerNameConsole["PLASTICSUITCASE"] = "Plastic Suitcase";
    SPTLootContainerNameConsole["MEDBAGSMU0601"] = "Medbag SMU06 (I)";
    SPTLootContainerNameConsole["WOODENCRATE"] = "Wooden Crate";
    SPTLootContainerNameConsole["MEDICALSUPPLYCRATE"] = "Medical Supply Crate";
    SPTLootContainerNameConsole["TECHNICALSUPPLYCRATE"] = "Technical Supply Crate";
    SPTLootContainerNameConsole["DEADSCAV"] = "Dead Scav";
    SPTLootContainerNameConsole["GROUNDCACHE"] = "Ground Cache";
    SPTLootContainerNameConsole["BURRIEDBARRELCACHE"] = "Burried Barrel Cache";
    SPTLootContainerNameConsole["WOODENAMMOBOX"] = "Wooden Ammobox";
    SPTLootContainerNameConsole["JACKETDORMS114"] = "Jacket Dorms 114";
    SPTLootContainerNameConsole["JACKETMACHINERYKEY"] = "Jacket Machinery Key";
    SPTLootContainerNameConsole["RATIONSUPPLYCRATE"] = "Ration Supply Crate";
    SPTLootContainerNameConsole["JACKETDORMS204"] = "Jacket Dorms 204";
    SPTLootContainerNameConsole["COMMONFUNDSTASH"] = "Common Fund Stash";
    SPTLootContainerNameConsole["SPORTSBAG02"] = "Sportsbag (II)";
    SPTLootContainerNameConsole["MEDBAGSMU0602"] = "Medbag SMU06 (II)";
    SPTLootContainerNameConsole["CASHREGISTERTAR"] = "Cash Register TAR2-2";
    SPTLootContainerNameConsole["BANKCASHREGISTER"] = "Bank Cash Register";
    SPTLootContainerNameConsole["BANKSAFE"] = "Bank Safe";
    SPTLootContainerNameConsole["PMCBODY"] = "PMC Body";
    SPTLootContainerNameConsole["DEADCIVILIAN"] = "Dead Civilian";
    SPTLootContainerNameConsole["SCAVBODY"] = "Scav Body";
    SPTLootContainerNameConsole["LABTECHNICIANBODY"] = "Lab Technician Body";
})(SPTLootContainerNameConsole || (exports.SPTLootContainerNameConsole = SPTLootContainerNameConsole = {}));
var SPTLootContainerName;
(function (SPTLootContainerName) {
    SPTLootContainerName["DRAWER"] = "Drawer";
    SPTLootContainerName["CASHREGISTER"] = "CashRegister";
    SPTLootContainerName["PCBLOCK"] = "PCBlock";
    SPTLootContainerName["JACKET"] = "Jacket";
    SPTLootContainerName["TOOLBOX"] = "Toolbox";
    SPTLootContainerName["MEDCASE"] = "Medcase";
    SPTLootContainerName["SAFE"] = "Safe";
    SPTLootContainerName["WEAPONBOX5X5"] = "Weaponbox5x5";
    SPTLootContainerName["WEAPONBOX5X2"] = "Weaponbox5x2";
    SPTLootContainerName["SPORTSBAG01"] = "Sportsbag";
    SPTLootContainerName["WEAPONBOX6X3"] = "Weaponbox6x3";
    SPTLootContainerName["WEAPONBOX4X4"] = "Weaponbox4x4";
    SPTLootContainerName["GRENADEBOX"] = "Grenadebox";
    SPTLootContainerName["PLASTICSUITCASE"] = "PlasticSuitcase";
    SPTLootContainerName["MEDBAGSMU0601"] = "MedbagSMU06";
    SPTLootContainerName["WOODENCRATE"] = "WoodenCrate";
    SPTLootContainerName["MEDICALSUPPLYCRATE"] = "MedicalSupplyCrate";
    SPTLootContainerName["TECHNICALSUPPLYCRATE"] = "TechnicalSupplyCrate";
    SPTLootContainerName["DEADSCAV"] = "DeadScav";
    SPTLootContainerName["GROUNDCACHE"] = "GroundCache";
    SPTLootContainerName["BURRIEDBARRELCACHE"] = "BurriedBarrelCache";
    SPTLootContainerName["WOODENAMMOBOX"] = "WoodenAmmobox";
    SPTLootContainerName["JACKETDORMS114"] = "JacketDorms114";
    SPTLootContainerName["JACKETMACHINERYKEY"] = "JacketMachineryKey";
    SPTLootContainerName["RATIONSUPPLYCRATE"] = "RationSupplyCrate";
    SPTLootContainerName["JACKETDORMS204"] = "JacketDorms204";
    SPTLootContainerName["COMMONFUNDSTASH"] = "CommonFundStash";
    SPTLootContainerName["SPORTSBAG02"] = "Sportsbag";
    SPTLootContainerName["MEDBAGSMU0602"] = "MedbagSMU06";
    SPTLootContainerName["CASHREGISTERTAR"] = "CashRegisterTAR";
    SPTLootContainerName["BANKCASHREGISTER"] = "BankCashRegister";
    SPTLootContainerName["BANKSAFE"] = "BankSafe";
    SPTLootContainerName["PMCBODY"] = "PMCBody";
    SPTLootContainerName["DEADCIVILIAN"] = "DeadCivilian";
    SPTLootContainerName["SCAVBODY"] = "ScavBody";
    SPTLootContainerName["LABTECHNICIANBODY"] = "LabTechnicianBody";
})(SPTLootContainerName || (exports.SPTLootContainerName = SPTLootContainerName = {}));
var SPTLootCategoryName;
(function (SPTLootCategoryName) {
    SPTLootCategoryName["BARTER_OTHERS"] = "BARTER_OTHERS";
    SPTLootCategoryName["BARTER_BUILDINGMATERIALS"] = "BARTER_BUILDINGMATERIALS";
    SPTLootCategoryName["BARTER_ELECTRONICS"] = "BARTER_ELECTRONICS";
    SPTLootCategoryName["BARTER_ENERGYELEMENTS"] = "BARTER_ENERGYELEMENTS";
    SPTLootCategoryName["BARTER_FLAMMABLEMATERIALS"] = "BARTER_FLAMMABLEMATERIALS";
    SPTLootCategoryName["BARTER_HOUSEHOLDMATERIALS"] = "BARTER_HOUSEHOLDMATERIALS";
    SPTLootCategoryName["BARTER_MEDICALSUPPLIES"] = "BARTER_MEDICALSUPPLIES";
    SPTLootCategoryName["BARTER_TOOLS"] = "BARTER_TOOLS";
    SPTLootCategoryName["BARTER_VALUABLES"] = "BARTER_VALUABLES";
    SPTLootCategoryName["GEAR_BACKPACKS"] = "GEAR_BACKPACKS";
    SPTLootCategoryName["GEAR_BODYARMOR"] = "GEAR_BODYARMOR";
    SPTLootCategoryName["GEAR_EYEWEAR"] = "GEAR_EYEWEAR";
    SPTLootCategoryName["GEAR_FACECOVERS"] = "GEAR_FACECOVERS";
    SPTLootCategoryName["GEAR_GEARCOMPONENTS"] = "GEAR_GEARCOMPONENTS";
    SPTLootCategoryName["GEAR_HEADGEAR"] = "GEAR_HEADGEAR";
    SPTLootCategoryName["GEAR_HEADSETS"] = "GEAR_HEADSETS";
    SPTLootCategoryName["GEAR_SECURECONTAINERS"] = "GEAR_SECURECONTAINERS";
    SPTLootCategoryName["GEAR_STORAGECONTAINERS"] = "GEAR_STORAGECONTAINERS";
    SPTLootCategoryName["GEAR_TACTICALRIGS"] = "GEAR_TACTICALRIGS";
    SPTLootCategoryName["WPM_FM_AUXILIARYPARTS"] = "WPM_FM_AUXILIARYPARTS";
    SPTLootCategoryName["WPM_FM_BIPODS"] = "WPM_FM_BIPODS";
    SPTLootCategoryName["WPM_FM_FOREGRIPS"] = "WPM_FM_FOREGRIPS";
    SPTLootCategoryName["WPM_FM_LLD_FLASHLIGHTS"] = "WPM_FM_LLD_FLASHLIGHTS";
    SPTLootCategoryName["WPM_FM_LLD_LASERTARGETPOINTERS"] = "WPM_FM_LLD_LASERTARGETPOINTERS";
    SPTLootCategoryName["WPM_FM_LLD_TACTICALCOMBODEVICES"] = "WPM_FM_LLD_TACTICALCOMBODEVICES";
    SPTLootCategoryName["WPM_FM_MD_FLASHHIDERSBRAKES"] = "WPM_FM_MD_FLASHHIDERSBRAKES";
    SPTLootCategoryName["WPM_FM_MD_MUZZLEADAPTERS"] = "WPM_FM_MD_MUZZLEADAPTERS";
    SPTLootCategoryName["WPM_FM_MD_SUPPRESSORS"] = "WPM_FM_MD_SUPPRESSORS";
    SPTLootCategoryName["WPM_FM_S_ASSAULTSCOPES"] = "WPM_FM_S_ASSAULTSCOPES";
    SPTLootCategoryName["WPM_FM_S_COLLIMATORS"] = "WPM_FM_S_COLLIMATORS";
    SPTLootCategoryName["WPM_FM_S_COMPACTCOLLIMATORS"] = "WPM_FM_S_COMPACTCOLLIMATORS";
    SPTLootCategoryName["WPM_FM_S_IRONSIGHTS"] = "WPM_FM_S_IRONSIGHTS";
    SPTLootCategoryName["WPM_FM_S_OPTICS"] = "WPM_FM_S_OPTICS";
    SPTLootCategoryName["WPM_FM_S_SPECIALPURPOSESIGHTS"] = "WPM_FM_S_SPECIALPURPOSESIGHTS";
    SPTLootCategoryName["WPM_GM_CHARGINGHANDLES"] = "WPM_GM_CHARGINGHANDLES";
    SPTLootCategoryName["WPM_GM_LAUNCHERS"] = "WPM_GM_LAUNCHERS";
    SPTLootCategoryName["WPM_GM_MAGAZINES"] = "WPM_GM_MAGAZINES";
    SPTLootCategoryName["WPM_GM_MOUNTS"] = "WPM_GM_MOUNTS";
    SPTLootCategoryName["WPM_GM_STOCKSCHASSIS"] = "WPM_GM_STOCKSCHASSIS";
    SPTLootCategoryName["WPM_VP_BARRELS"] = "WPM_VP_BARRELS";
    SPTLootCategoryName["WPM_VP_GASBLOCKS"] = "WPM_VP_GASBLOCKS";
    SPTLootCategoryName["WPM_VP_HANDGUARDS"] = "WPM_VP_HANDGUARDS";
    SPTLootCategoryName["WPM_VP_PISTOLGRIPS"] = "WPM_VP_PISTOLGRIPS";
    SPTLootCategoryName["WPM_VP_RECEIVERSSLIDES"] = "WPM_VP_RECEIVERSSLIDES";
    SPTLootCategoryName["WEAPONS_ASSAULTCARBINES"] = "WEAPONS_ASSAULTCARBINES";
    SPTLootCategoryName["WEAPONS_ASSAULTRIFLES"] = "WEAPONS_ASSAULTRIFLES";
    SPTLootCategoryName["WEAPONS_BOLTACTIONRIFLES"] = "WEAPONS_BOLTACTIONRIFLES";
    SPTLootCategoryName["WEAPONS_GRENADELAUNCHERS"] = "WEAPONS_GRENADELAUNCHERS";
    SPTLootCategoryName["WEAPONS_MACHINEGUNS"] = "WEAPONS_MACHINEGUNS";
    SPTLootCategoryName["WEAPONS_MARKSMANRIFLES"] = "WEAPONS_MARKSMANRIFLES";
    SPTLootCategoryName["WEAPONS_MELEEWEAPONS"] = "WEAPONS_MELEEWEAPONS";
    SPTLootCategoryName["WEAPONS_PISTOLS"] = "WEAPONS_PISTOLS";
    SPTLootCategoryName["WEAPONS_SMGS"] = "WEAPONS_SMGS";
    SPTLootCategoryName["WEAPONS_SHOTGUNS"] = "WEAPONS_SHOTGUNS";
    SPTLootCategoryName["WEAPONS_SPECIALWEAPONS"] = "WEAPONS_SPECIALWEAPONS";
    SPTLootCategoryName["WEAPONS_THROWABLES"] = "WEAPONS_THROWABLES";
    SPTLootCategoryName["AMMO_AMMOPACKS"] = "AMMO_AMMOPACKS";
    SPTLootCategoryName["AMMO_ROUNDS"] = "AMMO_ROUNDS";
    SPTLootCategoryName["PROVISIONS_DRINKS"] = "PROVISIONS_DRINKS";
    SPTLootCategoryName["PROVISIONS_FOOD"] = "PROVISIONS_FOOD";
    SPTLootCategoryName["MEDICATION_INJECTORS"] = "MEDICATION_INJECTORS";
    SPTLootCategoryName["MEDICATION_INJURYTREATMENT"] = "MEDICATION_INJURYTREATMENT";
    SPTLootCategoryName["MEDICATION_MEDKITS"] = "MEDICATION_MEDKITS";
    SPTLootCategoryName["MEDICATION_PILLS"] = "MEDICATION_PILLS";
    SPTLootCategoryName["KEYS_ELECTRONICKEYS"] = "KEYS_ELECTRONICKEYS";
    SPTLootCategoryName["KEYS_MECHANICALKEYS"] = "KEYS_MECHANICALKEYS";
    SPTLootCategoryName["INFOITEMS"] = "INFOITEMS";
    SPTLootCategoryName["SPECIALEQUIPMENT"] = "SPECIALEQUIPMENT";
    SPTLootCategoryName["MAPS"] = "MAPS";
    SPTLootCategoryName["MONEY"] = "MONEY";
    SPTLootCategoryName["QUEST"] = "QUEST";
})(SPTLootCategoryName || (exports.SPTLootCategoryName = SPTLootCategoryName = {}));
const containerIndexToName = {
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
};
function getContainerName(index) {
    return containerIndexToName[index] || "Unknown";
}
exports.getContainerName = getContainerName;
function mapParentIdToCategoryName(parentId) {
    switch (parentId) {
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
exports.mapParentIdToCategoryName = mapParentIdToCategoryName;
function mapContainerIndexToContainerName(containerId) {
    switch (containerId) {
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
exports.mapContainerIndexToContainerName = mapContainerIndexToContainerName;
//# sourceMappingURL=AllTheLoot_Helper.js.map