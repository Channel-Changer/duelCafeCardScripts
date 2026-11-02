const patron = "Power Patron";
const artmage = "Artmage";
const nerva = "Nerva the Power Patron of Creation";
const banish = "Banish the top 3 cards of your Deck face-down";
const searchCondition = "(IS_MONSTER && NAME != Vidolium the Unstable Power Patron of Unity && (NAME == %$patron% || NAME == %$artmage% || DESC == %his card is always treated as a \\\"$patron\\\" card%)) && NAME != $name";

"commands":[
    {
        "conditions":{
            "control_self":"$searchCondition",
            "zone_list":[0,4]
        },
        "trigger":4,
        "msg":"Resolve $name's effect when added to face-up Extra Deck?",
        "options":[
            "label=Special Summon 1 \"$patron\" or \"$artmage\" monster from your Deck or face-up Extra Deck, except \"$name\"¬search(0,255,[0],\"$searchCondition\")"
        ]
    },
    {
        "conditions":{
            "AND":[
                {
                    "control_self":"NAME == $nerva",
                    "zone":1
                },
                {
                    "bool":"{count(0)} >= 3"
                }
            ]
        },
        "msg":"Resolve $name's ignition effect?",
        "options":[
            "label=$banish ONLY¬is_cost¬source=0¬dest=5¬rand=3",
            "label=$banish, then Special Summon 1 \"$nerva\" from your Extra Deck¬is_cost¬source=0¬dest=5¬rand=3¬is_eff¬target=53589300¬source=1¬add=1"
        ]
    }
]
