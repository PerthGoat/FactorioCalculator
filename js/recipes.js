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
'Chemical plant': 
{
    'Plastic bar': 
    {
        'Coal': 1,
        'Petroleum gas': 20,
        'ProductionSeconds': 1 / 2
    }
},
'Oil refinery': 
{
    'Petroleum gas': 
    {
        'Crude oil': 100,
        'ProductionSeconds': 5
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
    'Advanced circuit': 
    {
        'Copper cable': 4,
        'Electronic circuit': 2,
        'Plastic': 2,
        'ProductionSeconds': 6
    },
    'Processing unit': 
    {
        'Advanced circuit': 2,
        'Electronic circuit': 20,
        'Sulfuric acid': 5,
        'ProductionSeconds': 10
    },
    'Boiler': 
    {
        'Pipe': 4,
        'Stone furnace': 1,
        'ProductionSeconds': 0.5
    },
    'Pipe': 
    {
        'Iron plate': 1,
        'ProductionSeconds': 0.5
    },
    'Steam engine':
    {
        'Iron gear wheel': 8,
        'Iron plate': 10,
        'Pipe': 5,
        'ProductionSeconds': 0.5
    },
    'Offshore pump':
    {
        'Electronic circuit': 2,
        'Iron gear wheel': 1,
        'Pipe': 1,
        'ProductionSeconds': 0.5
    },
    'Repair pack':
    {
        'Electronic circuit': 2,
        'Iron gear wheel': 2,
        'ProductionSeconds': 0.5
    },
    'Burner mining drill':
    {
        'Iron gear wheel': 2,
        'Iron plate': 3,
        'Stone furnace': 1,
        'ProductionSeconds': 2
    },


    'MachineVariantMultiplier': // for the assembling machines that sometimes craft faster or slower depending on the version
    { 
        1: 0.5,
        2: 0.75,
        3: 1.25
    }
}
};