'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"sitemap.xml": "156e6507bd1a9b22fc81ebeb8a061c2e",
"redirect/youtube/index.html": "47c9b1a47fb0fa8fac467aee35e2f0ee",
"/": "409665f67560127a2f5150df7db626c1",
"redirect/company-of-one/index.html": "1ac47a2b5b5cf273f59870d7945701ce",
"youtube/index.html": "8d1bd5a8a1b7d4a00e3c0f7bbc960d49",
"youtube/serie-etf/index.html": "cc4586a3257bfc4dfa7d37dc8609bd0f",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"README.md": "e0437ab0c30dbc4417c0e71c9e412ba6",
"CNAME": "17067924b1f9c16b1871cdf8e4a9cec5",
"zohoverify/verifyforzoho.html": "101591f54e04add8d1b545af17018a29",
"assets/FontManifest.json": "cab905cb3aac16cd8f8b52a8d504c382",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/feather_icons/fonts/feather.ttf": "0d0d92d310cc68e53796bf15c36838c2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "755c72a0211aa1e10865a9d288b169ea",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "c3b067bcd4dea4ce8811cf929e8e3df1",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "5682b0f8ac62170896e25f8adcf2a5c6",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/assets/images/logo_dark.png": "11909a589cd318632480fee567ffe70b",
"assets/assets/images/blog_03.jpg": "5f88a99b651c6dbad988d684c6fc41b3",
"assets/assets/images/icon_box.jpg": "7a18b9b091db5fe0fc16c76a3ffd5db2",
"assets/assets/images/dev_header.png": "b3844a10b4965bbd8b87ac6023f2eac0",
"assets/assets/images/commenter.jpg": "0ad74a9a137f730411a2b4b3512d170a",
"assets/assets/images/guido_cc.png": "730a9a524a47208517e245fc4279aa7e",
"assets/assets/images/portfolio_02.jpg": "9beba509a25cfb96362aeb7e98335e58",
"assets/assets/images/box_cover_gold.png": "a58f0270c1fd04d7eae1217c7e5645b9",
"assets/assets/images/blob_femur_ash.png": "b899f92250a0f7220db5c45bea2080c8",
"assets/assets/images/portfolio_01.jpg": "43e7af9f9e24c8c4db73ee7d493c04f4",
"assets/assets/images/blob_bean_ash.png": "bc902ac538eedf1abc48457bbf064fd1",
"assets/assets/images/portfolio_06.jpg": "015d9a88eeaa1a0f5e39b81d32e1bf87",
"assets/assets/images/box_cover_dark.png": "34f90bdba46732221c608605016c40d5",
"assets/assets/images/ghana_flag.png": "b0afee866ab3333560a0072c5d53bce2",
"assets/assets/images/blob_small_bean_ash.png": "411605e065607a48e110cedc91bebd82",
"assets/assets/images/dots_globe_grey.png": "bb16bba932c2e98f3dbe3e6b1b6a864b",
"assets/assets/images/portfolio_04.jpg": "ff07b0c6397e19d0cf30b03df9f196d2",
"assets/assets/images/guido_swe.png": "9b3d43376466953bccf864d7af650328",
"assets/assets/images/blob_ash.png": "f76b87a8dd8bb4ad017b441854541a2b",
"assets/assets/images/dev_aboutme.png": "21ea8f79cfc69b619c767fa9573b5295",
"assets/assets/images/logo_light.png": "35cf418d32fe6d98a347ae9bf80f29b3",
"assets/assets/images/blog_02.jpg": "01c4b84663980a0b4f55f4bd196492bd",
"assets/assets/images/portfolio_05.jpg": "9e5fedca2725d59b2692670505c8e7e5",
"assets/assets/images/hi_there.png": "1ac6f5101b6a5511f4ad8f8965a49f89",
"assets/assets/images/dots_globe_yellow.png": "d908b032e1a46382b6e6c2baf92e188c",
"assets/assets/images/blob_drumstick_black.png": "381f70d9f8dd4fbbb720214fa02939a2",
"assets/assets/images/mir.png": "ce97143e0b39efecb705476522429e3b",
"assets/assets/images/blob_black.png": "14198d608b7f0980998d329cd353e290",
"assets/assets/images/portfolio_03.jpg": "45d7db96b72f25b4c76740e5dec2208e",
"assets/assets/images/blog_01.jpg": "cd78990246f63c4d64ca5c26bcf31289",
"assets/assets/images/dev_award.png": "9330277f7c4279bb73c0f637f6871af1",
"assets/assets/images/dots_globe_yellow2.png": "d1394584431e43b6973ca031de59a284",
"assets/assets/blog/0003_my-experience-indie-videogame-developer-june-2022.json": "eb2e5c90ab7c8a738409c92b71640e5a",
"assets/assets/blog/0001_welcome.json": "c8b290887c918c0d00ab79f04504f1d1",
"assets/assets/blog/0004_my-favourite-movies-big-short.json": "f6412b1b9b7dcea211c4fc3bc22d7276",
"assets/assets/blog/0002_my-personal-story-part-1.json": "2ff622703542b4df0f4460f399fd2300",
"assets/AssetManifest.bin.json": "721c24340cae5ac98d4134ff4552f444",
"assets/fonts/MaterialIcons-Regular.otf": "3dd0eae089e42784828b4431cf103de4",
"assets/AssetManifest.bin": "bbbc8cd1c0a49638a6acf956c07df6a9",
"assets/NOTICES": "4ab3c683a00084b614a7eba50c396e7d",
"assets/AssetManifest.json": "341a0e44678194559b7b02e7e10b7b4d",
"icons/logo.png": "508623330cb0250a035dd873fcc2ab9b",
"blog/README.md": "8962f55ddc2f942a80d4ab9e0044d191",
"blog/tabletop%20role-playing%20games/2025/05/05/how-i-burned-out-as-a-dm.html": "12ca8e620fb22633450fd6049787fda8",
"blog/tabletop%20role-playing%20games/2024/12/13/tips-for-finding-a-date-for-your-sessions.html": "9382d5122fc5ea57dd63efc1318ef8cf",
"blog/tabletop%20role-playing%20games/2024/12/20/obsidian-how-technology-helps-my-games.html": "ec7382d1f4caf4a815083112559a984d",
"blog/tabletop%20role-playing%20games/2024/12/04/players-using-ai-to-write-their-characters-story.html": "45eeede68574b02f4ff5f1044d20e2d5",
"blog/tabletop%20role-playing%20games/2024/10/26/my-history-with-ttrpgs.html": "f308598180185f3734efe67aac009af0",
"blog/tabletop%20role-playing%20games/2024/10/28/i-wrote-a-dnd-combat-management-app.html": "53bccf7efea9eddca2ca41bc4ca2547d",
"blog/tabletop%20role-playing%20games/2024/11/07/taking-premade-adventures-and-making-them-your-own.html": "5494f8cf75ba549939e7c97e6845353c",
"blog/assets/images/dnd-combat-management-app-preview.webp": "bd0dee107135dd9c45553b64f809ebd4",
"blog/assets/images/dnd-combat-management-app-preview-8.webp": "351c34a1f9685c0967a31b078297d516",
"blog/assets/images/dnd-combat-management-app-preview-3.webp": "84e9a84e11208c7e2824739c33b1e77a",
"blog/assets/images/dnd-combat-management-app-preview-7.webp": "98df8f8e757a07854111f416542e89e0",
"blog/assets/images/dnd-combat-management-app-preview-4.webp": "0cb421ba0e9ec0d20b814e46ee5dd167",
"blog/assets/images/dnd-combat-management-app-preview-2.webp": "bc692a885501fbe840e8da581093a65d",
"blog/assets/images/dnd-combat-management-app-preview-6.webp": "2f66241f7ebf3faff8e539363a032abc",
"blog/assets/images/dnd-combat-management-app-preview-5.webp": "52290a0b4ba488c0c2c2d422a21f307a",
"blog/assets/minima-social-icons.svg": "3a70b871c930a7ed8af27caa162af123",
"blog/assets/main.css": "cdad61cffb215362616ac5937b6c4728",
"blog/404.html": "a889110c19568060519d66963687dbef",
"blog/feed.xml": "3b1929d57b503686dd2fa583f446e127",
"blog/about/index.html": "c8366a2622dea58255077feb14ed8691",
"blog/personal%20finance/2023/05/19/why-personal-finance-shouldnt-be-boring.html": "f420ac86f81dce5dae631c6b51869598",
"blog/personal%20finance/2023/01/03/about-fire.html": "ed6e9e14bb6dc9e9a3f612f1524c24b8",
"blog/personal%20finance/2023/03/18/my-experience-with-trading.html": "ff4672b504b9c3426d77a9f948066cda",
"blog/index.html": "754c8bc1ca5073ca5b2b19b8f28d8bdb",
"blog/2026/01/13/capitalism-era-information-technology.html": "a33d86db4b5ee126b248c865684c0a74",
"blog/career/2023/01/04/being-freelancer-work-from-home-era.html": "713074c4659f1852249b7f392b95b4d8",
"blog/thoughts/2025/01/05/i-dont-like-travelling-part-2.html": "3143b53a06ad62e16d7a75f83d4e2a4f",
"blog/thoughts/2025/02/10/reddit-knights-are-dangerous.html": "ca483d7815dda6fdecb3a412cf8cd6fc",
"blog/thoughts/2023/01/05/about-growing-up.html": "ca3af4f93b08d6406db530290df0fd53",
"blog/thoughts/2023/01/09/i-dont-like-travelling.html": "3e5fcacbee19570e61cd30da5c5f4dbc",
"blog/thoughts/2023/01/26/planning-life-finances-worth-it.html": "3890b80cb22a2f7c48d674d6e45463ad",
"google615e9b1214afaf63.html": "18ec3a67e322b0338e5e05c2d8739783",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"files/CV-GuidoCardinali.pdf": "5d2c06fbb6e6dbd13ab73024f8cb0370",
"donazioni/index.html": "c38d2ddbe378d724775d4e9f325fcac5",
"robots.txt": "376f85e94ee8db023428e7ad0f3b7f08",
"td-study/etfs.csv.gz": "519ef58fcfa82519ac1aebdca881a0d7",
"td-study/Emerging%20Markets/IE00B469F816.csv": "bf07224624d437539adac5a931837937",
"td-study/Emerging%20Markets/IE00B3DWVS88.csv.gz": "013d77c2cb7705b5a2bf49ccd80bdc33",
"td-study/Emerging%20Markets/IE00B3DWVS88.csv.br": "57fd3fd85ffb8f1fe7f85cee46e2dc53",
"td-study/Emerging%20Markets/LU2300295123.csv.br": "1fc7bb6156d9fb0b0fdc779021a58aeb",
"td-study/Emerging%20Markets/IE000KCS7J59.csv.gz": "a5b0befff1daece2ead89ef0d2fcb986",
"td-study/Emerging%20Markets/IE00BKM4GZ66.csv.br": "3e88205ba2a66992bcac8aba26db5866",
"td-study/Emerging%20Markets/FR0010435297.csv.gz": "38e33e9846ccb04194386db5756fd26b",
"td-study/Emerging%20Markets/IE00B3Z3FS74.csv": "e908b95049b674a26e25149c9c4966a2",
"td-study/Emerging%20Markets/IE00BTJRMP35.csv": "324571e27310befff357006dcf73fe79",
"td-study/Emerging%20Markets/IE00B3Z3FS74.csv.br": "a54d5291a0404a378aa3b25e0ef8519c",
"td-study/Emerging%20Markets/IE00B3Z3FS74.csv.gz": "e8e4e14c468c2fdca70f582c2b1938b4",
"td-study/Emerging%20Markets/LU1681045453.csv": "c5e828c475e0e34bace69cf31d9b7be7",
"td-study/Emerging%20Markets/FR0010429068.csv.gz": "157d7ebbf8f686a68a500f13fc34e28f",
"td-study/Emerging%20Markets/IE00B469F816.csv.gz": "1638b0621467b9443e2ba23e7bb23cd7",
"td-study/Emerging%20Markets/IE000KCS7J59.csv": "f24f78a4b66148a7defdf113fe17b7eb",
"td-study/Emerging%20Markets/LU2573967036.csv": "f73b612f6b7f9886fc908921516e3a57",
"td-study/Emerging%20Markets/IE000KCS7J59.csv.br": "3f66bf6e6ecdc1b74a272bb36e043289",
"td-study/Emerging%20Markets/FR0010429068.csv.br": "0b374aedee41676e6e0125f6d3db4063",
"td-study/Emerging%20Markets/LU0292107645.csv.br": "d16ac15abe7383aa160e6bc13d66c34e",
"td-study/Emerging%20Markets/LU0950674175.csv": "42161d20a01e552d9d71e10e5bfcb553",
"td-study/Emerging%20Markets/LU0292107645.csv.gz": "f2912fab0673ee006546b35146e2a038",
"td-study/Emerging%20Markets/IE00B3DWVS88.csv": "0b266e7cf19446e6804c9926722c33c3",
"td-study/Emerging%20Markets/FR0010435297.csv": "49b9f7a924c2d1348b65a23fa9e1bf0d",
"td-study/Emerging%20Markets/LU1437017350.csv": "381f3a31a47488b5d9beb750551cff63",
"td-study/Emerging%20Markets/IE00BKM4GZ66.csv.gz": "2852122dbefa73c1cc98cba9d78c15a5",
"td-study/Emerging%20Markets/LU1681045370.csv": "2408259e6c085f7f8074c73a2cf1f686",
"td-study/Emerging%20Markets/IE00BTJRMP35.csv.br": "d024894a31f1560cbae934f790eb12ae",
"td-study/Emerging%20Markets/IE00B4L5YC18.csv.br": "c5f2b676088f3b4b8e3850f4e65c3bc9",
"td-study/Emerging%20Markets/LU2300295123.csv": "79d8f258bcd16840baa9cb99dfb7c5ec",
"td-study/Emerging%20Markets/IE00B4L5YC18.csv": "a531b8b8b92cac1183ce12f6500b7a92",
"td-study/Emerging%20Markets/IE00BTJRMP35.csv.gz": "6c9431a8bb22c3aeb5beb4fedde48f1a",
"td-study/Emerging%20Markets/IE00BK5BR733.csv": "eef3d58d3a746a6d8a00180d671facc5",
"td-study/Emerging%20Markets/LU2300295123.csv.gz": "54c22a38e6c13c36125417015a354817",
"td-study/Emerging%20Markets/LU1437017350.csv.gz": "e65b586f375020fdea6e05fe9798bf91",
"td-study/Emerging%20Markets/LU2573967036.csv.gz": "13b97a69627366836e2f94193ec9a2ba",
"td-study/Emerging%20Markets/LU1681045453.csv.br": "62e916e5ce4e5c03ca52320748f43c45",
"td-study/Emerging%20Markets/IE00BKM4GZ66.csv": "9c77affd659979f5933f5d8f7463224f",
"td-study/Emerging%20Markets/LU2573967036.csv.br": "f882f7962a91352346ee8de150f0fc7f",
"td-study/Emerging%20Markets/IE00B469F816.csv.br": "2d9732e00e3fc65eed4a696d7a103c1a",
"td-study/Emerging%20Markets/IE00BK5BR733.csv.br": "2073333b521da2254bf2493fb6112ef7",
"td-study/Emerging%20Markets/LU1681045370.csv.gz": "df16b6d004880a8489a62c3ea00eb35f",
"td-study/Emerging%20Markets/FR0010429068.csv": "9924b6ad42eb5b8742684a90eda9be85",
"td-study/Emerging%20Markets/LU1681045453.csv.gz": "3f8dc87526610d68c2be860f78c4f244",
"td-study/Emerging%20Markets/IE00B4L5YC18.csv.gz": "2a96038858ea34fd18b39a593f9c4df9",
"td-study/Emerging%20Markets/LU1437017350.csv.br": "009e2ff85cbf76439d276337085347b3",
"td-study/Emerging%20Markets/LU0292107645.csv": "9e2607df71eb29f4c599aaf71d3673a3",
"td-study/Emerging%20Markets/LU0950674175.csv.gz": "23d910cd5fa24b9d8c300968c2c346d7",
"td-study/Emerging%20Markets/LU0950674175.csv.br": "f0781c97cd9eae75f7bed37d8c91f632",
"td-study/Emerging%20Markets/IE00BK5BR733.csv.gz": "b0e7e6152cfeb0c09cae16c3562ec0e1",
"td-study/Emerging%20Markets/FR0010435297.csv.br": "79ede20732513159eeeb914aa417b498",
"td-study/Emerging%20Markets/LU1681045370.csv.br": "a1b58825fe21fa4f65e3f662d4f8bbdc",
"td-study/BestETFsByTD.styles.css.br": "7d74701db75ef4fbe2bab2aa44dbaeb2",
"td-study/index.html.br": "c83db001bcfa9ea93ba965a5b58bbd9d",
"td-study/BestETFsByTD.styles.css.gz": "4e4a242f747ccf0dad526e5e75784aa4",
"td-study/css/app.css": "1f34bdca08a455f1c63925940877e28a",
"td-study/css/app.css.br": "d0d5d54d5c7643d16b6378e1ea6cb077",
"td-study/css/app.css.gz": "13440556b5a646c953625a4090233cde",
"td-study/All%20World/IE00B3YLTY66.csv.br": "ca2838ef74fada3fd31f98021737533c",
"td-study/All%20World/IE000716YHJ7.csv.gz": "6fbbe972f8be7c3d0b74c3981d6a632d",
"td-study/All%20World/IE00B6R52259.csv.br": "71640ff64616eed82fda5ada076b3cfa",
"td-study/All%20World/IE00BYM11H29.csv": "a755687e6a9dda856104148df8eb078c",
"td-study/All%20World/IE00B44Z5B48.csv.br": "a32472cd20e671ec470612561768d040",
"td-study/All%20World/IE00B6R52259.csv.gz": "c4c635e0139f4eadedb2ab5ef14232c1",
"td-study/All%20World/IE00B3YLTY66.csv": "eae5feb3f2890eff09710baf9f15fd19",
"td-study/All%20World/IE00BK5BQT80.csv.gz": "9d8c9ed591964e477fbe0187a0e59899",
"td-study/All%20World/IE0003XJA0J9.csv.br": "65afc9110ce0288b2f109b9d2ff77d6a",
"td-study/All%20World/LU2903252349.csv": "940d679608e0f4eba7bf772deb801949",
"td-study/All%20World/LU1829220216.csv.gz": "aed7f0cc86015ce900348f4872ff0a6e",
"td-study/All%20World/IE00B44Z5B48.csv": "7fc87d8eff7d902fe9824011d31bfe51",
"td-study/All%20World/IE000716YHJ7.csv": "b75b49d07acbae17c2289455b6b38cb6",
"td-study/All%20World/IE00BYM11H29.csv.gz": "4ea35bb2746fe4975209e556425f0490",
"td-study/All%20World/IE00BK5BQT80.csv": "e6de4f45eb0a998aafa61b944bbf41fd",
"td-study/All%20World/LU1829220216.csv.br": "68243a91aa7a4cb0600fca1be76ead67",
"td-study/All%20World/IE00B3YLTY66.csv.gz": "ff1c7d4c9049421cd82016c0305fc305",
"td-study/All%20World/LU2903252349.csv.gz": "71e376cddf26151f181b958e8a59016e",
"td-study/All%20World/IE0003XJA0J9.csv": "3db4d53a3c32f776f1372837ec7087e2",
"td-study/All%20World/IE00B44Z5B48.csv.gz": "2044bad47011ea3bb66408985df934a2",
"td-study/All%20World/IE00B6R52259.csv": "f3f71e614ea2b87789258dc2080733dc",
"td-study/All%20World/IE00BK5BQT80.csv.br": "6075f7fd775d6f11c3bddc272dbf1be1",
"td-study/All%20World/IE0003XJA0J9.csv.gz": "4b19404223aeb6a6205c9fbdd59f76f7",
"td-study/All%20World/LU2903252349.csv.br": "49f10053e9d2d09cce801adfb8b29783",
"td-study/All%20World/LU1829220216.csv": "a7b7c6b711e789b90cdb1f961f37634e",
"td-study/All%20World/IE000716YHJ7.csv.br": "6743bc312135f1011ab64dced7643b19",
"td-study/All%20World/IE00BYM11H29.csv.br": "996cdee7662323a71c1d5bbd924044b7",
"td-study/lib/bootstrap/dist/css/bootstrap-utilities.rtl.min.css.br": "96a03fd2c7caf1ea36a319a7767c8e37",
"td-study/lib/bootstrap/dist/css/bootstrap-reboot.min.css": "874cf724d67903da59f2df64ad017a51",
"td-study/lib/bootstrap/dist/css/bootstrap-reboot.min.css.map.gz": "fb561c4cb61c6af1f021643f2766e681",
"td-study/lib/bootstrap/dist/css/bootstrap.min.css.map.gz": "33d840395f0a42a57bf4b4d29b6836e1",
"td-study/lib/bootstrap/dist/css/bootstrap.rtl.min.css.map.gz": "3350dfbe96b8b9b3eb71e437f6d7b503",
"td-study/lib/bootstrap/dist/css/bootstrap.rtl.css.br": "f3bf015d0c9ab95b659b0f0076b4678a",
"td-study/lib/bootstrap/dist/css/bootstrap-reboot.rtl.min.css.map.gz": "8af68ae6c4d65ba15be1562eed40a409",
"td-study/lib/bootstrap/dist/css/bootstrap-grid.rtl.min.css.br": "bfb4fb61df3c4bd0c9f4db38a84df618",
"td-study/lib/bootstrap/dist/css/bootstrap.css.map.gz": "6d463f52d8d9263a85d6dfcfa581622d",
"td-study/lib/bootstrap/dist/css/bootstrap.rtl.css.gz": "dd4ecd3c2c63c3252c890a02bd49df13",
"td-study/lib/bootstrap/dist/css/bootstrap.min.css.gz": "3f9c0369e09fcea2204dd2b91178bfd3",
"td-study/lib/bootstrap/dist/css/bootstrap-utilities.rtl.min.css": "c65b60c6ecf6925bcdf0a0af85efdc67",
"td-study/lib/bootstrap/dist/css/bootstrap-grid.css": "3889c5cd9922f6c9edf7eb6d26b4a22b",
"td-study/lib/bootstrap/dist/css/bootstrap-reboot.rtl.css": "9c65e4b504b23708506c0a98d16d135f",
"td-study/lib/bootstrap/dist/css/bootstrap.min.css.map": "f12f498b6e53d88dc9cc9cb703397660",
"td-study/lib/bootstrap/dist/css/bootstrap.min.css.map.br": "de6e0f0a3a785256518ad35e1903dd3c",
"td-study/lib/bootstrap/dist/css/bootstrap.rtl.css.map.br": "181f1f3fa3e9ebace2ff7d0938e9034e",
"td-study/lib/bootstrap/dist/css/bootstrap-grid.rtl.min.css.map.gz": "f1377dec13e889f148489ab7e57bdb36",
"td-study/lib/bootstrap/dist/css/bootstrap-grid.rtl.css.br": "badbf8c88870b2c39569281686798d79",
"td-study/lib/bootstrap/dist/css/bootstrap-reboot.css.map.br": "2f9e6cb079735e776865e8d70adb6d84",
"td-study/lib/bootstrap/dist/css/bootstrap.css.br": "9ec15ee85a4f9644150471cc288cd98d",
"td-study/lib/bootstrap/dist/css/bootstrap-grid.css.map.br": "2c2ac9a7eb9d82f661c2e575f3892dcc",
"td-study/lib/bootstrap/dist/css/bootstrap-grid.min.css": "ea688188986141f98fe7c673dd4c34f1",
"td-study/lib/bootstrap/dist/css/bootstrap.css": "1162850e40492183d0df775907004258",
"td-study/lib/bootstrap/dist/css/bootstrap-utilities.css.br": "4ebe1217360dd07efd62b4d19aba2753",
"td-study/lib/bootstrap/dist/css/bootstrap.css.gz": "650cc4482cc593838768e2eed837e502",
"td-study/lib/bootstrap/dist/css/bootstrap.css.map": "58477a63c10298d02f4204b3ebfe2560",
"td-study/lib/bootstrap/dist/css/bootstrap-utilities.rtl.min.css.gz": "d8b262fa4e49360d707a62ce5fec8197",
"td-study/lib/bootstrap/dist/css/bootstrap.rtl.css.map.gz": "b111cdd551f0ff326eb760b35930257f",
"td-study/lib/bootstrap/dist/css/bootstrap-utilities.rtl.css": "dd6b65cf0b1f1c5b5ef66462619b7754",
"td-study/lib/bootstrap/dist/css/bootstrap-utilities.min.css.map.br": "917c2aaa2ad004807aa9a9bae90b5ba7",
"td-study/lib/bootstrap/dist/css/bootstrap.rtl.min.css.map": "badcc2667b65e409017e63b6301b6d66",
"td-study/lib/bootstrap/dist/css/bootstrap.min.css.br": "df6f71cf405f1282b805227af57613ec",
"td-study/lib/bootstrap/dist/css/bootstrap-grid.css.map": "e351b86c7ef7eabccc1f5146bb1f0f81",
"td-study/lib/bootstrap/dist/css/bootstrap-grid.rtl.css.gz": "f85f3aa794c8dc691d4591ad4d911d52",
"td-study/lib/bootstrap/dist/css/bootstrap-utilities.rtl.css.br": "8963424e2e44bfd38c1662a782496248",
"td-study/lib/bootstrap/dist/css/bootstrap-utilities.min.css.br": "df6d5ceab95e9d77aff71758c9ea74f6",
"td-study/lib/bootstrap/dist/css/bootstrap-utilities.css": "4003fb4146a450e186e5af98883b62c4",
"td-study/lib/bootstrap/dist/css/bootstrap.rtl.min.css.gz": "e67f61bedd48a0d4d14fece78bde1fcd",
"td-study/lib/bootstrap/dist/css/bootstrap-grid.rtl.css.map.br": "b43c4d148d558752749f6136e773a649",
"td-study/lib/bootstrap/dist/css/bootstrap.rtl.css.map": "77a746882178e6f4bac312f28cdd575a",
"td-study/lib/bootstrap/dist/css/bootstrap-grid.min.css.map": "8d3849767c325327a646260b21917bf8",
"td-study/lib/bootstrap/dist/css/bootstrap-grid.min.css.br": "76141807857151914f9c30f035722f0a",
"td-study/lib/bootstrap/dist/css/bootstrap-reboot.rtl.css.map": "d57e6542d1148579cece28b2e8a07dbc",
"td-study/lib/bootstrap/dist/css/bootstrap-reboot.css.map.gz": "edf63f6e8f54161ffe30dab336f86ad3",
"td-study/lib/bootstrap/dist/css/bootstrap-reboot.min.css.br": "9cfc1b949c86ee0f4a2e615f810c4e7e",
"td-study/lib/bootstrap/dist/css/bootstrap-reboot.rtl.min.css.br": "84e33daf1049b0bfe1617de804d91656",
"td-study/lib/bootstrap/dist/css/bootstrap-utilities.rtl.css.map.br": "8c04d8a2f18c2a419bce482e367b706e",
"td-study/lib/bootstrap/dist/css/bootstrap-utilities.css.map": "64d5e3abbf3005ba0db10b5cf31def49",
"td-study/lib/bootstrap/dist/css/bootstrap-grid.rtl.css": "e629dfbb7e643dfbed357b050402998b",
"td-study/lib/bootstrap/dist/css/bootstrap-grid.min.css.map.br": "9cadaa20eb88337196d2b7b096e7ffec",
"td-study/lib/bootstrap/dist/css/bootstrap-reboot.min.css.gz": "a65ea7aae038b26e587b26ec97d87b08",
"td-study/lib/bootstrap/dist/css/bootstrap-reboot.rtl.css.gz": "f074348a0d7b857f8c0721bf86ca2fcc",
"td-study/lib/bootstrap/dist/css/bootstrap-reboot.rtl.css.map.br": "83971b07901b34245e660fe7b5c1cfbe",
"td-study/lib/bootstrap/dist/css/bootstrap-reboot.rtl.min.css.map": "78fc018c332aebf85f3f730ad2585475",
"td-study/lib/bootstrap/dist/css/bootstrap-reboot.rtl.min.css.map.br": "8b7bf88a30c2c2faa9ef4c4c17fe1b96",
"td-study/lib/bootstrap/dist/css/bootstrap.rtl.min.css.br": "7be19c032a5baab4145b6bb29b2cf66d",
"td-study/lib/bootstrap/dist/css/bootstrap-reboot.rtl.min.css": "3bf50b662968b773561f7a19a2d6d7cd",
"td-study/lib/bootstrap/dist/css/bootstrap-reboot.min.css.map": "77af365e43d734adf1ca89bfc1ba5217",
"td-study/lib/bootstrap/dist/css/bootstrap-reboot.rtl.min.css.gz": "72257c8ddec8e5c48f72da1cb4aa7a91",
"td-study/lib/bootstrap/dist/css/bootstrap.rtl.css": "2c7d3b733af95c6fc8cff58d84830250",
"td-study/lib/bootstrap/dist/css/bootstrap-reboot.css.map": "87d4f15f898da3074c8e1e87aa80c297",
"td-study/lib/bootstrap/dist/css/bootstrap-grid.rtl.css.map": "1e511e24d5d92b4e516a9fb3bd642213",
"td-study/lib/bootstrap/dist/css/bootstrap-utilities.rtl.css.map": "76f1ec432994dfa41e64fe665d02090c",
"td-study/lib/bootstrap/dist/css/bootstrap-grid.css.gz": "bbde032e1497b534695bd6d802d6d495",
"td-study/lib/bootstrap/dist/css/bootstrap-grid.css.br": "87378cd8f5440b7bbb6da94205858a41",
"td-study/lib/bootstrap/dist/css/bootstrap-utilities.rtl.min.css.map.br": "e893b55fabcb72a38ad2fae925cbbb60",
"td-study/lib/bootstrap/dist/css/bootstrap-reboot.rtl.css.br": "7865a417d20d42223c4f47abcbc2f10e",
"td-study/lib/bootstrap/dist/css/bootstrap-grid.css.map.gz": "262b52667d7ccbeac4b70135c70214df",
"td-study/lib/bootstrap/dist/css/bootstrap-reboot.css.br": "4de0d6615e29f52e74f9c4ed149f846f",
"td-study/lib/bootstrap/dist/css/bootstrap-reboot.min.css.map.br": "d0d543b1c521121acc4ecac0a7fde4de",
"td-study/lib/bootstrap/dist/css/bootstrap-utilities.min.css.gz": "86e0c8e63c042b105dbe21f4e61a010e",
"td-study/lib/bootstrap/dist/css/bootstrap-utilities.css.map.gz": "2183aa0fb7bb2b1483d1d5b578efbf2f",
"td-study/lib/bootstrap/dist/css/bootstrap.css.map.br": "3cb3bba8ae940e6c2cc8705406605e18",
"td-study/lib/bootstrap/dist/css/bootstrap-utilities.rtl.min.css.map": "5055b5fd418873358e602cf9689cd3dc",
"td-study/lib/bootstrap/dist/css/bootstrap-grid.rtl.min.css.map.br": "ba0a1d696acad4cc243ad8b1485c2da4",
"td-study/lib/bootstrap/dist/css/bootstrap-utilities.rtl.css.map.gz": "289786f1ec6f058443491de36ab18d4d",
"td-study/lib/bootstrap/dist/css/bootstrap.rtl.min.css.map.br": "8a6e4980e134a2fbea39e7e5a62316e3",
"td-study/lib/bootstrap/dist/css/bootstrap.rtl.min.css": "dd5f700c579c0989e117a4f27a386442",
"td-study/lib/bootstrap/dist/css/bootstrap-utilities.min.css.map.gz": "ca38694ee6f7bdae003dfe07d205ba0e",
"td-study/lib/bootstrap/dist/css/bootstrap-reboot.css": "09c9a15d5b0c41bfbc0bfd5ee0606f1c",
"td-study/lib/bootstrap/dist/css/bootstrap-grid.min.css.gz": "b607d1495d067f5a3203edf4e6b115d7",
"td-study/lib/bootstrap/dist/css/bootstrap-utilities.rtl.css.gz": "8144cdffaedffa87e1daad80e606f9bd",
"td-study/lib/bootstrap/dist/css/bootstrap.min.css": "a549af2a81cd9900ee897d8bc9c4b5e9",
"td-study/lib/bootstrap/dist/css/bootstrap-grid.rtl.min.css": "e010b7366e72371cd05d5e2126b08789",
"td-study/lib/bootstrap/dist/css/bootstrap-utilities.css.map.br": "46b4aa18bd6645477131ef7718e01038",
"td-study/lib/bootstrap/dist/css/bootstrap-grid.min.css.map.gz": "389366927601dab371d9d0a1047d4d0c",
"td-study/lib/bootstrap/dist/css/bootstrap-grid.rtl.min.css.map": "6353fe853fc0848e50665f41895be1e4",
"td-study/lib/bootstrap/dist/css/bootstrap-reboot.css.gz": "2dcaf3a8cb349565147f0e75ea04f06b",
"td-study/lib/bootstrap/dist/css/bootstrap-utilities.min.css": "7781e53d243705d0fc5220ed0f840052",
"td-study/lib/bootstrap/dist/css/bootstrap-utilities.rtl.min.css.map.gz": "0ead0d7d5d4dbde4fda9661d71eff367",
"td-study/lib/bootstrap/dist/css/bootstrap-utilities.css.gz": "d8f240d1018ec5c702e485f0de4877c6",
"td-study/lib/bootstrap/dist/css/bootstrap-grid.rtl.css.map.gz": "1236143c083950f7264bffcb95b3a604",
"td-study/lib/bootstrap/dist/css/bootstrap-utilities.min.css.map": "399e63138fe98a7bce67aeb007f129eb",
"td-study/lib/bootstrap/dist/css/bootstrap-reboot.rtl.css.map.gz": "ef4588ecb2de23b0dab2fbe3e7832c47",
"td-study/lib/bootstrap/dist/css/bootstrap-grid.rtl.min.css.gz": "c650d9d1798cab4a3b21ecc69ccf9550",
"td-study/lib/bootstrap/dist/js/bootstrap.js.br": "9ef7f6f967990aa091851153e5c7cf4a",
"td-study/lib/bootstrap/dist/js/bootstrap.esm.js.map.br": "c91a02137c632e04190c2d0e6a17eb1d",
"td-study/lib/bootstrap/dist/js/bootstrap.bundle.js.map": "8e3d1ac629dffdf6925c5ad5501447a6",
"td-study/lib/bootstrap/dist/js/bootstrap.bundle.min.js.map": "45c15405237f0626889f1277c3563384",
"td-study/lib/bootstrap/dist/js/bootstrap.bundle.min.js.br": "661afa6ea58af043d4ac02ed9ee4f737",
"td-study/lib/bootstrap/dist/js/bootstrap.esm.min.js.gz": "116d37c91719bbb2c957df39f1b1b65f",
"td-study/lib/bootstrap/dist/js/bootstrap.min.js": "4800bcc26467d999f49b472f02906b8d",
"td-study/lib/bootstrap/dist/js/bootstrap.js.map.gz": "8ef2a46edf0afba388985d0f722b91e5",
"td-study/lib/bootstrap/dist/js/bootstrap.js.map.br": "2165df7cae82ba1a21020b11d77af1df",
"td-study/lib/bootstrap/dist/js/bootstrap.js.map": "d46022f7f97a3d91c6b4fae7b0311760",
"td-study/lib/bootstrap/dist/js/bootstrap.esm.js.map": "6e9bb6cb3925bf39e50230706f101ea4",
"td-study/lib/bootstrap/dist/js/bootstrap.min.js.map.gz": "a0230637b215e1427fd5235b96ab9ef0",
"td-study/lib/bootstrap/dist/js/bootstrap.min.js.gz": "adbd07c4c1f921edbf2a52c761f30f44",
"td-study/lib/bootstrap/dist/js/bootstrap.bundle.js.gz": "abd0625de1cd777e6640b24211f1a9b0",
"td-study/lib/bootstrap/dist/js/bootstrap.esm.js": "030e0324538116a4d43392a217bca787",
"td-study/lib/bootstrap/dist/js/bootstrap.bundle.js.map.br": "b8b61bb8414b449226064c4865efd90b",
"td-study/lib/bootstrap/dist/js/bootstrap.bundle.min.js.map.gz": "254196b89e8b5737a603af2a5d9ffc66",
"td-study/lib/bootstrap/dist/js/bootstrap.esm.min.js.map.gz": "14cd63044882a0d7d146c03ea0793e7a",
"td-study/lib/bootstrap/dist/js/bootstrap.bundle.js": "605b375c2b436ca4d50cc6f2959b5c57",
"td-study/lib/bootstrap/dist/js/bootstrap.min.js.br": "3e38bfaae0b6eca10f77486c5974c46b",
"td-study/lib/bootstrap/dist/js/bootstrap.esm.min.js.br": "6b01048d22c6d3d7279dbdbbf34ec44e",
"td-study/lib/bootstrap/dist/js/bootstrap.esm.js.map.gz": "d8cce7d016fcdd3d0c83e99be453965a",
"td-study/lib/bootstrap/dist/js/bootstrap.bundle.min.js.map.br": "73b3fee1523f543744714bc06e4d9a55",
"td-study/lib/bootstrap/dist/js/bootstrap.bundle.js.br": "3cba488322c417a528415fc00b15a416",
"td-study/lib/bootstrap/dist/js/bootstrap.bundle.min.js": "2e477967e482f32e65d4ea9b2fd8e106",
"td-study/lib/bootstrap/dist/js/bootstrap.esm.min.js": "282d10561eec8cfe0cb2f70143050541",
"td-study/lib/bootstrap/dist/js/bootstrap.esm.min.js.map": "1182a7ea0af724640adc5ab9a4f9b548",
"td-study/lib/bootstrap/dist/js/bootstrap.esm.js.gz": "6cc045a91d9fc736112aa48929b3ae94",
"td-study/lib/bootstrap/dist/js/bootstrap.min.js.map.br": "3744c35ef7f7f53294ab6223b46d4e18",
"td-study/lib/bootstrap/dist/js/bootstrap.js.gz": "c7c3efb005d72141b39e95bbceb6504e",
"td-study/lib/bootstrap/dist/js/bootstrap.bundle.js.map.gz": "3f7ff7e36ff1f668d58ec1bc01f53e93",
"td-study/lib/bootstrap/dist/js/bootstrap.esm.js.br": "8d6198b899ef662ab02db39f88db8133",
"td-study/lib/bootstrap/dist/js/bootstrap.js": "2a837e21eaeca210eb84b2568ca776cb",
"td-study/lib/bootstrap/dist/js/bootstrap.min.js.map": "fb80b3e604e4762c217a6be514e9005a",
"td-study/lib/bootstrap/dist/js/bootstrap.bundle.min.js.gz": "38cecd0e839477888b913490f8058136",
"td-study/lib/bootstrap/dist/js/bootstrap.esm.min.js.map.br": "25ec1baa671a6ff080d830cd0fb0c483",
"td-study/index.html.gz": "9d3776fff6f27250b44b7cb1ce5cbccc",
"td-study/sample-data/weather.json": "c548a63b61eeb60fad5213e1006c589f",
"td-study/sample-data/weather.json.gz": "500680f3f82ee38d65a482d6f4edc424",
"td-study/sample-data/weather.json.br": "6b6dd38f35f9a5799245fa5adef3a238",
"td-study/icon-192.png": "4ed916c575b07ad638ed9dbd55219ad5",
"td-study/BestETFsByTD.styles.css": "2035346c3d225797c751e7725fbdc1ab",
"td-study/Developed/IE00B4X9L533.csv": "4a7e846d4869735b8f998020e8bc8923",
"td-study/Developed/IE00BJ0KDQ92.csv.gz": "735b41243846331d3306cf47b4444d00",
"td-study/Developed/IE00B4L5Y983.csv.gz": "a7a1a032313153e697a2121f932a9893",
"td-study/Developed/IE000UQND7H4.csv.br": "5f4a08d05c5956b3461b2d012f7a98bf",
"td-study/Developed/FR0014003IY1.csv.gz": "f3804b551a52f17dacc67619c4c33e8b",
"td-study/Developed/IE00BD4TXV59.csv.gz": "865a15a0b8383a3a75d835d68dd782eb",
"td-study/Developed/FR0014003IY1.csv.br": "9fe73052990873eeacc1e6cb11c339c8",
"td-study/Developed/IE00BFY0GT14.csv.br": "be54e5d767169be634f4f7dd97b00f40",
"td-study/Developed/IE00BJ0KDQ92.csv": "9038759a9d6aaf57c3bb08bd81e5eed9",
"td-study/Developed/IE000F9IDGB5.csv.br": "ff99f7639fc2d923ea408b866c334c1d",
"td-study/Developed/IE00BFY0GT14.csv": "ded961ba2d29139ffadcfa05e8c8e815",
"td-study/Developed/LU1681043672.csv.gz": "0888eb14ea407854fdf744bf1b5ef0bd",
"td-study/Developed/IE000UQND7H4.csv": "cf4cc32049a048467bd1ae2a4a48f1e3",
"td-study/Developed/LU1681043599.csv.gz": "3375bd26923622320de8bb033d6490f7",
"td-study/Developed/IE00BK5BQV03.csv.br": "5c92f1993c4c66a4ce1f11a80beef465",
"td-study/Developed/IE00BD4TXV59.csv": "00bf311b529d63b768c1316677c7cc6f",
"td-study/Developed/IE00B60SX394.csv.br": "dccfc47f688fafdbb1004aee5957d4b5",
"td-study/Developed/IE00BJ0KDQ92.csv.br": "6894f9f61359727e805feb7c4a4d4b93",
"td-study/Developed/LU1681043672.csv.br": "be1d1cd1f3173fc62d8bd96afcbe6836",
"td-study/Developed/LU1681043599.csv.br": "24c00ad35ecccccf86333fd387b0ed7e",
"td-study/Developed/IE00B4X9L533.csv.br": "8d15dcede7618c861258547ac4d4b405",
"td-study/Developed/LU0274208692.csv.br": "fc48ddcb5287296a148e5bd74d523c8b",
"td-study/Developed/IE000BI8OT95.csv": "1e276b556ec43b6c7c6b37711146093e",
"td-study/Developed/IE00B60SX394.csv.gz": "933b72ff3bc6401a7cac95d63ce9e158",
"td-study/Developed/IE00BK5BQV03.csv.gz": "46b7231d7465bcffb7d1bbab4e76dbfe",
"td-study/Developed/LU0274208692.csv": "885afb2e3625e2597db79b1c9c022008",
"td-study/Developed/IE00B4L5Y983.csv": "66ead3bced77a6a11c65976e155421ea",
"td-study/Developed/LU1681043599.csv": "e2d9ba2a144fbbdb9a6cf985c4de1db2",
"td-study/Developed/IE000UQND7H4.csv.gz": "028e7b6046f192e45699e2e70cc0486e",
"td-study/Developed/IE00B60SX394.csv": "0e7a3c8562c5145168bd790b31e1f8bb",
"td-study/Developed/LU0274208692.csv.gz": "0d6aa973eed2c47d353def2fe483a720",
"td-study/Developed/IE00B4X9L533.csv.gz": "6bdbc28b00042d97ab83c931cb9834eb",
"td-study/Developed/IE00B4L5Y983.csv.br": "e60459f8006898ff8517322bb2277976",
"td-study/Developed/FR0014003IY1.csv": "93cd4a50c7f17c688d43d95bd0088cc8",
"td-study/Developed/IE00BFY0GT14.csv.gz": "5538c80fc1e5fa8a3c1f97f483d914da",
"td-study/Developed/IE00BD4TXV59.csv.br": "86d662e1a4ba861ee8742b2191094317",
"td-study/Developed/IE000BI8OT95.csv.gz": "92900200b677ca3641b2f12c1bc30b8e",
"td-study/Developed/IE000F9IDGB5.csv": "9b63a4c70e066d4c5305a7f29700b98e",
"td-study/Developed/LU1681043672.csv": "2cc5d6eb5678333d7bf63955b54984a5",
"td-study/Developed/IE000F9IDGB5.csv.gz": "ae1e450362418a4523e402f45df1be42",
"td-study/Developed/IE00BK5BQV03.csv": "e56434fe6c98417be333fc7f6877d2a5",
"td-study/Developed/IE000BI8OT95.csv.br": "7aa74c56f72bb8d0ea821124e6d4fced",
"td-study/index.html": "a899a440e78e267f48060b1fda647447",
"td-study/etfs.csv.br": "e739df44ba71198ab60766fd9adf2e43",
"td-study/favicon.png": "eab4f24ab5ff80be586dcdab8e87dc9c",
"td-study/etfs.csv": "4c4f09adcb1e4b81292d30b2c4a3e3e4",
"td-study/_framework/System.ObjectModel.31eqa050x1.wasm": "2b2a33353ed990215578003beffdae81",
"td-study/_framework/System.Text.Encodings.Web.15hk4o8waa.wasm": "b10aa8edc0c6abe6899154f0d3fc8b30",
"td-study/_framework/System.ComponentModel.e6bm8wniqf.wasm.gz": "6c85b636be6ba600612743cb1144e12c",
"td-study/_framework/dotnet.native.ikrs475e5v.js.br": "6090b6b4b2be458b03ed8fb014894f42",
"td-study/_framework/System.Collections.Immutable.fnniz9vqmp.wasm.br": "aa3000876d308b1a8edd949e7595c41b",
"td-study/_framework/Microsoft.Extensions.Configuration.Json.iitlxos134.wasm.br": "2ee03dcb82fd179d93efeb113865533c",
"td-study/_framework/Microsoft.AspNetCore.Components.jzohlwv9tv.wasm.br": "725d346362ae47b6f60c60255778e6ea",
"td-study/_framework/System.Text.RegularExpressions.g17p9ig1md.wasm": "438d92d4ca71586c285e181c333f4b95",
"td-study/_framework/System.Private.Uri.5o199xmss6.wasm.br": "17e48645ff0d54455fe2ecec6a5551f7",
"td-study/_framework/dotnet.native.veuqw8a0w9.wasm.br": "844d5c0b2e92f37818a2fa3811e4ab6b",
"td-study/_framework/System.Security.Cryptography.6wps1yap4a.wasm.br": "7b1af7dafb6fb4ea8283b976103dfe05",
"td-study/_framework/it-IT/BestETFsByTD.resources.bl0g4czoo2.wasm.br": "d1e75927113c778fd9674d6e851e1ca0",
"td-study/_framework/it-IT/BestETFsByTD.resources.y2rzd4ch1w.wasm.gz": "154b6025aff9ec2d4506e2eb92d84854",
"td-study/_framework/it-IT/BestETFsByTD.resources.bl0g4czoo2.wasm": "c3b679c9c20c47d55dbab10c452bb3a2",
"td-study/_framework/it-IT/BestETFsByTD.resources.y2rzd4ch1w.wasm.br": "343ac939ae2caa28531f2204fe87992a",
"td-study/_framework/it-IT/BestETFsByTD.resources.y2rzd4ch1w.wasm": "05e735e822dc0a8709fcefd03609fa05",
"td-study/_framework/it-IT/BestETFsByTD.resources.bl0g4czoo2.wasm.gz": "2b0b88742a48d2c6ff7b7c2910ef84df",
"td-study/_framework/blazor.webassembly.958z1vx7fr.js": "d3bdabc7ce2c6c636839cd1632b07de7",
"td-study/_framework/System.ObjectModel.31eqa050x1.wasm.br": "b64441fa6ad7c2c940bf9b56a9866454",
"td-study/_framework/Microsoft.Extensions.Options.mzymmrt8yt.wasm.br": "178df1c14e852e8d19afea437dc32f24",
"td-study/_framework/System.Runtime.InteropServices.JavaScript.uzoakn3mog.wasm.br": "e9e954ad0e630f54e9c0f8407d9bd2a1",
"td-study/_framework/System.ComponentModel.e6bm8wniqf.wasm.br": "8b50376f070a3bf2bf85bfcb7ab4d300",
"td-study/_framework/System.IO.Pipelines.s624opig07.wasm.gz": "631755ea608f3fdce524ef808d507fc7",
"td-study/_framework/Microsoft.JSInterop.WebAssembly.cbdj3f5i9f.wasm.gz": "16accdc142a6135f100dcb0959c7d10d",
"td-study/_framework/Microsoft.Extensions.Logging.Abstractions.hjpy5z8042.wasm.br": "1baa2b640a3c006c89c11e2432d877c8",
"td-study/_framework/System.Memory.x7ua0pxau4.wasm.gz": "0f849c012e0a5405c7afdf7399371410",
"td-study/_framework/blazor.webassembly.958z1vx7fr.js.gz": "ced12e8c60554c236df18c7e60ccc03c",
"td-study/_framework/System.ComponentModel.e6bm8wniqf.wasm": "53b0e58f4c3a8254d6cb8ed518597c0f",
"td-study/_framework/System.Text.Json.23j7g6hghd.wasm.gz": "c2f359b32813fd96bc6e5d24c103b846",
"td-study/_framework/System.Collections.NonGeneric.lp6i0yg01h.wasm.gz": "9894704d61fb9caf869e3cd7224db850",
"td-study/_framework/System.Text.Encodings.Web.15hk4o8waa.wasm.br": "e4c8854ede0913e0bea9a9bae28de2a2",
"td-study/_framework/Microsoft.Extensions.Options.mzymmrt8yt.wasm.gz": "d4070a447fb22e7df6f19385a7cb9aaf",
"td-study/_framework/System.Collections.Immutable.fnniz9vqmp.wasm.gz": "29342f638bb68a695876a2d6e72c37ec",
"td-study/_framework/System.Linq.59d4d6xex8.wasm.gz": "bb24630ea9e38e291be55a61dd54bd2f",
"td-study/_framework/Microsoft.Extensions.Logging.grenq3p3q7.wasm.gz": "171e9cdee2a4dfe3ac8c9c99abb8f756",
"td-study/_framework/Microsoft.Extensions.Logging.grenq3p3q7.wasm": "0e71d0b6a3fcf28dbdf6beeba12996c4",
"td-study/_framework/icudt.oh1zvcfom8.dat": "0e848ed44b9040eb79b33b64a99d1d41",
"td-study/_framework/System.Private.CoreLib.gtbfzar1pp.wasm.gz": "4ff652feeec8f26d4d23fabd79bfe0cf",
"td-study/_framework/Microsoft.Extensions.Localization.u7c9autpa7.wasm.br": "12c8887494e6054057a9de387244cbcd",
"td-study/_framework/Microsoft.JSInterop.WebAssembly.cbdj3f5i9f.wasm.br": "5a35c3973a2e394c67ebc9e1c40f2212",
"td-study/_framework/System.Collections.Concurrent.djbfpgxxpi.wasm.br": "fa1771cffceb5f24d72efda36db9fe9c",
"td-study/_framework/Microsoft.Extensions.Configuration.Abstractions.4ascqjkgzo.wasm.gz": "bca50cbe5b4df0e9b7f1e9d1355cc0d0",
"td-study/_framework/Microsoft.JSInterop.WebAssembly.cbdj3f5i9f.wasm": "550ac48b61ef4dd800a8c36539ef8935",
"td-study/_framework/dotnet.zubhj9ukur.js.gz": "9c6b14d417054c9296b9231916853ae9",
"td-study/_framework/Microsoft.Extensions.Configuration.xnovko9l24.wasm": "642cc938f81de703e621cecc46c5493b",
"td-study/_framework/Microsoft.Extensions.DependencyInjection.pdq83eroqe.wasm": "6c48c4d77ce5e4b7d2aa8b62f7e7e507",
"td-study/_framework/System.Security.Cryptography.6wps1yap4a.wasm.gz": "fa1c60ce05c3f9fe5b61d0cec22821f4",
"td-study/_framework/icudt.oh1zvcfom8.dat.gz": "ee511e52399dc99b28ab36119c2e0323",
"td-study/_framework/System.Text.Json.23j7g6hghd.wasm.br": "0fac35cd7acd966ded79750b11e943c7",
"td-study/_framework/System.Private.CoreLib.gtbfzar1pp.wasm.br": "237bef4ca587c58a2e3a97bdc5fcbe0c",
"td-study/_framework/BestETFsByTD.2bjesu1xj7.wasm": "c51b39a095cbffb99b2669290263b510",
"td-study/_framework/System.Private.Uri.5o199xmss6.wasm": "e2438630d163b9bc175520f93132c923",
"td-study/_framework/System.Collections.NonGeneric.lp6i0yg01h.wasm.br": "8501b9b8262e22ece3912c389037059a",
"td-study/_framework/System.Net.Http.Json.mt8hn9094g.wasm": "1b1039fb6b2d835c825c32ad0b1aee49",
"td-study/_framework/System.Net.Primitives.uhdmdhe7b7.wasm": "0e9cb0eed794086576c3890a0f482183",
"td-study/_framework/Microsoft.AspNetCore.Components.jzohlwv9tv.wasm.gz": "f31ac2478b51abb662dae6f721eca56c",
"td-study/_framework/System.Net.Primitives.uhdmdhe7b7.wasm.gz": "b4748afc86e0c72175cb421f6c58b489",
"td-study/_framework/System.Text.Encodings.Web.15hk4o8waa.wasm.gz": "84d9f2876d09199b5f6396ecf45b4a55",
"td-study/_framework/System.Private.CoreLib.gtbfzar1pp.wasm": "4cddd62d860102909f435bbf6277c50c",
"td-study/_framework/System.ComponentModel.TypeConverter.81gyh2co4z.wasm": "47f8785cc2bff16a3ad1dcb85fa18eaa",
"td-study/_framework/System.Runtime.92fw8zv8v1.wasm": "7b631b6147e22ade6c149abacca14b05",
"td-study/_framework/dotnet.0bzqcq0pl7.js.br": "54fbde172f3d866d657efa7652c789ee",
"td-study/_framework/Microsoft.AspNetCore.Components.jzohlwv9tv.wasm": "a36ed56dfe7fa57f4481f2935a3dbbf1",
"td-study/_framework/System.Text.Json.23j7g6hghd.wasm": "2df98c3b05a560d28c9f6489598364f9",
"td-study/_framework/Microsoft.AspNetCore.Components.Web.miz9gwifl2.wasm.gz": "5b8e0a24bcdef8728b997e8ddf691377",
"td-study/_framework/Microsoft.Extensions.Configuration.Json.iitlxos134.wasm": "d3d698013910bd26af0ea5b7df646198",
"td-study/_framework/System.Collections.Specialized.l0ns16rqkc.wasm.gz": "1d43bbc61e6ae19fed460d19485c84db",
"td-study/_framework/Microsoft.AspNetCore.Components.Web.miz9gwifl2.wasm": "b9f8f3fb7fd4afc77611a87202721a96",
"td-study/_framework/Microsoft.Extensions.Configuration.Abstractions.4ascqjkgzo.wasm.br": "10eb096fdcad62f49badcc6a7809045c",
"td-study/_framework/System.Diagnostics.DiagnosticSource.hsna2e2nj9.wasm.br": "0ffa976956b2e06ade894500e531b9a9",
"td-study/_framework/Microsoft.Extensions.Configuration.Json.iitlxos134.wasm.gz": "d82e108e50684e72af1b78c34536624f",
"td-study/_framework/System.Linq.59d4d6xex8.wasm.br": "97cb1120b8848c991fb421a7c982aa35",
"td-study/_framework/Microsoft.JSInterop.n4v9gvxr8f.wasm.br": "7047a755e21bfadf9604edb61d96d435",
"td-study/_framework/Microsoft.Extensions.DependencyInjection.Abstractions.61lq9v47mi.wasm.br": "dedd7f490471d3626a6f7d595327de11",
"td-study/_framework/System.IO.Pipelines.s624opig07.wasm.br": "1c553594436cdd5181d91d06923c203c",
"td-study/_framework/dotnet.native.ikrs475e5v.js": "bd406a1cee5c1c521456be2fabf17f8c",
"td-study/_framework/System.Net.Primitives.uhdmdhe7b7.wasm.br": "4cc578f6bc1a53020d3d10acd050672f",
"td-study/_framework/Microsoft.Extensions.Localization.u7c9autpa7.wasm.gz": "d7f7a5fba3808812a520692a94ec048f",
"td-study/_framework/Microsoft.Extensions.DependencyInjection.pdq83eroqe.wasm.gz": "814f7691bfbcd76e63f6aee593247047",
"td-study/_framework/Microsoft.Extensions.Localization.Abstractions.eo7i7gy4vp.wasm.gz": "f5e43ff1bb7f75e3c0b4d1b6560f258f",
"td-study/_framework/System.Collections.Concurrent.djbfpgxxpi.wasm.gz": "5d4f2b7d77cf9f4b2618ce2d2fea827b",
"td-study/_framework/Microsoft.Extensions.Primitives.jssa0ge2pe.wasm.br": "666b3557e229e6455dc5260d732cc9cb",
"td-study/_framework/System.Runtime.92fw8zv8v1.wasm.br": "9c0125e32870298d5baca6276d44f9cb",
"td-study/_framework/dotnet.zubhj9ukur.js": "f2cde64015b857c8da7f667b2de5b32b",
"td-study/_framework/System.Collections.Specialized.l0ns16rqkc.wasm": "5ea36b6d96c70cc87ba394b0ff5ace82",
"td-study/_framework/System.Diagnostics.DiagnosticSource.hsna2e2nj9.wasm": "af37f770137a084886b6038fb6c04d7a",
"td-study/_framework/BestETFsByTD.2bjesu1xj7.wasm.br": "ea108a878d173e25c71d7d907bc11ddf",
"td-study/_framework/Microsoft.Extensions.Logging.grenq3p3q7.wasm.br": "fcc5bd553e3620f0ddcfcfe120806574",
"td-study/_framework/System.ComponentModel.Primitives.t5vj7e80zt.wasm.br": "9d59b4afa1f048ecc817c1282ebb0ad8",
"td-study/_framework/System.Private.Uri.5o199xmss6.wasm.gz": "25197c31e296a20aa915a903297a5f5a",
"td-study/_framework/System.Runtime.InteropServices.JavaScript.uzoakn3mog.wasm": "f55e5321a0c850a34e6fae682e786e1e",
"td-study/_framework/Microsoft.Extensions.Localization.Abstractions.eo7i7gy4vp.wasm": "6e7ec99d8da202f786b63d5499eeec6b",
"td-study/_framework/System.Net.Http.qaoz75smk3.wasm.br": "8084246a7b31f81bdbc2516ce12f64ad",
"td-study/_framework/System.IO.Pipelines.s624opig07.wasm": "0953be2dcb84e2a0ff39a24ba1684c47",
"td-study/_framework/System.Console.iblpa2hbax.wasm.gz": "5b586a752e54c139b37c267d240353e5",
"td-study/_framework/System.ComponentModel.TypeConverter.81gyh2co4z.wasm.gz": "d3a01bd534368e246bbde5ee9b4bf7fc",
"td-study/_framework/System.Collections.vvhs7zsswa.wasm.gz": "6149d73c3e771d7dcdda8af8de794e7c",
"td-study/_framework/System.Console.iblpa2hbax.wasm.br": "6876c6fd7d6a974ccda0d761aab273f7",
"td-study/_framework/Microsoft.JSInterop.n4v9gvxr8f.wasm.gz": "bc0e338aacdad6d9105c85f7fcbcf2d7",
"td-study/_framework/Microsoft.Extensions.Localization.Abstractions.eo7i7gy4vp.wasm.br": "f7b04e131c586bd9fdbabffc244b5a32",
"td-study/_framework/Microsoft.Extensions.Localization.u7c9autpa7.wasm": "b5ab74eb694b6fa8977b89ed905fb1cb",
"td-study/_framework/System.ComponentModel.Primitives.t5vj7e80zt.wasm.gz": "24e544505371a5b8a8cef1e21a740ad3",
"td-study/_framework/System.Collections.vvhs7zsswa.wasm.br": "d3ee75f694f1aec9eed60750e052f17f",
"td-study/_framework/dotnet.runtime.a6jcqbs390.js.br": "eb6105195b6aa76fe4dbdca61258746b",
"td-study/_framework/Microsoft.Extensions.Logging.Abstractions.hjpy5z8042.wasm.gz": "46ca92609105d8a7e112ff128a2d0e00",
"td-study/_framework/blazor.webassembly.958z1vx7fr.js.br": "28c23d7adeeb9091a87c38a6f2e38d1c",
"td-study/_framework/System.Console.iblpa2hbax.wasm": "ff8018dbe436eaffffcc9911f048cf07",
"td-study/_framework/dotnet.zubhj9ukur.js.br": "008502aa340f4c9a36220438372c0173",
"td-study/_framework/System.Memory.x7ua0pxau4.wasm": "717708dd866e7773a41bb4cc49d56513",
"td-study/_framework/dotnet.native.ikrs475e5v.js.gz": "abf00b147491f820c084cd31adcef8c1",
"td-study/_framework/System.Collections.NonGeneric.lp6i0yg01h.wasm": "73f012842306e38d67574cc3654e04b1",
"td-study/_framework/System.Runtime.InteropServices.JavaScript.uzoakn3mog.wasm.gz": "95e792b9dabf5041bcfeda7fca8e1d21",
"td-study/_framework/Microsoft.Extensions.Options.mzymmrt8yt.wasm": "7ed6660fbbb48b3b2b558a0716be5d2e",
"td-study/_framework/System.Collections.Specialized.l0ns16rqkc.wasm.br": "5603f3ca8015d001370e5300985b5ead",
"td-study/_framework/dotnet.runtime.a6jcqbs390.js.gz": "125c4cbe2f31026d68bc5c76154ca665",
"td-study/_framework/Microsoft.Extensions.DependencyInjection.Abstractions.61lq9v47mi.wasm": "b92729d151e0ade02d7eaf8354cd855d",
"td-study/_framework/Microsoft.AspNetCore.Components.Web.miz9gwifl2.wasm.br": "a510ef648f8305925fdadc7a678d6ad0",
"td-study/_framework/System.ComponentModel.TypeConverter.81gyh2co4z.wasm.br": "3fe364f1ed2454c3055ea459b7ffce31",
"td-study/_framework/BestETFsByTD.2bjesu1xj7.wasm.gz": "2be1985e705c5e58e03e4b62b9aee9af",
"td-study/_framework/Microsoft.Extensions.DependencyInjection.pdq83eroqe.wasm.br": "46028b7490aeda06f372861cae695e07",
"td-study/_framework/System.Collections.vvhs7zsswa.wasm": "fc6fdc3694a472fb06a585d58866daf8",
"td-study/_framework/System.Collections.Concurrent.djbfpgxxpi.wasm": "8b0d4be80a32e126e0cdb7f719928179",
"td-study/_framework/Microsoft.Extensions.Configuration.Abstractions.4ascqjkgzo.wasm": "909663932f044156c313740c12473f36",
"td-study/_framework/System.nnqvudo0vd.wasm": "ed5b7bee3a8bdf4c1831a4c1c1a2a582",
"td-study/_framework/dotnet.native.veuqw8a0w9.wasm.gz": "6ea31ba7c88a23bdc11b35a5288bb71c",
"td-study/_framework/System.Net.Http.Json.mt8hn9094g.wasm.br": "5d91d2775165e46aeefa5ab70aebc858",
"td-study/_framework/Microsoft.AspNetCore.Components.WebAssembly.b89sslw0f3.wasm.br": "ff417b26cbf269d54b12454f0e3035c9",
"td-study/_framework/Microsoft.Extensions.Configuration.xnovko9l24.wasm.gz": "72dfd541a112b92cae32aa51d4140440",
"td-study/_framework/System.nnqvudo0vd.wasm.gz": "dcca67a88d6e2e5320c927d1744b6ee0",
"td-study/_framework/Microsoft.AspNetCore.Components.WebAssembly.b89sslw0f3.wasm.gz": "e76ffa6704e5cdfc2ae0ba9b90f2af80",
"td-study/_framework/icudt.oh1zvcfom8.dat.br": "113ff8342337b018dd2c7d7a1c621186",
"td-study/_framework/dotnet.0bzqcq0pl7.js": "355fdefc8678330217865d5f719d528d",
"td-study/_framework/dotnet.runtime.a6jcqbs390.js": "01221cb37e76be5ae783cce46a21f828",
"td-study/_framework/Microsoft.Extensions.DependencyInjection.Abstractions.61lq9v47mi.wasm.gz": "c866b11a73ce1da48f6a7c7823292b6c",
"td-study/_framework/System.Diagnostics.DiagnosticSource.hsna2e2nj9.wasm.gz": "839d28e403ec24a974ee7ea659cfbc41",
"td-study/_framework/System.Net.Http.qaoz75smk3.wasm": "ce57cc130b0baf86a53a8c2930f44fa7",
"td-study/_framework/System.Net.Http.Json.mt8hn9094g.wasm.gz": "f1c0f7eeed5ecd3d6bab2725c8ea2b31",
"td-study/_framework/System.Security.Cryptography.6wps1yap4a.wasm": "83d6cbbb9499589a25894aff0b3f630c",
"td-study/_framework/System.nnqvudo0vd.wasm.br": "e11ce1b4c6767ede695ac4c0a0560c44",
"td-study/_framework/Microsoft.JSInterop.n4v9gvxr8f.wasm": "34e3d0dc1a78ba76a784d5e1a08e81b3",
"td-study/_framework/System.ObjectModel.31eqa050x1.wasm.gz": "978d97e0a001c8537a12d97db2d7ff6f",
"td-study/_framework/System.Memory.x7ua0pxau4.wasm.br": "e25b53774d4a2f80d2999180dc1e5da8",
"td-study/_framework/Microsoft.Extensions.Configuration.xnovko9l24.wasm.br": "5623a5d0d9a6f49619d5f431502fb529",
"td-study/_framework/System.Text.RegularExpressions.g17p9ig1md.wasm.gz": "6564d58934789bd13ec91ec6e96c9242",
"td-study/_framework/System.Collections.Immutable.fnniz9vqmp.wasm": "06d3cbd2c5a8e5a001bf483dfbdc1862",
"td-study/_framework/System.Runtime.92fw8zv8v1.wasm.gz": "5ef9c4980a8d3327bc5b5c2ad36308c3",
"td-study/_framework/Microsoft.Extensions.Logging.Abstractions.hjpy5z8042.wasm": "90e318e83ec718169d85689b0f1352c8",
"td-study/_framework/System.Text.RegularExpressions.g17p9ig1md.wasm.br": "0f5b873d91e246e01b448ef83b199fb2",
"td-study/_framework/System.Linq.59d4d6xex8.wasm": "9cd39288228ef9837e59f34d76ed791d",
"td-study/_framework/System.Net.Http.qaoz75smk3.wasm.gz": "131a78f454743930c5385450287bd24d",
"td-study/_framework/dotnet.native.veuqw8a0w9.wasm": "f21b31c9ccffb3e104d79ca51b11183e",
"td-study/_framework/Microsoft.AspNetCore.Components.WebAssembly.b89sslw0f3.wasm": "d4dd4baf2a6f784c0a5e17f9039598c9",
"td-study/_framework/Microsoft.Extensions.Primitives.jssa0ge2pe.wasm": "245e64c11642535acd168a159bca4b00",
"td-study/_framework/Microsoft.Extensions.Primitives.jssa0ge2pe.wasm.gz": "3029f0698cff03749d327f2e60d8b254",
"td-study/_framework/System.ComponentModel.Primitives.t5vj7e80zt.wasm": "87a185296487ceea5a04768a71cc4b5b",
"td-study/_framework/dotnet.0bzqcq0pl7.js.gz": "eeb1f7b22f549eb8c992a4a46731e5d8",
"index.html": "1841f9a7d59feed7aab55441270e4088",
"main.dart.js": "54b38f1e986d96d5e250b4333f9c24cc",
"live/index.html": "a2f23cb7fbf294ac5e3229ca24539ff9",
"manifest.json": "9bb5f82ac7a1d2b222ccbf568068dbc7",
"version.json": "729886d14921718e2a1ee3b8f3eecbf5",
"fanta-etf/flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"fanta-etf/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"fanta-etf/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"fanta-etf/assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"fanta-etf/assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"fanta-etf/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"fanta-etf/assets/assets/etf.json": "ea58915debd702b3b926c109fdeb6a0f",
"fanta-etf/assets/AssetManifest.bin.json": "d3c6cb4472aace3ffc169625b9c55d7b",
"fanta-etf/assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"fanta-etf/assets/AssetManifest.bin": "7fc08696d60a6c41fbce0b54d82e6136",
"fanta-etf/assets/NOTICES": "fd74f1dec27889c088996c5c909c5772",
"fanta-etf/assets/AssetManifest.json": "8fbecfddc7d72d0830f90c3f7b8994b5",
"fanta-etf/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"fanta-etf/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"fanta-etf/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"fanta-etf/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"fanta-etf/flutter_bootstrap.js": "4d12729e5010247a40c2b5d08fbce5a8",
"fanta-etf/canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"fanta-etf/canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"fanta-etf/canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"fanta-etf/canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"fanta-etf/canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"fanta-etf/canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"fanta-etf/canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"fanta-etf/canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"fanta-etf/canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"fanta-etf/canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"fanta-etf/index.html": "409665f67560127a2f5150df7db626c1",
"fanta-etf/main.dart.js": "39cd3c583946b468e6e09fcfe7a9b29a",
"fanta-etf/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"fanta-etf/manifest.json": "da682ced6c43613eee054f661ac89400",
"fanta-etf/version.json": "d7e4ce4dff777b0425651efa91ce8bd5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
