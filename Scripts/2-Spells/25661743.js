const sendCondition = "IS_MONSTER && NAME == %Power Patron% || DESC == %his card is always treated as a \"Power Patron\" card%";
const searchCondition = "IS_MONSTER && ATTR == dark && TYPES == fairy";

"commands":[
    {
        "conditions":[
            {
                "OR":[
                    {
                        "control_self":"$sendCondition",
                        "zone":0
                    },
                    {
                        "control_self":"$sendCondition",
                        "zone":1
                    }
                ]
            },
            {
                "control_self":"$searchCondition",
                "zone":0
            }
        ],
        "trigger_range":[20,24],
        "options":[
            "label=Send 1 \"Power Patron\" monster from your Deck/Extra Deck to the GY¬condition=0¬search(0,2,[0,1],\"$sendCondition\")",
            "label=Send 1 \"Power Patron\" monster from your Deck/Extra Deck to the GY, then add 1 DARK Fairy monster from your Deck to your hand¬condition=0¬condition=1¬search(0,2,[0,1],\"$sendCondition\")¬then¬search(0,255,[0],\"$searchCondition\")"
        ]
    }
]
