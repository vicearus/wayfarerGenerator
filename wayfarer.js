const wayfarer = {
    soulArray: [["d8","d8","d6","d6","d6","d4","d4","d4"], ["d8","d6","d6","d6","d6","d6","d6","d4"],["d8","d8","d8","d6","d4","d4","d4","d4"]],
    allocation: [],
    stress: [],
    adventureDie: "4",
    passion: ["Empower","Protected","Focused","Bolstered","Weakened","Vulnerable","Distracted","Shaken"],
    personalFlavor: [],
    backpack: [],
    age: ["Youth","Endeavor","Twilight"],
    currency: [],
    renown: "Unknown",
    gender: ["Male","Female"],
    name: [],
    background: [],
    traits: {},
    omenOfBirth: []

}

const backpackArrays = [
    // Defend 1-2
    [
        {
          weapon: "Sword",
          strikeBonus: "+1",
          armor: "Light Armor (Ad4, 3 Actions)",
          accessory: "Jewelry (A.D. Bonus to Spirit, Convince checks)"
        },
        {
          weapon: "Axe",
          strikeBonus: "+2",
          armor: "Balanced Armor (Ad6, 2 Actions)",
          accessory: "Compass (A.D. Bonus to Lead, Survival checks)"
        },
        {
          weapon: "Two-Handed Sword",
          strikeBonus: "+3",
          armor: "Heavy Armor (Ad10, 1 Action)",
          accessory: "Horse (A.D., 1 Action, 1 Stress)"
        },
        {
          weapon: "Crossbow",
          shootBonus: "+2",
          armor: "Light Armor (Ad4, 3 Actions)",
          accessory: "Spyglass (A.D. Bonus to Mind, Notice checks)"
        },
        {
          weapon: "Longbow",
          shootBonus: "+2",
          armor: "Light Armor (Ad4, 3 Actions)",
          accessory: "Scroll (Mind, Arcana check, Levitate Objects)"
        },
        {
          weapon: "Rapier",
          strikeBonus: "+1",
          armor: "Balanced Armor (Ad6, 2 Actions)",
          accessory: "Scroll (Mind, Arcana check, Create Light)"
        },
        {
          weapon: "Dagger",
          strikeBonus: "+1",
          armor: "Balanced Armor (Ad6, 2 Actions)",
          accessory: "Book (A.D. Bonus to Mind, Lore checks)"
        },
        {
          weapon: "Whip",
          strikeBonus: "+1",
          armor: "Heavy Armor (Ad10, 1 Action)",
          accessory: "Talisman (A.D. Bonus to Spirit, Intuition checks)"
        }
      ],
    //Defend 3-4
    [
        {
          weapon: "Mace",
          strikeBonus: "+2",
          armor: "Balanced Armor (Ad6, 2 Actions)",
          accessory: "Pet (A.D., 1 Action, 1 Stress)"
        },
        {
          weapon: "Staff",
          strikeBonus: "+1",
          armor: "Heavy Armor (Ad10, 1 Action)",
          accessory: "Shield (A.D Bonus to Defend)"
        },
        {
          weapon: "Two-Handed Mace",
          strikeBonus: "+3",
          armor: "Light Armor (Ad4, 3 Actions)",
          accessory: "Lockpicks (A.D. to Control, Legerdemain checks)"
        },
        {
          weapon: "Whip",
          strikeBonus: "+1",
          armor: "Light Armor (Ad4, 3 Actions)",
          accessory: "Hood (A.D. Bonus to Control, Stealth checks)"
        },
        {
          weapon: "Sling",
          shootBonus: "+1",
          armor: "Heavy Armor (Ad10, 1 Action)",
          accessory: "Herbal Tea (A.D. Bonus to Spirit, Diplomacy checks)"
        },
        {
          weapon: "Katana",
          strikeBonus: "+3",
          armor: "Heavy Armor (Ad10, 1 Action)",
          accessory: "Scroll (Mind, Arcana check, Repairs a broken object)"
        },
        {
          weapon: "Spear",
          strikeBonus: "+2",
          armor: "Balanced Armor (Ad6, 2 Actions)",
          accessory: "Scroll (Mind, Arcana check, Levitate Object)"
        },
        {
          weapon: "Pistol",
          shootBonus: "+1",
          armor: "Light Armor (Ad4, 3 Actions)",
          accessory: "Gauntlet (A.D. Bonus to Body, Power checks)"
        }
      ]
    //Defend 5-6
    //Defend 7-8
]
const maleNames = []
const femaleNames = []
const namesArray = [maleNames, femaleNames]
const backgroundArray = []
// Character Traits
const traitsObj = {
    physique: ["Athletic", "Brawny", "Flabby", "Lanky", "Chiseled", "Scraggly", "Short", "Dashing", "Stout", "Enormous"],
    skin: ["Birthmarked", "Scarred", "Dark", "Rosy", "Pockmarked", "Soft", "Tanned", "Weathered", "Hairy", "Tattooed"],
    hair: ["Bald", "Long", "Braided", "Mohawked", "Frizzy", "Curled", "Wavy", "Oily", "Luxurious", "Dreadlocked"],
    face: ["Elongated", "Bony", "Broken", "Pale", "Rugged", "Chiseled", "Squatty", "Sunken", "Square", "Round"],
    clothing: ["Antique", "Bloody", "Elegant", "Soiled", "Exotic", "Royal", "Eclectic", "Topless", "Plain", "Tattered"],
    virtues: ["Respect", "Justice", "Wisdom", "Resolution", "Mercy", "Reliable", "Hope", "Courage", "Moderation", "Helpful"],
    vices: ["Angry", "Arrogant", "Envious", "Glutton", "Greedy", "Lustful", "Lazy", "Drunk", "Coward", "Vain"],
    reputation: ["Leader", "Loafer", "Dangerous", "Honest", "Wise", "Hardworking", "Entertaining", "Brash", "Goofy", "Repulsive"],
    misfortunes: ["Addicted", "Defrauded", "Exiled", "Cursed", "In debt", "Abandoned", "Blackmailed", "Betrayed", "Condemned", "Scarred"]
  };
  
  const flavorArray = [
    "Animal Companion: DD6 |12 Stress",
    "Holy Shield: Add Spirit to Defend",
    "Blinding Eyes: All Targets in the Zone are Vulnerable",
    "Infernal Eyes: All Engaged Targets are Shaken",
    "Leader: Faction becomes Empowered for 1 Round",
    "Beast Form: Use Dread for actions. Gain attribute: sight, strength, speed, scent, sound, sense. Small DD4 (8 Stress); 56 Medium DD6 (12 Stress); Large DD8 (16 Stress)",
    "Light: An object shines like a torch",
    "Slow down time around a Target. 1 Action on their Turn",
    "Increase Gravity: A Target's actions cost +1 Action",
    "Successful Defend redirects half Stress to a Target",
    "Rune: Mind, Craft check. Rolled difference equals Bonus",
    "Make a deal with a god for a minor miracle. Must perform their request before you can do this again",
    "Ad10 to Strike rolls when wielding two weapons",
    "Ad12 to Attack rolls when alone with an Opponent",
    "Overlooked: Your movement makes no sound",
    "Illusionist: Create minor visual illusions",
    "Gladiator: Ad8 to Attack rolls when fighting in a crowd",
    "Lawman: Ad8 to Spirit, Diplomacy checks",
    "Local Hero: Ad8 to Spirit, Convince checks",
    "Martyr: Gain 3 Stress to gain 3 Teamwork Points",
    "Shadow Soul: Ad8 to Control, Stealth checks",
    "Void Gazer: See Invisibility",
    "After a Successful Defend, gain a Free Strike",
    "Trickshot: Ad10 to Shoot rolls",
    "Climber: Ad8 to Body, Agility checks",
    "Give Negative Condition on a successful Defend roll",
    "Tinkerer: Repair broken things. 1 hour",
    "Ad8 to Lead, Survive checks in the dark",
    "Source Attuned: Sense nearby Arcana",
    "Failed rolls gain +2 Teamwork Points",
    "Moves like the Wind: +1 Action during Combat Scenes",
    "Feats of Strength: Ad10 to Body, Power checks",
    "Investigator: Ad6 to Mind, Lore checks",
    "Phase Walker: Pass through walls",
    "Militarist: Ad6 to Attack rolls",
    "Ad6 to Strike & Defend when using a sword and shield",
    "Master at Arms: Gain +2 Actions during Combat",
    "Ad8 to Strike rolls when using 1 weapon",
    "Ad6 to Strike and Defend rolls when using a staff",
    "You can harness the wind to glide short distances",
    "Friend of Nature: Ad8 to Spirit, Nature checks",
    "Teleportation: Teleport to a location you can see",
    "Time Traveler: Glimpse 1 hour into the past or future",
    "Beast Master: Ad8 to Lead, Animal checks",
    "Lock Master: Ad8 to Control, Legerdemain checks",
    "Animals treat you as a Friend",
    "Mount: Gain +2 Actions during combat. DD6 | 12 Stress",
    "Ad8 to Action die roll when Engaged with an ally",
    "Beast Eyes: Pet Crow. You can see through their eyes",
    "Beast Call: Summon 4 beasts. DD4 | 2 Stress",
    "Healer: Restore Adventure Die roll in Stress with a Touch",
    "You can mimic sounds, throw your voice, read lips",
    "Monk: Bonus Adventure Die to Strike when unarmed",
    "Walks on Walls: You can climb any walls",
    "Mindshield: Ad8 to Trauma checks",
    "Academic: Ad8 to Mind, Lore check",
    "Contagious: Grant Vulnerable on a Failed Save vs Spirit",
    "Swift Hands: Ad8 to Control, Steal checks",
    "Meditating to tether to an ally's dream",
    "Animate mundane tools to perform simple tasks",
    "Rub a coin to perceive the last exchange",
    "Hitchhike with a cast Teleportation spell",
    "The air around you turns cold when someone lies",
    "Empowered when you tell the truth when you wish to lie",
    "Bolstered when you spare the life of a hostile animal",
    "Focused when you refuse a plea of forgiveness",
    "Recall: Your Wayfarer has photographic memory",
    "Swollen: You cannot be moved",
    "Ad10 to Attack Rolls when on a Mount",
    "Ravaged: Take A.D. Stress to gain Ad12 to Attack roll",
    "Stone Heart: You can see into a person's hate",
    "Duty: Protected when you accept a Mission",
    "Lost: You can see things that have been lost in a vision",
    "Lucky: Reroll on a 1",
    "Read lips from a distance",
    "Ember Touch: Ignite small flames with a touch",
    "You are blind, but can hear everything within a Zone",
    "Hound: Taste blood to glimpse the Target's location",
    "See a vision of a dangerous beast in an adjacent Hex",
    "Mirror shows vision of possible future. Shatters after.",
    "Frosted: Chill object with a touch",
    "Wayfinder: Gain a general sense of where your goal lies",
    "Ignore Traveling Blind. The Stars light your way.",
    "You travel 1 extra Hex on foot, by horse, or by boat",
    "Wildhart: Speak with nature",
    "Reflective surface shows what your Targets sees",
    "Aura Reader: See a Target's emotions and intentions",
    "Bloodthirsty: Double all successful Strike rolls",
    "Vampiric: Save vs your Spirit. Target is your Thrall",
    "Float a few inches above the ground",
    "Detect heartbeats in a room, even through walls",
    "Kaleidoscopic Face: Mimic a face you have seen",
    "Touch an object. Vision of a significant event",
    "The wind carries your words to intended listeners",
    "You speak/read multiple languages",
    "Echo Step: Leave no footprints",
    "Shape and animate small bones for various purposes",
    "Relive the moments of a corpse you touch",
    "Telekinesis: Manipulate objects you can see",
    "Siphon Energy: Gain Stress equal to damage dealt"
  ];
  
  
