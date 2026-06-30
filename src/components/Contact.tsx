import { Mail, Phone, MessageSquare, Clock, ArrowUpRight } from 'lucide-react';

export default function Contact() {
    return (
        <section className="py-32 bg-[#F9F6F0]" id="contact">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Responsive Layout Grid Split */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* LEFT SIDE: Headings and Actionable Contact Links */}
                    <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 bg-white/60 border border-slate-200/40 px-3 py-1 rounded-full backdrop-blur-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
                                <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500">
                                    Initiate Partnership
                                </span>
                            </div>
                            <h2 className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tight uppercase leading-[0.95]">
                                Let's Build <br /> Your Product
                            </h2>
                            <div className="w-12 h-[1px] bg-slate-950/20 my-6"></div>
                            <p className="text-lg text-slate-600 max-w-md leading-relaxed font-normal tracking-wide">
                                Ready to transform your infrastructure? Get in touch with our engineering team to map out your scale milestones.
                            </p>
                        </div>

                        {/* Premium Minimal Contact Pills Stack */}
                        <div className="space-y-3 max-w-md">
                            {/* Email Action Pill */}
                            <a
                                href="mailto:trivergesolutions@gmail.com"
                                className="group flex items-center justify-between bg-white border border-slate-200/50 hover:border-slate-400 p-5 rounded-2xl transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.01)]"
                            >
                                <div className="flex items-center gap-4">
                                    <Mail className="w-5 h-5 text-slate-400 group-hover:text-slate-950 transition-colors" />
                                    <div>
                                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">Drop an email</div>
                                        <div className="text-sm font-semibold text-slate-900">trivergesolutions@gmail.com</div>
                                    </div>
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-slate-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                            </a>

                            {/* Phone Action Pill */}
                            <a
                                href="tel:+916353203220"
                                className="group flex items-center justify-between bg-white border border-slate-200/50 hover:border-slate-400 p-5 rounded-2xl transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.01)]"
                            >
                                <div className="flex items-center gap-4">
                                    <Phone className="w-5 h-5 text-slate-400 group-hover:text-slate-950 transition-colors" />
                                    <div>
                                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">Call our line</div>
                                        <div className="text-sm font-semibold text-slate-900">+91 6353203220</div>
                                    </div>
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-slate-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                            </a>
                        </div>

                        {/* Trust Meta Badges */}
                        <div className="flex flex-wrap gap-4 pt-2">
                            <div className="flex items-center gap-2 text-slate-500">
                                <MessageSquare className="w-4 h-4 text-emerald-500" />
                                <span className="text-xs font-medium tracking-wide">24hr Turnaround Response</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-500">
                                <Clock className="w-4 h-4 text-blue-500" />
                                <span className="text-xs font-medium tracking-wide">Global Timezone Coverage</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: What Happens Next? Onboarding Roadmap Container */}
                    <div className="lg:col-span-7 bg-white rounded-[2.5rem] p-8 sm:p-12 border border-slate-200/40 shadow-[0_8px_40px_rgba(0,0,0,0.02)]">
                        <div className="space-y-10">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-950 tracking-tight uppercase text-sm tracking-wider mb-8 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-950"></span>
                                    Our Onboarding Protocol
                                </h3>

                                {/* Vertical Stepper Process */}
                                <div className="relative border-l border-slate-100 ml-4 pl-8 space-y-10">

                                    {/* Step 1 */}
                                    <div className="relative">
                                        <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-slate-950 border-4 border-white shadow-sm flex items-center justify-center" />
                                        <div className="space-y-1">
                                            <h4 className="font-bold text-slate-950 text-base">Discovery Strategy Call</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed max-w-xl">
                                                We map out your concrete architecture benchmarks, tech stack limitations, and business milestones.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Step 2 */}
                                    <div className="relative">
                                        <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-slate-100 border-4 border-white shadow-sm flex items-center justify-center" />
                                        <div className="space-y-1">
                                            <h4 className="font-bold text-slate-950 text-base">Proposal & Milestone Mapping</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed max-w-xl">
                                                A clear, transparent project scoping breakdown with precise delivery dates and sprint parameters.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Step 3 */}
                                    <div className="relative">
                                        <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-slate-100 border-4 border-white shadow-sm flex items-center justify-center" />
                                        <div className="space-y-1">
                                            <h4 className="font-bold text-slate-950 text-base">Iterative Development Begins</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed max-w-xl">
                                                Regular codebase handoffs, continuous feedback intervals, and end-to-end transparent visibility.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Step 4 */}
                                    <div className="relative">
                                        <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-slate-100 border-4 border-white shadow-sm flex items-center justify-center" />
                                        <div className="space-y-1">
                                            <h4 className="font-bold text-slate-950 text-base">Deployment & Continuous Maintenance</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed max-w-xl">
                                                Seamless production cutover with ongoing monitoring, infrastructure support, and structural scaling SLA agreements.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Footer Footnote Inside Right Column */}
                            <div className="bg-slate-50 border border-slate-200/50 rounded-2xl p-6 transition-colors duration-300 hover:bg-slate-100/50">
                                <p className="text-slate-600 text-xs leading-relaxed font-medium">
                                    <span className="text-slate-950 font-bold uppercase tracking-wider text-[10px] block mb-1">Zero Lock-In Obligation</span>
                                    Let's start with a low-pressure engineering audit call. If TriVerge isn't the perfect technical fit for your scaling direction, we'll happily point you toward the right resource network.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}