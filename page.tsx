import AboutSection from "@/components/ui/core/(home)/about";
import ServicesSection from "@/components/ui/core/(home)/services/Services";
import Projects from "@/components/ui/core/(home)/projects/Projects";
import TestimonialSection from "@/components/ui/core/(home)/testimonialSection/TestimonialSection";
import Articles from "@/components/ui/core/(home)/articles/ArticleSection";
import SkillSection from "@/components/ui/core/(home)/skills/SkillSection";
import ContactSection from "@/components/ui/core/(home)/contact/ContactSection";

export default function HomePage() {
  return (
    <>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="testimonial">
        <TestimonialSection />
      </section>
      <section id="articles">
        <Articles />
      </section>

      <section id="skills">
        <SkillSection />
      </section>

      {/* <Volunteering /> */}

      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
}
