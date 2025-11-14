import Hero from './../../Component/Home/Hero'
import About from './../../Component/Home/About'
import Projects from './../../Component/Home/Projects'
import Certifications from './../../Component/Home/Certifications'
import Contact from './../../Component/Home/Contact'
export default function Home() {
  return (
    <div className=" bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 pt-20">
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}