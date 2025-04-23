// context/LanguageContext.tsx
"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

type Language = "english" | "indonesian"

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  translations: typeof translations["english"]
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translations for all sections
const translations = {
  english: {
    // Navbar translations
    navItems: [
      { label: "Products & Services", href: "/products" },
      { label: "Solutions", href: "/solutions" },
      { label: "Support & Services", href: "/support" },
      { label: "Developer", href: "/developer" },
      { label: "About Intel", href: "/about" },
    ],
    signIn: "Sign In",
    search: "Search",
    searchPlaceholder: "Search Intel.com",
    languageToggle: "Switch to Indonesian",
    darkMode: "Dark Mode",
    lightMode: "Light Mode",
    
    // AI Hero Section
    aiHeroTitle: "Support AI anywhere with Intel®",
    aiHeroTagline: "ARTIFICIAL INTELLIGENCE",
    aiHeroDescription: "With proven AI expertise, the broadest ecosystem, technology, and comprehensive hardware and software portfolio, Intel can help you deliver the AI results you need.",
    aiHeroButton: "AI Solutions",
    
    // Product Feature Section
    coreUltraTag: "Intel® Core™ Ultra Processor",
    coreUltraTitle: "Elevate how you work, create, and play",
    coreUltraDescription: "Experience intelligent AI assistant performance, easy text and image creation, boosted speeds, and more, at your fingertips. Redefine your PC experience with enhanced personalization and productivity, every task now more efficient.",
    exploreMore: "Explore More",
    
    // Data Center Section
    xeonTag: "Intel® Xeon® Processor",
    xeonTitle: "Ready to meet today's data center demands",
    xeonDescription: "Reliable performance. Impressive efficiency. Intel® Xeon® processors are optimized to deliver high performance levels across specific workloads while minimizing side effects and lower power consumption.",
    learnMore: "Learn More",
    
    // Developer Resources Section
    toolsTag: "Tools",
    devResourcesTitle: "Developer resources",
    devResourcesDescription: "Explore Intel's development resources and search for tools and software by name, type, operating system, or topic.",
    devResourcesCards: [
      { title: "AI", icon: "computer" },
      { title: "Developer Tools", icon: "code" },
      { title: "Open Source", icon: "github" },
      { title: "Gaming", icon: "gamepad" },
      { title: "Cloud", icon: "cloud" },
      { title: "Edge", icon: "server" },
      { title: "HPC", icon: "cpu" },
      { title: "All", icon: "plus" }
    ],
    join: "Join",
    
    // AI Simplify Section
    simplifyTitle: "Simplify Your AI Journey",
    simplifyDescription: "Deploy AI at scale across cloud, data center, edge, and client with our portfolio of hardware and software.",
    simplifyCards: [
      {
        title: "AI Acceleration",
        description: "Develop and deploy high-performance AI solutions using Intel® AI Analytics Toolkit and Intel® oneAPI."
      },
      {
        title: "Workload Optimization",
        description: "Optimize your AI workloads with Intel processors and accelerators designed for performance and efficiency."
      },
      {
        title: "End-to-End Solutions",
        description: "Leverage Intel's ecosystem for end-to-end AI solutions from development to deployment across platforms."
      }
    ]
  },
  indonesian: {
    // Navbar translations
    navItems: [
      { label: "Produk & Layanan", href: "/products" },
      { label: "Solusi", href: "/solutions" },
      { label: "Dukungan & Layanan", href: "/support" },
      { label: "Pengembang", href: "/developer" },
      { label: "Tentang Intel", href: "/about" },
    ],
    signIn: "Masuk",
    search: "Cari",
    searchPlaceholder: "Cari di Intel.com",
    languageToggle: "Ganti ke Bahasa Inggris",
    darkMode: "Mode Gelap",
    lightMode: "Mode Terang",
    
    // AI Hero Section
    aiHeroTitle: "Dukung AI di Mana Saja dengan Intel®",
    aiHeroTagline: "ARTIFICIAL INTELLIGENCE",
    aiHeroDescription: "Dengan keahlian AI yang terbukti, ekosistem untuk yang terluas, teknologi, dan portofolio perangkat keras serta perangkat lunak yang komprehensif, Intel dapat membawa Anda mewujudkan hasil AI yang Anda perlukan.",
    aiHeroButton: "Solusi AI",
    
    // Product Feature Section
    coreUltraTag: "Processor Intel® Core™ Ultra",
    coreUltraTitle: "Tingkatkan cara Anda bekerja, berkreasi, dan bermain",
    coreUltraDescription: "Nikmati performa asisten AI cerdas, pembuatan teks dan gambar yang mudah, serta kecepatan yang telah ditingkatkan, dan masih banyak lagi, di ujung jari Anda. Definisikan ulang pengalaman PC Anda dengan personalisasi dan produktivitas yang dapat ditingkatkan, setiap tugas kini lebih cepat.",
    exploreMore: "Jelajahi Lebih Lanjut",
    
    // Data Center Section
    xeonTag: "Processor Intel® Xeon®",
    xeonTitle: "Siap untuk memenuhi tuntutan pusat data saat ini",
    xeonDescription: "Performa terpercaya. Efisiensi yang mengagumkan. Prosesor Intel® Xeon® dioptimalkan untuk menghasilkan tingkat performa tinggi di berbagai beban kerja tertentu, sekaligus meminimalkan efek samping lain dan konsumsi daya yang lebih rendah.",
    learnMore: "Pelajari Selengkapnya",
    
    // Developer Resources Section
    toolsTag: "Alat",
    devResourcesTitle: "Sumber daya pengembang",
    devResourcesDescription: "Jelajahi sumber daya pengembangan Intel dan cari alat serta perangkat lunak berdasarkan nama, jenis, sistem operasi, atau topik.",
    devResourcesCards: [
      { title: "AI", icon: "computer" },
      { title: "Alat Bantu Pengembang", icon: "code" },
      { title: "Sumber Terbuka", icon: "github" },
      { title: "Gaming", icon: "gamepad" },
      { title: "Cloud", icon: "cloud" },
      { title: "Edge", icon: "server" },
      { title: "HPC", icon: "cpu" },
      { title: "Semua", icon: "plus" }
    ],
    join: "Gabung",
    
    // AI Simplify Section
    simplifyTitle: "Sederhanakan Perjalanan AI Anda",
    simplifyDescription: "Hadirkan AI dalam skala besar di seluruh cloud, pusat data, edge, dan klien dengan portofolio perangkat keras dan perangkat lunak kami.",
    simplifyCards: [
      {
        title: "Akselerasi AI",
        description: "Kembangkan dan deploy solusi AI dengan performa tinggi menggunakan Intel® AI Analytics Toolkit dan Intel® oneAPI."
      },
      {
        title: "Optimasi Workload",
        description: "Optimalkan workload AI Anda dengan processor dan akselerator Intel yang dirancang untuk performa dan efisiensi."
      },
      {
        title: "Solusi End-to-End",
        description: "Manfaatkan ekosistem Intel untuk solusi AI end-to-end dari pengembangan hingga deployment di berbagai platform."
      }
    ]
  }
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("english")

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language
    if (saved === "english" || saved === "indonesian") {
      setLanguage(saved)
    } else if (navigator.language.toLowerCase().includes("id")) {
      setLanguage("indonesian")
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  const toggleLanguage = () => {
    setLanguage(prev => (prev === "english" ? "indonesian" : "english"))
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider")
  return context
}