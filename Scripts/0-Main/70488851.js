const patron = "Power Patron";
const searchCondition = "(NAME == %$patron% || DESC == %his card is always treated as a \\\"$patron\\\" card%) && NAME != $name";

"commands":[
    {
        "trigger":4,
        "msg":"Resolve $name's effect when added to face-up Extra Deck?",
        "options":[
            "label=Add 1 \"Power Patron\" card from your Deck to your hand¬search(0,255,[0],\"$searchCondition\")"
        ]
    },
    {
        "conditions":{
            "control_self":"$searchCondition",
            "zone":2
        },
        "msg":"Resolve $name's pendulum effect?",
        "options":[
            "label=Special Summon 1 \"Power Patron\" monster from your GY (or click \"Cancel\" to Summon from hand)¬search(2,255,[2],\"$searchCondition\")"
        ]
    }
]
