import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Doctors and Researchers Who Recommend Our Water Systems",
  description:
    "Eight physicians, dentists, and researchers who use and endorse pH Prescription water filtration systems in their homes, offices, and clinical practices.",
};

interface Doctor {
  name: string;
  credentials: string;
  specialty: string;
  photo: string;
  photoAlt: string;
  bio: string;
  quote: string;
  sameAs?: string;
}

const DOCTORS: Doctor[] = [
  {
    name: "Dr. Mark A. Breiner",
    credentials: "DDS, Author of Whole Body Dentistry",
    specialty: "Holistic Dentistry",
    photo: "/doctors/dr-breiner.jpg",
    photoAlt: "Dr. Mark A. Breiner, DDS",
    bio: "Dr. Mark A. Breiner is a holistic dentist and author of Whole Body Dentistry, a foundational text in biological and integrative dental medicine. He practices in Trumbull, Connecticut, and has devoted decades to understanding the connection between oral health and total-body wellness. Dr. Breiner was among the first practitioners to formally describe the three requirements for healthy drinking water: free of contaminants, alkaline, and micro-clustered.",
    quote:
      "It took Leo a few frustrating years to develop this unit, and I congratulate him. His sink-top unit is superior to an ionizer because it alkalizes the water in a more natural way, using minerals. It also removes 90 to 92% of the fluoride. It does all this for hundreds of dollars, not thousands.",
  },
  {
    name: "Dr. Debra DeMarta",
    credentials: "MD, FACS, NSCA-CPT, CPTS-HON",
    specialty: "Colorectal Surgery and Functional Medicine",
    photo: "/doctors/dr-demarta.jpg",
    photoAlt: "Dr. Debra DeMarta, MD, FACS",
    bio: "Dr. Debra DeMarta is a practicing colorectal surgeon in Stuart, FL. She graduated from American University of the Caribbean School of Medicine in 1989 and completed a residency at Cleveland Clinic Foundation Florida. Dr. DeMarta specializes in helping patients with challenging gastrointestinal disorders through lifestyle and nutritional interventions, achieving documented success in reversing conditions including non-insulin dependent diabetes, hyperlipidemia, and inflammatory bowel disease without surgery.",
    quote:
      "Bad water kills and is an electron stealer. It creates oxidation which robs the body and the immune system of the ability to fight age and disease. Quality structured alkaline water provides the antioxidants we all need. It is an electron donor which puts out the oxidation fire. We use pH Prescription products to assure the best results for our patients.",
  },
  {
    name: "Dr. Jerry Tennant",
    credentials: "MD, MD(H), MD(P), Author of Healing is Voltage",
    specialty: "Integrative Medicine",
    photo: "/doctors/dr-tennant.jpg",
    photoAlt: "Dr. Jerry Tennant, MD",
    bio: "Dr. Jerry Tennant was accepted into the University of Texas Southwestern Medical School in 1960 at age 19 and graduated in the top ten of his class. He co-founded the outpatient Ophthalmic Surgery Society and was one of the first surgeons in the US to place intraocular lenses after cataract surgery. He later received a Degree of Doctor of Natural Medicine from the World Organization of Natural Medical Practitioners. He is the author of Healing is Voltage, which establishes the connection between cellular voltage, pH, and chronic disease.",
    quote:
      "Most water or drinks that people consume in North America are low voltage (low pH) and thus contribute to intracellular dehydration. Finding water that is pure and free from contaminants, alkaline (electron donor), with a small cluster size has been difficult and expensive. Finally, the solution has been created by pH Prescription. It measures better than any water I have tested and is certainly more affordable than inferior products. I use it in my home, my office and recommend it to my patients.",
  },
  {
    name: "Steve Evans",
    credentials: "DDS",
    specialty: "Dentistry",
    photo: "/doctors/steve-evans.jpg",
    photoAlt: "Steve Evans, DDS",
    bio: "Steve Evans is a dental practitioner who has worked alongside Leo Szymborski and pH Prescription for a number of years. He has integrated pH Prescription water into every aspect of his practice, from patient hydration and irrigation to office functions, and uses it throughout his home. He has linked to pH Prescription from his practice website to inform his patients about the benefits of structured alkaline water.",
    quote:
      "We only use water produced through pH products in our practice and home. Starting with a water cooler in our office, we give water to patients before and after treatments. We only use pH Prescription water for all office functions, including irrigation. The scientific validation provided to us has been outstanding, as well as the integrity of Leo and products produced by pH Prescription.",
  },
  {
    name: "Dr. Nathan Bryan",
    credentials: "PhD, Molecular Medicine Researcher",
    specialty: "Molecular Hydrogen and Nitric Oxide Research",
    photo: "/doctors/dr-bryan.jpg",
    photoAlt: "Dr. Nathan Bryan, PhD",
    bio: "Dr. Nathan Bryan earned his undergraduate degree in Biochemistry from the University of Texas at Austin and his doctoral degree from Louisiana State University School of Medicine, where he received the Dean's Award for Excellence in Research. He was recruited to the University of Texas Health Science Center at Houston by Ferid Murad, the 1998 Nobel Laureate in Medicine and Physiology. Dr. Bryan holds more than a dozen US and international patents in the nitric oxide field and is the founder of HumanN. He began working directly with pH Prescription and Aquapellis in 2018.",
    quote:
      "People get sick for two reasons and two reasons only. Number 1, their body is missing essential nutrients that it needs to perform. Number 2, their body is exposed to toxins that prevent the body from performing. One of the greatest sources of environmental toxins is from exposure to the water we drink and bathe in. I only use pH Prescription in my home and use the Aquapellis shower system as well. It's the best investment you can make for your home and health.",
  },
  {
    name: "Dr. Josh Axe",
    credentials: "DC, DNM, CNS",
    specialty: "Clinical Nutrition and Natural Medicine",
    photo: "/doctors/dr-axe.jpg",
    photoAlt: "Dr. Josh Axe, DC, DNM, CNS",
    bio: "Dr. Josh Axe is a doctor of chiropractic, doctor of natural medicine, and certified clinical nutritionist. He is a widely recognized authority in functional nutrition, natural medicine, and the relationship between water quality and human performance. He has published extensively on the science of hydrogenated water and its role in reducing oxidative stress and supporting athletic recovery.",
    quote:
      "With water being the essence of all life, it's important to ensure we consume the best quality of water to provide proper hydration. Hydrogenated water can enhance the absorption of hydrogen in the body, which is thought to enhance energy levels, decrease inflammation and support muscle recovery. Studies have found that it could reduce oxidative stress, promote heart health, improve mood and enhance physical performance. I use pH Prescription for my healthy water.",
  },
  {
    name: "Dr. Walter Gil",
    credentials: "M.D.",
    specialty: "Clinical Medicine and Health Rejuvenation",
    photo: "/doctors/dr-gil.jpg",
    photoAlt: "Dr. Walter Gil, M.D.",
    bio: "Dr. Walter Gil is a board-certified MD with 35 years of experience in clinical medicine, with a focused interest in health and rejuvenation. He has evaluated pH Prescription water systems within the context of integrative patient care and has incorporated them as a core recommendation for patients where water contaminants are identified as a contributing health factor.",
    quote:
      "Leo Szymborski has managed to excel at water quality with masterful purification and detoxification systems. He has applied water to health and rejuvenation, making a natural product best for hydration, medical and nutritional purpose, while allowing the natural ingredients to remain. Those cases in which contaminants are shown to be a contributing factor, pH Prescription is the ONLY choice.",
  },
  {
    name: "Tyler LeBaron",
    credentials: "Biochemistry, Founder of the Molecular Hydrogen Institute",
    specialty: "Molecular Hydrogen Science",
    photo: "/doctors/tyler-lebaron.jpg",
    photoAlt: "Tyler LeBaron, Molecular Hydrogen Institute",
    bio: "Tyler LeBaron is the founder of the Molecular Hydrogen Institute (MHI) and one of the foremost authorities on the science of hydration. He holds a degree in Biochemistry and serves as an adjunct instructor of physiology at Brigham Young University Idaho. He is an affiliate member of the American Chemical Society and has been published in the Journal of Chemical Education. His expertise covers molecular hydrogen, molecular cell biology, and organic and inorganic chemistry.",
    quote:
      "Hydrogen is the most fascinating element with a wide range of uses and properties. There are numerous studies on the benefits of hydrogen water for arthritis, weight loss, diabetes, cancer, skin, aging, acidosis, allergies, eye health and so on. It seems to be that hydrogen water has a positive result in eliminating or improving almost any bodily dysfunction.",
  },
];

