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
      'https://maps.google.com/maps?q=Swarnabhumi+Banquets+Ranchi&output=embed',
    travel: {
      airport: 'Birsa Munda Airport (IXR) — approx. 15 km',
      railway: 'Ranchi Junction / Namkom — approx. 2–5 km',
      parking: 'Ample on-site parking available at the venue',
      accommodation:
        'The venue offers furnished rooms on-site. Contact the family for booking details.',
    },
  },

  rsvp: {
    deadline: 'November 15, 2026',
    googleFormUrl: '',
    contactName: 'Ayush',
    contactPhone: '+91 XXXXX XXXXX',
  },

  dressCode: {
    intro:
      'Traditional Indian attire is encouraged for all celebrations. When in doubt, think festive, colourful, and comfortable!',
    events: [
      {
        name: 'Sangeet — December 8',
        guidance: 'Semi-formal to formal Indian festive wear',
        colors: ['#7B1E1E', '#C9A84C', '#2E4A62', '#6B3A6B'],
        note: 'Sequins, vibrant colours, and celebration-ready outfits welcome!',
      },
      {
        name: 'Haldi — December 9',
        guidance: "Comfortable clothes you don't mind getting a little yellow on",
        colors: ['#F5C842', '#E8A317', '#FFF8E7', '#FF9800'],
        note: 'Yellow and gold tones are especially festive for this ritual.',
      },
      {
        name: 'Wedding & Reception — December 9',
        guidance: 'Traditional Indian formal — lehenga, saree, sherwani, or kurta',
        colors: ['#7B1E1E', '#C9A84C', '#1B4332', '#4A1942'],
        note: 'Please avoid wearing all-white or all-black to the ceremony.',
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
            'An evening of music, dance, and celebration with both families. Performances, dancing, and a festive dinner.',
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
          description: 'Start the day with a hearty breakfast at the venue.',
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
          description: 'Midday meal before the evening celebrations begin.',
        },
        {
          time: '4:30 PM',
          name: 'Baraat',
          description:
            "The groom's festive procession arrives with music and dancing. Join the celebration!",
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
            'Celebrate with a grand dinner and reception following the ceremony.',
        },
      ],
    },
  ],

  faqs: [
    {
      category: 'Attire',
      question: 'What should I wear?',
      answer:
        'Traditional Indian attire is encouraged — lehenga, saree, sherwani, or kurta for the Sangeet and wedding. For Haldi, wear comfortable clothes in yellow or gold tones. Western formal is also welcome if you prefer.',
    },
    {
      category: 'Attire',
      question: 'Are there colours I should avoid?',
      answer:
        'Please avoid wearing all-white or all-black to the wedding ceremony. For Haldi, yellow and gold tones are especially festive and welcome.',
    },
    {
      category: 'Attire',
      question: 'Do I need separate outfits for each day?',
      answer:
        'One outfit per day works perfectly. Many guests change between the daytime Haldi and the evening ceremony on December 9.',
    },
    {
      category: 'Ceremony & Events',
      question: 'What is a Sangeet?',
      answer:
        'An evening of music, dance, and celebration where both families perform and party together. Feel free to cheer, dance, and enjoy the performances!',
    },
    {
      category: 'Ceremony & Events',
      question: 'What is Haldi?',
      answer:
        "A joyful pre-wedding ritual where turmeric paste is applied to the bride and groom for blessings. Wear something you don't mind getting a little yellow on!",
    },
    {
      category: 'Ceremony & Events',
      question: 'What happens during the Baraat?',
      answer:
        'The groom arrives in a festive procession with music and dancing — one of the most energetic moments of an Indian wedding. Guests are welcome to join the dancing!',
    },
    {
      category: 'Ceremony & Events',
      question: 'What are Pheras?',
      answer:
        'The sacred wedding ritual where Apurva and Ayush walk around a holy fire seven times, taking vows with each round. Please remain seated and respect the sanctity of this moment.',
    },
    {
      category: 'Practical Info',
      question: 'When should I arrive on December 9?',
      answer:
        'Guest arrivals begin on December 8. For the wedding day, we recommend arriving by 4:00 PM to settle in before the Baraat at 4:30 PM.',
    },
    {
      category: 'Practical Info',
      question: 'Will the food be vegetarian?',
      answer:
        'Yes — all meals will be vegetarian with a variety of North Indian dishes. Please note any dietary allergies in your RSVP.',
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
        'Reach out to Ayush at +91 XXXXX XXXXX for any questions about travel, accommodation, or the schedule.',
    },
  ],

  gallery: [
    { id: 1, alt: 'Apurva & Ayush' },
    { id: 2, alt: 'Together' },
    { id: 3, alt: 'Celebrating' },
    { id: 4, alt: 'Our journey' },
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
