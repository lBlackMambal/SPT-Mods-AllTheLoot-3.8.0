Hello there and thanks for trying out my first mod, AllTheLoot :)

Background:
In SPT the loot which can spawn in containers is defined in the following file:
"Aki_Data\Server\database\loot\staticLoot.json".
This file is created from dumps of offline raids (as far as I know).
Depending on how BSG was setting up the container loot tables (for Live Tarkov), you end up with a certain variety of items and spawns in SPT.

If you wanted to change something yourself you first had to go to
https://db.sp-tarkov.com/search
to find out the item ID of interest and then open (that big chunk of unreadable data) staticLoot.json, parse and adjust it.
Somehow a quite tedious process.


===== AllTheLoot =====

The intention behind AllTheLoot was:
- being able to loot the complete Tarkov loot pool from containers
- being able to easily boost specific items or item categories
- being able to easily adjust the item distribution of each container type (i.e. how many items can spawn per type)
- being able to easily adjust the spawn rate of those distributions (i.e. how likely it is that e.g. 2 or 3 items spawn)

The mod works with the item prices stored in the handbook.
Based on its price value (and certain additional operations), each item will get a spawn rate assigned.

Each item category, e.g. Barters/Electronics can be tuned via a config file (see below).


There are multiple files in the config folder:
- config.json
- config_Blacklisting_ClearName.txt
- config_Blacklisting_ID.json
- config_CategorySpawnrates.json
- config_Containers_ClearName.txt
- config_Containers_ID.json
- config_FavoriteItems_ClearName.txt
- config_FavoriteItems_ID.json
- config_QuestItems_ClearName.txt
- config_QuestItems_ID.json
- config_SelectedItems_ClearName.txt
- config_SelectedItems_ID.json


The config files having IDs and the ones with clear names are intended to be used in parallel.
I recommend to use Notepad++ to edit those files.
The principle would be to first load "config_xx_ID.json" into Notepad++, afterwards load "config_xx_ClearName.txt".
Via "Move Document->Move to Other View" have the files side by side.
To guarantee modifying the files at the correct location (line) finally activate "View->Synchronize Vertical Scrolling".
(make sure that each scrollbar is at the top before activating that synchronize funtion)


IMPORTANT:
Any changes in the clear names config files WON'T have any effect on the mod's behavior. Those files are simply to keep track of any adjustments.



Example 1 - Adjusting spawn rates for an item category
Assuming you want to increase/decrease the spawn probability of all Barter-Electronics items, then simply increase/decrease the parameter rate_BARTER_ELECTRONICS
If you want to deactivate the spawn chance of an item category completely, use the value 0.0 (e.g. default value for rate_GEAR_SECURECONTAINERS)


