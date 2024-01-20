
export const metadata = {
    title:{
      default:'Contact Service',
      template: '%s | ScaleEdge Solution'
    },
    description: "Reach out to Scaleedge Soltion for expert IT solutions. Use our user-friendly contact form to discuss your unique business needs with our experienced team. Let us empower your success through innovative technology solutions",
    keywords: "IT solutions, technology consulting, contact us, business technology, information technology, IT services, technology solutions, contact form, IT support.",
    alternates: {
      canonical: "https://scaleedge.in/contact"
    },
    openGraph: {
      description:"Reach out to Scaleedge Soltion for expert IT solutions. Use our user-friendly contact form to discuss your unique business needs with our experienced team. Let us empower your success through innovative technology solutions",
      url: "https://scaleedge.in/contact"
    }
  
  }
export default function contactRoot({children}){
    return(
        <>
        {children}
        </>
    )
}