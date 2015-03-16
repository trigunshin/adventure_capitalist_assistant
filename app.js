var speed_factors = {
    lemon: [
        {level: 25, multi: .5},
        {level: 50, multi: .5},
        {level: 100, multi: .5},
        {level: 200, multi: .5},
        {level: 300, multi: .5},
        {level: 400, multi: .5}
    ],
    newspaper: [
        {level: 25, multi: .5},
        {level: 50, multi: .5},
        {level: 100, multi: .5},
        {level: 200, multi: .5},
        {level: 300, multi: .5},
        {level: 400, multi: .5}
    ],
    car: [
        {level: 25, multi: .5},
        {level: 50, multi: .5},
        {level: 100, multi: .5},
        {level: 200, multi: .5},
        {level: 300, multi: .5},
        {level: 400, multi: .5}
    ],
    pizza: [
        {level: 25, multi: .5},
        {level: 50, multi: .5},
        {level: 100, multi: .5},
        {level: 200, multi: .5},
        {level: 300, multi: .5},
        {level: 400, multi: .5}
    ],
    donut: [
        {level: 25, multi: .5},
        {level: 50, multi: .5},
        {level: 100, multi: .5},
        {level: 200, multi: .5},
        {level: 300, multi: .5},
        {level: 400, multi: .5}
    ],
    shrimp: [
        {level: 25, multi: .5},
        {level: 50, multi: .5},
        {level: 100, multi: .5},
        {level: 200, multi: .5},
        {level: 300, multi: .5},
        {level: 400, multi: .5}
    ],
    hockey: [
        {level: 25, multi: .5},
        {level: 50, multi: .5},
        {level: 100, multi: .5},
        {level: 200, multi: .5},
        {level: 300, multi: .5},
        {level: 400, multi: .5},
        {level: 2100, multi: .5},
        {level: 2300, multi: .5},
        {level: 2500, multi: .5},
        {level: 2700, multi: .5}
    ],
    movie: [
        {level: 25, multi: .5},
        {level: 50, multi: .5},
        {level: 100, multi: .5},
        {level: 200, multi: .5},
        {level: 300, multi: .5},
        {level: 400, multi: .5},
        {level: 2100, multi: .5},
        {level: 2300, multi: .5},
        {level: 2500, multi: .5},
        {level: 2700, multi: .5},
        {level: 3250, multi: .5}
    ],
    bank: [
        {level: 25, multi: .5},
        {level: 50, multi: .5},
        {level: 100, multi: .5},
        {level: 200, multi: .5},
        {level: 300, multi: .5},
        {level: 400, multi: .5},
        {level: 2250, multi: .5},
        {level: 2500, multi: .5},
        {level: 2750, multi: .5},
        {level: 3000, multi: .5},
        {level: 3250, multi: .5},
        {level: 3500, multi: .5},
        {level: 3750, multi: .5},
        {level: 4000, multi: .5}
    ],
    oil: [
        {level: 25, multi: .5},
        {level: 50, multi: .5},
        {level: 100, multi: .5},
        {level: 200, multi: .5},
        {level: 300, multi: .5},
        {level: 400, multi: .5},
        {level: 2250, multi: .5},
        {level: 2500, multi: .5},
        {level: 2750, multi: .5},
        {level: 3000, multi: .5},
        {level: 3250, multi: .5},
        {level: 3500, multi: .5},
        {level: 3750, multi: .5},
        {level: 4000, multi: .5},
        {level: 4250, multi: .5},
        {level: 4500, multi: .5},
        {level: 4750, multi: .5},
        {level: 5000, multi: .5}
    ],
    overall: [
        {level: 25, multi: .5},
        {level: 50, multi: .5},
        {level: 100, multi: .5},
        {level: 200, multi: .5},
        {level: 300, multi: .5},
        {level: 400, multi: .5}
    ]
};
var profit_factors = {
    lemon: [
        {level: 500, multi: 4, short_name:'lemon'},
        {level: 600, multi: 4, short_name:'lemon'},
        {level: 700, multi: 4, short_name:'lemon'},
        {level: 800, multi: 4, short_name:'lemon'},
        {level: 900, multi: 4, short_name:'lemon'},
        {level: 1000, multi: 5, short_name:'lemon'},
    ],
    newspaper: [
        {level: 125, multi: 2, short_name: 'lemon'},
        {level: 150, multi: 2, short_name: 'car'},
        {level: 175, multi: 2, short_name: 'pizza'},
        {level: 225, multi: 2, short_name: 'donut'},
        {level: 250, multi: 3, short_name: 'lemon'},
        {level: 275, multi: 3, short_name: 'car'},
        {level: 325, multi: 3, short_name: 'pizza'},
        {level: 350, multi: 3, short_name: 'donut'},
        {level: 375, multi: 4, short_name: 'lemon'},
        {level: 425, multi: 4, short_name: 'car'},
        {level: 450, multi: 4, short_name: 'pizza'},
        {level: 475, multi: 4, short_name: 'donut'},
        {level: 500, multi: 11, short_name: 'shrimp'},
        {level: 525, multi: 5, short_name: 'lemon'},
        {level: 550, multi: 5, short_name: 'car'},
        {level: 575, multi: 5, short_name: 'pizza'},
        {level: 600, multi: 11, short_name: 'hockey'},
        {level: 625, multi: 5, short_name: 'donut'},
        {level: 650, multi: 6, short_name: 'lemon'},
        {level: 675, multi: 6, short_name: 'car'},
        {level: 700, multi: 11, short_name: 'movie'},
        {level: 725, multi: 6, short_name: 'pizza'},
        {level: 750, multi: 6, short_name: 'donut'},
        {level: 775, multi: 3, short_name: 'lemon'},
        {level: 800, multi: 11, short_name: 'bank'},
        {level: 825, multi: 7, short_name: 'car'},
        {level: 850, multi: 7, short_name: 'pizza'},
        {level: 875, multi: 7, short_name: 'donut'},
        {level: 900, multi: 11, short_name: 'oil'},
        {level: 925, multi: 7, short_name: 'shrimp'},
        {level: 950, multi: 7, short_name: 'hockey'},
        {level: 975, multi: 7, short_name: 'movie'},
        {level: 1000, multi: 7777777, short_name: 'newspaper'}
    ],
    car: [
        {level: 500, multi: 2, short_name: 'car'},
        {level: 600, multi: 2, short_name: 'car'},
        {level: 700, multi: 2, short_name: 'car'},
        {level: 800, multi: 2, short_name: 'car'},
        {level: 900, multi: 2, short_name: 'car'},
        {level: 1000, multi: 3, short_name: 'car'},
    ],
    pizza: [
        {level: 500, multi: 2, short_name: 'pizza'},
        {level: 600, multi: 2, short_name: 'pizza'},
        {level: 700, multi: 2, short_name: 'pizza'},
        {level: 800, multi: 2, short_name: 'pizza'},
        {level: 900, multi: 2, short_name: 'pizza'},
        {level: 1000, multi: 3, short_name: 'pizza'},
    ],
    donut: [
        {level: 500, multi: 2, short_name: 'donut'},
        {level: 600, multi: 2, short_name: 'donut'},
        {level: 700, multi: 2, short_name: 'donut'},
        {level: 800, multi: 2, short_name: 'donut'},
        {level: 900, multi: 2, short_name: 'donut'},
        {level: 1000, multi: 3, short_name: 'donut'},
    ],
    shrimp: [
        {level: 500, multi: 2, short_name: 'shrimp'},
        {level: 600, multi: 2, short_name: 'shrimp'},
        {level: 700, multi: 2, short_name: 'shrimp'},
        {level: 800, multi: 2, short_name: 'shrimp'},
        {level: 900, multi: 2, short_name: 'shrimp'},
        {level: 1000, multi: 3, short_name: 'shrimp'},
    ],
    hockey: [
        {level: 500, multi: 2, short_name: 'hockey'},
        {level: 600, multi: 2, short_name: 'hockey'},
        {level: 700, multi: 2, short_name: 'hockey'},
        {level: 800, multi: 2, short_name: 'hockey'},
        {level: 900, multi: 2, short_name: 'hockey'},
        {level: 1000, multi: 3, short_name: 'hockey'},
    ],
    movie: [
        {level: 500, multi: 2, short_name: 'movie'},
        {level: 600, multi: 2, short_name: 'movie'},
        {level: 700, multi: 2, short_name: 'movie'},
        {level: 800, multi: 2, short_name: 'movie'},
        {level: 900, multi: 2, short_name: 'movie'},
        {level: 1000, multi: 3, short_name: 'movie'},
    ],
    bank: [
        {level: 500, multi: 2, short_name: 'bank'},
        {level: 600, multi: 2, short_name: 'bank'},
        {level: 700, multi: 2, short_name: 'bank'},
        {level: 800, multi: 2, short_name: 'bank'},
        {level: 900, multi: 2, short_name: 'bank'},
        {level: 1000, multi: 3, short_name: 'bank'},
    ],
    oil: [
        {level: 500, multi: 2, short_name: 'oil'},
        {level: 600, multi: 2, short_name: 'oil'},
        {level: 700, multi: 2, short_name: 'oil'},
        {level: 800, multi: 2, short_name: 'oil'},
        {level: 900, multi: 2, short_name: 'oil'},
        {level: 1000, multi: 3, short_name: 'oil'},
    ],
    overall: [
        {level: 500, multi: 2, short_name: ''},
        {level: 600, multi: 2, short_name: ''},
        {level: 666, multi: 2, short_name: ''},
        {level: 700, multi: 2, short_name: ''},
        {level: 777, multi: 2, short_name: ''},
        {level: 800, multi: 2, short_name: ''},
        {level: 900, multi: 2, short_name: ''},
        {level: 1000, multi: 2, short_name: ''},
    ]
}
function serialize_object(form_selector) {
    var formdata = $(form_selector).serializeArray();
    var data = {};
    _.each(formdata, function(element){
    // Return all of the values of the object's properties.
      var value = _.values(element);
    // name : value 
      data[value[0]] = value[1];
    });
    return data;
}
function level_cutoff_filter_func(level, factor) {
    return level >= factor.level;
}
function make_biz(short_name, long_name, price, p_factor, time, profit) {
    return {
        short_name: short_name,
        name: long_name,
        initial_price: price,
        price_factor: p_factor,
        initial_time: time,
        initial_profit: profit
    }
}
// all 200, oil should take 2.5m * 60 seconds
// this only works up to L400 and does not handle the varying bonuses after
function get_time_to_profit(biz_name, level, lowest_biz_level) {
    var time_filter_func = _.partial(level_cutoff_filter_func, level);
    var time_factor_exp = _.filter(speed_factors[biz_name], time_filter_func).length;

    var cap_filter_func = _.partial(level_cutoff_filter_func, lowest_biz_level);
    var capitalist_exp = _.filter(speed_factors.overall, cap_filter_func).length;

    var time_factor = Math.pow(.5, time_factor_exp + capitalist_exp);

    return businesses[biz_name].initial_time * time_factor;
}
function get_base_profit(name, level, angel_modifier) {
    var base = businesses[name].initial_profit;
    return base * level;
}
// this won't handle the 10% & 99% reductions yet
function get_cost(base_cost, price_factor, level, how_many) {
    var base = base_cost * Math.pow(price_factor, level);
    console.log("cost to get to this level", base);
    var cost = base * Math.pow(price_factor, how_many);
    console.log("cost to next N", cost);

    return cost;
}
//TODO handle angel upgrades
function get_angel_modifier(angels) {
    return 1 + angels * .02;
}
// click event handler
function biz_info(biz_data) {
    var angels = Number($('#angel_input').val());
    var lowest_biz_level = _.min(_.map(_.values(biz_data), Number));

    _.each(_.pairs(biz_data), function(name_level_pair) {
        var name = name_level_pair[0];
        var level = name_level_pair[1];
        var biz = businesses[name];
        if(level.length === 0) level = "0";
        level = Number(level);

        var time_to_profit = get_time_to_profit(name, level, lowest_biz_level);

        var profit = get_base_profit(name, level).toExponential(3);
        var profit = profit *  get_angel_modifier(angels);

        //var cost_1 = get_cost(biz.initial_price, biz.price_factor, level, 1);
        //var cost_10 = get_cost(biz.initial_price, biz.price_factor, level, 10);
        //var cost_100 = get_cost(biz.initial_price, biz.price_factor, level, 100);

        // update UI
        var label = $('#biz_time_'+name);
        label.text(time_to_profit);
        var label = $('#biz_profit_'+name);
        label.text(profit);
        var label = $('#biz_productivity_'+name);
        label.text((profit/time_to_profit).toExponential(3));
        /*
        var label = $('#biz_1_cost_'+name);
        label.text(cost_1.toExponential(3));
        var label = $('#biz_10_cost_'+name);
        label.text(cost_10.toExponential(3));
        var label = $('#biz_100_cost_'+name);
        label.text(cost_100.toExponential(3));
        //*/
    });
}
var businesses = {
    lemon: make_biz(    'lemon',       'Lemonade Stand',       3.738,       1.07,   0.6,    1),
    newspaper: make_biz('newspaper',   'Newspaper Delivery',   60,          1.15,   3,      60),
    car: make_biz(      'car',         'Car Wash',             720,         1.14,   6,      540),
    pizza: make_biz(    'pizza',       'Pizza Delivery',       8640,        1.13,   12,     4320),
    donut: make_biz(    'donut',       'Donut Shop',           103680,      1.12,   24,     51840),
    shrimp: make_biz(   'shrimp',      'Shrimp Boat',          1244160,     1.11,   96,     622080),
    hockey: make_biz(   'hockey',      'Hockey Team',          14929920,    1.10,   384,    7464960),
    movie: make_biz(    'movie',       'Movie Studio',         179159040,   1.09,   1536,   89579520),
    bank: make_biz(     'bank',        'Bank',                 2149908480,  1.08,   6144,   1074954240),
    oil: make_biz(      'oil',         'Oil Company',          25798901760, 1.07,   36864,  29668737024)
}

///////////// rendering logic
var biz_form_template = _.template($('script#biz_form_template').html())({businesses: businesses});
$('div#form_anchor').append(biz_form_template);

$('form#biz_data').submit(function(e) {
    e.preventDefault();
    var frmData     = serialize_object('form#biz_data');
    biz_info(frmData);
    return false;
});
