import './global.css'
export const metadata = {
  title: 'VibeLedger - Voice-based Ledger for Small Businesses',
  description: 'Record sales, expenses, and inventory updates by speaking. No typing, no spreadsheets required.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
