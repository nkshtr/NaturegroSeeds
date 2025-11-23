export const products = [
    {
        id: 'tomato',
        name: 'Ruby Red Tomato',
        category: 'fruit',
        image: '/src/assets/product-tomato.png',
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
        image: '/src/assets/product-carrot.png',
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
        image: '/src/assets/product-spinach.png',
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
        image: '/src/assets/product-onion.png',
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
        image: '/src/assets/product-spinach.png', // Placeholder
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
        image: '/src/assets/product-spinach.png', // Placeholder
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
        image: '/src/assets/product-spinach.png', // Placeholder
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
    }
];
