export const metadata = {
    title:{
      default:'Web Development Services & Web Design',
      template: '%s | ScaleEdge Solution'
    },
    description: "ScaleEdge Solutions is a leading web development company. We provide custom web development services and high quality websites with latest web designs for your business needs.",
    keywords: "Web Development solutions, Web Design, web solutions,  Custom Web Development, Website Development, Web Development Company, Web Development Services, Web Designing.",
    alternates: {
      canonical: "https://scaleedge.in/web-development-service" 
    },
    openGraph: {
      description:"ScaleEdge Solutions is a leading web development company. We provide custom web development services and high quality websites with latest web designs for your business needs.",
      url: "https://scaleedge.in/web-development-service" 
    }
  
  }
export default function webRoot({children}){
    return(
        <>
        {children}
        </>
    )
}