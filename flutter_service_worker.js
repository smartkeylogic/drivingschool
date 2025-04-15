'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "88cef02f63d160d8bf6f57dd4790d205",
".git/config": "6e0514c39b1361584899be7d011eb213",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4bcf8c17412b1ffc1cf802785612c125",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "485e8509d4b6ae49964c49b6c2043af9",
".git/logs/refs/heads/main": "24a92f1abeb70dad61a315690ad113a1",
".git/logs/refs/remotes/origin/main": "de8782bda5976677a439652a13cbb7f7",
".git/objects/04/c4c4f31863faf376217f98603edf986e6c91ff": "630224699af16d49ba29fb08788cefe6",
".git/objects/07/ad3b81462d7bb9a03291aa537c5f76cdea0d60": "344a940f91626093e879ea6cd8072836",
".git/objects/08/c542716946405f0b94c6722c73d5a054deef3c": "03af7aa48f7d8969514b7f437f42d408",
".git/objects/0a/0229fdf2f9f02d4ccff8f4feda39e41fac28f1": "0805b196625dae337aef5530e9c0878d",
".git/objects/0d/d5231013b77f72c2ed70bcf26df9c2a5471a70": "1108750737343cd6aa6a303e12322ce2",
".git/objects/0e/806a1b686ee029047719276753fd390051aa00": "bb4fa887b8cf17600ee22d2bd5ed6be8",
".git/objects/0e/e8a76bc8933fd0d677e8d096b9fceb28a48a42": "158bd6bcd8f6e88bfa5c6b8ff6c21f9c",
".git/objects/0f/a0bbe39aba12fde9338b968009856a6dba8ffa": "81eb4920f5f0d98d8426af574a541d7e",
".git/objects/10/a46916a8ad35d2405514f0ba3412e0de1089c2": "17a2a8bce5b880507329c47beea0f334",
".git/objects/11/a4b04751a54d018c044b5a1449c1dd8171fced": "9b38a8246f4d0cbb36dcd526b4308c82",
".git/objects/13/c94739eb2dd4645e9101845f8a94a4a909795b": "1c798e892ba5b1114e4a1c1ce5f4a262",
".git/objects/15/215f0da2c0674a9cb432d7ff2d5391229b9ee4": "767ae3fe989899ef25f06ced1ed5b0fc",
".git/objects/18/a850942653632f96e76763a0fe6adc95590a4a": "37139d01309538e59ecfad12b283f588",
".git/objects/1c/dc6cee5799706a0610d593254883a36231abed": "64c37da701832547906b071af08439c2",
".git/objects/1d/08ea3a766e32443188994f3035cf6b3a20654c": "13ea2df70432a54b5b4d09e4f33079ef",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/1f/f12220fe87b43794f8cc65b93de6901c1b8c2b": "5019ea5f7a016a8c22de60e7664f6343",
".git/objects/22/65824faf6932366845073982cb0923394948fe": "6f2be27ced7feca2d6712724996b06b6",
".git/objects/25/562936281e3f85b59e44aa2e139c263a1a4389": "859924be8211d29b15281e53c8276b60",
".git/objects/28/e5fbd9a4452f7abb78fba22459cf9c39bbbcf0": "d77e86af88431bc0c6169dca1871be6d",
".git/objects/2a/9367aa09ebffd1a2c228a8dcd4018587e5c8f6": "7e76bc73cd2e29a43f8a9c1d91d335c7",
".git/objects/2b/5671d5ba7dad5bdfadb09d56692e6465d9b028": "a9a8cea2386703cbf2aaf698d46ef22a",
".git/objects/2c/aec1bf4032802144a3daab769bdd9373d7b022": "c6139b86526e3e908de65f12f1d4817d",
".git/objects/2f/6771cd0c907a6ed59e9441680d4dd34d764b34": "d6e8e149a406b8421c943d1a9a34cce2",
".git/objects/30/88768580ed26e5f9b65886a3d3c130909992d1": "8066c5470b9bee54adc7335798edb412",
".git/objects/30/af9f3a6bb50652c76fcd7d91749bcffd02d92e": "ae596b3ba2422380e2ba631a7529259b",
".git/objects/31/58ba6deb7f4a87a0c67de6fe235c5f43cffed3": "7437d6a01714b9643df2601ba9e29a11",
".git/objects/35/2882f5e30b8831c08003fb190f67c4d7d40ebf": "d0a5f20ba0b71a9cfb8b45f7536590d1",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/35/985129d9e8927296a3bbb8b9a4ade2e26aaeca": "ee1131a41505b673452abcd24e365047",
".git/objects/38/0868563f2293c43061ad25253e9c94da50c0e4": "6edd7c61a78408c966d3da520f4f6699",
".git/objects/3d/dc391a1a51dd744d23d9c53c744c78f2d2c2a2": "96546083d4e14491b24ac31cde3b374f",
".git/objects/3f/3ba07712f697d21490eeaddd45f15a1ecfe209": "4f8b42199af05635c3b381e6bcdacdc5",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/42/f299b7efeb79e649e2759f0fae586b7880d103": "127fe0bea3b4995f2b550272a9799d8b",
".git/objects/43/5c9e726ad93d1a51bbc9f8d69c1d45ad2f520b": "a7567d4af87f9f8520b0367245d841fa",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/bbe19fa326ae9275b29462f655012bca895dbd": "46e85feeeac8ee13f9179a87ab1f6802",
".git/objects/49/52152407d35e21e912785f4c8d24590dfa8c23": "d93bf1f7deb4e99295de57614bf6bfdc",
".git/objects/4e/23fe9f6673f3101c93afd1140e9976cb512d05": "bcf96d9955ce0f5a8ee1f8542ec80973",
".git/objects/4f/4da6881c6ab7e2fee11b37096d29e4c8d4c81b": "203e9edea00ab645c3859069b226e935",
".git/objects/51/e7e3b2525c330eff029431cbcd35c130c30b4c": "3b7c836f4695cb953a2febff77f6dbbe",
".git/objects/52/23e3a64409b0f0e148b3761e718b6b74b2fd9a": "dcbabcd3449a1d345e187bf8ae3feda0",
".git/objects/52/f30896ec66928c697f532065e6f9f00edb5f30": "29c19acb000ae0f67956eec830edb6e6",
".git/objects/53/3402c75429e6feaa7b8f92878ae2313dbdf2de": "63ab067b0b447b461fa3e8f58a1f23a9",
".git/objects/54/7c36662170b5ac9aa7208b02774d6afa1918c8": "933a0cfb8be8a4e90598dab9488ae4ee",
".git/objects/55/63c4904a03023ba457b56246bde5d941e5b46b": "937b9a1acddece65fa4b087c5da51403",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/57/97dcdf5240901bd68d8e18bc6a69d426794a61": "55533699b835d56d8a62dbd1c9547b0b",
".git/objects/59/ffc119884d3f05fa72ab46e73e47073eaf5293": "48fd6df5a02e4f467e3d7e6b1f418f66",
".git/objects/5c/2b3c5774866d839406d4474d019b749c6afc2a": "1b99f8e29069c43a47dea749ca436bfc",
".git/objects/5c/637cd4d4143da60f6a36b28188e5f445225639": "5d42c0cebc3d0a420534c6a2564db8a6",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/60/8b5d7ff417e8386a0d42715ab82d9e29542808": "cc4a4a89aa56a922b507f646045b3470",
".git/objects/60/e14d5a15d02dbdeacee880b1ccd77519c918c3": "8f140de7316ada1323ecc7c5cdebcc68",
".git/objects/61/70bc1458fe75a2184bf0658b4963106333615f": "ef4f3d5b764a6400bf8b7a58d5fe10c5",
".git/objects/63/c9d849108d37fd54325e1256f9052f04de490b": "6642f6cb62474088651b4f5c2cdfe354",
".git/objects/66/bb4646d2ec206ee1492a254948add3024835b3": "20c847aa0dcc924cce43407d9366bcee",
".git/objects/67/6d356a7dc7c0cf5ec10bc68fad6101fbf44405": "9cb1243b4c37ffa2580e842666ae7e99",
".git/objects/67/b75f324132983f727598fa6758a7ad8d6e6567": "bc2f00068d1eddac77305e08e0d6725a",
".git/objects/67/d06d9cd6d739c12eb03f903630a7f800a63813": "982c3a691452ba1b8e78828111a36f10",
".git/objects/67/f58620935de360b7e42f4107bc611495023e52": "7a6824185c14dcc21f8367c5b8736d41",
".git/objects/69/b0eb4ee534816fd7d3bde6ab8294275fb70d0e": "c40c3034384e0a17b9d4438cd638fd4f",
".git/objects/6b/364e2d87b679e2018f9a3a212fc9006cc14c9d": "acfd0c79d54508539dad078480ee3c50",
".git/objects/6b/4f6b69fd34a0065ae7807365d483edc9d5ad18": "789d59efa46a4fa1df4b2693389519b1",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/2a06ffa778d4c46a5dd90714a28c29b013dba4": "0e3eb8e6f0498e5e5cf9a27d1e61132c",
".git/objects/6e/5cb990a0935a980ceafe16d52abc3b4901d7ba": "2134e51528164e8605505506a580d77a",
".git/objects/6f/abe5a6a0321352409aa2db37c00875b0e89e96": "6a17f45d0ea6e18f999fd563f85efa62",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/72/9f3b056a233974f3c2638b54742911d133b3d6": "4b87c3598fa3b34a6ec2635eaadf8efd",
".git/objects/73/537221c9fc95072bdbe4e574f834fa61666d7c": "87e585b0613897dab29011513c28c2c5",
".git/objects/76/737de4dae5cf30ebbdfc8219484f06bce210f2": "3ccb233faaffe9c15daaeddcf42cbeba",
".git/objects/77/750e52ed5af3b9ce4f6108ee82f824370578b9": "1a351fdd4b66d4c2594b2d56369797dd",
".git/objects/7a/a180f39aedb40d931aad9ca246e0bb160f5123": "b0ccec43a7fd36bc8f745cf0efe91c8a",
".git/objects/7b/d2a4b252a5c9c091d7e984cf696dc8c6c5cc9b": "4c61557efed1365db4218298ca219757",
".git/objects/7c/7f2bf0df52486a7513a9e2364de8496c748761": "232b5d27d921516b1eefea1f44d74439",
".git/objects/7c/e8a91f75a69107d16a9f7c479f053f0a548661": "0b2aa519a8d930a12e3892bbe190a419",
".git/objects/7e/f0c42afd080e1a2b0b4641823a7aa0ca13e8b7": "86273ed3119b89fc47a628dd34dd861a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/16a046e46d3be4fe7f4221a5dbd74968e6bd02": "e8ae28155e466879c77912456b6dc00b",
".git/objects/8f/438113bb1827627544d0c878b9fa80565da745": "cfcaba62ff87a2fb6433f58175461c20",
".git/objects/8f/7827a596acffacabb25b5642ce9a0f6f187de2": "2dd589ecf831bc9a6d9f90be32f66806",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/94/8dd7997141a89a3b35b2daff418119f2b75144": "15f36d02aaa1027e14d45d78de05a5f4",
".git/objects/95/79f277e70189638e62365bdb4ce4c86719d0b9": "3fb34a48f00d11c42b4f5e924ea15595",
".git/objects/96/0f0f44bc01963228edd45a8cd396d5e0913c21": "9a8343e6fd4e584c367ae4555a27ba72",
".git/objects/98/30900c1c39cc456c4c58b6eca7f5ecea7c542c": "20806b67b2a66d655590430baff14060",
".git/objects/99/8d43a9c6ed821b991180bb8d767e90085802d6": "b980d37e36421d8b3bdb70ad52b13063",
".git/objects/9d/b6e1f68fa3979a50e123c91254afbd06a2b03c": "0487fe6293a55cc06df6bf89ee85528d",
".git/objects/9d/c56ec4c55033031f1ac37466bb12e508da3f13": "99e129abfd81c1f39f4cc23614e966ad",
".git/objects/9f/9b46170cf06bf0e7999ecca219eccbe82b5d62": "3b9cc776b7122b203102526d210367f9",
".git/objects/9f/a96053750ac3e05309821f798edcd2d10600ab": "dd4dccc38cc22285db1fcf7bbe15112b",
".git/objects/a1/ab5d3444bb494b31b3a5333ac444e482e901f7": "0bcc48fbc943057f85d1aadacf5f675d",
".git/objects/a5/2207a83fbc728796cbf7764c36e639e58598f0": "a5db7312282eaa5d4fd67b7b72c6efdd",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a7/e3d545af8fa9e2dec55552c9bb486d37e46925": "abbc148df8b456073f19dbc6a5a4ce31",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a8/a05036300f1e7bd9500ea5871f321db89140a5": "157f8659545c726ebc0ab66f8921e72d",
".git/objects/ab/8f8eb5aec31dd082515e4ffbf1b60636561ce4": "02ab4e3142879374bfd0bf911a690918",
".git/objects/ab/b695e0eb20ab57dd8a2f47da3dcbc8ccbc904b": "787a689f7ce19a11a85c166dd4275ea7",
".git/objects/ae/39d0699f6db467132b9d9461a3985141971bd9": "1a8a3a058de8da581a36a101cbe9cade",
".git/objects/ae/efd4c9139bc1133bd034ab28359c61fc1d4c9f": "28dc6c26f7bac171fa3601595abae74f",
".git/objects/af/1d5e6b70b1f2885fbf23cfe3e092582f03448c": "da09a6a0f33af45ab657d14e803c292b",
".git/objects/b2/41cc994a1b38841cf1f10dd3c17283702dbe29": "6c466438f8104b483130dac686ca1e12",
".git/objects/b2/a5d8b0047685d88aa06c66ff4a40329d4e0a85": "788e6cad169422e05203398795087772",
".git/objects/b3/6ec69dc8420741f61c34bcd7ee694161b29784": "9fba1083113da0fb22da61919cc33ce2",
".git/objects/b5/b1c70bd1394a0bd5f907130c18bfe9cbe3d2b9": "74c7413829a3fec66e993c6edb7b350b",
".git/objects/b6/b382dfa2133cc3ad86b774a2d40a50ee3c6726": "87b21b10a95501e1050cb71cccb21cdf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/83fdc7a64037f9c60c9c0e2fdfce177562178e": "83723b2eb4179e045ed20291fe58a102",
".git/objects/bc/a3e80b5ce8da14977dcf1234943d9b4c38369a": "d52140f6688a1675b012b62ec7ec88f9",
".git/objects/bf/1b28fd46f18629a168319c5195a841f1feaf2e": "07bbf4b0634bf1d79632b12808a6b74a",
".git/objects/c2/ca4c109b23edfa5e61eb7fc0ce913708a58a0f": "d913990d68b4de2c41af9b2a64ded4ed",
".git/objects/c6/87fbbccb39b5e6e02a57502b08bdaaf76c7468": "37477bb83c18e342ee08747fefd7f622",
".git/objects/ca/fcb4a59b07e1516c9dfc14c06560d7aff612df": "40d9ecf3a77b5df55f264830a7a2f4a6",
".git/objects/cb/60e56921fed83cbdbac0590728405f051681f1": "20e561e7b3c41c17ebf64037a69f63f2",
".git/objects/ce/af54fe713025fdb13a3c69fb55eddaf69a095c": "6f2139ff1dd488d0e10ac46318ce6c3f",
".git/objects/d0/0bd83374dd9d6724faf0ba1c90e6ed4a520077": "973be5bc984e26a0974526a609f9d7b6",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/63832fc8f47601fc9d404e6b156578d7b88e31": "9c9df13eca427d107d30c5072f8a813d",
".git/objects/d6/33976fa0eb3eed7833c0589da55e80e9f8757d": "d503da5e9cc91369e621ac7787fa2d9a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/3d61c57ab6ebba48f913fd067aa084d3709755": "e80ddef43d60f8de8dd1910bd00c6a5d",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/db/069a7863dd75aafc4058fca853154c737cd537": "4c9ad77075920aedecdd32db62e0f6de",
".git/objects/dc/2361b78530dac5c85341536a227f8a7f9c8992": "f75ec06e15312d972162fe301c6c8320",
".git/objects/e2/7e0c9826eba11011c072a6755f4b95f11c1900": "5bfbe74885db6f9dd3cc29ea125635bc",
".git/objects/e3/f24ea8c0c9a8ba697213c166e27968d5ec470a": "3c377feb9067bb909faf8f5633544f51",
".git/objects/e4/58cecb09cec8507b713bf9004734c6984e2492": "da9591d00988f9fe1f72e38cb10a67dd",
".git/objects/e6/3506ccdb705fd501e6b7e9e1f3bb5e235fddc7": "b38549564f7f16f31d807926ba7721d5",
".git/objects/e6/3834ecd4eb3c3c5baef1908127873211d4f330": "faa1290939f68a834b4207e4762045e9",
".git/objects/e6/64df0b04d26d632594e0ecdc22d4f3f10dd50f": "d9dffbb024f2815a688a4fb2e67417f3",
".git/objects/e8/1d80a3db2a491640a3b0515c992973d5826720": "6391c686b984fed0c51f30fbef07e3fa",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/44459a03456cc3a8ea3fb7accbada2174fb96d": "354708cd93d8b2e4d61927c329932b2f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/4ab8166f19bab3bc29a47d38e15b79bbcee3d4": "538478aadf50f7050cad2424108b4e60",
".git/objects/ec/6c35394778ae882ef6bd3c07a28ae316e1203b": "ef28fbc8883d2759060cd56943b24e62",
".git/objects/ec/ead98c0308f45870ba4e326b0b8a301e7be6a3": "b6fbd1bb609b162546e3988e2dbb71e1",
".git/objects/ed/aba7e05c84ef0926c6a41230c34666bb5be760": "a28a7cb4112054efd9016db4becdbe72",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ee/b437fd714cb9fa5740f7cbcb4f7094428bfc90": "9557209bdd69812017a3a4fb566c74ef",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f0/c7f443e2153a899b5d0c0c428d5e05a9120bc1": "d886c057f28ded607fad25759e3fdd01",
".git/objects/f0/e5cf69d8b439f9c3e9e131329395ac07ad1c25": "f50e945a1f58bacd353e76af3e8e512c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/fa28abbf99e07d94582ba12b8f9caf52bd45d9": "91ac867bf0ea55b98db70ad43e6de99f",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/6192ad5d5b26fda3c9b4f50403408828d6f466": "d0cca3f566676ad18f5ccb340f66622c",
".git/objects/fa/d7c4905036dfd400588dcd7ce7d49619947051": "3602f210b029804a6eba436527aa2bf5",
".git/objects/fb/94644fa62aaf1e6cb32db71ff397cc4aa2014f": "9e2bff66bc15c7d8c3ce621ac69e72b3",
".git/objects/fb/a49c68a04025d37f1079ef95cb1eaccc648ccc": "4f042aa2071cfae3bb2f4326d212a1f4",
".git/objects/fc/a8e2dbad7ff69857cbb8ab4dc96201e104c940": "f63c53442e74aca8d005bf99e470268e",
".git/refs/heads/main": "344c18afe135855c9884ca7f62db1e49",
".git/refs/remotes/origin/main": "344c18afe135855c9884ca7f62db1e49",
"assets/AssetManifest.bin": "ea1c5f8f5881d56614bf6fad9f611139",
"assets/AssetManifest.bin.json": "ecb8a81efd855a24c7fa6146fc18b564",
"assets/AssetManifest.json": "96a6607033ceef852ec724eaa686941e",
"assets/assets/1background%2520(2).jpg": "96a7db03ecb26627cd72ed69425b3846",
"assets/assets/1background%2520(3).jpg": "9853cd34afa87c9792cafa85a7f942d1",
"assets/assets/1background.jpg": "ee1efbb04b70cc3ddbc68d23dc176e77",
"assets/assets/background%2520-%2520Copy.jpg": "32a7f04f798e991da6fdf76a2ceeb888",
"assets/assets/background.jpg": "916be1669381b0428b9a9107406c6d6b",
"assets/assets/logo.jpg": "16312f683d4ce138f02f7a249ecd959e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "f5f91d7051932d7d5f0989aa81441525",
"assets/NOTICES": "9c4da2e295574792d2e84b5901605371",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "2d15f6d6e011c0c6ca09e2c234cd48b7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c7f63d56f005a79039e7486413b279d8",
"/": "c7f63d56f005a79039e7486413b279d8",
"main.dart.js": "4172f855b7dea5050f1270e57e44504b",
"manifest.json": "97cc3d46b59ff71900070932662c6f56",
"version.json": "29e4e57e37e2159fba82511a6d75fb82"};
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
