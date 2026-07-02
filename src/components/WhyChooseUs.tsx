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

  const startRotation = index % 2 === 0 ? -5 : 5;
  const endRotation = index % 2 === 0 ? 5 : -5;

  const rotate = useTransform(scrollYProgress, [0, 1], [startRotation, endRotation]);

  return (
    <motion.div
      ref={cardRef}
      className="sticky top-32 w-full max-w-2xl bg-[#030c22]/60 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-700 ease-out flex flex-col sm:flex-row gap-8 items-start hover:scale-[1.01] hover:rotate-0 hover:z-50 group"
      style={{
        transform: `translateY(${index * 4}px)`,
        rotate,
      }}
    >
      {/* Dark Offset Background layer instead of white layout layer */}
      <div className={`absolute inset-0 -z-10 bg-[#030c22]/40 rounded-3xl border border-white/5 transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${isStacked ? baseTilt : 'rotate-0'} group-hover:rotate-0 group-hover:scale-105 shadow-[0_4px_24px_rgba(0,0,0,0.2)]`} />

      {/* Premium Tech Icon Frame */}
      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-cyan-500 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300">
        <Icon className="w-6 h-6 text-slate-300 group-hover:text-white transition-colors duration-300" />
      </div>

      {/* Card Text Content */}
      <div className="space-y-3">
        <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors duration-300">
          {reason.title}
        </h3>
        <p className="text-slate-300 leading-relaxed font-normal text-base">
          {reason.description}
        </p>
      </div>
    </motion.div>
  );
};



export default function WhyChooseUs() {
  const rotations = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "-rotate-3", "rotate-3"];
  return (
    <section className="relative overflow-clip py-32 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0c368d] to-[#030c22] " id="why-us">
      {/* Soft overlay gradient lights up the decking canvas */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full filter blur-[150px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* SECTION HEADER */}
        <div className="text-center mb-24 space-y-4">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shadow-[0_0_8px_#ffffff]"></span>
            <span className="text-[10px] font-bold tracking-widest uppercase text-white/90">
              Our Philosophy
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-tight">
            Why Clients <br /> Choose TriVerge
          </h2>
          <div className="w-12 h-[1px] bg-white/30 mx-auto my-6"></div>
          <p className="text-lg text-blue-100/80 max-w-xl mx-auto leading-relaxed">
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

        {/* STATS FOOTER CARD - Bento Dark Styled */}
        <div className="bg-[#030c22]/80 border border-cyan-500/20 rounded-[2.5rem] p-12 text-white shadow-[0_12px_40px_rgba(0,0,0,0.3)] mt-16 relative overflow-hidden backdrop-blur-md">
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-cyan-500/10 rounded-full filter blur-[80px] pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divider-y md:divider-y-0 md:divider-x divider-white/10">
              <div className="space-y-1">
                <div className="text-5xl font-black tracking-tight text-white drop-shadow-[0_0_12px_rgba(25,118,210,0.2)]">100%</div>
                <div className="text-xs font-semibold tracking-widest uppercase text-slate-400">Client Satisfaction</div>
              </div>
              <div className="space-y-1 border-t border-white/10 md:border-t-0 md:border-x border-white/10 py-6 md:py-0">
                <div className="text-5xl font-black tracking-tight text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">24h</div>
                <div className="text-xs font-semibold tracking-widest uppercase text-slate-400">Response SLA</div>
              </div>
              <div className="space-y-1">
                <div className="text-5xl font-black tracking-tight text-white">15+</div>
                <div className="text-xs font-semibold tracking-widest uppercase text-slate-400">Global Regions</div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM METRICS SMALL CHIPS GRID */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          {[
            { number: '50+', label: 'Projects Delivered' },
            { number: '30+', label: 'Happy Clients' },
            { number: '5+', label: 'Years Experience' },
            { number: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-[#030c22]/40 rounded-2xl p-6 border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.15)] hover:border-cyan-500/30 hover:bg-[#030c22]/60 transition-all duration-300 group backdrop-blur-sm"
            >
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-1 group-hover:scale-[1.03] group-hover:text-cyan-400 transition-all duration-300 origin-left">
                {stat.number}
              </div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
