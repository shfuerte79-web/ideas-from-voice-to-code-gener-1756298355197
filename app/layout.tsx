import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Voice-to-Code Generator',
  description: '[
  {
    "title": "Voice-Powered Game Development",
    "one_liner": "Create games just by talking to your computer.",
    "why_now": "The surge in no-code and low-code platforms along with the rise of AI assistants.",
    "novel_mechanism": "Utilizes natural language processing to convert voice commands into game logic and script.",
    "ai_stack": [
      "GPT",
      "Speech",
      "Embeddings"
    ],
    "edge_use_cases": [
      "Indie game developers",
      "Educational game design",
      "Interactive storytelling"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Voice command recognition",
        "Basic game mechanics",
        "Introductory tutorials"
      ],
      "tools": [
        "React",
        "Unity",
        "Firebase"
      ],
      "data_bootstrap": [
        "public game development resources",
        "synthetic data for game physics"
      ],
      "risk": [
        "Complexity in voice recognition for diverse commands",
        "Market saturation in gaming tools"
      ],
      "mitigation": [
        "Use a limited vocabulary for initial release",
        "Focus on niche game genres"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Create a game in 60 seconds",
        "Live demo with audience participation"
      ],
      "channels": [
        "Twitch",
        "Discord",
        "IndieGameWebsite"
      ],
      "pricing": {
        "free": "Limited features",
        "pro": "$9.99/month",
        "business": "$49.99/month"
      }
    },
    "moat": [
      "Community-driven creation",
      "Partnerships with game asset creators",
      "User-generated templates"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 7,
      "revenue_potential": 8,
      "defensibility": 6
    },
    "total_score": 29,
    "reasoning": "Unlike standard coding tools, this leverages voice input uniquely and targets the growing interest in accessible game development."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}