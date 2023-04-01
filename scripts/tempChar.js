const tempChar = {
    "details": {
        "entity": "hero",
        "race": "dragonborn",
        "subrace": null,
        "class": "monk",
        "subclass": "open-hand",
        "background": "acolyte",
        "level": 10,
        "proficiency": 4,
        "alignment": "Neutral Evil",
        "features": [
            "Unarmored Defense",
            "Martial Arts",
            "Ki",
            "Flurry of Blows",
            "Patient Defense",
            "Step of the Wind",
            "Unarmored Movement",
            "Monastic Tradition",
            "Deflect Missiles",
            "Ability Score Improvement",
            "Slow Fall",
            "Extra Attack",
            "Stunning Strike",
            "Ki Empowered Strikes",
            "Evasion",
            "Stillness of Mind",
            "Purity of Body"
        ]
    },
    "stats": {
        "raw": {
            "str": 18,
            "dex": 14,
            "con": 13,
            "int": 13,
            "wis": 8,
            "cha": 12
        },
        "mod": {
            "str": 2,
            "dex": 2,
            "con": 0,
            "int": 1,
            "wis": -1,
            "cha": 1
        },
        "saves": {
            "str": 6,
            "dex": 6,
            "con": 0,
            "int": 1,
            "wis": -1,
            "cha": 1
        },
        "profs": {
            "str": [
                "saves",
                "athletics"
            ],
            "dex": [
                "saves",
                "acrobatics"
            ],
            "con": [],
            "int": [
                "religion"
            ],
            "wis": [
                "insight"
            ],
            "cha": []
        }
    },
    "skills": {
        "acrobatics": 6,
        "animal-handling": -1,
        "arcana": 1,
        "athletics": 6,
        "deception": 1,
        "history": 1,
        "insight": 3,
        "intimidation": 1,
        "investigation": 1,
        "medicine": -1,
        "nature": 1,
        "perception": -1,
        "performance": 1,
        "persuasion": 1,
        "religion": 5,
        "sleight-of-hand": 2,
        "stealth": 2,
        "survival": -1
    },
    "inventory": {
        "weapon": {
            "dart": {
                "base-damage": {
                    "piercing": "1d8"
                },
                "damage": {
                    "piercing": "1d8+2"
                },
                "category": "Simple",
                "range": "Ranged",
                "properties": [
                    "finesse",
                    "thrown"
                ],
                "quantity": 10,
                "bonus": 6
            }
        },
        "armor": {},
        "consumable": {}
    },
    "combat": {
        "weilding": {
            "weapon": "dart"
        },
        "hit-die": 8,
        "actions": {
            "martial_arts": {
                "dice_count": 1,
                "dice_value": 6
            },
            "ki_points": 10,
            "unarmored_movement": 20
        },
        "ac":[
            {
              "type": "dex",
              "value": 15
            }
          ],
        "hp-max": 32,
        "hp-current": 32,
        "initiative": 2,
        "passive-perception": 9
    },
    "spellcasting": {
        "spells": {}
    }
}