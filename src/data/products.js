export const products = [
    {
        id: 'tomato',
        name: 'F1 Tomato',
        category: 'fruit',
        image: '/assets/img_tomato_16x9.png',
        description: '<strong>Year-Round Productivity. Superior Resistance.</strong><br><br>Engineered for the professional grower, our F1 hybrids deliver elite performance across every season. These varieties combine high disease tolerance with an ultra-early harvest window, ensuring you hit the market first. With uniform fruit quality and high-yield stability, Naturegro F1s are the strategic choice for fresh market supply and industrial processing.',
        varieties: [
            { name: 'Big Mama', desc: 'Small, bite-sized fruits with high sugar content.' },
            { name: 'Roma HS', desc: 'Meaty flesh with few seeds, ideal for sauces.' },
            { name: 'Toshiko', desc: 'Large, ribbed fruits perfect for sandwiches.' }
        ],
        practices: {
            soilClimate: {
                soil: "Loam, Sandy loam or clay with adequate drainage and rich in organic matter. Avoid acidic/alkaline soils.",
                climate: "Optimum: Day 28°C, Night 18°C.",
                consideration: "Adequate drainage is essential."
            },
            planting: {
                sowing: "Major periods: Northern Plains (Jun-Jul, Oct-Nov, Feb-Mar), Northern Hills (Mar-Apr).",
                rate: "125 – 150 gm/Ha (50–60 gm/Ac).",
                spacing: {
                    row: "Determinate: 90cm; Indeterminate: 100-120cm",
                    plant: "Determinate: 30-45cm; Indeterminate: 30-45cm"
                }
            },
            fertilizers: {
                fym: "25-30 tons/ha.",
                nitrogen: "180 kg/ha.",
                phosphorus: "160 kg/ha.",
                potash: "120 kg/ha.",
                strategy: "Basal: Full FYM + Neem Cake (300-400kg/ha). Determinate: 60kg N, 80kg P, 60kg K basal. Top Dressing: Balance P, K + 60kg N (30 days), 60kg N (60 days). Indeterminate: +60kg N (75 days)."
            },
            staking: "Stake 20-25 days after transplanting using 5-7 ft poles. Tie horizontal poles every 30-45 cm for support.",
            pruning: "Remove all side shoots up to the first flower/fruit cluster.",
            irrigation: "Irrigate every 4 to 5 days depending on soil and weather conditions."
        }
    },
    {
        id: 'carrot',
        name: 'F1 Carrot',
        category: 'root',
        image: '/assets/product-carrot.png',
        description: '<strong>Premium Carrots: Built for Uniformity and High Yields</strong><br><br>Our varieties produce straight, blunt-tipped roots with smooth skins that wash easily and resist cracking. With a deep orange core and high brix (sugar) content, these carrots offer the perfect balance of "old-fashioned" crunch and modern durability. Excellent for long-term cold storage and high-volume fresh market sales.</strong>',

        varieties: [
            { name: 'Nantes', desc: 'Cylindrical and sweet, great for storage.' },
            { name: 'Imperator', desc: 'Long and tapered, classic market carrot.' },
            { name: 'Purple Dragon', desc: 'Stunning purple skin with orange core.' }
        ]
    },
    {
        id: 'op-carrot',
        name: 'OP Carrot',
        category: 'root',
        image: '/assets/product-carrot.png',
        description: '<strong>Traditional Flavor, Reliable Performance.</strong><br><br>Our Open Pollinated carrot varieties are selected for their adaptability and excellent taste. These vigorous growers produce uniform, attractive roots that are perfect for home gardens and local markets. Rich in vitamins and beta-carotene, they offer that classic, sweet carrot flavor.',
        varieties: [
            { name: 'Pusa Kesar', desc: 'Deep red roots, high carotene content.' },
            { name: 'Pusa Rudhira', desc: 'Red, long, slender roots.' }
        ]
    },
    {
        id: 'spinach',
        name: 'Palak (Spinach)',
        category: 'leafy',
        image: '/assets/product-spinach.png',
        description: '<strong>The "High-Yield" Specialist. The Versatile "Farm-to-Table" Choice. Short & Punchy.</strong><br><br>Our Palak (Spinach) is a slow-bolting powerhouse, producing massive, emerald leaves that remain tender and flavorful. Versatile enough for baby-leaf harvesting or full-growth maturity, it is the dependable choice for consistent, nutrient-dense greens.<br><strong>Farmer Focus:</strong> A high-performance, multi-cut variety designed for rapid regrowth and high biomass, ensuring more pickings per sowing and maximum market weight.',

        varieties: [
            { name: 'Bloomsdale', desc: 'Savoy type with crinkled leaves, cold hardy.' },
            { name: 'Baby Leaf', desc: 'Smooth leaves, fast growing for salads.' },
            { name: 'New Zealand', desc: 'Heat tolerant alternative for summer.' }
        ]
    },
    {
        id: 'f1-onion',
        name: 'F1 Onion',
        category: 'bulb',
        image: '/assets/img_onion_16x9_v2.png',
        description: '<strong>Superior Bulbs, Long-Term Storage.</strong><br><br>Our F1 Hybrid Onion is bred for the commercial grower demanding high uniformity and disease resistance. These varieties produce large, globe-shaped bulbs with deep red, tight skins that resist damage during handling. With a high percentage of single centered bulbs and excellent keeping quality, this hybrid allows you to extend your sales window long after the harvest season.',
        varieties: [
            { name: 'Gulmohar', desc: 'Dark red, globe shaped, high pungency.' },
            { name: 'Ellora', desc: 'Light red, uniform size, early maturity.' }
        ]
    },
    {
        id: 'onion',
        name: 'OP Onion',
        category: 'bulb',
        image: '/assets/img_onion_16x9.png',
        description: '<strong>High-Quality Bulbs with Superior Dormancy</strong><br>Our open-pollinated onion varieties are celebrated for their intense color and a flavor profile that ranges from a crisp, mild bite to a bold, pungent finish. With high dry-matter content and multi-layered, tight-fitting skins, these onions are engineered for durability.<br><strong>Farmer Focus:</strong> Bred for excellent skin retention and bulb uniformity, ensuring a high-pack out rate and the ability to wait for peak market prices thanks to extended shelf life.',

        varieties: [
            { name: 'Red Baron', desc: 'Deep red skin, strong flavor.' },
            { name: 'Sweet Spanish', desc: 'Large bulbs, milder taste.' }
        ]
    },
    {
        id: 'F1-pumpkin',
        name: 'F1 Pumpkin',
        category: 'fruit',
        image: '/assets/img_pumpkin_16x9.png',
        description: '<strong>Consistency You Can Count On, Quality They’ll Crave</strong><br><br>Our F1 Pumpkin is engineered for the professional grower who refuses to sacrifice flavor for yield. Expect high-energy vines that produce consistent, flat-round fruits with remarkable uniformity. Beyond the harvest, these pumpkins are built to last; their excellent keeping quality ensures they stay market-ready longer. Inside, the dense, sugar-rich flesh provides the weight and texture that chefs and home cooks demand.',
        practices: {
            soilClimate: {
                soil: "Well-drained sandy loam rich in organic matter. pH 6.0-7.5.",
                climate: "Warm-season crop. Optimum temperature 20-30°C.",
                consideration: "Requires lots of space for vines."
            },
            planting: {
                sowing: "June-July (Rainy), Jan-March (Summer).",
                rate: "1-1.5 kg/acre (Hybrids: 450-500g/acre).",
                spacing: {
                    row: "2-3 m",
                    plant: "60-90 cm"
                }
            },
            fertilizers: {
                fym: "8-10 tons/acre.",
                nitrogen: "40 kg/acre.",
                phosphorus: "20 kg/acre.",
                potash: "20 kg/acre.",
                strategy: "Basal application of full P & K and 1/2 N. Top dress remaining N at flowering."
            }
        },
        varieties: [
            { name: 'Arka Chandan', desc: 'Medium sized, flat round fruits with orange flesh.' },
            { name: 'Pusa Hybrid-1', desc: 'Early maturing, round fruits, tolerant to viruses.' }
        ]
    },
    {
        id: 'broccoli',
        name: 'F1 Broccoli',
        category: 'flower',
        image: '/assets/product-broccoli.png', // Placeholder
        description: '<strong>Maximise Your Harvest Cycle</strong><br><br>Engineered for vigor and high-density planting, our broccoli varieties deliver heavy, blue-green central heads that command premium market prices. The productivity doesn\'t stop at the first cut - our plants are bred for aggressive side-shoot production, providing a continuous secondary harvest that increases your total yield per acre.',

        varieties: [
            { name: 'Calabrese', desc: 'Traditional green sprouting broccoli.' },
            { name: 'Purple Sprouting', desc: 'Produces purple florets, very hardy.' }
        ]
    },
    {
        id: 'peas',
        name: 'Peas (Sweet Peas)',
        category: 'pod',
        image: '/assets/img_green_peas_16x9.png', // Placeholder
        description: '<strong>Sweet Green Peas: The Ultimate Cool-Season Treat</strong><br><br>Our sweet green peas are bred for maximum production and superior taste. These vigorous vines produce well-filled pods stuffed with deep-green, sugary peas. Known for their uniform size and "easy-shell" pods, they are the ideal choice for gardeners and growers who prioritize quality without the extra labor.<br><strong>Farmer Focus:</strong> High-yield potential with a heavy "first-flush" set and excellent tolerance to common wilts, providing a dependable, high-grade crop for both fresh retail and processing.',

        varieties: [
            { name: 'Garden Sweet', desc: 'Classic shelling peas.' },
            { name: 'Sugar Snap', desc: 'Edible pods, crisp and sweet.' },
            { name: 'Snow Peas', desc: 'Flat pods, used in stir-fries.' }
        ]
    },
    {
        id: 'cauliflower',
        name: 'F1 Cauliflower',
        category: 'flower',
        image: '/assets/img_cauliflower_16x9_v2.png',
        description: '<strong>Dominate the Seasons with Elite F1 Cauliflower</strong><br><br>Achieve a perfect harvest regardless of the weather. Our F1 hybrids are specifically bred for climate adaptability, offering specialised varieties for the heat of summer, the humidity of the rainy season, and the crisp windows of winters. With excellent self-blanching leaf cover and heavy, snow-white curds, Naturegro hybrids ensure premium market pricing and high-yield stability year-round.',
        practices: {
            soilClimate: {
                soil: "Cauliflowers can be successfully grown in a wide range of soils that are rich in organic matter.",
                climate: "Cauliflower is highly sensitive to temperature and light duration.",
                consideration: "Specific care must be taken to select season-appropriate hybrids to prevent common issues like poor curd color development, buttoning (premature small curd formation), and riciness (curd breaking into rice-like grains)."
            },
            planting: {
                sowing: "Cultivation is possible throughout the year by selecting a hybrid suitable for the specific season.",
                rate: "275 - 350 grams per hectare (Ha).",
                spacing: {
                    row: "50 - 60 cm",
                    plant: "30 – 45 cm"
                }
            },
            fertilizers: {
                fym: "25 - 30 tons (At the time of final land preparation)",
                nitrogen: "200 Kg (Half at land preparation; balance in 2-3 split doses)",
                phosphorus: "125 Kg (Complete dose at final land preparation)",
                potash: "150 Kg (Complete dose at final land preparation)",
                strategy: "Apply the entire quantity of FYM, half the recommended dose of Nitrogen, and the complete recommended doses of Phosphorus and Potash at the time of final land preparation. The remaining quantity of Nitrogen should be applied in two to three split doses, depending on the maturity period of the specific hybrid."
            }
        },

        varieties: [
            {
                name: 'Summer King (CFL-5530)',
                desc: '<strong>👑 Premium Summer Hybrid</strong><br>• <strong>Sowing:</strong> June 10 - July 31<br>• <strong>Harvest:</strong> 55-60 days<br>• <strong>Curd:</strong> 700-900g, Dome-shaped, White<br>• <strong>Features:</strong> Heat tolerant, bluish-green foliage.'
            },
            {
                name: 'Kritika (CFL-6030)',
                desc: '<strong>🌧 Rainy Season Specialist</strong><br>• <strong>Sowing:</strong> July 20 - Aug 31<br>• <strong>Harvest:</strong> 60-62 days<br>• <strong>Curd:</strong> 900-1200g, Compact White<br>• <strong>Features:</strong> Upright leaves protect curds, tolerant to soft rot.'
            },
            {
                name: 'Mohini',
                desc: '<strong>❄ Winter High-Yielder</strong><br>• <strong>Sowing:</strong> Aug 20 - Nov 30<br>• <strong>Harvest:</strong> 80-85 days<br>• <strong>Curd:</strong> 1.5-2.0kg, Large White<br>• <strong>Features:</strong> Vigorous self-blanching plants, tolerant to black rot.'
            }
        ]
    },
    {
        id: 'op-cauliflower',
        name: 'OP Cauliflower (Research)',
        category: 'flower',
        image: '/assets/img_cauliflower_16x9_v3.png',
        description: '<strong>Resilient Yields. Proven Performance.</strong><br><br>Our Research and Improved OP Cauliflower varieties are selected for the grower who demands reliability and cost-efficiency. Specifically bred for regional adaptability, these varieties thrive in diverse seasonal windows-from the high heat of summer to the monsoon rains. Experience consistent curd density and excellent field-holding ability with a seed that works as hard as you do.',
        practices: {
            soilClimate: {
                soil: "Cauliflowers can be successfully grown in a wide range of soils that are rich in organic matter.",
                climate: "Cauliflower is highly sensitive to temperature and light duration.",
                consideration: "Specific care must be taken to select season-appropriate variety to prevent common issues like poor curd color development, buttoning (premature small curd formation), and riciness (curd breaking into rice-like grains)."
            },
            planting: {
                sowing: "Cultivation is possible throughout the year by selecting a variety suitable for the specific season.",
                rate: "275 - 350 grams per hectare (Ha).",
                spacing: {
                    row: "50 - 60 cm",
                    plant: "30 – 45 cm"
                }
            },
            fertilizers: {
                fym: "25 - 30 tons (At the time of final land preparation)",
                nitrogen: "200 Kg (Half at land preparation; balance in 2-3 split doses)",
                phosphorus: "125 Kg (Complete dose at final land preparation)",
                potash: "150 Kg (Complete dose at final land preparation)",
                strategy: "Apply the entire quantity of FYM, half the recommended dose of Nitrogen, and the complete recommended doses of Phosphorus and Potash at the time of final land preparation. The remaining quantity of Nitrogen should be applied in two to three split doses, depending on the maturity period of the specific variety."
            }
        },

        varieties: [
            {
                name: 'Sachin',
                desc: '<strong>👑 Premium Summer Variety</strong><br>• <strong>Sowing:</strong> June 10 - July 31<br>• <strong>Harvest:</strong> 55-60 days<br>• <strong>Curd:</strong> 700-900g, Dome-shaped, White<br>• <strong>Features:</strong> Heat tolerant, bluish-green foliage.'
            },
            {
                name: 'Dhoni',
                desc: '<strong>🌧 Rainy Season Specialist</strong><br>• <strong>Sowing:</strong> July 20 - Aug 31<br>• <strong>Harvest:</strong> 60-62 days<br>• <strong>Curd:</strong> 900-1200g, Compact White<br>• <strong>Features:</strong> Upright leaves protect curds, tolerant to soft rot.'
            },
            {
                name: 'Virat',
                desc: '<strong>❄ Winter High-Yielder</strong><br>• <strong>Sowing:</strong> Aug 20 - Nov 30<br>• <strong>Harvest:</strong> 80-85 days<br>• <strong>Curd:</strong> 1.5-2.0kg, Large White<br>• <strong>Features:</strong> Vigorous self-blanching plants, tolerant to black rot.'
            }
        ]
    },
    {
        id: 'radish',
        name: 'F1 Radish',
        category: 'root',
        image: '/assets/product-f1-radish.png',
        description: '<strong>Rapid Maturity. Exceptional Root Integrity.</strong><br><br>Streamline your field turnover with our premium radish portfolio, engineered for high-density production and rapid cycles. From the heat-tolerant Aarya-33 - designed to maintain crispness in soaring temperatures - to the versatile Moonlight, our varieties deliver uniform, snow-white roots with a smooth skin finish. These radishes are bred to resist pithiness and bolting, ensuring a heavy, market-ready harvest in every season.',

        varieties: [
            {
                name: 'Radish Aarya-33',
                desc: '<strong>🔥 Heat Tolerant & Fast</strong><br>• <strong>Maturity:</strong> 30-35 days<br>• <strong>Yield:</strong> High & Uniform<br>• <strong>Root:</strong> 28-30cm, Cylindrical, White<br>• <strong>Season:</strong> Summer & Rainy (Year-round exc. Dec-Feb)'
            },
            {
                name: 'Radish Alpha',
                desc: '<strong>💪 High Vigor & Adaptable</strong><br>• <strong>Maturity:</strong> 35-40 days<br>• <strong>Root:</strong> 18-22cm, Milky White<br>• <strong>Tolerance:</strong> High Heat & Humidity<br>• <strong>Season:</strong> Year-round (exc. Dec-Feb)'
            },
            {
                name: 'Radish RDX-35M40',
                desc: '<strong>🌟 Uniform & Clean</strong><br>• <strong>Maturity:</strong> 35-40 days<br>• <strong>Root:</strong> 18-22cm, Milky White<br>• <strong>Quality:</strong> No neck discoloration, little side roots<br>• <strong>Season:</strong> Year-round (exc. Dec-Feb)'
            },
            {
                name: 'Radish MOONLIGHT',
                desc: '<strong>🌙 Dual-Season & Flexible</strong><br>• <strong>Maturity:</strong> 40-50 days<br>• <strong>Harvest:</strong> Flexible/Staggered<br>• <strong>Root:</strong> 25-30cm, Ivory White<br>• <strong>Season:</strong> Kharif & Rabi'
            }
        ]
    },
    {
        id: 'op-radish',
        name: 'OP Radish',
        category: 'root',
        image: '/assets/product-op-radish.png',
        description: '<strong>Maximise Every Acre: High-Vigor Dual-Purpose Radish</strong><br><br>Our OP and Research-grade radish varieties are bred for the grower who demands more from their crop. Featuring the iconic Palak-Patta, prized for its tender, spinach-like foliage, and the legendary Pusa Chetki, engineered for extreme heat tolerance, these varieties offer unmatched versatility. Whether harvesting for high-quality greens or crisp, pungent roots, you can count on rapid maturity and consistent performance in the toughest environments.',

        varieties: [
            {
                name: 'Palak-Patta (Ganga-40, Bhanu-40, Aarti-40)',
                desc: '<strong>🍃 Dual-Purpose & Fast</strong><br>• <strong>Maturity:</strong> 30-45 days<br>• <strong>Use:</strong> Edible roots & spinach-like leaves<br>• <strong>Root:</strong> 7-8 inches, Cylindrical, White<br>• <strong>Season:</strong> Year-round (North: Mar-Oct)'
            },
            {
                name: 'Pusa Chetki Long',
                desc: '<strong>🔥 Heat Tolerant & Rapid</strong><br>• <strong>Maturity:</strong> 30-55 days<br>• <strong>Yield:</strong> High (200-250 q/ha)<br>• <strong>Root:</strong> 12-18 inches plant height, Pure White<br>• <strong>Feature:</strong> Resistant to pithiness'
            },
            {
                name: 'Mino Early Long',
                desc: '<strong>📏 Long & Reliable</strong><br>• <strong>Maturity:</strong> 40-50 days<br>• <strong>Root:</strong> 12-15 inches, Pure White<br>• <strong>Feature:</strong> Slow to bolt, good keeping quality<br>• <strong>Season:</strong> Autumn, Winter, Early Spring'
            }
            ,
            {
                name: 'Hill Queen',
                desc: '<strong>❄ Crisp & Mild</strong><br>• <strong>Maturity:</strong> 35-45 days<br>• <strong>Root:</strong> 18-22cm, tapered, snow-white<br>• <strong>Feature:</strong> Mild flavor, excellent storage<br>• <strong>Season:</strong> Autumn & Winter'
            }
        ]
    },
    {
        id: 'bhindi',
        name: 'F1 Bhindi (Okra)',
        category: 'pod',
        image: '/assets/img_bhindi.png',
        description: '<strong>Premium F1 Bhindi: Engineered for Market Dominance</strong><br><br>Our F1 Bhindi (Okra) hybrids are bred for the professional grower who demands high-frequency harvests and superior fruit quality. These varieties produce attractive, dark green, slender pods that stay tender longer, ensuring maximum market value. With high tolerance to YVMV (Yellow Vein Mosaic Virus) and an early fruiting cycle, you can maintain a profitable, year-round supply for both local and export markets.',
        varieties: [
            {
                name: 'AADRIKA (F1 Hybrid)',
                image: '/assets/pouch/pouch_AADRIKA.jpg',
                desc: '<strong>🌟 High Performance & Early</strong><br>• <strong>Maturity:</strong> 45-50 days<br>• <strong>Yield:</strong> High & Consistent<br>• <strong>Pod:</strong> 12-14cm, Dark Green, Tender<br>• <strong>Tolerance:</strong> YVMV & ELCV'
            },
            {
                name: 'KRISHNA (F1 Hybrid)',
                image: '/assets/pouch/pouch_KRISHNA.jpg',
                desc: '<strong>🏆 Commercial Superior</strong><br>• <strong>Maturity:</strong> 42-45 days<br>• <strong>Yield:</strong> High Commercial Returns<br>• <strong>Pod:</strong> 12-14cm, Shiny Dark Green<br>• <strong>Tolerance:</strong> YVMV & OLCV'
            }
        ]
    },
    {
        id: 'muskmelon',
        name: 'F1 Muskmelon',
        category: 'fruit',
        image: '/assets/img_muskmelon_16x9.png',
        description: '<strong>Premium Netting. Superior Shelf Life.</strong><br><br>Our muskmelons are bred for the professional supply chain, featuring tight, uniform netting and a reinforced rind that ensures superior "shippability" and minimal post-harvest loss. Inside, its intense aroma and peak sugar levels (High Brix) last long after harvest. This extended shelf-stability makes it the preferred choice for long-distance transporters, wholesalers, and premium vendors who demand uncompromised quality from field to shelf.',

        varieties: [
            { name: 'Kundan', desc: 'Dense netting, deep salmon flesh, high sweetness.' },
            { name: 'Bobby', desc: 'Vigorous vine, excellent fruit setting, uniform size.' }
        ]
    },
    {
        id: 'watermelon',
        name: 'F1 Watermelon',
        category: 'fruit',
        image: '/assets/img_watermelon_16x9.png',
        description: '<strong>The Benchmark for Commercial Shipping</strong><br><br>Maximise your seasonal returns with F1 hybrids engineered for the long haul. These vigorous vines produce heavy, oblong fruits with the "tough-rind" integrity required for long-distance transport without cracking. Inside, the deep-red, high-Brix flesh delivers the intense sweetness consumers demand, while built-in disease resistance ensures a clean, high-yielding field from vine to truck.',

        varieties: [
            { name: 'Sugar Baby', desc: 'Compact vines, round fruits, very sweet.' },
            { name: 'Crimson Sweet', desc: 'Large, striped oblong fruits, high brix.' }
        ],
        practices: {
            soilClimate: {
                soil: "Well drained medium black sandy loam soils and rich in organic matter.",
                climate: "Warm weather with good sunshine is ideal. Low temperature and frost are detrimental.",
                consideration: "Optimum temperature required for crop development."
            },
            planting: {
                sowing: "Southern India and plains: Aug-Nov; Northern India: Nov-Feb.",
                rate: "750 – 1000 gm / Ha. (300-400 g/acre).",
                spacing: {
                    row: "Single row: 180 cm; Double row: 300 cm",
                    plant: "60 cm (for both systems)"
                }
            },
            fertilizers: {
                fym: "25-30 tons/ha (10 tons/ac).",
                nitrogen: "100 kg/ha.",
                phosphorus: "100 kg/ha.",
                potash: "125 kg/ha.",
                strategy: "Basal: Full FYM, P, K & 1/3 N. Top Dressing: Balance N in 2 splits (1 month after sowing & at flower initiation)."
            },
            irrigation: "Irrigate once in 3 to 5 days depending on soil moisture condition."
        }
    },
    {
        id: 'bottle-gourd',
        name: 'F1 Bottle Gourd',
        category: 'Gourds',
        image: '/assets/img_bottle_gourd_16x9_v2.png',
        description: '<strong>Maximized Yields, Market-Ready Quality.</strong><br><br>Our F1 Bottle Gourds produce vigorous vines that set plentiful, smooth, pale-green fruits with tender, mild-flavored flesh. Ideal for curries, stews and stir-fries, these gourds offer high yields, easy harvesting, and good shelf life when picked at the proper size. Suited to warm-season growing with support for vines and regular watering.',
        varieties: [
            { name: 'Tumbuk', desc: 'Deep red skin, strong flavor.' },
            { name: 'Liyana', desc: 'Large bulbs, milder taste.' },
            { name: 'Gollattu', desc: 'Large bulbs, milder taste.' }
        ]
    },
    {
        id: 'bitter-gourd',
        name: 'F1 Bitter Gourd',
        category: 'Gourds',
        image: '/assets/img_bitter_gourd_16x9.png',
        description: '<strong>Built for the Long Haul: High Yields from First to Last Pick.</strong><br><br>Our F1 Bitter Gourd features exceptionally vigorous vines that establish quickly and begin setting fruit early. Engineered for "flush after flush" production, this variety maintains its fruit size and ridge definition even in the later stages of the vine’s life. By extending your harvest window, this F1 hybrid delivers a higher total return on investment (ROI) compared to standard varieties, making every square meter of your trellis work harder for you.',

        varieties: [
            { name: 'Dark Green Long', desc: 'Long, slender fruits with deep green skin.' },
            { name: 'Pale Green Spindle', desc: 'Thick, spindle-shaped fruits, slightly less bitter.' }
        ]
    },
    {
        id: 'ridge-gourd',
        name: 'F1 Ridge Gourd',
        category: 'Gourds',
        image: '/assets/img_ridge_gourd_16x9.png',
        description: '<strong>The Gold Standard for Color and Character.</strong><br><br>Our F1 Ridge Gourd is specifically bred to produce long, straight fruits with an intense dark green color and razor-sharp ridges that stay prominent long after harvest. These features are the primary indicators of quality for buyers and wholesalers. By planting this hybrid, you aren\'t just growing a crop; you\’re growing a premium product that commands the highest price at the auction.',

        varieties: [
            { name: 'Long Green', desc: 'Extra long fruits, very tender.' },
            { name: 'Deep Ridged', desc: 'Prominent ridges, stays tender for longer.' }
        ]
    },
    {
        id: 'sponge-gourd',
        name: 'F1 Sponge Gourd',
        category: 'Gourds',
        image: '/assets/img_sponge_gourd_16x9.png',
        description: '<strong>The Fastest Path from Sowing to Selling.</strong><br><br>Our F1 Sponge Gourd is bred for rapid early-stage growth and "early-burst" fruiting. These prolific vines start yielding days ahead of traditional varieties, allowing you to capture early-season prices when supply is low. The fruits are perfectly cylindrical and maintain a vibrant green hue that signals freshness to every buyer. For the farmer looking for a quick crop rotation and fast cash flow, this is the ultimate high-velocity hybrid.',

        practices: {
            soilClimate: {
                soil: "Well-drained sandy loam or clay loam rich in organic matter.",
                climate: "Warm-season crop. Optimum temperature 25-30°C.",
                consideration: "Requires full sun and good drainage."
            },
            planting: {
                sowing: "Summer: Feb-March; Rainy: June-July.",
                rate: "10-12 kg/ha (Vegetable purpose).",
                spacing: {
                    row: "45-60 cm",
                    plant: "15-20 cm"
                }
            },
            fertilizers: {
                fym: "20-25 tons/ha.",
                nitrogen: "20-30 kg/ha.",
                phosphorus: "40-60 kg/ha.",
                potash: "20-30 kg/ha."
            }
        },
        varieties: [
            { name: 'F1 Special', desc: 'High yielding, cylindrical fruits.' },
            { name: 'Early Green', desc: 'Early maturity, vibrant green skin.' }
        ]
    },
    {
        id: 'ash-gourd',
        name: 'F1 Ash Gourd',
        category: 'Gourds',
        image: '/assets/img_ash_gourd.png',
        description: '<strong>Built for Distance, Sized for Demand.</strong><br><br>Our F1 hybrid produces highly uniform, oblong-to-round fruits with a structural integrity that resists cracking and bruising. The dense, mild-flavored flesh is packed with weight, meaning more tonnage per hectare for your bottom line. With its superior waxy bloom, this variety is the ideal choice for long-distance transport and export markets where appearance and "shelf-toughness" are non-negotiable.',
        practices: {
            soilClimate: {
                soil: "Sandy loam to clay loam rich in organic matter. pH 6.0-7.0.",
                climate: "Warm-season crop. Optimum temperature 24-30°C.",
                consideration: "Requires long growing season."
            },
            planting: {
                sowing: "Jan-March, June-July.",
                rate: "1-1.5 kg/ha.",
                spacing: {
                    row: "2-3 m",
                    plant: "1-1.5 m"
                }
            },
            fertilizers: {
                fym: "20 tons/ha.",
                nitrogen: "80 kg/ha.",
                phosphorus: "50 kg/ha.",
                potash: "50 kg/ha.",
                strategy: "Full P & K and 1/3 N as basal. Remaining N in two splits during vining and flowering."
            }
        },
        varieties: [
            { name: 'Pusa Ujwal', desc: 'Oblong fruits, high yield, uniform shape.' },
            { name: 'Kashi Dhawal', desc: 'Round to oblong, flesh white, thick and tasty.' }
        ]
    },
    {
        id: 'cluster-bean',
        name: 'Cluster Bean (Guar)',
        category: 'pod',
        image: '/assets/img_cluster_bean_16x9.png',
        description: '<strong>Maximum Returns with Minimum Water.</strong><br><br>When the heat is on and water is tight, our Cluster Bean variety stands its ground. Engineered for extreme drought tolerance and high heat resilience, these vigorous plants don\'t just survive - they thrive. While other crops might wilt, our Guar continues to set heavy bunches of firm, flat green pods. It is the perfect low-risk, high-reward crop for farmers looking for a dependable income stream in unpredictable weather. Turn your toughest acres into your most productive ones.',
        practices: {
            soilClimate: {
                soil: "Well-drained light to medium loamy soils. pH 7.0-8.5.",
                climate: "Warm-season crop. Optimum temperature 30-35°C for germination.",
                consideration: "Sensitive to waterlogging and shade."
            },
            planting: {
                sowing: "Summer: Feb-March; Rainy: June-July.",
                rate: "10-12 kg/ha (Vegetable purpose).",
                spacing: {
                    row: "45-60 cm",
                    plant: "15-20 cm"
                }
            },
            fertilizers: {
                fym: "20-25 tons/ha.",
                nitrogen: "20-30 kg/ha.",
                phosphorus: "40-60 kg/ha.",
                potash: "40-60 kg/ha.",
                strategy: "Full FYM, Phosphorus and Potash at sowing. Nitrogen in split doses."
            }
        },
        varieties: [
            { name: 'Pusa Navbahar', desc: 'Non-branching, early maturing, high yield.' },
            { name: 'Neelam-61', desc: 'Erect, single stem, cluster fruiting, attractive lustrous green pods.' }
        ]
    },
    {
        id: 'winter-squash',
        name: 'F1 Winter Squash (Zucchini)',
        category: 'Gourds',
        image: '/assets/img_zucchini.png',
        description: '<strong>Capture the Early Season Premium.</strong><br><br>Our F1 Hybrid is bred for "extra-early" maturity, getting you from seed to first harvest faster than standard varieties. These plants are high-frequency producers, setting new fruit almost daily. With a compact, open-bush habit, picking is fast and efficient, allowing your crew to move through rows quickly without damaging the tender skin of the fruit. Start your cash flow sooner and keep it consistent all season long.',
        practices: {
            soilClimate: {
                soil: "Well-drained fertile loamy soils rich in organic matter. pH 6.0-7.0.",
                climate: "Warm-season crop. Optimum temperature 22-29°C.",
                consideration: "Requires full sun (6-8 hours daily)."
            },
            planting: {
                sowing: "North India: Feb-March & Aug-Sept; South India: June-July.",
                rate: "1-1.25 kg/acre.",
                spacing: {
                    row: "100-150 cm",
                    plant: "50-90 cm"
                }
            },
            fertilizers: {
                fym: "15-20 tons/ha.",
                nitrogen: "100 kg/ha.",
                phosphorus: "60 kg/ha.",
                potash: "60 kg/ha.",
                strategy: "Basal dose of 1/3 N and full P & K. Remaining N in split doses."
            }
        },
        varieties: [
            { name: 'Australian Green', desc: 'Dark green, cylindrical fruits with creamy white flesh.' },
            { name: 'Golden Summer', desc: 'Vibrant yellow skin, tender texture, slightly sweet.' }
        ]
    },
    {
        id: 'beetroot',
        name: 'F1 Beetroot',
        category: 'root',
        image: '/assets/img_beetroot_16x9.png',
        description: '<strong>Uniformity You Can Harvest with Confidence. </strong><br><br>Our F1 Hybrid is engineered for exceptional uniformity - every seed is a promise of a perfectly round, medium-to-large beet. These plants feature strong, upright tops (foliage), making them ideal for both mechanical harvesting and easy hand-pulling. The vigorous leaf growth isn\'t just for show; it protects the crown and provides the energy for fast root development. With a high resistance to bolting, this variety gives you a flexible harvest window and a higher percentage of \"Grade A\" marketable roots per acre.',

        varieties: [
            { name: 'Dark Red Globe', desc: 'Round, smooth roots with dark red flesh.' },
            { name: 'Detroit Dark Red', desc: 'Heirloom variety, sweet and tender.' }
        ]
    },
    {
        id: 'egg-plant',
        name: 'F1 Brinjal (Egg Plant)',
        category: 'fruit',
        image: '/assets/img_brinjal_16x9.png',
        description: '<strong>Non-Stop Production, Maximum Marketable Yield.</strong><br><br>Our F1 variety is a high-energy, vigorous bush that supports a massive fruit load without breaking. We’ve focused on "long-harvest" genetics, meaning the plant continues to set high-quality fruit even in the later stages of the season. The flesh is dense with minimal seeds, providing the heavy weight-per-fruit that farmers need to hit their tonnage targets. Resilient against common field stresses, this is the "workhorse" hybrid for serious growers.',

        varieties: [
            { name: 'Purple Long', desc: 'Slender, dark purple fruits, very tender.' },
            { name: 'Green Round', desc: 'Round, light green fruits with white strips.' }
        ]
    },
    {
        id: 'capsicum',
        name: 'F1 Capsicum (Sweet Pepper)',
        category: 'fruit',
        image: '/assets/img_capsicum_16x9.png',
        description: '<strong>Tough Performance Under the Canopy.</strong><br><br>Our Our F1 Capsicum (Bell Peppers) are characterized by exceptionally thick walls, giving them the "heavy-in-hand" feel that wholesalers use to gauge quality. These glossy, blocky, deep-green peppers turn a vibrant red or yellow upon maturity and are highly resistant to diseases. Crisp and juicy, our F1 Capsicum is the perfect choice for both fresh salads and gourmet cooking.',

        varieties: [
            { name: 'California Wonder', desc: 'Large, blocky, thick-walled green peppers.' },
            { name: 'Indra', desc: 'Vigorous hybrid with heavy yield and long shelf life.' }
        ]
    },
    {
        id: 'cabbage',
        name: 'F1 Cabbage',
        category: 'flower',
        image: '/assets/img_cabbage.png',
        description: '<strong>The Standard in Market-Ready Uniformity</strong><br><br>Scale your production with F1 hybrids engineered for precision. Our cabbage varieties deliver dense, compact heads with exceptional weight-to-volume ratios. Built for the rigours of commercial farming, these hybrids offer superior field-holding capacity, allowing you to time your harvest with market peaks without sacrificing head integrity or crunch.',

        varieties: [
            { name: 'Green Globe', desc: 'Round, dense green heads, good field holding.' },
            { name: 'Red Acre', desc: 'Compact round red heads, great for salads.' }
        ]
    },
    {
        id: 'corn',
        name: 'F1 Sweet Corn',
        category: 'pod',
        image: '/assets/img_sweet_corn_16x9.png',
        description: '<strong>Elite Sweet Corn: Bold Cobs, Maximum Flavor</strong><br><br>Maximize your output with our high-vigor Sweet Corn, designed for large-scale performance and consistent quality. Each plant produces oversized, well-filled ears with deep kernels and a small core, providing a higher recovery rate for both fresh sales and processing. The exceptional sweetness and crisp texture make this a top choice for roadside stands and supermarkets alike.<br><br><strong>Farmer Focus:</strong> Engineered for superior tip fill and tight husk cover to deter pests, ensuring a high-grade marketable yield with excellent "ship-ability" for long-distance transport.',

        varieties: [
            { name: 'Golden Bantam', desc: 'Classic yellow heirlooom, rich flavor.' },
            { name: 'Sugar Pearl', desc: 'White kernels, exceptionally tender and sweet.' }
        ]
    },
    {
        id: 'onion',
        name: 'Red Onion',
        category: 'root',
        image: '/assets/img_onion_16x9.png',
        description: 'These Red Onions are known for their vibrant color and mild to pungent flavor. They are excellent for salads, grilling, and pickling. Long storage life makes them a staple for any pantry.',

        varieties: [
            { name: 'Red Baron', desc: 'Deep red skin, strong flavor.' },
            { name: 'Sweet Spanish', desc: 'Large bulbs, milder taste.' }
        ]
    },
    {
        id: 'cucumber',
        name: 'F1 Cucumber',
        category: 'fruit',
        image: '/assets/img_cucumber_16x9.png',
        description: '<strong>Elite F1 Hybrids: High-Frequency Harvests, Premium Grade</strong><br><br>Maximise your tunnel or field productivity with our high-vigor F1 cucumbers. Bred for the professional market, these vines deliver a continuous flush of uniform, cylindrical fruits with an attractive deep-green finish. With a focus on crunch and a guaranteed bitterness-free profile, our varieties ensure the consistent quality that premium retailers and salad processors demand.',

        varieties: [
            { name: 'Green Long', desc: 'Long, slender, dark green fruits.' },
            { name: 'Slicing Star', desc: 'Thin-skinned, excellent for salads.' }
        ]
    },
    {
        id: 'chilli',
        name: 'F1 Chilli (Hot Pepper)',
        category: 'fruit',
        image: '/assets/img_chilli_16x9.png',
        description: '<strong>Stay Green, Stay Productive: Built to Beat the Virus.</strong><br><br>Our F1 hybrids are selected for superior tolerance to common viruses and sucking pests, keeping your canopy green and your fruit sets heavy when other varieties fail. These are "flush-heavy" plants, meaning you get a concentrated burst of fruit that is easy to see and fast to pick. With a sturdy plant architecture that supports a massive load of upright or hanging peppers, you’ll see a significant increase in marketable yield per picking cycle.',

        varieties: [
            { name: 'Sannam S4', desc: 'Hot, pungent red chilli, high export value.' },
            { name: 'Kashmir', desc: 'Deep red color, mild heat, great for color.' }
        ],
        practices: {
            soilClimate: {
                soil: "Black, red and lateritic soils (pH 5.5-8.5). Best is sandy loam rich in organic matter.",
                climate: "Moderate temperature and high humidity for growth. Higher temperature for fruit ripening.",
                consideration: "Favours good vegetative growth."
            },
            planting: {
                sowing: "Kharif: June-July; Rabi: October-November.",
                rate: "250 – 300 gm/Ha.",
                spacing: {
                    row: "60 - 75 cm",
                    plant: "45 – 60 cm"
                }
            },
            fertilizers: {
                basal: "FYM 20-25 t/ha. Apply 50% N and 100% P & K before planting.",
                topDressing: "Remaining 50% Nitrogen in 2-3 split doses depending on maturity.",
                strategy: "Rec. NPK: 150:80:80 kg/ha."
            }
        }
    },
    {
        id: 'beans',
        name: 'French Beans',
        category: 'pod',
        image: '/assets/img_beans_16x9.png',
        description: '<strong>Premium Bush-Type Variety</strong><br><br>Our French beans are selected for their compact, bush-type growth, making them incredibly easy to manage and high-yielding. These pods are 100% stringless and stay tender longer, offering a crisp texture perfect for steaming, sautéing, or gourmet stir-fries.<br><strong>Farmer Focus:</strong> Engineered for uniform maturity and a concentrated harvest window to maximize your field efficiency and market turnaround.',

        varieties: [
            { name: 'Bush Blue Lake', desc: 'Classic, dark green, stringless pods.' },
            { name: 'Contender', desc: 'Early maturing, high disease resistance.' }
        ]
    },
    {
        id: 'coriander',
        name: 'Coriander',
        category: 'leafy',
        image: '/assets/img_coriander_16x9.png',
        description: '<strong>All-Season Lush Coriander. All-Season Lush Coriander.</strong><br><br>Tired of coriander going to seed too fast? Our slow-bolting varieties are selected for their vigor and heat tolerance. Expect consistent growth of tender, aromatic leaves that stay fresh and flavorful longer. A must-have staple for adding that signature "zing" to chutneys, dals, and salads.<br><strong>Farmer Focus:</strong> Uniform growth and excellent post-harvest shelf life make this variety a reliable choice for long-distance transport and market fresh-keeping.',

        varieties: [
            { name: 'Super Green', desc: 'Large leaves, slow to flower.' },
            { name: 'Aroma Plus', desc: 'Intense fragrance, high yield.' }
        ]
    },
    {
        id: 'spinach',
        name: 'Spinach',
        category: 'leafy',
        image: '/assets/img_spinach_16x9.png',
        description: 'Nutrient-rich Spinach varieties with tender, dark green leaves. Fast-growing and perfect for salads, cooking, or smoothies.',

        varieties: [
            { name: 'All Green', desc: 'Smooth leaves, heat tolerant.' },
            { name: 'Savoy', desc: 'Crinkled leaves, rich flavor.' }
        ]
    },
    {
        id: 'peas',
        name: 'Green Peas',
        category: 'pod',
        image: '/assets/img_green_peas_16x9.png',
        description: 'Sweet and tender Garden Peas. These shelling varieties produce plump pods filled with delicious peas.',

        varieties: [
            { name: 'Bonneville', desc: 'Sweet, long pods, high yielding.' },
            { name: 'Sugar Snap', desc: 'Edible pods, sweet and crunchy.' }
        ]
    },
    {
        id: 'rapeseed',
        name: 'Mustard (Rapeseed)',
        category: 'pod',
        image: '/assets/img_mustard_16x9.png',
        description: 'High-quality Mustard seeds for leafy greens (sarson) or oil production. Vigorous growth and distinct pungent flavor.',

        varieties: [
            { name: 'Pusa Bold', desc: 'Large seeds, high oil content.' },
            { name: 'Leafy Green', desc: 'Broad leaves, excellent for saag.' }
        ]
    }
];
