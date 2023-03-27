var property = new Array();
var unit = new Array();
var factor = new Array();

property[0] = "Acceleration";
unit[0] = new Array("Meter/sq.sec (m/sec^2)", "Foot/sq.sec (ft/sec^2)", "G (g)", "Inch/sq.sec (in/sec^2)");
factor[0] = new Array(1, .3048, 9.806650, 2.54E-02);

property[1] = "Area";
unit[1] = new Array("Square meter (m^2)", "Acre (acre)",  "Hectare", "Square centimeter", "Square kilometer", "Square foot (ft^2)", "Square inch (in^2)", "Square mile (mi^2)", "Square yard (yd^2)");
factor[1] = new Array(1, 4046.856, 10000, .0001, 1000000, 9.290304E-02, 6.4516E-04, 2589988, .8361274);

property[2] = "Torque";
unit[2] = new Array("Newton-meter (N m)", "Dyne-centimeter(dy cm)", "lbf-inch (lbf in)", "lbf-foot (lbf ft)");
factor[2] = new Array(1, .0000001, .1129848, 1.355818);

property[3] = "Electricity";
unit[3] = new Array("Coulomb (Cb)", "Ampere hour (A hr)", "Faraday (F)","Millifaraday (mF)", "Microfaraday (mu-F)");
factor[3] = new Array(1, 3600, .000000000333564, 96.5219, 9.65219E-02);

property[4] = "Energy";
unit[4] = new Array("Joule (J)","Calorie (SI) (cal)", "Electron volt (eV)", "Erg (erg)", "Foot-pound force", "Foot-poundal", "Horsepower-hour", "Kilocalorie (SI)(kcal)", "Volt-coulomb (V Cb)", "Watt-hour (W hr)", "Watt-second (W sec)");
factor[4] = new Array(1, 4.1868, 1.6021E-19, .0000001, 1.355818, 4.214011E-02, 2684077.3, 4186.8, 1, 3600, 1);

property[5] = "Force";
unit[5] = new Array("Newton (N)", "Dyne (dy)", "Kilogram force (kgf)", "Kilopond force (kpf)", "Ounce force (ozf)", "Pound force (lbf)");
factor[5] = new Array(1, .00001, 9.806650, 9.806650, .2780139, .4535924);

property[6] = "Length";
unit[6] = new Array("Meter (m)","Centimeter (cm)", "Kilometer (km)", "Foot (ft)", "Inch (in)", "Micrometer (mu-m)","Millimeter (mm)", "Nanometer (nm)", "Yard (yd)");
factor[6] = new Array(1, .01, 1000, .3048, .0254, .000001, .001, 1E-9, .9144);

property[7] = "Light";
unit[7] = new Array("Lumen/sq.meter (Lu/m^2)", "Lumen/sq.centimeter", "Lumen/sq.foot", "Foot-candle (ft-cdl)", "Foot-lambert", "Candela/sq.meter", "Candela/sq.centimeter", "Lux (lux)", "Phot");
factor[7] = new Array(1, 10000, 10.76391, 10.76391, 10.76391, 3.14159250538575, 31415.9250538576, 1, 10000);

property[8] = "Mass";
unit[8] = new Array("Kilogram (kgr)", "Gram (gr)", "Milligram (mgr)", "Microgram (mu-gr)", "Pound mass (lbm)", "Ounce mass (ozm)", "Ton (long)", "Ton (short)", "Ton (metric)", "Tonne");
factor[8] = new Array(1, .001, 1e-6, .000000001, .4535924, .02834952, 1016.047, 907.1847, 1000, 1000);

property[9] = "Density & Mass capacity";
unit[9] = new Array("Kilogram/cub.meter", "Grams/cm^3 (gr/cc)", "Pound mass/cubic foot", "Pound mass/cubic-inch", "Ounces/gallon (UK,liq)", "Ounces/gallon (US,liq)", "Ounces (mass)/inch", "Pound mass/gal (UK,liq)", "Pound mass/gal (US,liq)", "Tons (long,mass)/cub.yard");
factor[9] = new Array(1, 1000, 16.01846, 27679.91, 6.236027, 7.489152, 1729.994, 99.77644, 119.8264, 1328.939);

property[10] = "Power";
unit[10] = new Array("Watt (W)", "Kilowatt (kW)", "Megawatt (MW)", "Milliwatt (mW)","Calorie (thermo)/second", "Calorie (thermo)/minute", "Erg/second", "Foot-pound force/hour", "Foot-pound force/minute", "Foot-pound force/second");
factor[10] = new Array(1, 1000, 1000000, .001, 4.184, 6.973333E-02, .0000001, .0003766161, .02259697, 1.355818);

