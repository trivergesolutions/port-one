import { Check, Code, MessageSquare, HeadphonesIcon, Rocket, Shield } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { useScroll, useTransform, motion } from "framer-motion"
const reasons = [
  {
    icon: Code,
    title: 'Production-Ready Code',
    description: 'Clean, maintainable, and scalable code that stands the test of time. We follow industry best practices and modern architecture patterns.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: MessageSquare,
    title: 'Clear Communication',
    description: 'Regular updates, transparent progress tracking, and responsive communication. We keep you in the loop at every stage.',
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    icon: HeadphonesIcon,
    title: 'Long-term Support',
    description: 'We\'re not just developers, we\'re partners. Post-launch support and continuous improvements to help your product evolve.',
    color: 'from-emerald-500 to-emerald-600'
  },
  {
    icon: Rocket,
    title: 'Startup & Enterprise Experience',
    description: 'Whether you\'re a fast-moving startup or an established enterprise, we adapt to your pace and requirements.',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Shield,
    title: 'API-First Architecture',
    description: 'Scalable backend systems designed for growth. RESTful APIs that are secure, documented, and future-proof.',
    color: 'from-slate-600 to-slate-700'
  },
  {
    icon: Check,
    title: 'Proven Track Record',
    description: '50+ successful projects across EdTech, Healthcare, eCommerce, and SaaS. Real results, measurable impact.',
    color: 'from-blue-500 to-cyan-500'
  }
];


const StackingCard = ({ reason, index, rotations }) => {
  const cardRef = useRef(null);
  const [isStacked, setIsStacked] = useState(false);

  const Icon = reason.icon;
  const baseTilt = rotations[index % rotations.length];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the item is intersecting near the sticky point (top-32), 
        // we activate the tilt effect.
        // boundingClientRect.top tells us if it has reached its resting position.
        if (entry.boundingClientRect.top <= 140) {
          setIsStacked(true);
        } else {
          setIsStacked(false);
        }
      },
      {
        threshold: [1],
        rootMargin: "-128px 0px 0px 0px" // Triggers exactly near your top-32 margin
      }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Alternate directions: Even indexes rotate -5 to 5, odd indexes rotate 5 to -5
  const startRotation = index % 2 === 0 ? -5 : 5;
  const endRotation = index % 2 === 0 ? 5 : -5;

  const rotate = useTransform(scrollYProgress, [0, 1], [startRotation, endRotation]);

  return (
    <motion.div
      ref={cardRef}
      className="sticky top-32 w-full max-w-2xl bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/50 shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-all duration-700 ease-out flex flex-col sm:flex-row gap-8 items-start hover:scale-[1.01] hover:rotate-0 hover:z-50 group"
      style={{
        transform: `translateY(${index * 4}px)`,
        rotate,
      }}
    >
      {/* Background layer */}
      <div className={`absolute inset-0 -z-10 bg-white rounded-3xl border border-slate-100 transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${isStacked ? baseTilt : 'rotate-0'} group-hover:rotate-0 group-hover:scale-105 shadow-[0_4px_24px_rgba(0,0,0,0.01)] `} />

      {/* Premium Minimal Icon Frame */}
      <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200/60 flex items-center justify-center shrink-0 group-hover:bg-slate-950 group-hover:border-slate-950 transition-all duration-300">
        <Icon className="w-6 h-6 text-slate-800 group-hover:text-white transition-colors duration-300" />
      </div>

      {/* Card Text Content */}
      <div className="space-y-3">
        <h3 className="text-2xl font-bold text-slate-950 tracking-tight">
          {reason.title}
        </h3>
        <p className="text-slate-600 leading-relaxed font-normal text-base">
          {reason.description}
        </p>
      </div>
    </motion.div>
  );
};



export default function WhyChooseUs() {
  const rotations = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "-rotate-3", "rotate-3"];
  return (
    <section className="py-32 bg-[#F9F6F0]" id="why-us">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADER */}
        <div className="text-center mb-24 space-y-4">
          <div className="inline-flex items-center gap-2 bg-white/60 border border-slate-200/40 px-3 py-1 rounded-full backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
            <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500">
              Our Philosophy
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tight uppercase leading-tight">
            Why Clients <br /> Choose TriVerge
          </h2>
          <div className="w-12 h-[1px] bg-slate-950/20 mx-auto my-6"></div>
          <p className="text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
            We deliver engineering excellence through architectural discipline, absolute transparency, and unwavering operational commitment.
          </p>
        </div>

        {/* STACKING CARDS DECK CONTAINER */}
        <div className="relative flex flex-col items-center gap-24 pb-32">
          {reasons.map((reason, index) => (
            <StackingCard
              key={index}
              reason={reason}
              index={index}
              rotations={rotations}
            />
          ))}
        </div>

        {/* STATS FOOTER CARD - Bento Styled */}
        <div className="bg-slate-950 rounded-[2.5rem] p-12 text-white shadow-xl mt-16 relative overflow-hidden">
          {/* Subtle ambient lighting accent */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-500/10 rounded-full filter blur-[80px] pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divider-y md:divider-y-0 md:divider-x divider-slate-800">
              <div className="space-y-1">
                <div className="text-5xl font-black tracking-tight text-white">100%</div>
                <div className="text-xs font-semibold tracking-widest uppercase text-slate-400">Client Satisfaction</div>
              </div>
              <div className="space-y-1 border-t border-slate-800 md:border-t-0 md:border-x border-slate-800/60 py-6 md:py-0">
                <div className="text-5xl font-black tracking-tight text-white">24h</div>
                <div className="text-xs font-semibold tracking-widest uppercase text-slate-400">Response SLA</div>
              </div>
              <div className="space-y-1">
                <div className="text-5xl font-black tracking-tight text-white">15+</div>
                <div className="text-xs font-semibold tracking-widest uppercase text-slate-400">Global Regions</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          {[
            { number: '50+', label: 'Projects Delivered' },
            { number: '30+', label: 'Happy Clients' },
            { number: '5+', label: 'Years Experience' },
            { number: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-slate-200/50 shadow-[0_4px_24px_rgba(0,0,0,0.01)] hover:border-slate-300 transition-all duration-300 group"
            >
              <div className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight mb-1 group-hover:scale-[1.03] transition-transform duration-300 origin-left">
                {stat.number}
              </div>
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
