const patron = "Power Patron";
const artmage = "Artmage";
const searchCondition = "(IS_MONSTER && NAME != Vidolium the Unstable Power Patron of Unity && (NAME == %$patron% || NAME == %$artmage% || DESC == %his card is always treated as a \\\"$patron\\\" card%)) && NAME != $name";

"commands":[
    {
        "trigger":4,
        "msg":"Resolve $name's effect when added to face-up Extra Deck?",
        "options":[
            "label=Special Summon 1 \"$patron\" or \"$artmage\" monster from your Deck or face-up Extra Deck, except \"$name\"¬search(0,255,[0],\"$searchCondition\")"
        ]
    },
    {
        "conditions":{
            "control_self":"NAME == Nerva the Power Patron of Creation",
            "zone":1
        },
        "msg":"Resolve $name's ignition effect?",
        "options":[
            "label=Special Summon 1 \"Nerva the Power Patron of Creation\" from your Extra Deck¬target=53589300¬source=0¬add=1"
        ]
    }
]
