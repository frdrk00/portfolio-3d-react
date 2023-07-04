import {
  airbnb,
  bookingsystem,
  carrent,
  ecommerce,
  foodapp,
  linkedin,
  pixabay,
  realtimechat,
  reddit,
  spotify,
  trello,
  twitter,
  weather,
  travelGo,
  searchJob,
  twitterNative,
} from '../assets'

const projects = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/frdrk00/car-showcase-app-nextjs',
    source_code_link_demo: 'https://car-showcase-app-nextjs.vercel.app/',
  },
  {
    name: 'Booking system',
    description:
      'The web-based platform utilizes a booking system to enable users to reserve a date and time for dining at restaurants or ordering food delivery, providing a convenient and efficient solution for satisfying culinary cravings.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'aws',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: bookingsystem,
    source_code_link: 'https://github.com/frdrk00/car-showcase-app-nextjs',
    source_code_link_demo: 'https://booking-system-beta-one.vercel.app/',
  },
  {
    name: 'E-commerce',
    description:
      'The web-based e-commerce platform offers users the ability to search, purchase, and manage products from various sellers, providing a convenient and efficient solution for online shopping. With integrated payment options through Stripe and the ability to add items to favorites within the user interface, it enhances the overall shopping experience.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'styled-components',
        color: 'pink-text-gradient',
      },
    ],
    image: ecommerce,
    source_code_link: 'https://github.com/frdrk00/car-showcase-app-nextjs',
    source_code_link_demo: 'https://my-ecommerce-front-pi.vercel.app/',
  },
  {
    name: 'Food Delivery',
    description:
      'The web-based Food Delivery platform serves as a portal for ordering food, providing users with the ability to search, place orders, and manage their deliveries. With the convenience of payment options through Stripe and the inclusion of an Admin Dashboard, it offers an efficient and streamlined solution for satisfying culinary cravings.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: foodapp,
    source_code_link: 'https://github.com/frdrk00/car-showcase-app-nextjs',
    source_code_link_demo: 'https://food-fullstack-app-client.vercel.app/',
  },
  {
    name: 'Realtime Chat',
    description:
      'The web-based chat application, built with NextJS, enables users to engage in real-time conversations, offering a seamless and interactive communication experience. Users can search, join, and manage chat rooms, providing a convenient and efficient solution for instant messaging and real-time collaboration.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'upstash',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: realtimechat,
    source_code_link: 'https://github.com/frdrk00/car-showcase-app-nextjs',
    source_code_link_demo: 'https://realtime-chat-snowy.vercel.app/dashboard',
  },
  {
    name: 'Trello with CHAT-GPT',
    description:
      'Trello with ChatGPT is a web-based platform that empowers users to organize, collaborate, and manage tasks and projects seamlessly. This innovative solution combines the functionality of Trello, a versatile project management tool, with the powerful ChatGPT technology, allowing users to communicate and brainstorm ideas within the platform. It provides a convenient and efficient solution for individuals and teams to streamline their workflow and enhance productivity',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'firebase',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: trello,
    source_code_link: 'https://github.com/frdrk00/car-showcase-app-nextjs',
    source_code_link_demo: 'https://trello-app-nextjs.vercel.app/',
  },
  {
    name: 'Weather App with CHAT-GPT',
    description:
      'The Weather Application with ChatGPT is a web-based platform that enables users to access real-time weather information, forecasts, and personalized suggestions. This innovative solution incorporates the power of ChatGPT technology, allowing users to engage in natural language conversations and receive customized weather updates within the platform. It provides a convenient and efficient solution for individuals to stay informed about current weather conditions and plan their activities accordingly.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'firebase',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: weather,
    source_code_link: 'https://github.com/frdrk00/car-showcase-app-nextjs',
    source_code_link_demo: 'https://weather-app-puce-tau.vercel.app/',
  },
  {
    name: 'Linkedin clone',
    description:
      'LinkedIn is a web-based platform that enables users to create professional profiles, connect with other professionals, and manage their professional network. It provides a convenient and efficient solution for networking, job searching, and professional development.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'firebase',
        color: 'green-text-gradient',
      },
      {
        name: 'materialui',
        color: 'pink-text-gradient',
      },
    ],
    image: linkedin,
    source_code_link: 'https://github.com/frdrk00/car-showcase-app-nextjs',
    source_code_link_demo: 'https://linkedin-clone-444d4.web.app/',
  },
  {
    name: 'Pixabay clone',
    description:
      'Pixabay is a web-based platform that allows users to search, discover, and manage a diverse collection of high-quality images and videos. It offers a convenient and efficient solution for individuals and businesses to find visual content for their creative projects, presentations, and digital media needs..',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'firebase',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: pixabay,
    source_code_link: 'https://github.com/frdrk00/car-showcase-app-nextjs',
    source_code_link_demo: 'https://pixabay-client-react.vercel.app/',
  },
  {
    name: 'AirBnb clone',
    description:
      'Airbnb is a web-based platform that enables users to search, book, and manage accommodations from a wide range of hosts, offering a convenient and efficient solution for travelers seeking accommodations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: airbnb,
    source_code_link: 'https://github.com/frdrk00/car-showcase-app-nextjs',
    source_code_link_demo: 'https://airbnb-clone-frdrk00.vercel.app/',
  },
  {
    name: 'Reddit clone',
    description:
      'Reddit is a web-based platform that enables users to explore, engage, and manage a wide range of communities and discussions. It provides a convenient and efficient solution for individuals to discover and contribute to diverse topics of interest, fostering an interactive and engaging online community.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'upstash',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: reddit,
    source_code_link: 'https://github.com/frdrk00/car-showcase-app-nextjs',
    source_code_link_demo: 'https://breddit-frdrk.vercel.app/',
  },
  {
    name: 'Spotify clone',
    description:
      'Spotify is a web-based platform that allows users to explore, discover, and manage a vast library of music and podcasts. It provides a convenient and efficient solution for individuals to search for and listen to their favorite songs and shows, offering a seamless and personalized music streaming experience.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: spotify,
    source_code_link: 'https://github.com/frdrk00/car-showcase-app-nextjs',
    source_code_link_demo: 'https://spotify-app-roan.vercel.app/',
  },
  {
    name: 'Twitter clone - WEB',
    description:
      'Twitter is a web-based platform that allows users to search, discover, and manage a constant stream of short messages and updates from various individuals and organizations. It provides a convenient and efficient solution for individuals to stay informed, engage in conversations, and share their thoughts and opinions in real-time, fostering a dynamic and interactive online community.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: twitter,
    source_code_link: 'https://github.com/frdrk00/car-showcase-app-nextjs',
    source_code_link_demo: 'https://twitter-clone-frdrk00.vercel.app/',
  },
  {
    name: 'Twitter clone - APP',
    description:
      'The Twitter mobile application is platform that integrates both frontend and backend functionalities, allowing users to access, engage, and manage their social media activities seamlessly. This innovative solution provides a convenient and efficient solution for individuals to search, discover, and share short messages and updates in real-time, offering a dynamic and interactive online experience.',
    tags: [
      {
        name: 'react-native',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'react-native style',
        color: 'pink-text-gradient',
      },
    ],
    image: twitterNative,
    source_code_link: 'https://github.com/frdrk00/car-showcase-app-nextjs',
    source_code_link_demo: '',
  },
  {
    name: 'Search Job App - APP',
    description:
      'The mobile application is a platform that allows users to find job opportunities in the field of web development by leveraging data from the Rappid API, providing real-time listings of available web development positions. It offers a convenient and efficient solution for individuals seeking employment in the web development industry, streamlining the job search process.',
    tags: [
      {
        name: 'react-native',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'nativewind',
        color: 'pink-text-gradient',
      },
    ],
    image: searchJob,
    source_code_link: 'https://github.com/frdrk00/car-showcase-app-nextjs',
    source_code_link_demo: 'https://expo.dev/@frdrk00/search-job-app',
  },
  {
    name: 'Travel Go App - APP',
    description:
      'The Travel Go App is a mobile application that leverages real-time data to serve as a useful tool for travelers. It enables users to search for, book, and manage various travel arrangements such as flights, accommodations, and attractions. The app provides a convenient and efficient solution for travelers to plan their trips efficiently and access relevant information while on the go, enhancing their overall travel experience.',
    tags: [
      {
        name: 'react-native',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'nativewind',
        color: 'pink-text-gradient',
      },
    ],
    image: travelGo,
    source_code_link: 'https://github.com/frdrk00/car-showcase-app-nextjs',
    source_code_link_demo: 'https://expo.dev/@frdrk00/go-travel-app',
  },
  /*   {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/',
    source_code_link_demo: '',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/',
  }, */
]

export { projects }
