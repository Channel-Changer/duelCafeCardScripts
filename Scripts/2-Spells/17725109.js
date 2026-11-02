const bewdCondition = "NAME == Blue-Eyes White Dragon";
const locations = "from your Deck, GY, or banishment";
const specialSummon = "Special Summon 1";

"commands":[
  {
    "conditions":[
       {
          "control_self":"$bewdCondition",
          "zone_range":[10,14]
       },
       {
          "NOT":[
             {
                "control_self":"$bewdCondition",
                "zone_range":[10,14]
             }
          ]
       }
    ],
    "trigger_range":[20,24],
    "options":[
       "label=$specialSummon Blue-Eyes monster $locations¬condition=0¬search(0,255,[0,2,3],\"IS_MONSTER && NAME == %Blue-Eyes%\")",
       "label=$specialSummon Blue-Eyes White Dragon $locations¬condition=1¬search(0,255,[0,2,3],\"$bewdCondition\")"
    ]
  }
] 
