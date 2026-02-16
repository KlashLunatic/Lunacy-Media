import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLocation } from "wouter";
import { trackEvent } from "@/lib/analytics";

export default function Portfolio() {
  const [, setLocation] = useLocation();

  const caseStudies = [
    {
      title: "Experiential Brand Activations",
      category: "Events & Installations",
      brief: "Client needed to increase brand awareness and audience engagement through physical, memorable experiences.",
      execution: "Designed and executed immersive event environments and experiential activations, incorporating visual media, sound design, and physical installation.",
      outcome: "Increased audience engagement by 300%. Strong emotional connection to brand environments. Measurable social media amplification.",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/ng4bi4XYYFsDp79XjIAkYH/sandbox/nuaUCI45B2SppNu5IswND7-img-3_1771257582000_na1fn_Y2FzZS1zdHVkeS1leHBlcmllbnRpYWw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbmc0Ymk0WFlZRnNEcDc5WGpJQWtZSC9zYW5kYm94L251YVVDSTQ1QjJTcHBOdTVJc3dORDctaW1nLTNfMTc3MTI1NzU4MjAwMF9uYTFmbl9ZMkZ6WlMxemRIVmtlUzFsZUhCbGNtbGxiblJwWVd3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=imcvq1Nhw0iPKMRdibgU-VxcIgZ2MO-BB0Wq~rAdccEh3FG-RjX6e99Brb9jsUviL1lq9twIgdVHNgLnH3NklEZGM3zMmUGShzEBUerrGQilItkOAbEAhXrN8ncbuknBIxPDLhckgj9LDcQqItuuJFAmbb1RRZdNm3SYdaZC175VQ6YwGvDQq1x1pZGQybw69MjSx6~Tbvv9xh4eY-07d6ufYsfDF32Rxj1HBierjhNGzFOTDNoSe5FiTo4CvWuR6HrdVWkvUKpDFElkFJrho9kQdLDliZj7jo9C-~XsSNitKT0BMWaHih~-GZ9Pk-lJGusjSr09JNrMYu5EJ6SWFw__"
    },
    {
      title: "Digital Campaign Visual Direction",
      category: "Digital Media",
      brief: "Brand needed cohesive visual identity and compelling content strategy across digital platforms to increase engagement.",
      execution: "Produced campaign visuals, creative assets, and visual identity systems aligned with brand narrative and target audience.",
      outcome: "Strengthened brand identity. 250% increase in engagement across digital platforms. Improved audience retention.",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/ng4bi4XYYFsDp79XjIAkYH/sandbox/nuaUCI45B2SppNu5IswND7-img-2_1771257579000_na1fn_cG9ydGZvbGlvLWhlcm8tY2FtcGFpZ25z.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbmc0Ymk0WFlZRnNEcDc5WGpJQWtZSC9zYW5kYm94L251YVVDSTQ1QjJTcHBOdTVJc3dORDctaW1nLTJfMTc3MTI1NzU3OTAwMF9uYTFmbl9jRzl5ZEdadmJHbHZMV2hsY204dFkyRnRjR0ZwWjI1ei5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=qWvWNP8WE3eAQ3gOP835wM8FfWfbwimDMyKWCFDNefHRK6WxmTZapB-bdnT1Kyc02G76dWG9MsRC2NJ-1iJi3TesHUIekmBuBZvUTZKYC7PlcBuc0L-eL~rn7lTILpCyCLEeVBZHmzBKu-mpOOXJz88qzZd3zqxgedBZ1v1Xz5H7B37nuPmOU~xBTy0BHZRn3bgc3wKkJOXB65U5KpgKkM-4gVMUfW9Bx0vrmZfUYUoCZ29pMYSuW91-5Zw~fdIsXXTK8g1vzIqfesjF3gs~6HKOAhzpoamcIEqIP8SS4~b1W4OW55CZ2RswOeJSnW3PIRXTpt6K-4aFzUS2KX4I2w__"
    },
    {
      title: "Event Production & Experiential Environments",
      category: "Live Experiences",
      brief: "Organization needed to create memorable, immersive experiences that deepen audience connection to brand values.",
      execution: "Designed experiential environments integrating sound, visuals, and physical presence to create immersive brand moments.",
      outcome: "Delivered immersive experiences that increased audience interaction by 400%. Strong brand memorability and repeat attendance.",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/ng4bi4XYYFsDp79XjIAkYH/sandbox/nuaUCI45B2SppNu5IswND7-img-1_1771257576000_na1fn_c2VydmljZXMtaGVyby1leHBlcmllbnRpYWw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbmc0Ymk0WFlZRnNEcDc5WGpJQWtZSC9zYW5kYm94L251YVVDSTQ1QjJTcHBOdTVJc3dORDctaW1nLTFfMTc3MTI1NzU3NjAwMF9uYTFmbl9jMlZ5ZG1salpYTXRhR1Z5YnkxbGVIQmxjbWxsYm5ScFlXdy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=DueZsS28HabyDqfZAhTRiT1y7iKA4RIdhVlR4U13Lv8DaDYpRwEPPOCE1icQjhSY3R8HvqpUMtPWg430Vi8hMP5-kyYigF42XiSuSWtOPGDl8cPtvNC4fpkmqltI25E7upDuAO6hu61DD2olBuIyhw1nezySyN560X7hC4nksKoUugH3KBliYZfYTo0XcL6vFPu9sPZ60vpL0m~yzyLyZyLLQBi0O-1SCBUeJPwrNld35niGFlpo8s3nKBTSXN8XthuqcoIRQt3o6tYY~IY-wgenGFRsGCVcnXGNcbxsrCTACXXbh0azizbuUYNdMHqVdK6SLV2bhKRHmvEfz1WrxA__"
    },
    {
      title: "Lunacy Media — Original Campaign & Worldbuilding",
      category: "Brand Strategy",
      brief: "Create a distinctive creative universe that spans multiple mediums (music, visual art, interactive experiences) with cohesive brand identity.",
      execution: "Developed cohesive brand identity, visual systems, narrative architecture, and comprehensive campaign rollout strategy across all platforms.",
      outcome: "Established Lunacy Media as a distinctive creative and cultural entity with multi-platform presence. Growing audience across all channels.",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/ng4bi4XYYFsDp79XjIAkYH/sandbox/nuaUCI45B2SppNu5IswND7-img-2_1771257579000_na1fn_cG9ydGZvbGlvLWhlcm8tY2FtcGFpZ25z.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbmc0Ymk0WFlZRnNEcDc5WGpJQWtZSC9zYW5kYm94L251YVVDSTQ1QjJTcHBOdTVJc3dORDctaW1nLTJfMTc3MTI1NzU3OTAwMF9uYTFmbl9jRzl5ZEdadmJHbHZMV2hsY204dFkyRnRjR0ZwWjI1ei5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=qWvWNP8WE3eAQ3gOP835wM8FfWfbwimDMyKWCFDNefHRK6WxmTZapB-bdnT1Kyc02G76dWG9MsRC2NJ-1iJi3TesHUIekmBuBZvUTZKYC7PlcBuc0L-eL~rn7lTILpCyCLEeVBZHmzBKu-mpOOXJz88qzZd3zqxgedBZ1v1Xz5H7B37nuPmOU~xBTy0BHZRn3bgc3wKkJOXB65U5KpgKkM-4gVMUfW9Bx0vrmZfUYUoCZ29pMYSuW91-5Zw~fdIsXXTK8g1vzIqfesjF3gs~6HKOAhzpoamcIEqIP8SS4~b1W4OW55CZ2RswOeJSnW3PIRXTpt6K-4aFzUS2KX4I2w__"
    }
  ];

  const handleContactClick = () => {
    trackEvent("project_cta_click", "portfolio_contact_click", "portfolio");
    setLocation("/contact");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <nav className="mx-auto max-w-6xl px-4 sm:px-8 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 font-semibold text-base tracking-tight">
            <img src="/lunacy-logo.png" alt="Lunacy" className="w-6 h-6" />
            <span>Lunacy</span>
          </a>
          <div className="flex gap-8 items-center text-sm">
            <a href="/about" className="hover:text-[#d4af37] transition duration-200">About</a>
            <a href="/" className="hover:text-[#d4af37] transition duration-200">Projects</a>
            <a href="/services" className="hover:text-[#d4af37] transition duration-200">Services</a>
            <a href="/portfolio" className="text-[#d4af37]">Portfolio</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-40">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('https://private-us-east-1.manuscdn.com/sessionFile/ng4bi4XYYFsDp79XjIAkYH/sandbox/nuaUCI45B2SppNu5IswND7-img-2_1771257579000_na1fn_cG9ydGZvbGlvLWhlcm8tY2FtcGFpZ25z.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbmc0Ymk0WFlZRnNEcDc5WGpJQWtZSC9zYW5kYm94L251YVVDSTQ1QjJTcHBOdTVJc3dORDctaW1nLTJfMTc3MTI1NzU3OTAwMF9uYTFmbl9jRzl5ZEdadmJHbHZMV2hsY204dFkyRnRjR0ZwWjI1ei5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=qWvWNP8WE3eAQ3gOP835wM8FfWfbwimDMyKWCFDNefHRK6WxmTZapB-bdnT1Kyc02G76dWG9MsRC2NJ-1iJi3TesHUIekmBuBZvUTZKYC7PlcBuc0L-eL~rn7lTILpCyCLEeVBZHmzBKu-mpOOXJz88qzZd3zqxgedBZ1v1Xz5H7B37nuPmOU~xBTy0BHZRn3bgc3wKkJOXB65U5KpgKkM-4gVMUfW9Bx0vrmZfUYUoCZ29pMYSuW91-5Zw~fdIsXXTK8g1vzIqfesjF3gs~6HKOAhzpoamcIEqIP8SS4~b1W4OW55CZ2RswOeJSnW3PIRXTpt6K-4aFzUS2KX4I2w__'"
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-8 text-center">
          <div className="animate-fade-in-up">
            <p className="text-sm font-light tracking-widest text-[#d4af37] mb-6">CASE STUDIES</p>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-tight">
              Our Work
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
              A selection of campaigns, activations, and creative projects that showcase our approach to building culturally resonant brand experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 sm:py-40 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <div className="space-y-32">
            {caseStudies.map((study, idx) => (
              <div key={idx} className="animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  {/* Image */}
                  <div className={idx % 2 === 0 ? "md:order-1" : "md:order-2"}>
                    <div className="rounded-lg overflow-hidden h-96 bg-gray-100">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={idx % 2 === 0 ? "md:order-2" : "md:order-1"}>
                    <p className="text-sm font-light tracking-widest text-[#d4af37] mb-4">{study.category}</p>
                    <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tight leading-tight">{study.title}</h3>
                    <div className="space-y-4 mb-8">
                      <div>
                        <p className="text-sm font-semibold text-gray-900 mb-2">Brief</p>
                        <p className="text-gray-600 text-sm">{study.brief}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 mb-2">Execution</p>
                        <p className="text-gray-600 text-sm">{study.execution}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 mb-2">Outcome</p>
                        <p className="text-gray-600 text-sm">{study.outcome}</p>
                      </div>
                    </div>

                    <Button
                      onClick={handleContactClick}
                      variant="outline"
                      className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black rounded-full"
                    >
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {idx < caseStudies.length - 1 && (
                  <div className="border-t border-border mt-24" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-background">
        <div className="mx-auto max-w-2xl px-4 sm:px-8 text-center">
          <h2 className="text-4xl font-light tracking-tight mb-6">Ready to Work Together?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's discuss how we can create something extraordinary for your brand.
          </p>
          <Button
            onClick={handleContactClick}
            className="bg-[#d4af37] text-black hover:bg-[#c9a02d] rounded-full px-8 py-6 text-lg font-light"
          >
            Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-sm text-gray-600">© 2026 Lunacy Media. All rights reserved.</p>
            <div className="flex gap-6">
              <a
                href="https://www.instagram.com/lunacy_media/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("social_click", "social_instagram", "instagram")}
                className="text-gray-600 hover:text-[#d4af37] transition duration-200"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61577277770199"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("social_click", "social_facebook", "facebook")}
                className="text-gray-600 hover:text-[#d4af37] transition duration-200"
              >
                Facebook
              </a>
              <a
                href="https://www.linkedin.com/company/lunacy-media/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("social_click", "social_linkedin", "linkedin")}
                className="text-gray-600 hover:text-[#d4af37] transition duration-200"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
