var CAMP = [

    {

    equipmentName: "Tent",

    equipmentImage: "tent.jpg",

    equipmentPrice: "100",

    equipmentDescription: "Any great camping trip starts with an awesome tent.",

},

{

    equipmentName: "Flashlight",

    equipmentImage: "flashlight.jpg",

    equipmentPrice: "30",

    equipmentDescription: "The three main features for a flashlight are Dimensions, Battery, and Light. Each of these characteristics are very important when it comes to selecting a flashlight.",

   

},

{

    equipmentName: "Grill",

    equipmentImage: "grill.jpg",

    equipmentPrice: "60",

    equipmentDescription: "The Go-Anywhere offers excellent heat management, and the small form factor makes it easy to stow in a variety of places.",

},

{

    equipmentName: "Power Bank",

    equipmentImage: "power.jpg",

    equipmentPrice: "50",

    equipmentDescription: "The Anker 511 Portable Powerstation is the perfect middle ground for your power needs. Its got enough juice that youll never have to worry about your phone charge, but not enough that youre tempted to stream all of Grays Anatomy when you could be sitting around the campfire. Its big enough to include some extras, like a flashlight (handy) and an AC outlet, which was a feature I didnt even realize Id want until I made it to camp. But even with all that its still small enough that you wont have to account for its size when fitting all your gear into your car.",

},

{

    equipmentName: "Lantern",

    equipmentImage: "lantern.jpg",

    equipmentPrice: "20",

    equipmentDescription: "Take the water-resistant Coleman Classic LED Lantern anywhere you need extra light. This lantern shines 400 lumens up to 12 meters on its high setting. With a runtime of up to 30 hours on high and 70 hours on low, the sun will come up long before you need fresh batteries. The large bail handle makes it easy to carry anywhere. The LED lasts a lifetime, so it never needs replacing and it runs cool so it's always safe to touch, even when it's been on for hours.",

},

{

    equipmentName: "Bug Spray",

    equipmentImage: "bug.jpg",

    equipmentPrice: "5",

    equipmentDescription: "Protects against mosquitoes, flies and ticks for up to 6 hours.",

},

{

    equipmentName: "Sleeping Bag",

    equipmentImage: "bag.jpg",

    equipmentPrice: "50",

    equipmentDescription: "Perfect for spring, summer, fall, and cool weather, with a rated temperature from 40°F to 77°F (optimal comfort temperature 62°F to 75°F). Keep yourself cosy, warm and safe in every situation at normal altitudes. The ultra-strong, waterproof outer protective shell is made from our unique waterproof hex-tech design, double-layered with S-shape stitching, and 3D inner synthetic fiber fill for optimal warmth and insulation to protect you from the elements.",

},

{

    equipmentName: "Lighter Fluid",

    equipmentImage: "lighter.jpg",

    equipmentPrice: "8",

    equipmentDescription: "CLEAN BURNING lighter fluid is very clean burning. It does not leave horrible grimy residue on charcoal and grills. The lighter fluid burns up so therefore will not leave any residue",

},

{

    equipmentName: "Hiking Boots",

    equipmentImage: "boots.jpg",

    equipmentPrice: "80",

    equipmentDescription: "Hiking boots are critical to your comfort and performance on the trail, but this no longer means a stiff and burly model that will weigh you down. The trend is toward lighter materials that still offer decent support, and waterproof boots are the most popular by far ",

},

{

    equipmentName: "Blankets",

    equipmentImage: "blanket.jpg",

    equipmentPrice: "30",

    equipmentDescription: "No longer does your coziest blanket have to stay indoors. The Mountain Blanket is both incredibly soft and able to withstand adventurous time outside."


},

];

 

function loadData(){

    $.each(CAMP, function(index, equipment){

        $("#app").append(`

        <div id="${index}" class="campHolder">

            <h4>${equipment.equipmentName}</h4>

            <div class="equipImg">

                <img src="images/${equipment.equipmentImage}" alt="">

            </div

            </div>

        `)

    });

 

    initListeners();

}

 

function initListeners() {

    $(".campHolder").click(function (e){

        let campIndex = e.currentTarget.id;

        $("#app").html(`

        <div class="campHolderFull">

            <h2>${CAMP[campIndex].equipmentName}</h2>

            <div class="equipImgFull">

                <img src="images/${CAMP[campIndex].equipmentImage}" alt="">

            </div

            <div class="equipPrice">

            Price: $${CAMP[campIndex].equipmentPrice}

            <div class="equipDescrip">${CAMP[campIndex].equipmentDescription}

            </div>

            <div class="close">CLOSE</div>

        `)

 

        addCloseListener();

    });

}

 

function addCloseListener(){

    $(".close").click(function() {

        $("#app").html("");

        loadData();

    });

}

$(document).ready(function (){

loadData();

});