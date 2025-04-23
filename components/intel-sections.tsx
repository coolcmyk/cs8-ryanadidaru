"use client"
import {
  Laptop,
  Code,
  Github,
  Gamepad2,
  Cloud,
  Server,
  Cpu,
  Plus,
} from "lucide-react";
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

// Hero Section
export function AIHeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900 dark:to-black">
      <div className="container mx-auto py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 px-4"
        >
          <span className="text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400">
            ARTIFICIAL INTELLIGENCE
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Support AI anywhere with Intel®
          </h1>
          <p className="text-gray-700 dark:text-gray-300 md:text-lg">
            With proven AI expertise, the broadest ecosystem, technology, and comprehensive hardware and software portfolio, Intel can help you deliver the AI results you need.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="#solutions" className="inline-flex items-center justify-center bg-[#0071C5] hover:bg-blue-700 text-white py-3 px-6 rounded-md font-medium transition-all duration-200">
              AI Solutions <span className="ml-2">→</span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-video w-full rounded-lg overflow-hidden">
            <Image
              src="https://intelcorp.scene7.com/is/image/intelcorp/ai-everywhere-workstream-update-carousel:1920-1080"
              alt="Intel AI solutions visualization"
              width={1200}
              height={675}
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 mix-blend-overlay" />
        </motion.div>
      </div>
    </section>
  )
}

// Product Feature Section
export function ProductFeatureSection() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-black">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-square max-w-md mx-auto">
            <Image
              src="https://intelcorp.scene7.com/is/image/intelcorp/core-ultra-processor-female-using-ai-16x9:854-854?fmt=webp-alpha"
              alt="Intel Core Ultra Processor"
              width={600}
              height={600}
              className="object-cover rounded-lg"
            />
          </div>
          <div className="absolute bottom-0 right-0 p-4">
            <Image
              src="https://intelcorp.scene7.com/is/image/intelcorp/xeon-6-dcai-family-chip-imagery:854-854"
              alt="Intel Core"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <span className="text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400">
            Intel® Core™ Ultra Processor
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Elevate how you work, create, and play
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Experience intelligent AI assistant performance, easy text and image creation, boosted speeds, and more, at your fingertips. Redefine your PC experience with enhanced personalization and productivity, every task now more efficient.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="pt-4">
            <Link href="#learn-more" className="inline-flex items-center justify-center border-2 border-[#0071C5] text-[#0071C5] hover:bg-[#0071C5] hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-700 dark:hover:text-white py-2 px-6 rounded-md font-medium transition-all duration-200">
              Explore More
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Data Center Section
export function DataCenterSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 order-2 lg:order-1"
        >
          <span className="text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400">
            Intel® Xeon® Processor
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Ready to meet today's data center demands
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Reliable performance. Impressive efficiency. Intel® Xeon® processors are optimized to deliver high performance levels across specific workloads while minimizing side effects and lower power consumption.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="pt-4">
            <Link href="#learn-more" className="inline-flex items-center justify-center border-2 border-[#0071C5] text-[#0071C5] hover:bg-[#0071C5] hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-700 dark:hover:text-white py-2 px-6 rounded-md font-medium transition-all duration-200">
              Learn More
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="order-1 lg:order-2"
        >
          <div className="relative aspect-square max-w-md mx-auto">
            <Image
              src="https://intelcorp.scene7.com/is/image/intelcorp/cityscape:1920-1080"
              alt="Intel Xeon Processor"
              width={600}
              height={600}
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
  

// Developer Resources Section
export function DeveloperResourcesSection() {
  const devResourcesCards = [
    { title: "AI", icon: Laptop },
    { title: "Developer Tools", icon: Code },
    { title: "Open Source", icon: Github },
    { title: "Gaming", icon: Gamepad2 },
    { title: "Cloud", icon: Cloud },
    { title: "Edge", icon: Server },
    { title: "HPC", icon: Cpu },
    { title: "All", icon: Plus },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-black">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2">
            Tools
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Developer resources
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-gray-700 dark:text-gray-300">
            Explore Intel's development resources and search for tools and software by name, type, operating system, or topic.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {devResourcesCards.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="group h-full dark:bg-gray-800 hover:shadow-lg transition-all duration-300 border dark:border-gray-700">
                  <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                    <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700 group-hover:bg-[#0071C5] group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-medium text-gray-900 dark:text-white">{item.title}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="https://developer.intel.com"
            className="flex items-center border border-gray-300 hover:border-gray-400 dark:border-gray-700 dark:hover:border-gray-600 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 px-6 py-2 rounded text-gray-900 dark:text-white transition-all duration-200"
          >
            <span className="mr-2 text-xl font-bold">👨‍💻</span>
            <span>Join Us</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