property[11] = "Pressure & Stress";
unit[11] = new Array("Newton/sq.meter", "Atmosphere (normal)", "Atmosphere (techinical)", "Bar", "Centimeter mercury(cmHg)", "Centimeter water (4'C)", "Millibar", "Millimeter mercury(mmHg)", "Pascal (Pa)", "Kilopascal (kPa)", "Megapascal (Mpa)", "Poundal/sq.foot", "Pound-force/sq.foot", "Pound-force/sq.inch (psi)");
factor[11] = new Array(1, 101325, 98066.5, 100000, 1333.22, 98.0638, 100, 133.3224, 1, 1000, 1000000, 47.88026, 47.88026, 6894.757);

property[12] = "Temperature";
unit[12] = new Array("Degrees Celsius ('C)", "Degrees Fahrenheit ('F)", "Degrees Kelvin ('K)");
factor[12] = new Array(1, 0.555555555555, 1);
tempIncrement = new Array(0, -32, -273.15, -491.67);

property[13] = "Time";
unit[13] = new Array("Second (sec)", "Hour (mean solar)", "Hour (sidereal)", "Minute (mean solar)", "Minute (sidereal)", "Second (sidereal)");
factor[13] = new Array(1, 3600, 3590.17, 60, 60, .9972696);

property[14] = "Velocity & Speed";
unit[14] = new Array("Meter/second (m/sec)", "Foot/minute (ft/min)", "Foot/second (ft/sec)", "Kilometer/hour (kph)","Mile (US)/hour (mph)", "Mile (nautical)/hour", "Mile (US)/minute", "Mile (US)/second", "Speed of light (c)");
factor[14] = new Array(1, 5.08E-03, .3048, .2777778, .44707, .514444, 26.8224, 1609.344, 299792458);

function UpdateUnitMenu(propMenu, unitMenu) {
    var i;
    i = propMenu.selectedIndex;
    FillMenuWithArray(unitMenu, unit[i]);
}

function FillMenuWithArray(myMenu, myArray) {
   
    var i;
    myMenu.length = myArray.length;
    for (i = 0; i < myArray.length; i++) {
        myMenu.options[i].text = myArray[i];
    }
}

function CalculateUnit(sourceForm, targetForm) {
    // A simple wrapper function to validate input before making the conversion
    var sourceValue = sourceForm.unit_input.value;

    // First check if the user has given numbers or anything that can be made to one...
    sourceValue = parseFloat(sourceValue);
    if (!isNaN(sourceValue) || sourceValue == 0) {
        // If we can make a valid floating-point number, put it in the text box and convert!
        sourceForm.unit_input.value = sourceValue;
        ConvertFromTo(sourceForm, targetForm);
    }
}
function ConvertFromTo(sourceForm, targetForm) {
   
    var propIndex;
    var sourceIndex;
    var sourceFactor;
    var targetIndex;
    var targetFactor;
    var result;


    propIndex = document.property_form.the_menu.selectedIndex;


    sourceIndex = sourceForm.unit_menu.selectedIndex;
    sourceFactor = factor[propIndex][sourceIndex];


    targetIndex = targetForm.unit_menu.selectedIndex;
    targetFactor = factor[propIndex][targetIndex];



    result = sourceForm.unit_input.value;

    if (property[propIndex] == "Temperature") {
        result = parseFloat(result) + tempIncrement[sourceIndex];
    }
    result = result * sourceFactor;

    result = result / targetFactor;

    if (property[propIndex] == "Temperature") {
        result = parseFloat(result) - tempIncrement[targetIndex];
    }

    targetForm.unit_input.value = result;
}

window.onload = function (e) {
    FillMenuWithArray(document.property_form.the_menu, property);
    UpdateUnitMenu(document.property_form.the_menu, document.form_A.unit_menu);
    UpdateUnitMenu(document.property_form.the_menu, document.form_B.unit_menu)
}

var btn = document.getElementById("swapunits");
btn.addEventListener("click", function afterswap() {
    var from = document.getElementById("subselector"),
        to = document.getElementById("convertinto");
    if (!!from && !!to) {
        var _ = from.value;
        from.value = to.value;
        to.value = _;
    }
    var f = document.getElementById("input"),
        t = document.getElementById("output");
    if (!!f && !!t) {
        var _ = f.value;
        f.value = t.value;
        t.value = _;
    }
});


let ex = document.getElementsByClassName("container");
console.log(ex[0]);
