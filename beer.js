(function() {

  var beerButton = document.getElementById("bButton");
  beerButton.addEventListener("click", beerFunc);

  function beerFunc() {

    var beerPick = document.getElementById("beerInput").value;
    beerPick = beerPick.toLowerCase();

    // random number created in order to generate random beer

    var chance = function() {
       var first = Math.random();
       var revised = (first * 6) + 1;
       var finalNum = Math.floor(revised);
       return finalNum;
     };

    var getRandomElement = function(elements) {
        var x = Math.floor(Math.random() * elements.length)
        return elements[x];
    };

    var beerChoices = {
      ipas: ["Founders' All Day IPA", "Dogfish Head 60 Minute IPA", "Stone IPA", "Lagunitas IPA", "Firestone Walker Union Jack IPA", "La Cumbre Elevated IPA", "Goose Island India Pale Ale", "Shipyard IPA", "Samuel Smith’s India Ale"],
      rares: ["KBS", "Dark Lord", "Bourbon County Brand Stout", "Pliny the Elder", "Pliny the Younger", "Heady Topper"],
      stouts: ["Founder's Breakfast Stout", "Oskar Blues' Ten FIDY", "Bell's Kalamazoo Stout", "The Bruery's Chocolate Rain", "Boneyard's Backbone Stout", "Maine's Mean Old Tom", "Guinness Draught", "Murphy's Irish Stout", "Beamish Irish Stout"],
      lagers: ["Samuel Adams Boston Lager", "Yuengling", "PBR", "Magic Hat's Dream Machine", "Fort George's 1811 Lager", "Heineken"],
      paleAles: ["3 Floyds Zombie Dust", "Bell's Two Hearted Ale", "Toppling Goliath's pseudo Sue", "Sierra Nevada's Pale Ale", "Tree House's Lights Out", "Pipeworks' The Lizard King"],
      belgians: ["Goose Island's Matilda", "New England's Fat Ten-er", "Allagash's White", "Anchorage's Bitter Monk", "Sierra Nevada's Sleight of Hand", "Revolution's A Little Crazy"],
      ciders: ["Angry Orchard's Crisp Apple", "Cigar City Cider and Mead's Homemade Apple Pie", "Downeast Cider House's Original Blend", "Ciderboys' Mad Bark", "Bulmers' Original Irish Cider", "Blue Mountain's Cherry Cider"],
      xmas: ["3 Floyds Alpha Klaus Xmas Porter", "Revolution's Fistmas Ale", "Fremont's Bourbon Abominable", "Boulevard's Chocolate Ale", "Alaskan's Winter Ale", "Great South Bay's Sleigh Ryed"],
      pumpkin: ["Southern Tier's Pumking", "Dogfish Head's Punkin Ale", "Hoppin Frog's Frog's Hollow Double Pumpkin Ale", "Shipyard's Pumpkinhead Ale", "Avery's Rumpkin", "Elysian's Punkuccino Coffee Pumpkin Ale"],
      oktoberfest: ["Samuel Adams' Octoberfest", "Surly's SurleyFest", "New Glarus' Staghorn Octoberfest Beer", "Revolution's Oktoberfest", "Two Brothers' Atom Smasher", "Great Lakes' Oktoberfest"],
      scottish: ["Founders' Dirty Bastard", "3 Floyds Robert the Bruce", "BrewDog's San Diego Scotch Ale", "No Label's Perpetual Peace Wee Heavy", "Kettlehouse's Cold Smoke", "Oskar Blues' Old Chub Knightro"],
      pilsner: ["Firestone Walker's Pivo Pils", "Steam Whistle's Steam Whistle Pilsner",  "Boulevard's KC Pils", "Sixpoint's The Crisp", "Smuttynose's Vunderbar Pilsner", "Sierra Nevada's Nooner Pilsner"],
      porter: ["Oskar Blues' Death By Coconut", "Kane's Sunday Brunch", "fiddlehead's Hodad", "Smog City's Coffee Porter", "Dangerous Man's Peanut Butter Porter", "Ballast Point's Victory At Sea"],
      wheat: ["3 Floyds Gumballhead", "Lagunitas A Little Sumpin' Sumpin'", "Barrier's Bumble", "Blue Lobster's Stalkholm Syndrome", "Parish's Canebrake", "Alpine's Willy Vanilly"],
      amber: ["New Belgium's Fat Tire", "Maine Beer Co.'s Zoe", "Cigar City's Tocobaga", "AleSmith's Evil Dead Red", "Ale Asylum's Ambergeddon", "Buffalo Bayou's 1836"],
      germanSchwarzbier: ["Shiner Bohemian Black Lager", "Guinness Black Lager"],
      belgian: ["Leffe Blonde", "Weyerbacher Brewing Company's Verboten", "Samuel Adams Belgian Session", "Chimay Premiere", "Blue Moon Winter Abbey Ale", "Flying Fish Abbey Dubbel", "Victory Brewing Company's Golden Monkey", "Weyerbacher Brewing Company's Merry Monks"]

    };

    var beerCommands = {
      ipas: ["bitter", "pale", "hoppy", "ipa", "india pale ale"],
      stouts: ["dark", "stout", "creamy", "thick", "malt", "malty"],
      rares: ["rare", "limited"],
      lagers: ["lager"],
      paleAles: ["pale", "pale ale", "ale"],
      belgians: ["belgian", "white", "belgian ipa"],
      ciders: ["cider", "sweet", "fruit", "fruity", "apple", "fruity"],
      xmas: ["xmas", "x-mas", "christmas", "winter", "holiday"],
      pumpkin: ["pumpkin", "spicy", "spice", "halloween"],
      oktoberfest: ["oktoberfest", "octoberfest", "october", "oktober"],
      scottish: ["scottish", "scottish ale", "scotch ale", "wee", "wee heavy", "scotch ale-wee heavy", "scotch ale/wee heavy"],
      pilsner: ["pilsner"],
      porter: ["porter"],
      wheat: ["wheat", "wheate ale", "summer"],
      amber: ["amber", "american amber", "red", "red ale"]
    };

    // function to change picture, depending on beer displayed

    function changePic(eId, newPic) {
      document.getElementById(eId).src = newPic;
    }

    /* user input is checked against beerCommands keywords and then outputs correct beerChoices type
       beer image also changed to match beer type
    */


    var finalBeerDisplay = document.getElementById("beerOutput");

    for (var i = 0; i < beerCommands.scottish.length; i++) {
      finalBeerDisplay.className=".beerColor";
      if (beerPick === beerCommands.ipas[i]) {
        finalBeerDisplay.innerHTML = getRandomElement(beerChoices.ipas);
        changePic("pic", "images/ipa.jpg");
        break;
      }
      else if (beerPick === beerCommands.stouts[i]) {
        finalBeerDisplay.innerHTML = getRandomElement(beerChoices.stouts);
        changePic("pic", "images/pint.jpg");
        break;
      }
      else if (beerPick === beerCommands.rares[i]) {
        finalBeerDisplay.innerHTML = getRandomElement(beerChoices.rares);
        changePic("pic", "images/kbs.jpg");
        break;
      }
      else if (beerPick === beerCommands.lagers[i]) {
      finalBeerDisplay.innerHTML = getRandomElement(beerChoices.lagers);
      changePic("pic", "images/lager.jpg");
      break;
      }
      else if (beerPick === beerCommands.paleAles[i]) {
        finalBeerDisplay.innerHTML = getRandomElement(beerChoices.paleAles);
        changePic("pic", "images/paleAle.jpg");
        break;
      }
      else if (beerPick === beerCommands.belgians[i]) {
        finalBeerDisplay.innerHTML = getRandomElement(beerChoices.belgians);
        changePic("pic", "images/belg.jpg");
        break;
      }
      else if (beerPick === beerCommands.ciders[i]) {
        finalBeerDisplay.innerHTML = getRandomElement(beerChoices.ciders);
        changePic("pic", "images/1.jpg");
        break;
      }
      else if (beerPick === beerCommands.xmas[i]) {
        finalBeerDisplay.innerHTML = getRandomElement(beerChoices.xmas);
        changePic("pic", "images/1.jpg");
        break;
      }
      else if (beerPick === beerCommands.pumpkin[i]) {
        finalBeerDisplay.innerHTML = getRandomElement(beerChoices.pumpkin);
        changePic("pic", "images/1.jpg");
        break;
      }
      else if (beerPick === beerCommands.oktoberfest[i]) {
        finalBeerDisplay.innerHTML = getRandomElement(beerChoices.oktoberfest);
        changePic("pic", "images/1.jpg");
        break;
      }
      else if (beerPick === beerCommands.scottish[i]) {
        finalBeerDisplay.innerHTML = getRandomElement(beerChoices.scottish);
        changePic("pic", "images/1.jpg");
        break;
      }
      else if (beerPick === beerCommands.pilsner[i]) {
        finalBeerDisplay.innerHTML = getRandomElement(beerChoices.pilsner);
        changePic("pic", "images/1.jpg");
        break;
      }
      else if (beerPick === beerCommands.porter[i]) {
        finalBeerDisplay.innerHTML = getRandomElement(beerChoices.porter);
        changePic("pic", "images/pint.jpg");
        break;
      }
      else if (beerPick === beerCommands.wheat[i]) {
        finalBeerDisplay.innerHTML = getRandomElement(beerChoices.wheat);
        changePic("pic", "images/1.jpg");
        break;
      }
      else if (beerPick === beerCommands.amber[i]) {
        finalBeerDisplay.innerHTML = getRandomElement(beerChoices.amber);
        changePic("pic", "images/1.jpg");
        break;
      }
      else {
        finalBeerDisplay.innerHTML = "invalid entry";
        finalBeerDisplay.className="pColor";
      }
    }
  }


  // get month, then display that month's beer of the month

  window.onLoad = seasonalBeer();

  function seasonalBeer() {
    var monthBeer = document.getElementById("seasonalBeer");

    var monthToCheck = beerMonth();

    function beerMonth() {

      var months = ["New Glarus' Road Slush Oatmeal Stout", "Bell's Kalamazoo Stout", "Guiness", "Founder's KBS", "Bell's Two Hearted Ale", "Two Brother's Dog Days", "Lagunitas' A Little Sumpin' Sumpin'", "3 Floyd's Gumballhead", "New Belgium's Fat Tire", "Revolution's Oktoberfest", "Goose Island's Bourbon County Brand Stout", "3 Floyd's Alpha Klause"];
      var now = new Date();
      var month = now.getMonth();
      var currentMonth = months[month];
      return currentMonth;

    }

    monthBeer.innerHTML = monthToCheck;

  }

})();
