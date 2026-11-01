const searchCondition = "IS_SPELL_OR_TRAP && (NAME == %Artmage% || DESC == %This card is always treated as an \\\"Artmage\\\" card%)";

"commands":[
    {
        "conditions":{
            "control_self":"$searchCondition",
            "zone":0
        },
        "trigger_range":[10,14],
        "msg":"Resolve $name's on-summon effect?",
        "options":[
            "label=Set 1 \"Artmage\" Spell/Trap from your Deck¬search(0,255,[0],\"$searchCondition\")"
        ]
    }
]
