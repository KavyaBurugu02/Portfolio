import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kavya Burugu — Full Stack Engineer',
  description: 'Full Stack Software Engineer specializing in Java, Spring Boot, React.js, and cloud-native microservices architecture.',
  keywords: ['Full Stack Developer', 'Java', 'Spring Boot', 'React', 'AWS', 'Microservices'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-text antialiased">{children}</body>
    </html>
  )
}