Example 2 - Adjusting the spawn rates for specific items (config_SelectedItems)
With the introduction of "Favorite Items" (see example 4) the selected items config meanwhile is mainly used to fine tune the mods behavior.
First find out the corresponding ID by either go to db.sptarkov or via getting the ID from the server console (if config option "showItemListing" is true).
Add another line at "selectedItems_AdjustSpawnChance" and put the ID between double quotes ("), if it's the last line of that section, remove any comma
Add another line at "selectedItems_spawnChance", at the same position as you added the ID (selectedItems_IncreaseSpawnChance) before. Put the spawn rate again in double quotes.
Make sure that the very last line of that section again doesn't have a comma.
The rate you define here will be multiplied with the item category spawn rate, i.e. if Barter-Eletronics = 2.0 and you define e.g. Eletric Motor (ID: 5d1b2fa286f77425227d1674) with a rate of 1.5, the final calculation input will be 3.0
To find out the category in which the item is stored, in SPT either directly open up the handbook and check for the item of interest or use the flea market and inspect it there. At the top of the small window you will see the category path.


Example 3 - Adjusting the spawn behavior of containers (config_Containers)
Each of the 34 containers has 2 parameters:
#1 defines how many items can spawn in a container of this type (container_xx_ItemsDistribution)
#2 defines the possibilities (container_xx_ItemsDistributionProbabilities) of #1
Assuming you have
"0","1","2","3" (itemsDistribution_xx) and
"0","80","200","80" (itemsDistributionProbabilities_xx)

This means that either 0, 1, 2 or 3 items can spawn with a chance of 0 (for 0 items), 80 (for 1 item), 200 (for 2 items) and 80 (for 3 items). Most likely you will get 2 items but there's a chance to get 1 or 3 items. Somehow (SPT related?) - even if the probability value is set to 0 - very very rarely you get no item spawned.


Example 4 - Adding favorite items (config_FavoriteItems)
This set of items is supposed to have a higher spawn rate - the spawn rate is completely independent of the item value.
Again open both config files (ID & clear name) in parallel and simply add the item you'd like to have a permanently higher spawn rate.
The favorite items config file also contains certain ammo types to make it more likely to spawn good ammo and avoid the "low bob" types. An additional multiplier guarantees that ammo rounds won't outnumber weapon parts.


Example 5 - Adding quest items (config_QuestItems)
This set of items has a higher spawn rate and contains all the necessary Gunsmith items.
(Feel free to add non-weapon items for all the other FiR quests)
Again open both config files (ID & clear name) in parallel and simply add the item you'd like to have a permanently higher spawn rate.


Example 6 - Blacklisting of items (config_Blacklisting)
Blacklisting can be applied either on a container level or on a global level.
Again open both config files (ID & clear name) in parallel and simply add the item you'd like to blacklist.
The global blacklisting will remove the item completely and is mainly used to avoid spawning objects like e.g. dog tags, boss' gear and development items.


High-Tier Containers (Weaponbox 5x5, Weaponbox 6x3 and Shturman's Stash/Common Fund Stash)
Shturman's Stash, Weaponbox 5x5 and Weaponbox 6x3 have items assigned based on a specified value range. Like such chances are much higher that less "garbage" and more "worthy" items spawn in those.
There are 2 options to define the items that make it into one of those 3 containers. Either on a per-item-value or a per-slot-value setting.
Since e.g. an M4A1 has a handbook price of 18397 roubles but consumes 10 slots, once you have per-slot-value active, that gun would never be assigned to a high-tier container (assuming you didn't set a min value of 1800 roubles). To avoid that behavior there are additional config parameters (Weapons, Body Armor, Tactical Rigs) to override per-slot behavior and only consider the item value. Favorite items won't be checked for their value and are always added to Weaponbox 5x5 and Weaponbox 6x3.




I hope with that mod you will have even more fun within this awesome project SPT.

Any feedback highly appreciated.


Changelog v1.0.6:
- Now fully supporting SPT 3.8.0 (i.e. including the 4 new container types)
- Option to have an equal spawn rate for all items and sub option to include/exclude secure containers
- Option to have an equal spawn rate for all mechnical keys and multiplier to adjust their relative spawn rates compared to the remaining container items
- User can now set the values for the initial spawnrates for each item tier level
- Option to have a randomizer that adds a percentage based variation to the initial spawn rate of each item - updates each raid
- Option to turn on/off and define "Favorite Items" which have a higher spawn rate (final value based on container average item spawn rate * multiplier)
- Option to turn on/off and define "Quest Items" which have a higher spawn rate (final value based on container average item spawn rate * multiplier)
- Option to turn on/off the spawn ability of electronic keys (Keycards) in jackets
- Dorms 114 Jacket (at Customs Checkpoint) now has a much higher chance to spawn "Dorm room 114 key"
- Mechanical keys spawn rates in Drawers and Jackets are meanwhile independent and can be adjusted via the config parameter "keysInJacketMultiplier
- Option to turn on/off duplicates of the same item in one container
- Option to have a "per-slot-value" or "per-item-value" assignment for High Tier containers (Weaponbox 5x5, Weaponbox 6x3 and Shturman's Stash), incl. the override option to always keep the "per-item-value" assignment for Weapons, Body Armor, Tactical rigs. Favorite Items (if active) by default will always spawn in Weaponbox 5x5 and Weaponbox 6x3
- Complete rework of the mod to improve code readability
- Config settings are now split across 7 config files (+ 5 clear name files)



Changelog v1.0.5:
- added the functionality to properly process non SPT-default ammo types, i.e. custom ammo rounds
- added the config option "noAmmoValueWeightingForMagazines" - when set to "true" every ammo type can equally spawn in magazines or magazines attached to weapons


Changelog v1.0.4:
- fine tuned spawn system (finally a IMHO very good balance :) )
- added unique item spawn rates per container (i.e. a certain spawn rate only occurs once per container)
- removed WeaponBox Global assignment for Weapon Box 4x4, Weapon Box 5x2 and Wooden Crate - instead now using dedicated collections for each, for further details please check file "ContainerAssignment.txt"
- adjusted container item distribution/probability rate similar to default SPT
- removed Backpacks and Tacticalrigs from Shturman's Stash (to avoid one item only spawns)
- adjusted value ranges for Shturman's Stash (185 items), Weapon Box 5x5 (546 items) and Weapon Box 6x3 (808 items)
- high tier Special purpose sights now only spawn in Shturman's stash (T-7, GPNVG, Zeus, REAP-IR, FLIR), Weapon Box 5x5 (GPNVG, Zeus, REAP-IR, FLIR) and Weapon Box 6x3 (GPNVG, Zeus, REAP-IR, FLIR) 
- added "ContainerAssignment.txt" to config folder


Changelog v1.0.3:
- fixed broken value based item assignment for Shturman's Stash, Weapon Box 5x5 and Weapon Box 6x3


Changelog v1.0.2:
- modified the spawn system by taking into account the sum of all items assignable to a container type - makes items of categories with little content spawn more often
- further tweaked spawn rates
- added Debug option for specific container types (allows to see the spawn rates for each pre-selection)


Changelog v1.0.1:
- added the functionality to overwrite only certain container types (via config.json)
- added backpacks to lootpool (since most of the good backpacks won't fit in containers anyways, items haven't been considered in 1.0.0
- added very high value electronics items to Weapon Box 5x5
- removed some blacklisted items from certain loot categories
- updated details on used item categories for Shturman's stash, Weapon Box 5x5 and Weapon Box 6x3 (config_clearText.txt)
- added another condition for extremely high value items (2000000+ -> initial spawn rate: 2000)
- final spawn rate is now slightly randomized to decrease chance of multiple items of same type in one container
- explicit spawn rate adjustment of certain special equipment items (MS2000 Marker, Signal Jammer, Vortex Ranger 1500 rangefinder, WI-FI Camera)
- further tweaking of category and container spawn rates




