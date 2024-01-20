
export const metadata = {
    title:{
      default:'Web Development Services & Web Design',
      template: '%s | ScaleEdge Solution'
    },
    description: "ScaleEdge Solutions is top digital marketing company. We provide online marketing services, SMO or SEO services. Get more traffic and grow your audience with our digital marketing services.",
    keywords: "Digital Marketing, Digital Marketing Company, Digital Marketing Services, Online Marketing Services, Digital Marketing Agencies, Online Marketing Agency, Top Digital Marketing Company, SEO Service, SMO services.",
    alternates: {
      canonical: "https://scaleedge.in/digital-marketing-service"
    },
    openGraph: {
      description:"ScaleEdge Solutions is top digital marketing company. We provide online marketing services, SMO or SEO services. Get more traffic and grow your audience with our digital marketing services.",
      url: "https://scaleedge.in/digital-marketing-service"
    }
  
  }
export default function digitalRoot({children}){
    return(
        <>
        {children}
        </>
    )
}