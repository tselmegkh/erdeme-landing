import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Багшаар бүртгүүлэх - Erdeme',
  description: 'Та өөрийн мэдээллээ үлдээснээр бид тантай эхний ээлжинд холбогдох болно.',
}

export default function PreOrderLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 