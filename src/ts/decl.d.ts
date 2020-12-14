/** @noSelfInFile **/

declare abstract class handle { __handle: never; }

declare function FourCC(str: string): number;

declare interface agent extends handle { __agent: never; }
declare interface event extends agent { __event: never; }
declare interface player extends agent { __player: never; }
declare interface widget extends agent { __widget: never; }
declare interface unit extends widget { __unit: never; }
declare interface destructable extends widget { __destructable: never; }
declare interface item extends widget { __item: never; }
declare interface ability extends agent { __ability: never; }
declare interface buff extends ability { __buff: never; }
declare interface force extends agent { __force: never; }
declare interface group extends agent { __group: never; }
declare interface trigger extends agent { __trigger: never; }
declare interface triggercondition extends agent { __triggercondition: never; }
declare interface triggeraction extends handle { __triggeraction: never; }
declare interface timer extends agent { __timer: never; }
declare interface location extends agent { __location: never; }
declare interface region extends agent { __region: never; }
declare interface rect extends agent { __rect: never; }
declare interface boolexpr extends agent { __boolexpr: never; }
declare interface sound extends agent { __sound: never; }
declare interface conditionfunc extends boolexpr { __conditionfunc: never; }
declare interface filterfunc extends boolexpr { __filterfunc: never; }
declare interface unitpool extends handle { __unitpool: never; }
declare interface itempool extends handle { __itempool: never; }
declare interface race extends handle { __race: never; }
declare interface alliancetype extends handle { __alliancetype: never; }
declare interface racepreference extends handle { __racepreference: never; }
declare interface gamestate extends handle { __gamestate: never; }
declare interface igamestate extends gamestate { __igamestate: never; }
declare interface fgamestate extends gamestate { __fgamestate: never; }
declare interface playerstate extends handle { __playerstate: never; }
declare interface playerscore extends handle { __playerscore: never; }
declare interface playergameresult extends handle { __playergameresult: never; }
declare interface unitstate extends handle { __unitstate: never; }
declare interface aidifficulty extends handle { __aidifficulty: never; }
declare interface eventid extends handle { __eventid: never; }
declare interface gameevent extends eventid { __gameevent: never; }
declare interface playerevent extends eventid { __playerevent: never; }
declare interface playerunitevent extends eventid { __playerunitevent: never; }
declare interface unitevent extends eventid { __unitevent: never; }
declare interface limitop extends eventid { __limitop: never; }
declare interface widgetevent extends eventid { __widgetevent: never; }
declare interface dialogevent extends eventid { __dialogevent: never; }
declare interface unittype extends handle { __unittype: never; }
declare interface gamespeed extends handle { __gamespeed: never; }
declare interface gamedifficulty extends handle { __gamedifficulty: never; }
declare interface gametype extends handle { __gametype: never; }
declare interface mapflag extends handle { __mapflag: never; }
declare interface mapvisibility extends handle { __mapvisibility: never; }
declare interface mapsetting extends handle { __mapsetting: never; }
declare interface mapdensity extends handle { __mapdensity: never; }
declare interface mapcontrol extends handle { __mapcontrol: never; }
declare interface minimapicon extends handle { __minimapicon: never; }
declare interface playerslotstate extends handle { __playerslotstate: never; }
declare interface volumegroup extends handle { __volumegroup: never; }
declare interface camerafield extends handle { __camerafield: never; }
declare interface camerasetup extends handle { __camerasetup: never; }
declare interface playercolor extends handle { __playercolor: never; }
declare interface placement extends handle { __placement: never; }
declare interface startlocprio extends handle { __startlocprio: never; }
declare interface raritycontrol extends handle { __raritycontrol: never; }
declare interface blendmode extends handle { __blendmode: never; }
declare interface texmapflags extends handle { __texmapflags: never; }
declare interface effect extends agent { __effect: never; }
declare interface effecttype extends handle { __effecttype: never; }
declare interface weathereffect extends handle { __weathereffect: never; }
declare interface terraindeformation extends handle { __terraindeformation: never; }
declare interface fogstate extends handle { __fogstate: never; }
declare interface fogmodifier extends agent { __fogmodifier: never; }
declare interface dialog extends agent { __dialog: never; }
declare interface button extends agent { __button: never; }
declare interface quest extends agent { __quest: never; }
declare interface questitem extends agent { __questitem: never; }
declare interface defeatcondition extends agent { __defeatcondition: never; }
declare interface timerdialog extends agent { __timerdialog: never; }
declare interface leaderboard extends agent { __leaderboard: never; }
declare interface multiboard extends agent { __multiboard: never; }
declare interface multiboarditem extends agent { __multiboarditem: never; }
declare interface trackable extends agent { __trackable: never; }
declare interface gamecache extends agent { __gamecache: never; }
declare interface version extends handle { __version: never; }
declare interface itemtype extends handle { __itemtype: never; }
declare interface texttag extends handle { __texttag: never; }
declare interface attacktype extends handle { __attacktype: never; }
declare interface damagetype extends handle { __damagetype: never; }
declare interface weapontype extends handle { __weapontype: never; }
declare interface soundtype extends handle { __soundtype: never; }
declare interface lightning extends handle { __lightning: never; }
declare interface pathingtype extends handle { __pathingtype: never; }
declare interface mousebuttontype extends handle { __mousebuttontype: never; }
declare interface animtype extends handle { __animtype: never; }
declare interface subanimtype extends handle { __subanimtype: never; }
declare interface image extends handle { __image: never; }
declare interface ubersplat extends handle { __ubersplat: never; }
declare interface hashtable extends agent { __hashtable: never; }
declare interface framehandle extends handle { __framehandle: never; }
declare interface originframetype extends handle { __originframetype: never; }
declare interface framepointtype extends handle { __framepointtype: never; }
declare interface textaligntype extends handle { __textaligntype: never; }
declare interface frameeventtype extends handle { __frameeventtype: never; }
declare interface oskeytype extends handle { __oskeytype: never; }
declare interface abilityintegerfield extends handle { __abilityintegerfield: never; }
declare interface abilityrealfield extends handle { __abilityrealfield: never; }
declare interface abilitybooleanfield extends handle { __abilitybooleanfield: never; }
declare interface abilitystringfield extends handle { __abilitystringfield: never; }
declare interface abilityintegerlevelfield extends handle { __abilityintegerlevelfield: never; }
declare interface abilityreallevelfield extends handle { __abilityreallevelfield: never; }
declare interface abilitybooleanlevelfield extends handle { __abilitybooleanlevelfield: never; }
declare interface abilitystringlevelfield extends handle { __abilitystringlevelfield: never; }
declare interface abilityintegerlevelarrayfield extends handle { __abilityintegerlevelarrayfield: never; }
declare interface abilityreallevelarrayfield extends handle { __abilityreallevelarrayfield: never; }
declare interface abilitybooleanlevelarrayfield extends handle { __abilitybooleanlevelarrayfield: never; }
declare interface abilitystringlevelarrayfield extends handle { __abilitystringlevelarrayfield: never; }
declare interface unitintegerfield extends handle { __unitintegerfield: never; }
declare interface unitrealfield extends handle { __unitrealfield: never; }
declare interface unitbooleanfield extends handle { __unitbooleanfield: never; }
declare interface unitstringfield extends handle { __unitstringfield: never; }
declare interface unitweaponintegerfield extends handle { __unitweaponintegerfield: never; }
declare interface unitweaponrealfield extends handle { __unitweaponrealfield: never; }
declare interface unitweaponbooleanfield extends handle { __unitweaponbooleanfield: never; }
declare interface unitweaponstringfield extends handle { __unitweaponstringfield: never; }
declare interface itemintegerfield extends handle { __itemintegerfield: never; }
declare interface itemrealfield extends handle { __itemrealfield: never; }
declare interface itembooleanfield extends handle { __itembooleanfield: never; }
declare interface itemstringfield extends handle { __itemstringfield: never; }
declare interface movetype extends handle { __movetype: never; }
declare interface targetflag extends handle { __targetflag: never; }
declare interface armortype extends handle { __armortype: never; }
declare interface heroattribute extends handle { __heroattribute: never; }
declare interface defensetype extends handle { __defensetype: never; }
declare interface regentype extends handle { __regentype: never; }
declare interface unitcategory extends handle { __unitcategory: never; }
declare interface pathingflag extends handle { __pathingflag: never; }
declare interface commandbuttoneffect extends handle { __commandbuttoneffect: never; }