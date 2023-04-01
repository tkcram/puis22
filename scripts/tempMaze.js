const tempMaze = [
  [
    {
      "special": "entrance",
      "seen": true,
      "doors": [
        0,
        1,
        1,
        0
      ],
      "monster": {
        "details": {
          "entity": "monster",
          "name": "hippogriff",
          "size": "Large",
          "type": "monstrosity",
          "alignment": "unaligned",
          "level": 1
        },
        "stats": {
          "raw": {
            "str": 17,
            "dex": 13,
            "con": 13,
            "int": 2,
            "wis": 12,
            "cha": 8
          },
          "mod": {
            "str": 3,
            "dex": 1,
            "con": 1,
            "int": -4,
            "wis": 1,
            "cha": -1
          },
          "saves": {
            "str": 3,
            "dex": 1,
            "con": 1,
            "int": -4,
            "wis": 1,
            "cha": -1
          }
        },
        "skills": {
          "acrobatics": 1,
          "animal-handling": 1,
          "arcana": -4,
          "athletics": 3,
          "deception": -1,
          "history": -4,
          "insight": 1,
          "intimidation": -1,
          "investigation": -4,
          "medicine": 1,
          "nature": -4,
          "perception": 5,
          "performance": -1,
          "persuasion": -1,
          "religion": -4,
          "sleight-of-hand": 1,
          "stealth": 1,
          "survival": 1
        },
        "combat": {
          "ac": [
            {
              "type": "dex",
              "value": 11
            }
          ],
          "hp-max": 19,
          "hp-current": 19,
          "damage-vulnerability": [],
          "damage-resistance": [],
          "damage-immunity": [],
          "condition-immunity": [],
          "initiative": 1
        },
        "actions": {
          "Beak": {
            "damage": {
              "piercing": "1d10+3"
            },
            "bonus": 5
          },
          "Claws": {
            "damage": {
              "slashing": "2d6+3"
            },
            "bonus": 5
          }
        }
      },
      "loot": {
        "weapon": {
          "longbow": {
            "base-damage": {
              "piercing": "1d8+1"
            },
            "damage": {
              "piercing": "1d8+1"
            },
            "category": "Martial",
            "range": "Ranged",
            "properties": [
              "ammunition",
              "heavy",
              "two-handed"
            ],
            "quantity": 1
          }
        },
        "armor": {},
        "consumable": {}
      }
    },
    {
      "special": "",
      "seen": true,
      "doors": [
        0,
        1,
        0,
        1
      ],
      "loot": {
        "weapon": {},
        "armor": {
          "ring-mail": {
            "base-ac": 15,
            "ac": 15,
            "category": "Heavy",
            "quantity": 1
          }
        },
        "consumable": {}
      }
    },
    {
      "special": "",
      "seen": true,
      "doors": [
        0,
        0,
        1,
        1
      ],
      "loot": {
        "weapon": {},
        "armor": {
          "shield": {
            "base-ac": 3,
            "ac": 3,
            "category": "Shield",
            "quantity": 1
          }
        },
        "consumable": {}
      }
    }
  ],
  [
    {
      "special": "",
      "seen": true,
      "doors": [
        1,
        0,
        1,
        0
      ],
      "loot": {
        "weapon": {},
        "armor": {
          "studded-leather-armor": {
            "base-ac": 13,
            "ac": 13,
            "category": "Light",
            "quantity": 1
          }
        },
        "consumable": {}
      }
    },
    {
      "special": "",
      "seen": true,
      "doors": [
        0,
        0,
        1,
        0
      ],
      "monster": {
        "details": {
          "entity": "monster",
          "name": "copper-dragon-wyrmling",
          "size": "Medium",
          "type": "dragon",
          "alignment": "chaotic good",
          "level": 1
        },
        "stats": {
          "raw": {
            "str": 15,
            "dex": 12,
            "con": 13,
            "int": 14,
            "wis": 11,
            "cha": 13
          },
          "mod": {
            "str": 2,
            "dex": 1,
            "con": 1,
            "int": 2,
            "wis": 0,
            "cha": 1
          },
          "saves": {
            "str": 2,
            "dex": 3,
            "con": 3,
            "int": 2,
            "wis": 2,
            "cha": 3
          }
        },
        "skills": {
          "acrobatics": 1,
          "animal-handling": 0,
          "arcana": 2,
          "athletics": 2,
          "deception": 1,
          "history": 2,
          "insight": 0,
          "intimidation": 1,
          "investigation": 2,
          "medicine": 0,
          "nature": 2,
          "perception": 4,
          "performance": 1,
          "persuasion": 1,
          "religion": 2,
          "sleight-of-hand": 1,
          "stealth": 3,
          "survival": 0
        },
        "combat": {
          "ac": [
            {
              "type": "natural",
              "value": 16
            }
          ],
          "hp-max": 22,
          "hp-current": 22,
          "damage-vulnerability": [],
          "damage-resistance": [],
          "damage-immunity": [
            "acid"
          ],
          "condition-immunity": [],
          "initiative": 1
        },
        "actions": {
          "Bite": {
            "damage": {
              "piercing": "1d10+2"
            },
            "bonus": 4
          }
        }
      },
      "loot": null
    },
    {
      "special": "",
      "seen": true,
      "doors": [
        1,
        0,
        1,
        0
      ],
      "loot": {
        "weapon": {
          "sling": {
            "base-damage": {
              "bludgeoning": "1d4+1"
            },
            "damage": {
              "bludgeoning": "1d4+1"
            },
            "category": "Simple",
            "range": "Ranged",
            "properties": [
              "ammunition"
            ],
            "quantity": 1
          }
        },
        "armor": {},
        "consumable": {}
      }
    }
  ],
  [
    {
      "special": "",
      "seen": true,
      "doors": [
        1,
        1,
        0,
        0
      ],
      "monster": {
        "details": {
          "entity": "monster",
          "name": "giant-toad",
          "size": "Large",
          "type": "beast",
          "alignment": "unaligned",
          "level": 1
        },
        "stats": {
          "raw": {
            "str": 15,
            "dex": 13,
            "con": 13,
            "int": 2,
            "wis": 10,
            "cha": 3
          },
          "mod": {
            "str": 2,
            "dex": 1,
            "con": 1,
            "int": -4,
            "wis": 0,
            "cha": -4
          },
          "saves": {
            "str": 2,
            "dex": 1,
            "con": 1,
            "int": -4,
            "wis": 0,
            "cha": -4
          }
        },
        "skills": {
          "acrobatics": 1,
          "animal-handling": 0,
          "arcana": -4,
          "athletics": 2,
          "deception": -4,
          "history": -4,
          "insight": 0,
          "intimidation": -4,
          "investigation": -4,
          "medicine": 0,
          "nature": -4,
          "perception": 0,
          "performance": -4,
          "persuasion": -4,
          "religion": -4,
          "sleight-of-hand": 1,
          "stealth": 1,
          "survival": 0
        },
        "combat": {
          "ac": [
            {
              "type": "dex",
              "value": 11
            }
          ],
          "hp-max": 39,
          "hp-current": 39,
          "damage-vulnerability": [],
          "damage-resistance": [],
          "damage-immunity": [],
          "condition-immunity": [],
          "initiative": 1
        },
        "actions": {
          "Bite": {
            "damage": {
              "piercing": "1d10+2",
              "poison": "1d10+0"
            },
            "bonus": 4
          }
        }
      },
      "loot": {
        "weapon": {
          "crossbow-heavy": {
            "base-damage": {
              "piercing": "1d10+1"
            },
            "damage": {
              "piercing": "1d10+1"
            },
            "category": "Martial",
            "range": "Ranged",
            "properties": [
              "ammunition",
              "heavy",
              "loading",
              "two-handed"
            ],
            "quantity": 1
          }
        },
        "armor": {},
        "consumable": {}
      }
    },
    {
      "special": "",
      "seen": true,
      "doors": [
        1,
        0,
        0,
        1
      ],
      "monster": {
        "details": {
          "entity": "monster",
          "name": "giant-spider",
          "size": "Large",
          "type": "beast",
          "alignment": "unaligned",
          "level": 1
        },
        "stats": {
          "raw": {
            "str": 14,
            "dex": 16,
            "con": 12,
            "int": 2,
            "wis": 11,
            "cha": 4
          },
          "mod": {
            "str": 2,
            "dex": 3,
            "con": 1,
            "int": -4,
            "wis": 0,
            "cha": -3
          },
          "saves": {
            "str": 2,
            "dex": 3,
            "con": 1,
            "int": -4,
            "wis": 0,
            "cha": -3
          }
        },
        "skills": {
          "acrobatics": 3,
          "animal-handling": 0,
          "arcana": -4,
          "athletics": 2,
          "deception": -3,
          "history": -4,
          "insight": 0,
          "intimidation": -3,
          "investigation": -4,
          "medicine": 0,
          "nature": -4,
          "perception": 0,
          "performance": -3,
          "persuasion": -3,
          "religion": -4,
          "sleight-of-hand": 3,
          "stealth": 7,
          "survival": 0
        },
        "combat": {
          "ac": [
            {
              "type": "natural",
              "value": 14
            }
          ],
          "hp-max": 26,
          "hp-current": 26,
          "damage-vulnerability": [],
          "damage-resistance": [],
          "damage-immunity": [],
          "condition-immunity": [],
          "initiative": 3
        },
        "actions": {
          "Bite": {
            "damage": {
              "piercing": "1d8+3"
            },
            "bonus": 5
          }
        }
      },
      "loot": {
        "weapon": {
          "crossbow-heavy": {
            "base-damage": {
              "piercing": "1d10+1"
            },
            "damage": {
              "piercing": "1d10+1"
            },
            "category": "Martial",
            "range": "Ranged",
            "properties": [
              "ammunition",
              "heavy",
              "loading",
              "two-handed"
            ],
            "quantity": 1
          }
        },
        "armor": {},
        "consumable": {}
      }
    },
    {
      "special": "exit",
      "seen": true,
      "doors": [
        1,
        0,
        0,
        0
      ],
      "loot": null
    }
  ]
]