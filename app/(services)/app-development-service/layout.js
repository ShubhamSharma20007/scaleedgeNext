
export const metadata = {
    title:{
      default:'Mobile App Development Services',
      template: '%s | ScaleEdge Solution'
    },
    description: "ScaleEdge Solutions is best mobile app development company. We provide innovative mobile apps with top app developers with latest technology for your business needs.",
    keywords: "App Development solutions,  App solutions,  Custom App Development, Application Development, Mobile App Development Company, Mobile App Development Services, Mobile App solutions",
    alternates: {
      canonical: "https://scaleedge.in/app-development-service" 
    },
    openGraph: {
      description:"ScaleEdge Solutions is best mobile app development company. We provide innovative mobile apps with top app developers with latest technology for your business needs.",
      url: "https://scaleedge.in/app-development-service" 
    },
   
  
  }

export default function appRoot({children}){
    return(
        <>
        {children}
        </>
    )
}