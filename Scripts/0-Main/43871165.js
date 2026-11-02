const patron = "Power Patron";
const doomZ = "DoomZ";
const jupiter = "Jupiter the Power Patron of Destruction";
const banish = "Banish the top 3 cards of your Deck face-down";
const searchCondition = "IS_SPELL_OR_TRAP && (NAME == %$patron% || NAME == %$doomZ% || DESC == %This card is always treated as a \\\"$patron\\\" card%)";

"commands":[
    {
        "conditions":{
            "control_self":"$searchCondition",
            "zone":0
        },
        "trigger":4,
        "msg":"Resolve $name's effect when added to face-up Extra Deck?",
        "options":[
            "label=Add 1 \"$patron\" or \"$doomZ\" Spell/Trap from your Deck to your hand¬search(0,255,[0],\"$searchCondition\")"
        ]
    },
    {
        "conditions":{
            "AND":[
                {
                    "control_self":"NAME == $jupiter",
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
            "label=$banish, then Special Summon 1 \"$jupiter\" from your Extra Deck¬is_cost¬source=0¬dest=5¬rand=3¬is_eff¬target=68231287¬source=1¬add=1"
        ]
    }
]
