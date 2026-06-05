ServerEvents.recipes(event => {



event.shapeless(
  Item.of('xercapaint:item_palette', 1), 
  [
    'tfc_items:short_wooden_handle',
	'firmalife:plate'
  ]
),
event.shaped(
 Item.of('immersive_melodies:trumpet', 1),
 [
'AAA',
'BCB',
' D '
 ],
 {
A:'tfc_items:brass_rivet',
B:'tfc_items:brass_ring',
C:'tfc:metal/sheet/brass',
D:'tfc:metal/rod/brass',
 
}),
event.shaped(
 Item.of('immersive_melodies:bagpipe', 1),
 [
' BC',
'DED',
' D '
 ],
 {
 
B:'tfc:stick_bunch',
C:'tfc_items:leather_strap',
D:'tfc_items:leather_sheet',
E:'waterflasks:bladder',
 
}),
event.shaped(
 Item.of('immersive_melodies:didgeridoo', 1),
 [
'  C',
'DE ',
'GH '
 ],
 {
 
 
C:'minecraft:bamboo',
D:'firmalife:beeswax',
E:'minecraft:bamboo',
G:'minecraft:bamboo',
H:'firmalife:beeswax',
 
}),
event.shaped(
 Item.of('immersive_melodies:triangle', 1),
 [
' A ',
'A A',
'   '
 ],
 {
 
A:'#forge:rods/bronze',
}),
event.shaped(
 Item.of('immersive_melodies:vielle', 1),
 [
' AB',
'ACA',
' A '
 ],
 {
 
A:'firmalife:treated_lumber',
B:'tfc_items:short_wooden_handle',
C:'minecraft:string',
 
}),
event.shaped(
 Item.of('immersive_melodies:lute', 1),
 [
'  A',
'BA ',
'CB '
 ],
 {
 
 
A:'tfc_items:short_wooden_handle',
B:'firmalife:treated_lumber',
C:'minecraft:string',
 
}),
event.shaped(
 Item.of('immersive_melodies:piano', 1),
 [
'AAA',
'BCB',
'DDD'
 ],
 {
A:'tfc_items:bronze_stamen',
B:'tfc_items:bronze_wire',
C:'tfc_items:cast_iron_heavy_sheet',
D:'firmalife:treated_wood',
}),
event.shaped(
 Item.of('immersive_melodies:handpan', 1),
 [
' A ',
'B B',
'   '
 ],
 {
 
A:'tfc_items:bronze_heavy_sheet',
B:'tfc:metal/sheet/bronze',
}),
event.shaped(
 Item.of('immersive_melodies:tiny_drum', 1),
 [
' A ',
' B ',
'   '
 ],
 {
 
A:'tfc:large_prepared_hide',
B:'#tfc:barrels', 
}),
event.shaped(
 Item.of('immersive_melodies:flute', 1),
 [
'   ',
'AAB',
'   '
 ],
 {
A:'minecraft:bamboo',
B:'tfc_items:saw_wooden_handle',
}),
event.shaped(
 Item.of('immersiveengineering:rs_engineering', 1),
 [
'ABA',
'BCB',
'ABA'
 ],
 {
A:'immersiveengineering:sheetmetal_iron',
B:'minecraft:redstone',
C:'tfc_items:red_steel_gear',
}),
event.shaped(
Item.of('immersiveengineering:hammer', '{Damage:0,multiblockInterdiction:["immersiveengineering:multiblocks/excavator"]}'),
 [
' A ',
' B ',
'   '
 ],
 {
A:'tfc_ie_addon:tool_head/ie_hammer',
B:'minecraft:stick',
}),


event.shaped(
  Item.of('minecraft:bucket', 1),
  [
    '   ',
    'ABC',
    '   '
  ],
  {
    A: 'tfc:metal/bucket/red_steel',
    B: 'tfc:glue',
    C: 'tfc:metal/bucket/blue_steel'
  }
),
event.shaped(
  Item.of('alekiships:oar', 1),
  [
    'A  ',
    ' B ',
    '  C'
  ],
  {
    A: '#forge:handle/short',
    B: '#forge:handle/long',
    C: '#tfc:lumber'
  }
), 
event.recipes.tfc.quern('minecraft:green_dye', 'minecraft:cactus')
})