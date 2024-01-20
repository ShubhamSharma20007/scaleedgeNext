
export const metadata = {
    title:{
      default:'Software Development Services',
      template: '%s | ScaleEdge Solution'
    },
    description: "ScaleEdge Solution is top custom software development company. We provide offshore software services, and software Development solutions with best design, and testing.",
    keywords: "App Development solutions,  App solutions,  Custom App Development, Application Development, Mobile App Development Company, Mobile App Development Services, Mobile App solutions",
    alternates: {
      canonical: "https://scaleedge.in/app-development-service" 
    },
    openGraph: {
      description:"ScaleEdge Solution is top custom software development company. We provide offshore software services, and software Development solutions with best design, and testing.",
      url: "https://scaleedge.in/app-development-service" 
    }
  
  }

export default function softwareRoot({children}){
    return(
        <>
        {children}
        </>
    )
}