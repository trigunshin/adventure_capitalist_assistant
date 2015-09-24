
function get_specific_profit_multiplier(name, level, newspaper_level) {
    var reducer = _.partial(filter_factors_by_name, name);

    var filter_func = _.partial(level_cutoff_filter_func, level);
    // handle the biz's own factors
    var factors = _.filter(profit_factors[name], filter_func);
    self_factors = _.filter(factors, function(cur_item) {
        return name === cur_item.short_name;
    });
    console.log('\tself factors for', name, factors.length, self_factors.length);
    var self_factor = _.reduce(factors, reducer, 1);

    // also handle the factors in newspaper
    var filter_func = _.partial(level_cutoff_filter_func, newspaper_level);
    var factors = _.filter(profit_factors.newspaper, filter_func);
    console.log('\tnewspaper factors for', name, factors);
    //var newspaper_factor = _.reduce(factors, reducer, 1);

    console.log('\tspecific', name, level, self_factor, newspaper_factor, self_factor * newspaper_factor);

    return self_factor * newspaper_factor;
}



var name = 'lemon';
// newspaper
var filter_func = _.partial(level_cutoff_filter_func, 250);
var factors = _.filter(profit_factors.newspaper, filter_func);

var reducer = _.partial(filter_factors_by_name, name);
_.reduce(factors, reducer, 1);

/*
10 upgrades +1 overall (3x)
10 upgrades +1 overall (3x)
1% angel upgrade

10 upgrades +1 overall (3x)
1% angel upgrade
10 upgrades +1 overall (3x)
2% angel upgrade
10 upgrades +1 overall (7x)
10 upgrades +1 overall (3x)


//*/

