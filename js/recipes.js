var GlobalRecipeList = {
'Stone Furnace':
{
    'Iron Plate': 
    {
    'Iron Ore': 1,
    'Coal': 0.0225,
    'ProductionSeconds': 1/0.3125
    },
    'Copper Plate':
    {
    'Copper Ore': 1,
    'Coal': 0.0225,
    'ProductionSeconds': 1/0.3125
    },
    'Steel Plate':
    {
    'Iron Plate': 5,
    'Coal': 0.0225,
    'ProductionSeconds': 1/0.0625
    }
},
'Mining Drill': 
{
    'Iron Ore':
    {
    'ProductionSeconds': 2
    },
    'Coal':
    {
    'ProductionSeconds': 2
    },
    'Copper Ore':
    {
    'ProductionSeconds': 2
    }
},
'Assembling Machine': // 50% crafting speed
{
    'Iron gear wheel': 
    {
    'Iron Plate': 2,
    'ProductionSeconds': 0.5
    },
    'Gun Turret':
    {
    'Copper Plate': 10,
    'Iron gear wheel': 10,
    'Iron Plate': 20,
    'ProductionSeconds': 8
    },
    'Firearm magazine':
    {
    'Iron Plate': 4,
    'ProductionSeconds': 1
    },
    'Piercing rounds magazine':
    {
    'Copper Plate': 5,
    'Firearm magazine': 1,
    'Steel Plate': 1,
    'ProductionSeconds': 3
    },
    'Automation science pack':
    {
    'Copper Plate': 1,
    'Iron gear wheel': 1,
    'ProductionSeconds': 5
    },
    'Transport belt':
    {
    'Iron gear wheel': 1,
    'Iron Plate': 1,
    'ProductionSeconds': 0.5/2
    },
    'Electronic circuit':
    {
    'Copper cable': 3,
    'Iron Plate': 1,
    'ProductionSeconds': 0.5
    },
    'Copper cable': 
    {
    'Copper Plate': 1,
    'ProductionSeconds': 0.5/2
    },
    'Inserter':
    {
    'Electronic circuit': 1,
    'Iron gear wheel': 1,
    'Iron Plate': 1,
    'ProductionSeconds': 0.5
    },
    'Logistic science pack':
    {
    'Transport belt': 1,
    'Inserter': 1,
    'ProductionSeconds': 6
    },
    'MachineVariantMultiplier': // for the assembling machines that sometimes craft faster or slower depending on the version
    { 
    1: 0.5,
    2: 0.75
    }
}
};