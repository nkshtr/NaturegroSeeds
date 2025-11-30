export const products = [
    {
        id: 'tomato',
        name: 'Ruby Red Tomato',
        category: 'fruit',
        image: '/assets/product-tomato.png',
        description: 'Our Ruby Red Tomatoes are a classic favorite for any garden. These indeterminate vines produce an abundance of medium-sized, deep red fruits that are bursting with flavor. Perfect for slicing, salads, and canning.',
        details: {
            temperature: '20-90°C',
            germination: '6-10 days',
            maturity: '60-80 days',
            sunlight: 'Full Sun',
            water: 'Regular, deep watering'
        },
        varieties: [
            { name: 'Cherry Sweet', desc: 'Small, bite-sized fruits with high sugar content.' },
            { name: 'Roma Paste', desc: 'Meaty flesh with few seeds, ideal for sauces.' },
            { name: 'Beefsteak Giant', desc: 'Large, ribbed fruits perfect for sandwiches.' }
        ]
    },
    {
        id: 'carrot',
        name: 'Crunchy Orange Carrot',
        category: 'root',
        image: '/assets/product-carrot.png',
        description: 'Grow crisp, sweet carrots right in your backyard. These roots are rich in beta-carotene and have a satisfying crunch. They store well and are excellent for roasting, juicing, or eating raw.',
        details: {
            temperature: '15-90°C',
            germination: '14-21 days',
            maturity: '70-80 days',
            sunlight: 'Full Sun',
            water: 'Moderate, consistent moisture'
        },
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
        details: {
            temperature: '10-22°C',
            germination: '7-14 days',
            maturity: '40-50 days',
            sunlight: 'Partial Shade to Full Sun',
            water: 'Frequent, keep soil moist'
        },
        varieties: [
            { name: 'Bloomsdale', desc: 'Savoy type with crinkled leaves, cold hardy.' },
            { name: 'Baby Leaf', desc: 'Smooth leaves, fast growing for salads.' },
            { name: 'New Zealand', desc: 'Heat tolerant alternative for summer.' }
        ]
    },
    {
        id: 'onion',
        name: 'Red Onion',
        category: 'bulb',
        image: '/assets/product-onion.png',
        description: 'These Red Onions are known for their vibrant color and mild to pungent flavor. They are excellent for salads, grilling, and pickling. Long storage life makes them a staple for any pantry.',
        details: {
            temperature: '12-24°C',
            germination: '10-14 days',
            maturity: '100-120 days',
            sunlight: 'Full Sun',
            water: 'Moderate'
        },
        varieties: [
            { name: 'Red Baron', desc: 'Deep red skin, strong flavor.' },
            { name: 'Sweet Spanish', desc: 'Large bulbs, milder taste.' }
        ]
    },
    {
        id: 'celery',
        name: 'Crisp Celery',
        category: 'stem',
        image: '/assets/product-spinach.png', // Placeholder
        description: 'Grow your own crunchy celery stalks. This variety is selected for its crisp texture and lack of stringiness. Essential for soups, stews, and healthy snacking.',
        details: {
            temperature: '15-21°C',
            germination: '14-21 days',
            maturity: '85-120 days',
            sunlight: 'Full Sun to Partial Shade',
            water: 'Frequent, high water requirement'
        },
        varieties: [
            { name: 'Tall Utah', desc: 'Standard tall green celery, crisp and stringless.' },
            { name: 'Golden Self-Blanching', desc: 'Yellow-green stalks, tender flavor.' }
        ]
    },
    {
        id: 'broccoli',
        name: 'Green Broccoli',
        category: 'flower',
        image: '/assets/product-spinach.png', // Placeholder
        description: 'Harvest nutrient-packed broccoli heads from your garden. This vigorous variety produces large central heads and plenty of side shoots after the main harvest.',
        details: {
            temperature: '15-20°C',
            germination: '5-10 days',
            maturity: '60-90 days',
            sunlight: 'Full Sun',
            water: 'Regular'
        },
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
        details: {
            temperature: '13-18°C',
            germination: '7-14 days',
            maturity: '60-70 days',
            sunlight: 'Full Sun to Partial Shade',
            water: 'Regular'
        },
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
        image: '/assets/product-cauliflower.png',
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
        id: 'radish',
        name: 'Radish',
        category: 'root',
        image: '/assets/product-f1-radish.png',
        description: 'Our premium Radish varieties are known for their high yield, early maturity, and adaptability to various seasons. From the heat-tolerant Aarya-33 to the versatile Moonlight, we offer radishes with excellent root quality and crisp texture.',
        details: {
            temperature: '10-30°C',
            germination: '3-5 days',
            maturity: '30-50 days',
            sunlight: 'Full Sun',
            water: 'Regular'
        },
        varieties: [
            {
                name: 'Radish Aarya-33 F1',
                desc: '<strong>🔥 Heat Tolerant & Fast</strong><br>• <strong>Maturity:</strong> 30-35 days<br>• <strong>Yield:</strong> High & Uniform<br>• <strong>Root:</strong> 28-30cm, Cylindrical, White<br>• <strong>Season:</strong> Summer & Rainy (Year-round exc. Dec-Feb)'
            },
            {
                name: 'Radish Alpha F1',
                desc: '<strong>💪 High Vigor & Adaptable</strong><br>• <strong>Maturity:</strong> 35-40 days<br>• <strong>Root:</strong> 18-22cm, Milky White<br>• <strong>Tolerance:</strong> High Heat & Humidity<br>• <strong>Season:</strong> Year-round (exc. Dec-Feb)'
            },
            {
                name: 'Radish RDX-35M40 (ALPHA) F1',
                desc: '<strong>🌟 Uniform & Clean</strong><br>• <strong>Maturity:</strong> 35-40 days<br>• <strong>Root:</strong> 18-22cm, Milky White<br>• <strong>Quality:</strong> No neck discoloration, little side roots<br>• <strong>Season:</strong> Year-round (exc. Dec-Feb)'
            },
            {
                name: 'Radish MOONLIGHT F1 Hybrid',
                desc: '<strong>🌙 Dual-Season & Flexible</strong><br>• <strong>Maturity:</strong> 40-50 days<br>• <strong>Harvest:</strong> Flexible/Staggered<br>• <strong>Root:</strong> 25-30cm, Ivory White<br>• <strong>Season:</strong> Kharif & Rabi'
            }
        ]
    },
    {
        id: 'op-radish',
        name: 'OP Radish',
        category: 'root',
        image: '/assets/product-op-radish.png',
        description: 'Our Open-Pollinated (OP) Radish varieties are selected for their dual-purpose use, fast maturity, and adaptability. Whether you need the spinach-like leaves of Palak-Patta or the heat tolerance of Pusa Chetki, these varieties offer excellent reliability for home and commercial growers.',
        details: {
            temperature: '10-35°C',
            germination: '3-5 days',
            maturity: '30-55 days',
            sunlight: 'Full Sun',
            water: 'Regular, consistent moisture'
        },
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
                name: 'Mino Early (Daikon Type)',
                desc: '<strong>📏 Long & Reliable</strong><br>• <strong>Maturity:</strong> 40-50 days<br>• <strong>Root:</strong> 12-15 inches, Pure White<br>• <strong>Feature:</strong> Slow to bolt, good keeping quality<br>• <strong>Season:</strong> Autumn, Winter, Early Spring'
            }
        ]
    },
    {
        id: 'bhindi',
        name: 'Bhindi (Okra)',
        category: 'pod',
        image: '/assets/product-bhindi.png',
        description: 'Our F1 Hybrid Bhindi (Okra) varieties are expertly tailored for year-round cultivation, offering consistent yields and premium fruit quality. With high disease tolerance and early harvest, these varieties are perfect for both fresh market and commercial farming.',
        details: {
            temperature: '20-35°C',
            germination: '5-8 days',
            maturity: '42-50 days',
            sunlight: 'Full Sun',
            water: 'Regular, consistent moisture'
        },
        varieties: [
            {
                name: 'AADRIKA Bhindi (F1 Hybrid)',
                desc: '<strong>🌟 High Performance & Early</strong><br>• <strong>Maturity:</strong> 45-50 days<br>• <strong>Yield:</strong> High & Consistent<br>• <strong>Pod:</strong> 12-14cm, Dark Green, Tender<br>• <strong>Tolerance:</strong> YVMV & ELCV'
            },
            {
                name: 'Bhindi KRISHNA (F1 Hybrid)',
                desc: '<strong>🏆 Commercial Superior</strong><br>• <strong>Maturity:</strong> 42-45 days<br>• <strong>Yield:</strong> High Commercial Returns<br>• <strong>Pod:</strong> 12-14cm, Shiny Dark Green<br>• <strong>Tolerance:</strong> YVMV & OLCV'
            }
        ]
    }
];
