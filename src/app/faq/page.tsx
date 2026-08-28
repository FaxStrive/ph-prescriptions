import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";
import PageHero from "@/components/ui/PageHero";
import ImageBand from "@/components/ui/ImageBand";

export const metadata: Metadata = {
  title: "FAQ | pH Prescription Water Systems",
  description: "Answers to common questions about pH Prescription water filtration, alkaline water, molecular hydrogen, installation, warranty, and more.",
};

const FAQS = [
  {
    q: "What is the pH Prescription Point of Difference?",
    a: "Founded in 2005, headquartered in Palm City, Florida, with a 10,000sf manufacturing warehouse, pH Prescription is the leader in finely filtered, re-mineralized and hydrogen-infused water through innovative natural-based science and technology. Our mission goes beyond simply removing toxins - our goal is to restore water to its purest, most natural state: clean, mineral-rich, energetically vibrant, and infused with molecular hydrogen. Our systems have earned the trust of wellness clinics, leading health experts, professional athletes, celebrities, and thousands of families around the world. For the team at pH Prescription, water is not just a profession - it is a purpose driven by truth, guided by the belief that everyone deserves not just clean, but healthified water: water that naturally heals.",
  },
  {
    q: "Why 'Water Doctors Recommend'?",
    a: "Over 20 years ago, a life-threatening illness propelled our founder Leo Szymborski on a journey to heal. Research from medical doctors, science, and leaders in healing fueled his exploration into how water could create the ideal environment for the body to heal itself. His eureka moment came when he learned that water can not only attain but retain an electrical charge and become an antioxidant itself. By consuming finely filtered water, Leo was able to wean himself off all medications and return to a healthier state. He developed finely filtered water systems and presented them at premier medical conventions. Leading medical doctors endorsed pH Prescription's systems, used them at home, in their offices and medical facilities, and began recommending them to patients. These endorsements are the critical point of difference - pH Prescription provides water that doctors recommend, hence the name: Water Doctors Recommend.",
  },
  {
    q: "What does the pH Prescription Alkaline Antioxidant Drinking Filter System do to water?",
    a: "1. Activates finely filtered water into living water. 2. Makes water clusters smaller for increased cellular hydration. 3. Makes the water an electron donor by making it an antioxidant itself. 4. Alkalizes the water (raises the pH). 5. Adds magnesium, calcium, potassium, and trace minerals. 6. Reduces harmful negative ions (free radicals that damage cells). 7. Improves body functions such as movement, digestion, and absorption.",
  },
  {
    q: "How do the pH Prescription alkaline drinking systems compare to bottled water?",
    a: "Alkaline water will help flush out acid wastes which can lead to disease. Bottled water cannot maintain alkalinity and will lose both its alkalinity and antioxidant potential over time. The antioxidant potential typically begins to drop about 24 hours after alkaline water is made. The water's alkalinity starts to drop off about a week after it was made. Alkaline water is a drink best consumed fresh - which is why a pH Prescription system at your home is far superior to any bottled alternative.",
  },
  {
    q: "What conditions may be helped by alkaline water?",
    a: "Our body is predominantly made of water. Alkaline water helps flush out acid wastes which can lead to disease. Japanese doctors have treated conditions including heart disease and high blood pressure, diabetes, arthritis, kidney disease, asthma and allergies, osteoporosis, eye disease, indigestion, gas and nausea, and chronic diarrhea and constipation using alkaline water. All of these conditions are related to acid accumulation that alkaline water helps address by changing the acidic environment in the body. Note: These statements have not been evaluated by the Food and Drug Administration. These products are not intended to diagnose, treat, cure, or prevent any disease.",
  },
  {
    q: "What is structured water?",
    a: "The main component of structured water is energy, and that energy comes down to the water molecule itself. Structured water has lower surface tension and better hydrating properties than unstructured water. The geometric patterning breaks up large low-energy water molecule clusters into smaller high-energy clusters, which increases cellular hydration and cell-to-cell communication. Structured water is said to be 'living body water' - very similar to our body's own liquid. When we drink ordinary water, a great deal of energy is consumed to convert it into living body water. Structured water, since it is very close to our body's water, requires much less energy for the conversion and is more easily absorbed.",
  },
  {
    q: "What effect does pH Prescription's alkaline filters have on water clusters?",
    a: "The smaller the molecule cluster, the better the water. Structured water has the lowest molecule structure of any water on earth. The lower the cluster of water molecules, the easier the water can be absorbed into the body without loss of energy. This allows you to rehydrate more thoroughly - the water is more permeable, allowing it to be absorbed into the body and stimulate the immune system.",
  },
  {
    q: "What is the science behind water acting as an antioxidant?",
    a: "Anti-Oxidation is one of the unique functions of molecular hydrogen water. If living things contain many antioxidants, they can maintain very high levels of health. It heightens the body's immune system and helps suppress free radicals from attacking your cell structure. Free radicals are molecules that can damage and destroy cells throughout your body causing effects like premature aging. Structured water even prevents iron from rusting.",
  },
  {
    q: "What does the water taste like from the pH Prescription finely filtered systems?",
    a: "You will experience the taste of natural spring water, with a refreshingly light taste that quenches thirst. pH Prescription finely filtered water systems return water to its natural state through proprietary multi-media filtration systems, re-mineralizing and energizing it with a proprietary combination of rare earth minerals to produce high quality, safe water.",
  },
  {
    q: "Should a water softener be used with a pH Prescription Total Home system?",
    a: "Water softeners may be used if needed and will not harm the pH Prescription Total Home water systems or our drinking systems. If you use a water softener, we recommend potassium chloride - if it is available in your area - instead of salt, because it is much healthier for drinking and has a better effect on your skin and hair when bathing.",
  },
  {
    q: "What should I expect from my pH Prescription RO (Reverse Osmosis) drinking system (pH-RO-1100)?",
    a: "The negative ion media inside the alkaline filter, when new, produces extra active hydrogen while processing water. Initially, it may make the water seem cloudy - this is normal. The cloudiness is actually hydrogen gas bubbles. The visibility of the gas bubbles will slow within a week or two. A system that is working properly will always have a small degree of gas bubbles visible. Reverse osmosis can turn ocean water into drinking water - water is forced by pressure through microscopic pores in a filtering membrane, so small that only incredibly cleansed water can pass through after salt, minerals, sediment, and other unwanted elements are filter-flushed away naturally.",
  },
  {
    q: "Why is the water from the pH Prescription pH-RO-1100 drinking system cloudy?",
    a: "This is a natural process for the filter to adjust and is harmless to use or drink. If you look closely into the water, you will see air bubbles - actually active hydrogen. The cloudiness is caused by hydrogen gas bubbles from the negative ion media and is perfectly normal. The cloudiness typically reduces within a week or two as the system settles in.",
  },
  {
    q: "Why should I add UV Sterilization to my pH Prescription water system?",
    a: "The pH Prescription Ultraviolet Sterilization system: sterilizes harmful bacteria, E-coli, viruses, fungi, algae and microbes; provides safe chemical-free sterilized water; uses quality 304 stainless steel with long-lasting 9,000-hour bulbs; is trusted by thousands of water professionals worldwide; and meets food, medical and lab requirements.",
  },
  {
    q: "Why is the pH-WH-3500 Combo your most popular system?",
    a: "This system reduces up to 99% of chlorine, chloramines, fluorides, pharmaceuticals, heavy metals and more. Combined with our most Doctor Recommended drinking system pH-RO-1100 Reverse Osmosis Re-mineralizing Water System, it restructures the water, increases oxygen, and raises pH to alkaline. The combination provides maximum water filtration - finely filtered working water and refreshing alkaline drinking water - ensuring all your water sources taste clean and provide finely filtered water for the home, appliances, and refreshing energized alkaline water for drinking.",
  },
  {
    q: "Why is your pH-RO-1100 Reverse Osmosis Water System the most Doctor Recommended System?",
    a: "A common question is: if I have a whole house water filter, do I still need a drinking filter? The answer is yes. Even with a whole house filter attached to your incoming main water line, the clean water still travels through household plumbing. Many homes have older plumbing which can allow heavy metals to get into the water supply even after whole-house filtration. Even newer plumbing regulations allow for some lead in fixtures. For absolutely the finest filtered drinking water, you want to filter at the house entry and again at the kitchen sink with our alkaline reverse osmosis filter. Our alkaline filter provides delicious tasting pure water energized to a high alkaline pH. Alkaline water has many health benefits and can positively affect the body's return to a healthier state.",
  },
  {
    q: "What is Kinetic Degradation Fluxion (KDF)?",
    a: "KDF is patented and proven to reduce chloramines, chlorine, bacteria, iron, fungus, algae, hydrogen sulfide, most heavy metals, and other contaminants. KDF is brass made of 50% pure copper and 50% pure zinc. In water, this produces an electro-chemical reaction that converts free chlorine into simple chlorides. KDF will reduce up to 95% of chlorine before it hits your carbon filter, extending the life of the carbon by 15 times. The electrolytic field inhibits microorganisms and forms peroxide and hydroxyl radicals. Our KDF filter meets EPA and FDA standards for zinc and copper.",
  },
  {
    q: "What is high-capacity fluoride and chlorine reducing carbon?",
    a: "It is Brimac Carbon - a high calcium, Kosher Certified, 100% organic carbon made of 80% phosphate of calcium, 10% carbon, and 10% calcium carbonate. It lasts a long time, has no toxicity, and leaves behind beneficial minerals. It can reduce chlorine, heavy metals, and radioactive isotopes on top of fluoride. Brimac carbon is more effective than coconut carbon because it is hundreds of times more porous and contains calcium which attracts fluoride. Two-stage systems reduce about 50% of fluoride, three-stage about 75%, and four-stage Carbon/KDF systems reduce up to 99% based on 1.5ppm fluoride.",
  },
  {
    q: "How long does Brimac Carbon last?",
    a: "Point of use systems can filter about 5,000 gallons of water and whole house systems can do up to about 500,000 to 1,000,000 gallons. This can vary depending on your fluoride levels, but is accurate for normal use for an average family of four.",
  },
  {
    q: "What is GAC (Catalytic Granulated Activated Charcoal)?",
    a: "GAC is very good at eliminating bad odors and tastes. It will reduce most contaminants but is not as effective at reducing sub-micron particles. It is ideal as a post filter but does not reduce minerals. Often used in tandem with other systems, GAC mixed with catalytic carbon will reduce up to 99% of chlorine, chloramines and most VOCs (volatile organic compounds).",
  },
  {
    q: "How long does the Total Home mixed multi-media proprietary filter system last?",
    a: "Our Total Home systems can filter up to about one million gallons. This may vary depending on your contaminant levels, but is accurate for normal use for an average family of four. Most systems like this last about 5 years or 1,000,000 gallons, whichever comes first. The pH Prescription control valve has a built-in meter to keep track of gallons used - like an odometer on your car. This way you will know when you need to replace the media inside the tanks. We also offer a pH Prescription Replenishment Program for savings on regular filter replenishment.",
  },
  {
    q: "What is Coconut Activated Carbon?",
    a: "Activated carbon is produced from charred coconut shells, pulverized and pressed into a block. Water is pushed through the block, filtering particles as small as 0.5 microns. The carbon polishes the water molecules while leaving behind organic materials, pesticides, viruses, bacteria and cysts as well as bad odors, bad tastes, giardia, cryptosporidium and asbestos. It is best used with treated municipal water and is often used in tandem with reverse osmosis. It will not reduce minerals out of the water.",
  },
  {
    q: "What is hard water and what system should I use?",
    a: "The pH-WH-2700 is ideal to overcome hard water issues. It handles dissolved minerals and heavy metals including hard water. If there are stains or buildup on your sinks and bathtubs, if you need large amounts of soap, or if your water tastes or smells odd, you probably have hard water. If left untreated, minerals in hard water will cause yellow stains on fixtures and deposits as scale, eventually clogging plumbing and shortening the life of appliances. pH Prescription finely filtered water makes a difference you can see and feel: in the bathroom, soap and shampoo lather better, hair and skin feel noticeably cleaner and softer; in the laundry, clothes are softer, cleaner and whiter; in the kitchen, dishes clean more easily and are spot free.",
  },
  {
    q: "How does a water softener system work?",
    a: "Hard water passes through a media tank containing resin beads coated with sodium or potassium ions. Calcium and magnesium ions are exchanged for sodium/potassium ions, treating the water. When the beads have trapped the hardness and need to be regenerated, the control valve charges them with brine from the brine tank. As regeneration occurs, calcium and magnesium ions are freed from the beads and replaced with sodium or potassium ions, ready to soften water again. Computerized automated systems regenerate based on actual water usage, adjusting for vacations or guests. This type of unit only regenerates when necessary, making it the most efficient in energy and salt pellet usage.",
  },
  {
    q: "What are VOCs?",
    a: "Volatile Organic Compounds (VOCs) include 32 chemical contaminants listed by the EPA - such as benzene, dichloroethylene, carbon tetrachloride, dioxin, styrene, toluene, chloroform, and vinyl chloride. Total Trihalomethanes alone are suspected cancer causers present in virtually all chlorinated tap water. The EPA also lists 14 pesticides and 12 herbicides where activated carbon is the only recommended treatment. When people say water filter, they most frequently mean a carbon filter, because since the Egyptians discovered that storing water in charcoal made it stay fresher and taste better, carbon has been a standard feature in water treatment.",
  },
  {
    q: "What are PFOS?",
    a: "The EPA has set a lifetime health advisory level for PFAS in drinking water: the level is 70 parts per trillion (ppt) for PFOA and PFOS combined. This is the level below which no harm is expected from these chemicals. There are other PFAS compounds that do not have advisory levels. Most in-home water filters cannot effectively reduce PFAS chemicals - however, pH Prescription's multi-media Total Home and drinking systems are highly effective at reducing PFAS. If you have water test results, we would be happy to review them and build a custom system for your specific needs.",
  },
  {
    q: "What should I do if my drinking water contains PFAS?",
    a: "When concentrations exceed the EPA Lifetime Health Advisory Level of 70 ppt for PFOA and PFOS, the recommendation is bottled water or filters. pH Prescription recommends a multi-stage system with reverse osmosis for drinking water. If you have been notified by your health department that PFAS were found in your well water and you are near a PFAS source, do not use the well water for drinking, cooking, making baby formula, washing fruits and vegetables, or brushing teeth unless filtered by a system that can reduce PFOA and PFAS.",
  },
  {
    q: "Is it safe to bathe or swim in water containing PFAS?",
    a: "You may bathe and swim in water containing PFAS. The PFAS do not easily absorb into the skin. It is safe to bathe, do laundry, and perform household cleaning in water containing PFAS. It is also safe to swim in and use recreationally. Getting water with PFAS on your skin will not harm you. The primary concern is drinking and cooking with PFAS-contaminated water.",
  },
  {
    q: "What types of filtration systems reduce PFAS and fluoride?",
    a: "Both granular activated carbon (GAC) and reverse osmosis (RO) filters can reduce PFAS substances. For fluoride reduction, three effective filtration types are: Brimac Carbon, Reverse Osmosis, and Steam Distillation. For the Total Home system, Brimac carbon is the best and most cost-efficient way to reduce fluoride and many other toxins at the point of entry to your home. Further filtration is recommended with a Reverse Osmosis system for drinking water at point of use.",
  },
  {
    q: "Why are point-of-use finely filtered water systems by pH Prescription better than bottled water?",
    a: "Using a pH Prescription system helps the environment by removing massive amounts of plastic waste. Consider: the US consumes about 30 billion bottles of water per year; making those bottles requires about 17 million barrels of oil; less than 20% of plastic bottles are recycled; plastic bottles take hundreds of years to degrade. Each bottle also requires additional energy to fill, pack, transport, chill, and dispose of. A pH Prescription system at home eliminates all of this while providing superior water quality at a fraction of the long-term cost.",
  },
  {
    q: "Do you have an entry level water filtration system?",
    a: "Our Water Management System (WMS) with Carbon Tank filtration system, pH-WMS-900, provides quality, clean finely filtered water from every tap in your home. This filter system reduces harmful chemicals using no electricity and produces no wastewater. It needs no water softener application. Enjoy finely filtered water for showers and baths, brushing teeth, cooking, laundry and more. It also micro-clusters the water and reduces chemicals like chlorine, chloramines, VOCs, THMs, and uses KDF for reducing heavy metals. In times of storm or hurricanes, there is no need to rush to the store for bottled water.",
  },
  {
    q: "Can I have finely filtered water from every tap in my home?",
    a: "Yes. Our entry level finely filtered water system requires no electricity and produces no wastewater. Our Total Home System with patented WMS Vortex, pH-WMS-900-CO, needs no water softener as it prevents scale buildup. The system is placed on the main water line that enters your home (point of entry), providing finely filtered water for showers and baths, brushing teeth, cooking, laundry, and more. It uses KDF and catalytic premium carbon to reduce chlorine, chloramines, VOCs, THMs, and heavy metals while micro-clustering the water.",
  },
  {
    q: "What is pH Prescription's Installation Policy and Disclaimer?",
    a: "pH Prescription recommends you use a licensed plumber for installation. If you do not use a licensed plumber, your warranty is null and void and we will not be responsible for any issues. Should you need to find a licensed plumber, contact us at 772-220-8789 or info@phprescription.com with your location and equipment purchased, and we will recommend a licensed plumber. Disclaimer: pH Prescription is not responsible for any damage to our equipment during shipping. We recommend conducting a complete inspection of the equipment upon receipt to ensure it has not been compromised during shipping.",
  },
  {
    q: "How do I contact pH Prescription?",
    a: "Contact us at (888) 728-2783 or email us at info@phprescription.com. Our address is 3210 SW 42nd Ave, Palm City, Florida 34990.",
  },
  {
    q: "How do I know my transaction will be safe?",
    a: "Our online shopping cart and security technology ensures the safest and most reliable checkout experience for our customers. Your information will never be shared or sold to marketing companies.",
  },
  {
    q: "What happens after I have placed my order?",
    a: "pH Prescription will expedite your order as soon as we receive it. We believe in customer service and value your purchase. We take every measure to ensure fast and prompt service delivery by the best shipping means possible.",
  },
  {
    q: "How are products delivered to me?",
    a: "We ship via UPS, FedEx, and USPS. Freight loads are via R & L Carriers. We can also ship using your UPS or FedEx accounts. To estimate when a package will be delivered, contact us at (888) 728-2783 or info@phprescription.com.",
  },
  {
    q: "How do I return an item?",
    a: "The item must be in its original unused condition to be returned, unless there is a manufacturer defect. You must notify us and return the item within 30 days of your purchase. Email info@phprescription.com to request a refund. Mail your returned item to: pH Prescription LLC, Returns Department, 3210 SW 42nd Ave, Palm City, Florida 34990. Your package must include a signed letter stating the reason for your return and the original receipt.",
  },
  {
    q: "What are the return exceptions?",
    a: "Items that are opened cannot be returned. Merchandise that has been used or altered will not be accepted for return or exchange.",
  },
];

