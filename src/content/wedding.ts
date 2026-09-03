export const wedding = {
  bride: 'Apurva',
  groom: 'Ayush',
  year: 2026,
  dateRange: 'December 8–9, 2026',
  location: 'Ranchi, India',

  countdown: {
    label: 'Until Pheras',
    target: '2026-12-09T19:30:00+05:30',
  },

  venue: {
    name: 'Swarnabhumi Banquets',
    address: 'A/118, Purulia Road, Dangartoli, Nayatoli',
    city: 'Ranchi, Jharkhand 834001',
    landmark: 'Opposite Tanveer Petrol Pump, Dangra Toli Chowk',
    mapsQuery: 'Swarnabhumi Banquets Ranchi',
    mapsEmbedUrl:
      'https://maps.google.com/maps?q=Swarna+Bhumi+Ranchi&output=embed',
    travel: {
      airport: 'Birsa Munda Airport (IXR)',
      railway: 'Ranchi Junction',
      accommodation:
        'Stay is pre-booked for Dec 8, 9. Reach out if you have any concerns.',
    },
  },

  rsvp: {
    deadline: 'October 31, 2026',
    googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSddb1wYER6eAx9EuxqMxvhTfWZzGiWk9pyq8_xNcCKvSoFv0g/viewform?',
    contactName: 'Ayush',
    contactPhone: '+6581899759 or +919470135245',
  },

  dressCode: {
    intro:
      'Traditional Indian attire is encouraged for all celebrations. When in doubt, think festive, colourful, and comfortable! The temperature will be on the cooler side with highs of 25C, and lows of 14C, so plan accordingly.',
    events: [
      {
        name: 'Sangeet — Dec 8',
        guidance: 'Glam Indian, Indo-Western',
        note: 'Sequins, vibrant colours, and celebration-ready outfits to rock the stage when you dance!',
        image: 'dress-code/sangeet.jpg',
      },
      {
        name: 'Haldi — Dec 9',
        guidance: "Comfortable Indian-style clothes in Shades of Yellow",
        //colors: ['#F5C842', '#E8A317', '#FFF8E7', '#FF9800'],
        note: 'Avoid shades of lavendar, purple, blue',
        image: 'dress-code/haldi.jpg',
      },
      {
        name: 'Wedding & Reception — Dec 9',
        guidance: 'Traditional Indian formal — lehenga, saree, sherwani, or kurta or Western Suits for men',
        colors: ['#7B1E1E', '#C9A84C', '#1B4332', '#4A1942'],
        note: 'Please avoid wearing all-white to the ceremony.',
        image: 'dress-code/pheras.jpg',
      },
    ],
  },

  events: [
    {
      day: 1,
      date: 'December 8, 2026',
      title: 'Day 1 — Sangeet',
      items: [
        {
          time: 'Morning – Afternoon',
          name: 'Guest Arrivals',
          description: 'Welcome to Ranchi! Check in and settle in at the venue.',
        },
        {
          time: '7:30 PM onwards',
          name: 'Sangeet & Dinner',
          description:
            'An evening of music, dance, and celebration. Performances (by you too!), more dancing, and fooooodddd.',
        },
      ],
    },
    {
      day: 2,
      date: 'December 9, 2026',
      title: 'Day 2 — Wedding',
      items: [
        {
          time: '9:00 – 11:00 AM',
          name: 'Breakfast',
          description: 'Start the day with a warm breakfast at the venue.',
        },
        {
          time: '11:00 AM – 12:00 PM',
          name: 'Haldi',
          description:
            'A joyful pre-wedding ritual where turmeric paste is applied for blessings. Wear yellow-friendly attire!',
        },
        {
          time: '1:00 – 2:30 PM',
          name: 'Lunch',
          description: 'Fuel up before the evening celebrations begin.',
        },
        {
          time: '4:30 PM',
          name: 'Baraat',
          description:
            "The groom's festive procession with music and dancing. Join the celebration!",
        },
        {
          time: '6:00 PM',
          name: 'Varmala',
          description: 'Garland exchange ceremony — the bride and groom meet on stage.',
        },
        {
          time: '7:30 PM',
          name: 'Pheras',
          description:
            'The sacred wedding ritual — seven rounds around the holy fire, taking vows with each step.',
          highlight: true,
        },
        {
          time: '7:00 PM onwards',
          name: 'Dinner & Reception',
          description:
            'Indulge in a large spread of (vegetarian) buffet.',
        },
      ],
    },
  ],

  faqs: [
    {
      category: 'Attire',
      question: 'What should I wear?',
      answer:
        'Traditional Indian attire is encouraged — lehenga, saree, sherwani, or kurta for the Sangeet and wedding. Western formals are also welcome if you prefer. Feel free to reach out if you need help.',
    },
    {
      category: 'Attire',
      question: 'Are there colours I should avoid?',
      answer:
        'Please avoid wearing shades of blue, purple, lavender for the Haldi function on 9th Morning.',
    },
    {
      category: 'Attire',
      question: 'How many outfits do I plan for?',
      answer:
        'One festive outfit for Sangeet, One formal one for the Wedding and re-use something in Yellow for the Haldi. Besides, just have some casual clothes for between events'},
    {
      category: 'Ceremony & Events',
      question: 'What is a Sangeet?',
      answer:
        'An evening of music, dance, and celebration where friends and families perform and party together. Feel free to cheer, dance, and enjoy the performances!',
    },
    {
      category: 'Ceremony & Events',
      question: 'What is Haldi?',
      answer:
        "A joyful pre-wedding ritual where turmeric paste is applied to the bride and groom for blessings!",
    },
    {
      category: 'Ceremony & Events',
      question: 'What happens during the Baraat?',
      answer:
        'The groom arrives in a festive procession with music and dancing — one of the most energetic moments of an Indian wedding. Guests are encouraged to join the dancing!',
    },
    {
      category: 'Ceremony & Events',
      question: 'What are Pheras?',
      answer:
        'The sacred wedding ritual where Apurva and Ayush take rounds around a holy fire, taking vows with each round. Please remain seated and respect the sanctity of this moment.',
    },
    {
      category: 'Practical Info',
      question: 'When should I plan to arrive at, depart from Ranchi?',
      answer:
        'Aim to arrive by December 8 afternoon and plan for departure on December 10th. Hotels will be pre-booked for the 8th and 9th December.',
    },
    {
      category: 'Practical Info',
      question: 'Will the food be vegetarian?',
      answer:
        'Yes — all meals will be vegetarian with a large variety of dishes.',
    },
    {
      category: 'Practical Info',
      question: 'Are children welcome?',
      answer: 'Absolutely! Families are welcome at all events.',
    },
    {
      category: 'Practical Info',
      question: 'Can I take photos during the ceremony?',
      answer:
        'Casual photos are welcome during Sangeet and Baraat. During Pheras, we kindly ask guests to put phones away and be fully present with us — our photographer will capture the moment.',
    },
    {
      category: 'Practical Info',
      question: 'What should I bring as a gift?',
      answer:
        'Your presence is the greatest gift. If you wish to give something, monetary blessings (shagun) in an envelope are traditional and appreciated.',
    },
    {
      category: 'Practical Info',
      question: 'Who do I contact with questions?',
      answer:
        'Reach out to Ayush at +6581899759 or +919470135245 for any questions about travel, accommodation, or the schedule.',
    },
  ],

  gallery: [
    { id: 1, alt: 'Apurva & Ayush', image: 'gallery/Apruva & Ayush.jpg' },
    { id: 2, alt: 'Together', image: 'gallery/Together.jpg' },
    { id: 3, alt: 'Celebrating', image: 'gallery/Celebrating.JPG' },
    { id: 4, alt: 'Our journey', image: 'gallery/Our journey.jpeg' },
  ],

  nav: [
    { label: 'Home', href: '#home' },
    { label: 'Events', href: '#events' },
    { label: 'Venue', href: '#venue' },
    { label: 'Attire', href: '#attire' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'FAQ', href: '#faq' },
    { label: 'RSVP', href: '#rsvp' },
  ],
} as const;

export type WeddingContent = typeof wedding;
