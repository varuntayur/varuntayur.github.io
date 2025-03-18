'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "81e89530336718ce8f7d47f9a8154cfb",
"assets/AssetManifest.bin.json": "59b7f99c3aeb0ca012111a3cddacf285",
"assets/AssetManifest.json": "fbe9afbd621777e61fcce000e0b8121f",
"assets/assets/audio/dhyanam1.aac": "4c07ddb9d88980652ee9ed2b7ae65e73",
"assets/assets/audio/dhyanam2.aac": "eeab3edc764fdf9f646fb43713ade21a",
"assets/assets/audio/dhyanam3.aac": "ebe9ac7efbb9c4292247415f547bbffe",
"assets/assets/audio/dhyanam4.aac": "0f9e69499f6a564e41c61da80b0fb769",
"assets/assets/audio/dhyanam5.aac": "d5c303bf68b5e7dbff172f0f2146d4d1",
"assets/assets/audio/dhyanam6.aac": "2bc915eaa7b43dee8f63fad6b6dd9d46",
"assets/assets/audio/history1.aac": "6ac0614b44922f1fe4fe78a4dbdcbaf3",
"assets/assets/audio/invocation1.aac": "40ad0a191e6ca790b64f406c22d56bb7",
"assets/assets/audio/invocation10.aac": "89abb5a00a14e10a9de19fd430f2c5e7",
"assets/assets/audio/invocation11.aac": "d2c6d38ae6d73e93e75b4fce2091f01a",
"assets/assets/audio/invocation12.aac": "4cb4529774795e63c1553b02cb53e4f1",
"assets/assets/audio/invocation13.aac": "dfc963a3ebd1917341a3291bdc61635e",
"assets/assets/audio/invocation14.aac": "25dc4303ad6581a4765114d33efb14b8",
"assets/assets/audio/invocation15.aac": "7950ded1ae4a082c43552400ba433de7",
"assets/assets/audio/invocation16.aac": "c376e0b865b7aba01f9bdde328c5c110",
"assets/assets/audio/invocation17.aac": "cad41eeb6dc83261849d7c83b6d4c4b7",
"assets/assets/audio/invocation18.aac": "b471bfc515330e7f2c27bd23401a6477",
"assets/assets/audio/invocation19.aac": "f733bb055d0ac40eb3bc20aae9228577",
"assets/assets/audio/invocation2.aac": "d13d072fac76e69b0bea27c039e85057",
"assets/assets/audio/invocation3.aac": "44186275a2d6fd0be69dd10903d2e0e4",
"assets/assets/audio/invocation4.aac": "36903aa231456c8071d731561893324b",
"assets/assets/audio/invocation5.aac": "aa9b7eb5ab7a19e1329e11ee8ca25d87",
"assets/assets/audio/invocation6.aac": "f0f4ee7a13620960c874c04a269222f4",
"assets/assets/audio/invocation7.aac": "ec224af9f1cb95a9e09f4d3782645f91",
"assets/assets/audio/invocation8.aac": "c7e38e2cc8b246af6590de3ada5878ad",
"assets/assets/audio/invocation9.aac": "ce1db83acb1f9ba983f46974b15afa66",
"assets/assets/audio/phalashruthi1.aac": "6b183cad0e9045bdc3bbe73305ba4635",
"assets/assets/audio/phalashruthi10.aac": "0702550e230cb5a4f42a0b3e772bc34f",
"assets/assets/audio/phalashruthi11.aac": "41fe058a64bcbcb26327024297bf8a8e",
"assets/assets/audio/phalashruthi12.aac": "54700be233e5598922e7ce96fb3d7dee",
"assets/assets/audio/phalashruthi13.aac": "3bf5314a7cdd2dc3025c897bb150dd70",
"assets/assets/audio/phalashruthi14.aac": "4438841cf7d22b4d743c7caf8a491e14",
"assets/assets/audio/phalashruthi15.aac": "5a7ee7ab60a8e1f1a93afebab8db2772",
"assets/assets/audio/phalashruthi16.aac": "bf7c986538b5bce889a73c5bd528e3e1",
"assets/assets/audio/phalashruthi17.aac": "c0aa739552b5745c84f85e68a3874b35",
"assets/assets/audio/phalashruthi18.aac": "b5708520dd5272164532daaa99541cdf",
"assets/assets/audio/phalashruthi19.aac": "9225b924fe1791d99b164ac2f6e0b9ec",
"assets/assets/audio/phalashruthi2.aac": "1c7973a6769510abf207a50ad6022d35",
"assets/assets/audio/phalashruthi20.aac": "81267bf0978d8cad5b550944404bd90e",
"assets/assets/audio/phalashruthi21.aac": "c4546728d320addb74eb6bb5278726ae",
"assets/assets/audio/phalashruthi22.aac": "2d0ee0a09ac7fe905f470d57ab1fa819",
"assets/assets/audio/phalashruthi23.aac": "76bad544ceda3b27f8dac8e047bb47ca",
"assets/assets/audio/phalashruthi24.aac": "9e821e3299932922d2a911ebc3bbe41f",
"assets/assets/audio/phalashruthi25.aac": "f8c9982365b4c94e13a114966ac40e3d",
"assets/assets/audio/phalashruthi26.aac": "fbbb31834b86a7c876751616e8678bf7",
"assets/assets/audio/phalashruthi27.aac": "c16e310bd9d6c2b20e7f017f00240dc2",
"assets/assets/audio/phalashruthi28.aac": "7b4b06eda0e23f9a9d9edb5b85945524",
"assets/assets/audio/phalashruthi29.aac": "bd8860b7fa1ce6cbb4db59bedf8909bb",
"assets/assets/audio/phalashruthi3.aac": "83d05db21aa730245fb24a47112b3109",
"assets/assets/audio/phalashruthi30.aac": "e3631a169485e16df487c7d9b742bee5",
"assets/assets/audio/phalashruthi31.aac": "6269631265bc2eb83b10da154e04ba71",
"assets/assets/audio/phalashruthi32.aac": "c356d727a00876166de83dd721ef3d37",
"assets/assets/audio/phalashruthi4.aac": "aad309fc5feef2c150e90c1ff2cc08bc",
"assets/assets/audio/phalashruthi5.aac": "28bb01fdd3616996c2990dc05cff81a8",
"assets/assets/audio/phalashruthi6.aac": "be217d8dbfccdd67880aa6e5b7aebbc3",
"assets/assets/audio/phalashruthi7.aac": "a22c86a96bb570b89428590dd889b351",
"assets/assets/audio/phalashruthi8.aac": "958f36a57ae007d14375198a080e8442",
"assets/assets/audio/phalashruthi9.aac": "6a16544c18e6ef201bbac61f88e21695",
"assets/assets/audio/sahasranama1.aac": "90262e1c24b9deadda540ed53555bc48",
"assets/assets/audio/sahasranama10.aac": "ddbcc09bfdb22b68f28e995849d0d7ee",
"assets/assets/audio/sahasranama100.aac": "887987748d6c4d9aa049190ebe279c81",
"assets/assets/audio/sahasranama101.aac": "7d56ab005b76ae5d263f2da3e1185607",
"assets/assets/audio/sahasranama102.aac": "50499a55b5bd98105514f58e4ea1ec63",
"assets/assets/audio/sahasranama103.aac": "7382b10123bd7a6a74136a1a3b304a15",
"assets/assets/audio/sahasranama104.aac": "4b2ae5a52c152eedbf7296ccb77d12ab",
"assets/assets/audio/sahasranama105.aac": "cef67240a2d9d1e8bef0aee2d3054346",
"assets/assets/audio/sahasranama106.aac": "99454bca645b175336ba856478ec7157",
"assets/assets/audio/sahasranama107.aac": "d980c949ff82c91cb7b83d50689e2891",
"assets/assets/audio/sahasranama108.aac": "5bb860ab77b2a90d3a7bdf54af61fc9f",
"assets/assets/audio/sahasranama11.aac": "570771d9ea577bdcb63a7d25d31a2168",
"assets/assets/audio/sahasranama12.aac": "4323a59cff9da5f00d20be7c856bafd8",
"assets/assets/audio/sahasranama13.aac": "2aeccd21d12d8821ba307a42b6242957",
"assets/assets/audio/sahasranama14.aac": "c5f07075fdb9866be48e94ac6b5a2c84",
"assets/assets/audio/sahasranama15.aac": "f370381148625cbf8c46cbc1de3caf26",
"assets/assets/audio/sahasranama16.aac": "1dae69980e1dc252bfb5a7e59340ef4b",
"assets/assets/audio/sahasranama17.aac": "4e80f6bf48c6df943160881f89a76521",
"assets/assets/audio/sahasranama18.aac": "288f82ab7c8794948e461e9b92177705",
"assets/assets/audio/sahasranama19.aac": "0bd801f0aef2848d7f3740767086a11e",
"assets/assets/audio/sahasranama2.aac": "d166b1b2bbdb7620c3007dd26af9bb14",
"assets/assets/audio/sahasranama20.aac": "2c53d5f0afe09c547237c0940070c8cc",
"assets/assets/audio/sahasranama21.aac": "e24b86a84bd7c0e90fd728de75925114",
"assets/assets/audio/sahasranama22.aac": "6989c37a1d1a9c444ab651d0e2e0333f",
"assets/assets/audio/sahasranama23.aac": "2f809b016c9853a1c769ed943eb141b6",
"assets/assets/audio/sahasranama24.aac": "b7fee96eb35e4faa8673b1b261af36a3",
"assets/assets/audio/sahasranama25.aac": "8237e1f471dde72eac7022e19e3c9108",
"assets/assets/audio/sahasranama26.aac": "df9e59253a52f636bcd62ac06c353da4",
"assets/assets/audio/sahasranama27.aac": "cd1adc2d096b4ac6d8fda4ae87001a06",
"assets/assets/audio/sahasranama28.aac": "012d057d31f86e8cb96ac4a6c37063bb",
"assets/assets/audio/sahasranama29.aac": "562c14adc569fe069fd1b3257738d0ab",
"assets/assets/audio/sahasranama3.aac": "23cf7ec298b6dc1a9fea989c9572051f",
"assets/assets/audio/sahasranama30.aac": "96b3437bc92a0da914c88db68db9c6c5",
"assets/assets/audio/sahasranama31.aac": "87566520db796fd4c8b95a404f1c053f",
"assets/assets/audio/sahasranama32.aac": "f1beee1d01cc8830419d690b7457737d",
"assets/assets/audio/sahasranama33.aac": "037b33173e80acd1b4f82721f9200b86",
"assets/assets/audio/sahasranama34.aac": "5aa6eee293c72f9467174367b056605a",
"assets/assets/audio/sahasranama35.aac": "29429fec6249be9ddc69f642f0f7d0e5",
"assets/assets/audio/sahasranama36.aac": "65d42cb966a8d624f9f9460625da104d",
"assets/assets/audio/sahasranama37.aac": "9a9a0da0dfd6c9d137f4e5a2bfd90e23",
"assets/assets/audio/sahasranama38.aac": "a1d3b61ae3a77954401748fdeaadddaf",
"assets/assets/audio/sahasranama39.aac": "bd1c2b57ffe13e0c105e64f32250531c",
"assets/assets/audio/sahasranama4.aac": "b6231b3f546f96cdb8c5b6da38112409",
"assets/assets/audio/sahasranama40.aac": "28abf9ed8c5bcf3b89096781cb9143e8",
"assets/assets/audio/sahasranama41.aac": "fa851e9b7a9d9f4bb2dd6ee97100d644",
"assets/assets/audio/sahasranama43.aac": "f5b1939954aa6331330b98fbe3b49033",
"assets/assets/audio/sahasranama44.aac": "a2f82369c6093c64184278304e7afb67",
"assets/assets/audio/sahasranama45.aac": "8eb63b03c486b9f69d995a1c2f9f004a",
"assets/assets/audio/sahasranama46.aac": "c36ab046a1d5d06a022f45918875364e",
"assets/assets/audio/sahasranama47.aac": "a0275ee11977fce80be67ae271436c38",
"assets/assets/audio/sahasranama48.aac": "3f2522b72301add24b63fe5752fbd908",
"assets/assets/audio/sahasranama49.aac": "72a1462ddd4649fbd5479a062283c2ae",
"assets/assets/audio/sahasranama5.aac": "dd10748d81a34e4a9cc07447c649067d",
"assets/assets/audio/sahasranama50.aac": "98b86d2752604f8e98b3f9afc531dd98",
"assets/assets/audio/sahasranama51.aac": "4a18075330ca9277da532b2ebbb9ce7e",
"assets/assets/audio/sahasranama52.aac": "e873a399f378982a6073cfcf24d0a1be",
"assets/assets/audio/sahasranama53.aac": "1f9f240f165f45abfe6baf38f454b73a",
"assets/assets/audio/sahasranama54.aac": "d100e64941c8d693861800ba2af47381",
"assets/assets/audio/sahasranama55.aac": "3c9e56898daeac66254f98c0277495d8",
"assets/assets/audio/sahasranama56.aac": "39125ad8caee191718b3995db36f621b",
"assets/assets/audio/sahasranama57.aac": "5e7ad451fd44e4a46065daa945577e46",
"assets/assets/audio/sahasranama58.aac": "f61da8c4bd6af6b28549fbdbb9afa4da",
"assets/assets/audio/sahasranama59.aac": "51ef58a68d6bc59f115dedab2f5c1c7a",
"assets/assets/audio/sahasranama6.aac": "22ba9e76db6e4d9257f165124bb8def0",
"assets/assets/audio/sahasranama60.aac": "997b77053230e794c2480aece0df9578",
"assets/assets/audio/sahasranama61.aac": "55651ee6d1f597ef8195d2d6b0bfdd7b",
"assets/assets/audio/sahasranama62.aac": "7067dda982729c332b56bda30f299ca0",
"assets/assets/audio/sahasranama63.aac": "32193050f4395a2a405f8f93f8390d5a",
"assets/assets/audio/sahasranama64.aac": "cf4c85f3849bfcd2f387eea880288d78",
"assets/assets/audio/sahasranama65.aac": "f28ce0302723756035a3acb1ba382148",
"assets/assets/audio/sahasranama66.aac": "edb9e6d9100199580862f4aa4f91bc18",
"assets/assets/audio/sahasranama67.aac": "cc8af9cbbb4191166639d4b66b38927a",
"assets/assets/audio/sahasranama68.aac": "52b7f0c1587f52017407248d97524939",
"assets/assets/audio/sahasranama69.aac": "86e14d60fb671f80f4e638f440f67a7c",
"assets/assets/audio/sahasranama7.aac": "189c806aade1e2be6d25698ec7a92416",
"assets/assets/audio/sahasranama70.aac": "e4682bfe090c8a7548b5347e982d2a49",
"assets/assets/audio/sahasranama71.aac": "511d4955bffc46924213f4697c93df99",
"assets/assets/audio/sahasranama72.aac": "9bfc0401b8079c435f3f7a8c5d3d934d",
"assets/assets/audio/sahasranama73.aac": "c08406f205d2ec0f8d6034c06d06e357",
"assets/assets/audio/sahasranama74.aac": "e6963c43c10a11160a5981587d471fa4",
"assets/assets/audio/sahasranama75.aac": "7de60fced46d92dcc99232619f2bca12",
"assets/assets/audio/sahasranama76.aac": "c766655171e567e2a4b44904ab0f8886",
"assets/assets/audio/sahasranama77.aac": "2ef36a84999d99953193ef1ad21fd300",
"assets/assets/audio/sahasranama78.aac": "f1c949eeb5d47057c217e4988be1829e",
"assets/assets/audio/sahasranama79.aac": "691d7eb885b9ace7424daf2de0c1feab",
"assets/assets/audio/sahasranama8.aac": "ee0d6159b82d27b529f28997f53a379b",
"assets/assets/audio/sahasranama80.aac": "45e4dd1270916b8a7f078d228478cae4",
"assets/assets/audio/sahasranama81.aac": "809819ab7888eab93f33fcae4aac4dbe",
"assets/assets/audio/sahasranama82.aac": "d9088b5c7b2ebcc8d97ae2772588dba7",
"assets/assets/audio/sahasranama83.aac": "4ee554df35ff591d9e1768869d2a30ad",
"assets/assets/audio/sahasranama84.aac": "f7ce7474fbf78cd94c2caa85a12bbad7",
"assets/assets/audio/sahasranama85.aac": "f9d67d2c00362bf6c1677f49b76c230d",
"assets/assets/audio/sahasranama86.aac": "ef48e8d58ab74c8adf7b72a5857d50a5",
"assets/assets/audio/sahasranama87.aac": "144a00b5e21bcb45bcc857acbe2f1607",
"assets/assets/audio/sahasranama88.aac": "98888ccb6ae57ca3fd8abaeec538c132",
"assets/assets/audio/sahasranama89.aac": "e321303e848773e57b55a1353a7556d9",
"assets/assets/audio/sahasranama9.aac": "ceb61b8d6605628cc8ea27eae22b0f4b",
"assets/assets/audio/sahasranama90.aac": "38abcc269128b22666de8273bb87cf2f",
"assets/assets/audio/sahasranama91.aac": "cede84ef6ffdf523fd25800593458e33",
"assets/assets/audio/sahasranama92.aac": "dc49c815966288fb16828411d8546112",
"assets/assets/audio/sahasranama93.aac": "73dfcb15b043a1aa34316ae1464cbb55",
"assets/assets/audio/sahasranama94.aac": "a3fd226d394b9be39f1d9d7342ddbb39",
"assets/assets/audio/sahasranama95.aac": "521d887b7cc8f0372362121dfab2b801",
"assets/assets/audio/sahasranama96.aac": "6e860c3480cf270296309e4773291d37",
"assets/assets/audio/sahasranama97.aac": "3557224d38ba420e515c650850d985f7",
"assets/assets/audio/sahasranama98.aac": "6a05f0d532eb85bc96b71c2e6bc5144e",
"assets/assets/audio/sahasranama99.aac": "f0bfcce84b518bf8b3104c17cb3c2481",
"assets/assets/audio/sample.mp3": "368b65bcafb9ab847a5ffc089a869916",
"assets/assets/audio/shanti.aac": "26dc4a688d5155870ce80f0129c00cd2",
"assets/assets/dhyanam.json": "070c5b603e88d34a76d7c5e5be46b585",
"assets/assets/history.json": "568368b199fca955728e08ac1a3fc13c",
"assets/assets/images/avatara.webp": "ddb7196d6eb65c5730774c603cf6d0f3",
"assets/assets/images/dhyanam.webp": "bcd46c8c82548595488e8fa58eb13eb7",
"assets/assets/images/dhyanam_icon.webp": "d3b2ed61884c03845881925b7b5a71ed",
"assets/assets/images/history.jpg": "0eba7f63a361da3991e44afab26ed5b9",
"assets/assets/images/invocation.webp": "e1b76b71e907f111fa750156a12ccec6",
"assets/assets/images/invocation_icon.webp": "006d470975ffd0342cd90e96a38e1cb1",
"assets/assets/images/mangala_icon.webp": "bc28d151a463353d1061e13e6503ffe7",
"assets/assets/images/phalashruthi_icon.webp": "db447ee2c35342a01329234dbb1efdef",
"assets/assets/images/sahasranama_icon.webp": "101b9d54af6e1f737b85b5167434856b",
"assets/assets/images/shloka-chanting.webp": "3bb0a728b8e198533c97122b7fa30c11",
"assets/assets/images/stars.webp": "9dc4f69b8c48d26b62f4ca4f734183b6",
"assets/assets/invocation.json": "9f0e326b501eee6af898b562e172c2a5",
"assets/assets/mangala.json": "33be56e289141ca9863fa0869e26e634",
"assets/assets/phalashruthi.json": "d1973c7d70abd8c33b3928b205a686a2",
"assets/assets/sahasranama.json": "2db1acb42c57c08d5dc5da15368ba67e",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "9272cfd7a69adc2145c956436aa63175",
"assets/NOTICES": "30c70fc1b292230994c27a91dce051b9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.webp": "b2cc3aac1ad254624b915f9afb08eecb",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "6129b18119ec32b848e40245003654cd",
"index.html": "aea849ebfa33fbd036bb88dabd39ef44",
"/": "aea849ebfa33fbd036bb88dabd39ef44",
"main.dart.js": "b12cc8220672aa7be9364629135f8b18",
"manifest.json": "4bb3f478400b995b5ff71f8b9c9bbabd",
"version.json": "2f0f56fc9685c27f224cf3e678854f1b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