export default function FAQPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero
        eyebrow="Help Center"
        title="Frequently Asked"
        titleAccent="Questions"
        subhead="Everything you need to know about pH Prescription water systems, technology, installation, and warranty."
        image="/images/lifestyle2/idw-person-drinking-3.jpg"
        imageAlt="Person drinking a glass of clean filtered water"
        minHeight="54vh"
      />

      <section style={{ background: "var(--color-cream)" }}>
        <div className="container" style={{ maxWidth: "820px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {FAQS.map((faq, i) => (
              <details key={i} style={{ borderBottom: "1px solid var(--color-border-soft)", paddingBottom: "0" }}>
                <summary style={{
                  padding: "1.5rem 0",
                  cursor: "pointer",
                  fontFamily: "var(--font-display)",
                  fontSize: "1.0625rem",
                  color: "var(--color-navy)",
                  listStyle: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "1rem",
                }}>
                  {faq.q}
                  <span aria-hidden="true" style={{ flexShrink: 0, color: "var(--color-teal)", fontSize: "1.25rem", fontFamily: "var(--font-sans)" }}>+</span>
                </summary>
                <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, paddingBottom: "1.5rem", fontSize: "0.9375rem" }}>
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ImageBand
        image="/images/lifestyle2/idw-child-drinking-2.jpg"
        imageAlt="Child drinking a glass of clean filtered water at home"
        statement="Every question deserves"
        statementAccent="a straight answer."
      />

      <section style={{ background: "var(--color-cream)" }}>
        <div className="container" style={{ maxWidth: "820px" }}>
          <div style={{ background: "#fff", color: "var(--color-ink)", padding: "2.5rem", textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", marginBottom: "0.75rem" }}>
              Still have questions?
            </h2>
            <p style={{ color: "var(--color-ink-soft)", marginBottom: "1.5rem" }}>
              Our team is ready to answer. Call us or schedule a free consultation.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
              <Link href="/consultation" className="btn btn-primary">Free Consultation</Link>
              <a href={`tel:${BUSINESS.phone}`} className="btn btn-primary">Call {BUSINESS.phone}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
