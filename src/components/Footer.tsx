import { Linkedin, Github, Mail, ArrowUpRight } from 'lucide-react';
import logo from '../assets/logo.png';
import {
    Code2,
    Linkedin,
    Github,
    Mail,
    Twitter,
    Instagram,
} from "lucide-react";
import logo from "../assets/logo.png";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 text-white pt-24 pb-12 border-t border-slate-900 relative overflow-hidden">
            {/* Subtle architectural ambient light spill from the bottom corner */}
            <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-blue-500/5 rounded-full filter blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">

                    {/* BRANDING COLUMN */}
                    <div className="lg:col-span-6 space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-2xl bg-white border border-slate-800 p-2 flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
                                <img
                                    src={logo}
                                    alt="TriVerge Solutions Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div>
                                <div className="font-black text-2xl tracking-tight uppercase">
                                    TriVerge
                                </div>
                                <div className="text-[10px] font-bold tracking-widest uppercase text-slate-500">
                                    Systems Engineering Collective
                                </div>
                            </div>
                        </div>

                        <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-normal">
                            Engineering enterprise-grade software architecture, cross-platform systems, and automated digital ecosystems with absolute mathematical permanence.
                        </p>

                        {/* Premium Structural Social Link Buttons */}
                        <div className="flex gap-2">
                            <a
                                href="https://www.linkedin.com/in/aman-mansuri-b78b5b215/"
                                target="_blank"
                                rel="noreferrer"
                                className="group flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-slate-400 bg-slate-900 border border-slate-800/60 px-4 py-2.5 rounded-xl hover:bg-white hover:border-white hover:text-slate-950 transition-all duration-300"
                            >
                                <Linkedin className="w-3.5 h-3.5" />
                                LinkedIn
                                <ArrowUpRight className="w-3 h-3 text-slate-600 group-hover:text-slate-950 transition-colors" />
                            </a>
                        </div>
                    </div>

                    {/* QUICK LINKS COLUMN */}
                    <div className="lg:col-span-3 space-y-4">
                        <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                            Navigation
                        </h3>
                        <ul className="space-y-2.5">
                            {['services', 'projects', 'team', 'contact'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item}`}
                                        className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200 capitalize flex items-center justify-between group max-w-[120px]"
                                    >
                                        {item}
                                        <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-slate-500 text-xs">→</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CAPABILITIES SUMMARY COLUMN */}
                    <div className="lg:col-span-3 space-y-4">
                        <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                            Core Expertise
                        </h3>
                        <ul className="space-y-2.5 text-sm font-medium text-slate-400">
                            <li className="hover:text-slate-200 transition-colors cursor-default">Full-Stack SaaS Architecture</li>
                            <li className="hover:text-slate-200 transition-colors cursor-default">Cross-Platform Applications</li>
                            <li className="hover:text-slate-200 transition-colors cursor-default">Workflow Automation Systems</li>
                            <li className="hover:text-slate-200 transition-colors cursor-default">Enterprise API Engineering</li>
                        </ul>
                    </div>
                </div>

                {/* BOTTOM LEGAL METRICS RIDGE */}
                <div className="pt-8 border-t border-slate-900">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-slate-500 text-xs tracking-wide">
                            © {currentYear} TriVerge Solutions. Engineered with absolute permanent structural integrity.
                        </p>

                        <div className="flex gap-6 text-xs font-semibold tracking-wider uppercase text-slate-500">
                            <span className="flex items-center gap-1.5 cursor-default">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                Node Status: Operational
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}