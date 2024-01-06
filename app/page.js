import TopBar from "@/Component/TopBar/TopBar"
import Header from "@/Component/Header/Header"
import Hero from "@/Component/Hero/Hero"
import Service from "@/Component/Service/Service"
import Work from "@/Component/Work/Work"

const page = () => {
  return (
    <div>
     <TopBar/>
     <Header/>
     <Hero/>
     <Service/>
     <Work/>
    </div>
  )
}

export default page