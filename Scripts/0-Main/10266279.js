const patron = "Power Patron";
const elfnote = "Elfnote";
const junora = "Junora the Power Patron of Tuning";
const banish = "Banish the top 3 cards of your Deck face-down";
const searchCondition = "NAME != $name && (NAME == %$patron% || NAME == %$elfnote% || DESC == %This card is always treated as a \\\"$patron\\\" card%)";

"commands":[
    {
        "conditions":{
            "control_self":"$searchCondition",
            "zone_list":[2,4]
        },
        "trigger":4,
        "msg":"Resolve $name's effect when added to face-up Extra Deck?",
        "options":[
            "label=Add 1 \"$patron\" or \"$elfnote\" card from your face-up Extra Deck or GY to your hand¬search(2,255,[2,4],\"$searchCondition\")"
        ]
    },
    {
        "conditions":{
            "AND":[
                {
                    "control_self":"NAME == $junora",
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
            "label=$banish, then Special Summon 1 \"$junora\" from your Extra Deck¬is_cost¬source=0¬dest=5¬rand=3¬is_eff¬target=5914858¬source=1¬add=1"
        ]
    }
]