cash_upgrades = [
    {name: 'Little Umbrellas', multi: 3, short_name: 'lemon'},
    {name: 'Funny Pages', multi: 3, short_name: 'newspaper'},
    {name: 'Drive Through Wash', multi: 3, short_name: 'car'},
    {name: 'Robot Cars', multi: 3, short_name: 'pizza'},
    {name: 'Pre-Packaged Pastries', multi: 3, short_name: 'donut'},
    {name: 'Shrimp Satellite', multi: 3, short_name: 'shrimp'},
    {name: 'Team Jet', multi: 3, short_name: 'hockey'},
    {name: '3D Cameras', multi: 3, short_name: 'movie'},
    {name: 'Gold Plated Vaults', multi: 3, short_name: 'bank'},
    {name: 'Spill Proof Tankers', multi: 3, short_name: 'oil'},
    {name: 'Monopoly', multi: 3, short_name: 'overall'},

    {name: 'Novelty Straws', multi: 3, short_name: 'lemon'},
    {name: 'Sports Pages', multi: 3, short_name: 'newspaper'},
    {name: 'Automatic Vacuums', multi: 3, short_name: 'car'},
    {name: 'Online Ordering', multi: 3, short_name: 'pizza'},
    {name: 'Donut Holes', multi: 3, short_name: 'donut'},
    {name: 'Shrimp Magnets', multi: 3, short_name: 'shrimp'},
    {name: 'Energy Drink Sponsors', multi: 3, short_name: 'hockey'},
    {name: 'Green Screens', multi: 3, short_name: 'movie'},
    {name: 'Free Fancy Pens', multi: 3, short_name: 'bank'},
    {name: 'Eco-safe Pipeline', multi: 3, short_name: 'oil'},
    {name: 'Monopsony', multi: 3, short_name: 'overall'},
    {name: 'Holy Moola', multi: 1.5, short_name: 'angel'}, // 1%

    {name: 'Imported Ice Cubes', multi: 3, short_name: 'lemon'},
    {name: 'Business Pages', multi: 3, short_name: 'newspaper'},
    {name: 'Microfiber Sponges', multi: 3, short_name: 'car'},
    {name: 'Drone Delivery', multi: 3, short_name: 'pizza'},
    {name: 'Bacon Sprinkles', multi: 3, short_name: 'donut'},
    {name: 'Carbon Nanotube Nets', multi: 3, short_name: 'shrimp'},
    {name: 'GPS Puck Tracker', multi: 3, short_name: 'hockey'},
    {name: 'Smell-O-Vision', multi: 3, short_name: 'movie'},
    {name: 'Credit Card Implants', multi: 3, short_name: 'bank'},
    {name: 'Hyperloop Pumps', multi: 3, short_name: 'oil'},
    {name: 'Illuminati', multi: 3, short_name: 'overall'},
    {name: 'Immaculute Consumption', multi: 4/3, short_name: 'angel'} // 1%
    /* ,

    {name: '', multi: 3, short_name: 'lemon'},
    {name: '', multi: 3, short_name: 'newspaper'},
    {name: '', multi: 3, short_name: 'car'},
    {name: '', multi: 3, short_name: 'pizza'},
    {name: '', multi: 3, short_name: 'donut'},
    {name: '', multi: 3, short_name: 'shrimp'},
    {name: '', multi: 3, short_name: 'hockey'},
    {name: '', multi: 3, short_name: 'movie'},
    {name: '', multi: 3, short_name: 'bank'},
    {name: '', multi: 3, short_name: 'oil'},
    {name: '', multi: 3, short_name: 'overall'},
    {name: '', multi: 1.5, short_name: 'angel'}, // 2%

    {name: '', multi: 7, short_name: 'lemon'},
    {name: '', multi: 7, short_name: 'newspaper'},
    {name: '', multi: 7, short_name: 'car'},
    {name: '', multi: 7, short_name: 'pizza'},
    {name: '', multi: 7, short_name: 'donut'},
    {name: '', multi: 7, short_name: 'shrimp'},
    {name: '', multi: 7, short_name: 'hockey'},
    {name: '', multi: 7, short_name: 'movie'},
    {name: '', multi: 7, short_name: 'bank'},
    {name: '', multi: 7, short_name: 'oil'},
    {name: '', multi: 7, short_name: 'overall'},

    {name: '', multi: 3, short_name: 'lemon'},
    {name: '', multi: 3, short_name: 'newspaper'},
    {name: '', multi: 3, short_name: 'car'},
    {name: '', multi: 3, short_name: 'pizza'},
    {name: '', multi: 3, short_name: 'donut'},
    {name: '', multi: 3, short_name: 'shrimp'},
    {name: '', multi: 3, short_name: 'hockey'},
    {name: '', multi: 3, short_name: 'movie'},
    {name: '', multi: 3, short_name: 'bank'},
    {name: '', multi: 3, short_name: 'oil'},
    {name: '', multi: 3, short_name: 'overall'},
    //*/
];






############


base_cost
current_level
cost_factor
next_N

COST:
    REDUCTIONS: 2 types of managers only
PROFIT
    multipliers:
        in-biz achievements (L500 lemon)
        other-biz achievements (L225 newspaper)
        overall profit multipliers (achievements)
        angels (and angel upgrades)

to calc profit:
    need all business levels

    MULTIPLIERS:


    lemon:
    newspaper:
    car:
    pizza:
    donut:
    shrimp:
    hockey:
    movie:
    bank:
    oil:
    all:

time_mults  
profit_mults



multiplier:
    {
        level: N,
        biz: <shortname>,
        mult: .5|2x|1000x
    }






#############


Lemon:
    560
    561: 1.472 quintillion, 1.472e18


function get_cost(base_cost, price_factor, level, how_many) {
    var cur_cost = base_cost;
    for(var i=1,iLen=level;i<iLen;i++) {
        cur_cost = cur_cost * price_factor;
    }
    console.log('base', base_cost, 'factor', price_factor, 'cur:', cur_cost.toExponential(3), 'next', (cur_cost*price_factor).toExponential(3));
    var base = base_cost * Math.pow(price_factor, level);
    console.log("cost to get to this level", base.toExponential(3));
    var cost = base * Math.pow(price_factor, how_many);
    console.log("cost to next N", cost.toExponential(3));

    return cost;
}
var lmn = businesses.lemon;
get_cost(lmn.initial_price, lmn.price_factor, 561, 1).toExponential(3);
get_cost(lmn.initial_price, lmn.price_factor, 1, 1);