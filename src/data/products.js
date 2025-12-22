export const products = [
    {
        id: 'tomato',
        name: 'F1 Tomato',
        category: 'fruit',
        image: '/assets/img_tomato_16x9.png',
        description: 'Our Tomatoes are a classic favorite for any garden. These indeterminate vines produce an abundance of medium-sized, deep red fruits that are bursting with flavor. Perfect for slicing, salads, and canning.',
        varieties: [
            { name: 'Big Mama', desc: 'Small, bite-sized fruits with high sugar content.' },
            { name: 'Roma HS', desc: 'Meaty flesh with few seeds, ideal for sauces.' },
            { name: 'Toshiko', desc: 'Large, ribbed fruits perfect for sandwiches.' }
        ]
    },
    {
        id: 'carrot',
        name: 'Crunchy Orange Carrot',
        category: 'root',
        image: '/assets/product-carrot.png',
        description: 'Grow crisp, sweet carrots right in your backyard. These roots are rich in beta-carotene and have a satisfying crunch. They store well and are excellent for roasting, juicing, or eating raw.',

        varieties: [
            { name: 'Nantes', desc: 'Cylindrical and sweet, great for storage.' },
            { name: 'Imperator', desc: 'Long and tapered, classic market carrot.' },
            { name: 'Purple Dragon', desc: 'Stunning purple skin with orange core.' }
        ]
    },
    {
        id: 'spinach',
        name: 'Giant Spinach',
        category: 'leafy',
        image: '/assets/product-spinach.png',
        description: 'A powerhouse of nutrition, our Giant Spinach produces large, dark green leaves that are tender and flavorful. It is slow to bolt and can be harvested as baby greens or full-sized leaves.',

        varieties: [
            { name: 'Bloomsdale', desc: 'Savoy type with crinkled leaves, cold hardy.' },
            { name: 'Baby Leaf', desc: 'Smooth leaves, fast growing for salads.' },
            { name: 'New Zealand', desc: 'Heat tolerant alternative for summer.' }
        ]
    },
    {
        id: 'bottle-gourd',
        name: 'F1 Bottle Gourd',
        category: 'Gourds',
        image: '/assets/img_bottle_gourd_16x9_v2.png',
        description: 'Our F1 Bottle Gourds produce vigorous vines that set plentiful, smooth, pale-green fruits with tender, mild-flavored flesh. Ideal for curries, stews and stir-fries, these gourds offer high yields, easy harvesting, and good shelf life when picked at the proper size. Suited to warm-season growing with support for vines and regular watering.',
        varieties: [
            { name: 'Tumbuk', desc: 'Deep red skin, strong flavor.' },
            { name: 'Liyana', desc: 'Large bulbs, milder taste.' },
            { name: 'Gollattu', desc: 'Large bulbs, milder taste.' }
        ]
    },
    {
        id: 'onion',
        name: 'Red Onion',
        category: 'bulb',
        image: '/assets/img_onion_16x9.png',
        description: 'These Red Onions are known for their vibrant color and mild to pungent flavor. They are excellent for salads, grilling, and pickling. Long storage life makes them a staple for any pantry.',

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
        description: 'Our F1 Pumpkin varieties are vigorous vines producing high yields of uniform, flat-round fruits. Known for their excellent keeping quality and sweet, thick flesh, they are perfect for cooking and sweets.',
        details: {
            temperature: '20-30°C',
            germination: '7-14 days',
            maturity: '90-100 days',
            sunlight: 'Full Sun',
            water: 'Regular, deep watering'
        },
        varieties: [
            { name: 'Arka Chandan', desc: 'Medium sized, flat round fruits with orange flesh.' },
            { name: 'Pusa Hybrid-1', desc: 'Early maturing, round fruits, tolerant to viruses.' }
        ]
    },
    {
        id: 'broccoli',
        name: 'Green Broccoli',
        category: 'flower',
        image: '/assets/product-broccoli.png', // Placeholder
        description: 'Harvest nutrient-packed broccoli heads from your garden. This vigorous variety produces large central heads and plenty of side shoots after the main harvest.',

        varieties: [
            { name: 'Calabrese', desc: 'Traditional green sprouting broccoli.' },
            { name: 'Purple Sprouting', desc: 'Produces purple florets, very hardy.' }
        ]
    },
    {
        id: 'peas',
        name: 'Sweet Green Peas',
        category: 'pod',
        image: '/assets/product-spinach.png', // Placeholder
        description: 'Nothing beats the taste of fresh peas straight from the pod. These vines are prolific producers of sweet, tender peas. Great for freezing or eating fresh.',

        varieties: [
            { name: 'Garden Sweet', desc: 'Classic shelling peas.' },
            { name: 'Sugar Snap', desc: 'Edible pods, crisp and sweet.' },
            { name: 'Snow Peas', desc: 'Flat pods, used in stir-fries.' }
        ]
    },
    {
        id: 'cauliflower',
        name: 'F1 Hybrid Cauliflower',
        category: 'flower',
        image: '/assets/img_cauliflower_16x9_v2.png',
        description: 'Our premium F1 Hybrid Cauliflower varieties are selected for their adaptability to different seasons and superior curd quality. Whether for summer, rainy, or winter harvest, we have the perfect variety for your needs.',
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
                name: 'Mohini (Mid-Snowball)',
                desc: '<strong>❄ Winter High-Yielder</strong><br>• <strong>Sowing:</strong> Aug 20 - Nov 30<br>• <strong>Harvest:</strong> 80-85 days<br>• <strong>Curd:</strong> 1.5-2.0kg, Large White<br>• <strong>Features:</strong> Vigorous self-blanching plants, tolerant to black rot.'
            }
        ]
    },
    {
        id: 'op-cauliflower',
        name: 'OP Cauliflower (Research)',
        category: 'flower',
        image: '/assets/img_cauliflower_16x9_v3.png',
        description: 'Our premium Cauliflower varieties are selected for their adaptability to different seasons and superior curd quality. Whether for summer, rainy, or winter harvest, we have the perfect variety for your needs.',
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
        name: 'Radish',
        category: 'root',
        image: '/assets/product-f1-radish.png',
        description: 'Our premium Radish varieties are known for their high yield, early maturity, and adaptability to various seasons. From the heat-tolerant Aarya-33 to the versatile Moonlight, we offer radishes with excellent root quality and crisp texture.',

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
        description: 'Our Open-Pollinated (OP) Radish varieties are selected for their dual-purpose use, fast maturity, and adaptability. Whether for the spinach-like leaves of Palak-Patta or the heat tolerance of Pusa Chetki, these varieties offer excellent reliability for home and commercial growers.',

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
        description: 'Our F1 Hybrid Bhindi (Okra) varieties are expertly tailored for year-round cultivation, offering consistent yields and premium fruit quality. With high disease tolerance and early harvest, these varieties are perfect for both fresh market and commercial farming.',
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
        description: 'Enjoy the sweet, aromatic flavor of our F1 Hybrid Muskmelons. With distinct netting and salmon-orange flesh, these melons are a refreshing summer treat.',
        details: {
            temperature: '25-35°C',
            germination: '5-10 days',
            maturity: '70-80 days',
            sunlight: 'Full Sun',
            water: 'Regular, reduce near harvest'
        },
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
        description: 'Beat the heat with our sweet and juicy F1 Hybrid Watermelons. These vigorous vines produce large, oblong fruits with excellent shipping quality and disease resistance.',
        details: {
            temperature: '25-35°C',
            germination: '5-10 days',
            maturity: '80-90 days',
            sunlight: 'Full Sun',
            water: 'Regular, abundant moisture'
        },
        varieties: [
            { name: 'Sugar Baby', desc: 'Compact vines, round fruits, very sweet.' },
            { name: 'Crimson Sweet', desc: 'Large, striped oblong fruits, high brix.' }
        ]
    },
    {
        id: 'bitter-gourd',
        name: 'F1 Bitter Gourd',
        category: 'Gourds',
        image: '/assets/img_bitter_gourd_16x9.png',
        description: 'Our F1 Bitter Gourds are highly productive vines yielding attractive, dark green fruits with prominent ridges. Known for their distinct bitter flavor and health benefits, they are a staple in many cuisines.',

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
        description: 'Our F1 Ridge Gourds (Torai) produce long, dark green fruits with sharp ridges. They are tender, delicious, and high in dietary fiber, perfect for healthy home cooking.',

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
        description: 'Our F1 Sponge Gourds (Gilki) are prolific bearers of smooth, cylindrical fruits. They are tender, quick-cooking, and ideal for a variety of dishes.',

        varieties: [
            { name: 'Chandrika', desc: 'Long, smooth-skinned, light green fruits.' },
            { name: 'Luffa', desc: 'High yielding, bears fruits in clusters.' }
        ]
    },
    {
        id: 'ash-gourd',
        name: 'F1 Ash Gourd',
        category: 'Gourds',
        image: '/assets/img_ash_gourd.png',
        description: 'Our F1 Ash Gourds (Winter Melon) are vigorous vines producing large, oblong to round fruits with a chalky waxy coating. Excellent keeping quality and mild flavor.',
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
        name: 'F1 Cluster Bean (Guar)',
        category: 'pod',
        image: '/assets/img_cluster_bean_16x9.png',
        description: 'Our Cluster Beans (Guar) are vigorous, drought-tolerant plants producing bunches of flat, green pods. They are rich in dietary fiber and essential nutrients, perfect for curries and stir-fries.',
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
        name: 'Winter Squash (Zucchini)',
        category: 'Gourds',
        image: '/assets/img_zucchini.png',
        description: 'Our F1 Winter Squash (Zucchini) are fast-growing, high-yielding plants. The fruits are tender, cylindrical, and packed with nutrition. Perfect for grilling, roasting, and stir-fries.',
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
        description: 'Our F1 Beetroots are known for their deep red color, uniform shape, and sweet, earthy flavor. High in antioxidants and nutrients, they are perfect for salads, juices, and roasting.',

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
        description: 'Our F1 Brinjals (Eggplants) are vigorous plants that produce glossy, high-quality fruits. Excellent for curries, roasting, and grilling.',

        varieties: [
            { name: 'Purple Long', desc: 'Slender, dark purple fruits, very tender.' },
            { name: 'Green Round', desc: 'Round, light green fruits with white strips.' }
        ]
    },
    {
        id: 'capsicum',
        name: 'F1 Capsicum',
        category: 'fruit',
        image: '/assets/img_capsicum_16x9.png',
        description: 'Our F1 Capsicum (Bell Peppers) are crisp, juicy, and perfect for salads or cooking. These blocky, green peppers turn red or yellow upon maturity and are highly resistant to diseases.',

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
        description: 'Our F1 Cabbage varieties are known for their compact heads, uniform size, and excellent holding capacity. Crisp, sweet, and perfect for salads, slaws, and cooking.',
        details: {
            temperature: '15-20°C',
            germination: '7-10 days',
            maturity: '60-80 days',
            sunlight: 'Full Sun',
            water: 'Regular, consistent moisture'
        },
        varieties: [
            { name: 'Green Globe', desc: 'Round, dense green heads, good field holding.' },
            { name: 'Red Acre', desc: 'Compact round red heads, great for salads.' }
        ]
    },
    {
        id: 'corn',
        name: 'Sweet Corn',
        category: 'pod',
        image: '/assets/img_sweet_corn_16x9.png',
        description: 'Enjoy the taste of summer with our super sweet Corn varieties. These vigorous plants produce large, well-filled cobs with tender, juicy kernels.',

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
        description: 'Our F1 Cucumbers are crisp, cool, and refreshing. These vigorous vines produce uniform, high-quality fruits that are perfect for salads and snacking.',

        varieties: [
            { name: 'Green Long', desc: 'Long, slender, dark green fruits.' },
            { name: 'Slicing Star', desc: 'Thin-skinned, excellent for salads.' }
        ]
    },
    {
        id: 'chilli',
        name: 'F1 Chilli',
        category: 'fruit',
        image: '/assets/img_chilli_16x9.png',
        description: 'Our F1 Chilli varieties range from mild to extremely hot. These vigorous plants produce high yields of pungent peppers, perfect for adding spice to any dish.',

        varieties: [
            { name: 'Sannam S4', desc: 'Hot, pungent red chilli, high export value.' },
            { name: 'Kashmir', desc: 'Deep red color, mild heat, great for color.' }
        ]
    },
    {
        id: 'beans',
        name: 'French Beans',
        category: 'pod',
        image: '/assets/img_beans_16x9.png',
        description: 'Our French Beans are bush-type varieties that are easy to grow and highly productive. The pods are stringless, tender, and perfect for steaming or stir-frying.',

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
        description: 'Our aromatic Coriander varieties are slow-bolting and produce lush green leaves. Essential for garnishing and flavoring Indian dishes.',

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
