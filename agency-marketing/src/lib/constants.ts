export const SITE_CONFIG = {
  name: "VocalBeam",
  tagline: "AI Automation Agency",
  description: "Transform your business with cutting-edge AI automation solutions",
  founderVideoUrl: "https://your-r2-storage-url.com/founder-video.mp4",
  calendlyUrl: "https://calendly.com/vocalbeam/30min",
  demoUrl: import.meta.env.PUBLIC_DEMO_URL || import.meta.env.DEMO_URL || "https://demo.vocalbeam.com",
}

export const PRODUCTS = [
  {
    title: "AI Voice",
    description: "Outbound & Inbound calls powered by AI",
    icon: "phone",
  },
  {
    title: "AI Chat",
    description: "Whatsapp, Telegram, SMS & Web Chat",
    icon: "message-circle",
  },
  {
    title: "AI for Business",
    description: "Email, CRM, Mobile & Messenger Automation",
    icon: "database",
  },
]

export const CASE_STUDIES = [
  {
    id: 1,
    title: "AI Receptionists for Dentist Clinics",
    description: "Automated appointment booking and patient inquiries, reducing staff workload by 70%",
    image: "/images/2.png",
    stats: {
      metric: "70%",
      label: "Reduction in manual tasks",
    },
    tags: ["Healthcare", "Voice AI", "Automation"],
  },
  {
    id: 2,
    title: "RAG AI Chatbots for E-commerce",
    description: "Intelligent product recommendations and customer support with 24/7 availability",
    image: "/images/3.png",
    stats: {
      metric: "3x",
      label: "Increase in conversions",
    },
    tags: ["E-commerce", "RAG", "Support"],
  },
  {
    id: 3,
    title: "AI Nutritionist Multi-Agent System",
    description: "Personalized nutrition plans using multi-agent AI coordination for holistic health management",
    image: "/images/4.png",
    stats: {
      metric: "95%",
      label: "User satisfaction rate",
    },
    tags: ["Healthcare", "Multi-Agent", "Personalization"],
  },
]

export const REVIEWS = [
  {
    name: "Sarah Johnson",
    role: "Operations Director",
    company: "TechFlow Solutions",
    content: "The AI voice agent completely transformed our customer service. We're now handling 3x the call volume with zero wait times.",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Sarah",
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "GrowthX Marketing",
    content: "Implementation was seamless. The chatbot qualifies leads better than our human team did, and it's working 24/7.",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Michael",
  },
  {
    name: "David Smith",
    role: "Practice Manager",
    company: "City Dental",
    content: "Our missed calls dropped to zero overnight. The AI sounds so natural that most patients don't even realize they're talking to a bot.",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=David",
  },
]
