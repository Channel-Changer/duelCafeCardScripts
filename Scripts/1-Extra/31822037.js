const searchCondition = "IS_SPELL_OR_TRAP && NAME == %Theorealize%";
const patron = "Power Patron";

"commands":[
    {
        "conditions":{
            "AND":[
                {
                    "control_self":"$searchCondition",
                    "zone":0
                },
                {
                    "control_self":"NAME == %$patron% || DESC == %This card is always treated as a \"$patron\" card%",
                    "zone":2
                }
            ]
        },
        "trigger_list":[8,108,10,11,12,13,14],
        "msg":"Resolve $name's on-summon effect?",
        "options":[
            "label=Aadd 1 \"Theorealize\" card from your Deck to your hand¬search(0,255,[0],\"$searchCondition\")"
        ]
    }
]
