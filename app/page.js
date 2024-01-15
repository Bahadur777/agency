import TopBar from "@/Component/TopBar/TopBar"
import Header from "@/Component/Header/Header"
import Hero from "@/Component/Hero/Hero"
import Service from "@/Component/Service/Service"
import Work from "@/Component/Work/Work"
import Contact from "@/Component/Contact/Contact"
import Success from "@/Component/Success/Success"
import Blog from "@/Component/Blog/Blog"

const page = () => {
  return (
    <div>
     <TopBar/>
     <Header/>
     <Hero/>
     <Service/>
     <Work/>
     <Contact/>
     <Success/>
     <Blog/>
    </div>
  )
}

export default page