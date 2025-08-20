import type { SubjectContent } from '../types/chat';

export const educationalContent: Record<string, SubjectContent> = {
  math: {
    welcome: "I can help you with algebra, geometry, calculus, statistics, and more!",
    defaultQuestions: [
      "What is the quadratic formula?",
      "How do I find the area of a triangle?",
      "Explain derivatives in calculus"
    ],
    topics: [
      {
        id: 'quadratic-formula',
        question: 'What is the quadratic formula?',
        answer: 'The quadratic formula is x = (-b ± √(b² - 4ac)) / 2a. It\'s used to find the solutions (roots) of quadratic equations in the form ax² + bx + c = 0. The discriminant (b² - 4ac) tells us how many real solutions exist: if positive, there are 2 real solutions; if zero, there\'s 1 real solution; if negative, there are no real solutions.',
        keywords: ['quadratic', 'formula', 'equation', 'roots', 'solutions'],
        difficulty: 'intermediate'
      },
      {
        id: 'triangle-area',
        question: 'How do I find the area of a triangle?',
        answer: 'There are several ways to find the area of a triangle:\n\n1. Basic formula: Area = (1/2) × base × height\n2. Heron\'s formula: Area = √[s(s-a)(s-b)(s-c)] where s is the semi-perimeter\n3. Using coordinates: Area = (1/2)|x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂)|\n\nThe most common is the first method when you know the base and height.',
        keywords: ['triangle', 'area', 'base', 'height', 'heron', 'formula'],
        difficulty: 'beginner'
      },
      {
        id: 'derivatives',
        question: 'What are derivatives in calculus?',
        answer: 'A derivative measures how a function changes as its input changes. It represents the rate of change or slope of a function at any point.\n\nKey concepts:\n- f\'(x) or df/dx represents the derivative\n- Geometrically, it\'s the slope of the tangent line\n- Power rule: d/dx(xⁿ) = nxⁿ⁻¹\n- Used in optimization, physics, and many applications\n\nExample: If f(x) = x², then f\'(x) = 2x',
        keywords: ['derivative', 'calculus', 'rate', 'change', 'slope', 'tangent'],
        difficulty: 'advanced'
      },
      {
        id: 'pythagorean-theorem',
        question: 'What is the Pythagorean theorem?',
        answer: 'The Pythagorean theorem states that in a right triangle, the square of the hypotenuse (longest side) equals the sum of squares of the other two sides: a² + b² = c²\n\nThis fundamental theorem:\n- Only applies to right triangles\n- Helps find unknown side lengths\n- Has countless real-world applications\n- Was known to ancient civilizations',
        keywords: ['pythagorean', 'theorem', 'right', 'triangle', 'hypotenuse'],
        difficulty: 'beginner'
      }
    ]
  },
  science: {
    welcome: "Let's explore physics, chemistry, biology, and earth science together!",
    defaultQuestions: [
      "What are Newton's laws of motion?",
      "How does photosynthesis work?",
      "What is the periodic table?"
    ],
    topics: [
      {
        id: 'newtons-laws',
        question: 'What are Newton\'s laws of motion?',
        answer: 'Newton\'s three laws of motion are fundamental principles of physics:\n\n1. First Law (Inertia): An object at rest stays at rest, and an object in motion stays in motion, unless acted upon by an external force.\n\n2. Second Law: Force = mass × acceleration (F = ma). The acceleration of an object is directly proportional to the force applied.\n\n3. Third Law: For every action, there is an equal and opposite reaction.\n\nThese laws explain how objects move and interact.',
        keywords: ['newton', 'laws', 'motion', 'force', 'inertia', 'acceleration'],
        difficulty: 'intermediate'
      },
      {
        id: 'photosynthesis',
        question: 'How does photosynthesis work?',
        answer: 'Photosynthesis is how plants convert sunlight into energy:\n\n6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂\n\nProcess:\n1. Light reactions occur in chloroplasts\n2. Chlorophyll absorbs light energy\n3. Water molecules split, releasing oxygen\n4. ATP and NADPH are produced\n5. Calvin cycle uses CO₂ to make glucose\n\nThis process is essential for life on Earth!',
        keywords: ['photosynthesis', 'plants', 'chlorophyll', 'glucose', 'oxygen', 'sunlight'],
        difficulty: 'intermediate'
      },
      {
        id: 'periodic-table',
        question: 'What is the periodic table?',
        answer: 'The periodic table organizes all known chemical elements by their properties:\n\n- Elements are arranged by atomic number (number of protons)\n- Rows are called periods\n- Columns are called groups or families\n- Elements in the same group have similar properties\n- Shows patterns in atomic structure and behavior\n\nIt\'s one of the most important tools in chemistry, helping predict element properties and chemical reactions.',
        keywords: ['periodic', 'table', 'elements', 'atomic', 'number', 'groups'],
        difficulty: 'beginner'
      }
    ]
  },
  history: {
    welcome: "I can discuss ancient civilizations, world wars, important figures, and historical events!",
    defaultQuestions: [
      "Tell me about World War II",
      "Who was Alexander the Great?",
      "What caused the fall of Rome?"
    ],
    topics: [
      {
        id: 'world-war-2',
        question: 'Tell me about World War II',
        answer: 'World War II (1939-1945) was the largest and most devastating conflict in human history:\n\n• Involved over 70 countries and 100 million military personnel\n• Main theaters: Europe, Pacific, North Africa, Asia\n• Key events: Pearl Harbor, D-Day, Holocaust, atomic bombs\n• Ended with Allied victory over Axis powers\n• Led to formation of United Nations\n• Reshaped global politics and borders\n\nThe war had profound impacts on technology, society, and international relations.',
        keywords: ['world war', 'wwii', 'hitler', 'allies', 'axis', 'holocaust'],
        difficulty: 'intermediate'
      },
      {
        id: 'alexander-great',
        question: 'Who was Alexander the Great?',
        answer: 'Alexander the Great (356-323 BCE) was one of history\'s most successful military commanders:\n\n• King of Macedonia at age 20\n• Created one of the largest empires in ancient history\n• Never lost a battle in his military career\n• Spread Greek culture across three continents\n• Founded over 20 cities, many named Alexandria\n• Died at 32, possibly from disease or poisoning\n\nHis conquests spread Hellenistic culture and connected East and West, influencing art, science, and philosophy for centuries.',
        keywords: ['alexander', 'great', 'macedonia', 'empire', 'conquest'],
        difficulty: 'intermediate'
      },
      {
        id: 'fall-of-rome',
        question: 'What caused the fall of Rome?',
        answer: 'The fall of the Roman Empire was caused by multiple factors:\n\n• Political instability and civil wars\n• Economic troubles and inflation\n• Barbarian invasions and pressure\n• Division into Western and Eastern empires\n• Loss of civic virtue and military discipline\n• Rise of Christianity changing traditional values\n• Overextension of territory\n\nThe Western Empire fell in 476 CE, while the Eastern Empire (Byzantine) continued until 1453.',
        keywords: ['rome', 'fall', 'empire', 'barbarian', 'byzantine'],
        difficulty: 'advanced'
      }
    ]
  },
  literature: {
    welcome: "Let's explore great authors, literary devices, genres, and classic works of literature!",
    defaultQuestions: [
      "What is symbolism in literature?",
      "Tell me about Shakespeare",
      "What makes a good novel?"
    ],
    topics: [
      {
        id: 'symbolism',
        question: 'What is symbolism in literature?',
        answer: 'Symbolism is a literary device where objects, colors, or actions represent deeper meanings:\n\n• Symbols carry meaning beyond their literal sense\n• Can represent themes, emotions, or abstract concepts\n• Examples: doves for peace, roses for love, storms for conflict\n• Creates layers of meaning in texts\n• Helps convey complex ideas simply\n\nGreat authors use symbolism to add depth and allow multiple interpretations of their work.',
        keywords: ['symbolism', 'literary', 'device', 'meaning', 'metaphor'],
        difficulty: 'intermediate'
      },
      {
        id: 'shakespeare',
        question: 'Tell me about Shakespeare',
        answer: 'William Shakespeare (1564-1616) is widely considered the greatest writer in English:\n\n• Wrote 37 plays and 154 sonnets\n• Famous works: Hamlet, Romeo & Juliet, Macbeth\n• Invented over 1,700 words still used today\n• Mastered comedy, tragedy, and history plays\n• Explored universal themes of love, power, betrayal\n• Influenced literature and theater for 400+ years\n\nHis works continue to be performed and studied worldwide.',
        keywords: ['shakespeare', 'hamlet', 'romeo', 'juliet', 'playwright'],
        difficulty: 'beginner'
      },
      {
        id: 'good-novel',
        question: 'What makes a good novel?',
        answer: 'A good novel typically combines several key elements:\n\n• Compelling characters with depth and growth\n• Engaging plot with conflict and resolution\n• Rich, immersive setting and atmosphere\n• Clear, beautiful, or distinctive writing style\n• Meaningful themes that resonate with readers\n• Emotional connection with the audience\n• Original or fresh perspective on human experience\n\nThe best novels balance these elements to create memorable, impactful stories.',
        keywords: ['novel', 'writing', 'plot', 'character', 'theme'],
        difficulty: 'intermediate'
      }
    ]
  }
};