/*
Total is 83 :
13 * 5 = 65 episodes
4 concerts
4 * 3 + 2 = 14 zesshoushinai
 */
const episodes = [
    "S1 E1",
    "S1 E2",
    "S1 E3",
    "S1 E4",
    "S1 E5",
    "S1 E6",
    "S1 E7",
    "S1 E8",
    "S1 E9",
    "S1 E10",
    "S1 E11",
    "S1 E12",
    "S1 E13",
    "Zesshoushinai 1",
    "G E1",
    "G E2",
    "G E3",
    "G E4",
    "G E5",
    "G E6",
    "G E7",
    "G E8",
    "G E9",
    "G E10",
    "G E11",
    "G E12",
    "G E13",
    "Zesshoushinai 2",
    "Concert G",
    "Zesshoushinai GX 1",
    "Zesshoushinai GX 2",
    "Zesshoushinai GX 3",
    "GX E1",
    "GX E2",
    "GX E3",
    "GX E4",
    "GX E5",
    "GX E6",
    "GX E7",
    "GX E8",
    "GX E9",
    "GX E10",
    "GX E11",
    "GX E12",
    "GX E13",
    "Zesshoushinai GX 4",
    "Concert GX",
    "AXZ E1",
    "AXZ E2",
    "AXZ E3",
    "AXZ E4",
    "AXZ E5",
    "AXZ E6",
    "AXZ E7",
    "AXZ E8",
    "AXZ E9",
    "AXZ E10",
    "AXZ E11",
    "AXZ E12",
    "AXZ E13",
    "Zesshoushinai AXZ 1",
    "Zesshoushinai AXZ 2",
    "Zesshoushinai AXZ 3",
    "Zesshoushinai AXZ 4",
    "Concert AXZ",
    "XV E1",
    "XV E2",
    "XV E3",
    "XV E4",
    "XV E5",
    "XV E6",
    "XV E7",
    "XV E8",
    "XV E9",
    "XV E10",
    "XV E11",
    "XV E12",
    "XV E13",
    "Zesshoushinai XV 1",
    "Zesshoushinai XV 2",
    "Zesshoushinai XV 3",
    "Zesshoushinai XV 4",
    "Concert XV"
];

const titles = [
    "Awakening Heartbeat",
    "Noise and Disharmony",
    "Passing in the Night",
    "Falling tears",
    "From the Bottom of Darker Depths",
    "Where Omens Lead",
    "Fate Just Keeps Firing",
    "No Shadows in the Sunlight",
    "Protector's Song",
    "What Only Clasped Hands Can Create",
    "Shoot the Moon",
    "Symphogear",
    "Meteoroids Falling, Burning, Disappearing, and then...",
    "Not-So-Superb Songs of the Valkyries: Symphogear 1",
    "The Gungnir Girl",
    "Power and Lies in Her Heart",
    "Those Who Long for the End, Those Who Challenge the End",
    "The Place I Call Home",
    "Bloodstained Serenade",
    "A Miracle is a Cruel Thing",
    "When You Stop Being You",
    "Hand in Hand for Me, As I Waver...",
    "The Origin of a Hero",
    "Countdown to Loss",
    "Destiny Ark",
    "Striking Spear",
    "In the Distance, That Day, When the Star Became Music...",
    "Not-So-Superb Songs of the Valkyries: Symphogear 2",
    "Concert G",
    "Not-So-Superb Songs of the Valkyries GX: Symphogear",
    "Not-So-Superb Songs of the Valkyries GX: Symphogear",
    "Not-So-Superb Songs of the Valkyries GX: Symphogear",
    "Murderer of Miracles",
    "Before I Destroy the World...",
    "Twilight of the Wielders",
    "Gungnir, Once More",
    "Edge Works",
    "Drawn Blade",
    "Carry on the Shining Light, and Stay True to Yourself",
    "The Courage to Face It",
    "The Middle of a Dream",
    "It's So Cruel, But...",
    "It's All Right. Everything is Just Fine.",
    "GX",
    "Believe in Justice and Hold It Close",
    "Not-So-Superb Songs of the Valkyries GX: Symphogear",
    "Concert GX",
    "Val Verde Hell Screen",
    "Last Resort",
    "The Horoscope Drawn By Gears",
    "Gold Making",
    "Risking Your Life in a Fictional Theater",
    "Emerging From the Deathbed",
    "ARCANA No.00",
    "Between the Past and the Future",
    "Blue Rabbit",
    "An Tiki Tira",
    "Pinnacle of Divine Might",
    "AXZ",
    "By Shedding Many Tears, the Reality You Face is...",
    "Not-So-Superb Songs of the Valkyries AXZ: Symphogear",
    "Not-So-Superb Songs of the Valkyries AXZ: Symphogear",
    "Not-So-Superb Songs of the Valkyries AXZ: Symphogear",
    "Not-So-Superb Songs of the Valkyries AXZ: Symphogear",
    "Concert AXZ",
    "From Beyond Human History",
    "The Day The Sky Falls",
    "Penny Dreadful",
    "The Name of the Flower is Amalgam",
    "The Hidden Thing in the Bag",
    "Xenoglossia",
    "Cutting the Tangled Thread",
    "XV",
    "I am a father",
    "Not a Crude Color of Rust",
    "In The Beginning Was The Word",
    "Senki Zessho",
    "Let's Make History With A Light That Even the Gods Don't Know",
    "Concert XV",

]

const beginning = new Date("October 1, 2019");

const milliSecPerDay = 86400000;

const seasons = new Map([
    ["S1", "11751/Senki_Zesshou_Symphogear"],
    ["G", "15793/Senki_Zesshou_Symphogear_G"],
    ["GX", "21573/Senki_Zesshou_Symphogear_GX"],
    ["AXZ", "32836/Senki_Zesshou_Symphogear_AXZ"],
    ["XV", "32843/Senki_Zesshou_Symphogear_XV"]
]);

module.exports = { episodes, milliSecPerDay, beginning, seasons, exports, titles };
