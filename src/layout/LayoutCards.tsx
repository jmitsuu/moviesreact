import { ReactNode } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

interface LayoutCardsProps {
  children: ReactNode
  title: string
  description: string
}

export function LayoutCards({
  children,
  title,
  description,
}: LayoutCardsProps) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <div className="w-full h-full mt-20 gap-y-4  flex flex-wrap gap-x-2 ">
        {children}
      </div>
    </HelmetProvider>
  )
}