export default function ExpertsPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@graph": DOCTORS.map((doctor) => ({
      "@type": "Person",
      name: doctor.name,
      jobTitle: doctor.specialty,
      description: doctor.bio,
      image: `https://phprescription.com${doctor.photo}`,
      knowsAbout: ["water filtration", "alkaline water", "molecular hydrogen", "water quality"],
      ...(doctor.sameAs ? { sameAs: doctor.sameAs } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* Hero */}
      <section style={{ background: "#fff", color: "var(--color-ink)", padding: "5rem 0 4rem" }}>
        <div className="container" style={{ maxWidth: "720px" }}>
          <div
            style={{
              fontSize: "0.8125rem",
              color: "var(--color-teal)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Doctor Endorsed
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem,5vw,3.25rem)",
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            8 Doctors and Researchers Who Use Our Water Systems
          </h1>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--color-ink-soft)",
              lineHeight: 1.75,
              marginBottom: "1rem",
            }}
          >
            pH Prescription is endorsed by physicians, surgeons, dentists, and research
            scientists who have independently evaluated our systems and use them in their homes,
            offices, and clinical practices.
          </p>
          <p style={{ fontSize: "0.9375rem", color: "var(--color-ink-mute)", lineHeight: 1.7 }}>
            These are not paid spokespeople. They are practitioners who found our water and
            reached out to tell us, or researchers who evaluated the science and chose to align
            with it.
          </p>
        </div>
      </section>

      {/* Doctor Grid */}
      <section style={{ background: "var(--color-surface)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2rem",
            }}
          >
            {DOCTORS.map((doctor) => (
              <div
                key={doctor.name}
                style={{
                  background: "#fff",
                  border: "1px solid var(--color-border-soft)",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                }}
              >
                {/* Photo + name header */}
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                    padding: "1.5rem",
                    borderBottom: "1px solid var(--color-border-soft)",
                    background: "var(--color-surface)",
                  }}
                >
                  <div
                    style={{
                      flexShrink: 0,
                      width: "72px",
                      height: "72px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      border: "3px solid var(--color-navy)",
                      position: "relative",
                    }}
                  >
                    <Image
                      src={doctor.photo}
                      alt={doctor.photoAlt}
                      width={72}
                      height={72}
                      style={{ objectFit: "cover", width: "100%", height: "100%" }}
                    />
                  </div>
                  <div>
                    <h2
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.0625rem",
                        color: "var(--color-navy)",
                        marginBottom: "0.25rem",
                        lineHeight: 1.25,
                      }}
                    >
                      {doctor.name}
                    </h2>
                    <p
                      style={{
                        fontSize: "0.8125rem",
                        color: "var(--color-ink-mute)",
                        lineHeight: 1.4,
                        marginBottom: "0.25rem",
                      }}
                    >
                      {doctor.credentials}
                    </p>
                    <span
                      style={{
                        display: "inline-block",
                        fontSize: "0.6875rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.07em",
                        color: "#fff",
                        background: "var(--color-teal)",
                        padding: "0.2em 0.6em",
                      }}
                    >
                      {doctor.specialty}
                    </span>
                  </div>
                </div>

                {/* Bio */}
                <div style={{ padding: "1.5rem", flex: 1 }}>
                  <p
                    style={{
                      color: "var(--color-ink-soft)",
                      fontSize: "0.875rem",
                      lineHeight: 1.75,
                      marginBottom: "1.25rem",
                    }}
                  >
                    {doctor.bio}
                  </p>

                  {/* Pull quote */}
                  <blockquote
                    style={{
                      borderLeft: "3px solid var(--color-navy)",
                      paddingLeft: "1rem",
                      margin: 0,
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontStyle: "italic",
                        fontSize: "0.9375rem",
                        color: "var(--color-navy)",
                        lineHeight: 1.65,
                      }}
                    >
                      &ldquo;{doctor.quote}&rdquo;
                    </p>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section style={{ background: "#fff", padding: "2.5rem 0" }}>
        <div className="container" style={{ maxWidth: "720px" }}>
          <p
            style={{
              fontSize: "0.8125rem",
              color: "var(--color-ink-mute)",
              lineHeight: 1.7,
              fontStyle: "italic",
              borderLeft: "3px solid var(--color-border-strong)",
              paddingLeft: "1rem",
            }}
          >
            These statements have not been evaluated by the Food and Drug Administration. These
            products are not intended to diagnose, treat, cure, or prevent any disease. Doctor
            endorsements reflect individual professional opinions and personal use.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--color-surface)", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "640px" }}>
          <div
            style={{
              fontSize: "0.8125rem",
              color: "var(--color-teal)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            Your Turn
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem,3.5vw,2.25rem)",
              color: "var(--color-navy)",
              marginBottom: "1rem",
              letterSpacing: "-0.02em",
            }}
          >
            Get My Free Water Analysis
          </h2>
          <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.75, marginBottom: "2rem" }}>
            The same systems these doctors use are available for your home or business. We
            start with a free water analysis so you know exactly what is in your water and
            which system addresses it.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            <Link href="/consultation" className="btn btn-primary">
              Schedule Free Water Analysis
            </Link>
            <a href={`tel:${BUSINESS.phone}`} className="btn btn-outline">
              Call {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
