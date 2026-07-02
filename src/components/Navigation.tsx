import { useState, useEffect } from 'react';
import { Menu, X, Code2, Calendar, Instagram, Linkedin, Twitter } from 'lucide-react';
import Button from './Button';
import logo from '../assets/logo.png';


export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Projects', href: '#projects' },
        { name: 'Services', href: '#services' },
        { name: 'Team', href: '#team' },
        { name: 'Contact', href: '#contact' }
    ];


    return (<nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'pt-4' : 'pt-6'
            }`}
    >
        {/* The outer container provides the page padding and limits the maximum width */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* The "Floating Island" Navbar Body */}
            <div
                className={`flex items-center justify-between h-20 px-6 sm:px-8 rounded-2xl transition-all duration-500 ease-in-out ${isScrolled
                    ? 'bg-[#030c22]/50 backdrop-blur-md border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.3)]'
                    : 'bg-[#030c22]/30 backdrop-blur-sm border border-white/5 shadow-sm'
                    }`}
            >
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group">
                    <div className="p-1.5 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.2)]">

                        <img
                            src={logo}
                            alt="TriVerge Logo"
                            className="w-12 h-12 object-contain brightness-110 group-hover:scale-105 transition-transform duration-300 rounded-xl border border-white/20 shadow-sm"
                        />
                    </div>

                </a>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-slate-300 hover:text-cyan-400 font-medium transition-colors text-sm tracking-wide"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Premium Pill-shaped CTA Button */}
                <div className="hidden md:block">
                    <Button
                        size="sm"
                        className="bg-white/10 hover:bg-white border border-white/10 hover:border-white text-white hover:text-[#0c368d] rounded-xl px-5 py-2.5 font-medium transition-all shadow-[0_0_15px_rgba(25,118,210,0.1)] text-sm"
                        asChild
                    >
                        <a href="#contact">Contact Us</a>
                    </Button>
                </div>

                {/* Mobile Menu Trigger Button */}
                <button
                    className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>
            </div>

            {/* Mobile Menu Dropdown (Matches the premium tech theme) */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-50 h-screen w-screen md:hidden bg-[#030c22] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0c368d] to-[#030c22] flex flex-col p-4 justify-between overflow-y-auto animate-in fade-in duration-300">

                    {/* Background Glow Ring Asset */}
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-cyan-500/10 rounded-full filter blur-[100px] pointer-events-none"></div>

                    {/* TOP LAYER: Logo & Close Button Bar */}
                    <div className="relative z-10 flex items-center justify-between w-full bg-[#030c22]/40 rounded-2xl p-4 border border-white/10 shadow-sm mb-3 backdrop-blur-md">
                        <img
                            src={logo}
                            alt="TriVerge Logo"
                            className="h-8 object-contain brightness-110"
                        />
                        <button
                            className="p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* MIDDLE LAYER - CARD 1: Large Typography Nav Links */}
                    <div className="relative z-10 bg-[#030c22]/40 rounded-3xl p-8 border border-white/10 shadow-sm mb-3 flex-1 flex flex-col justify-center backdrop-blur-md">
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-4xl text-white font-bold uppercase tracking-wider hover:text-cyan-400 active:text-cyan-400 transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* MIDDLE LAYER - CARD 2: Contact Info & Social Links */}
                    <div className="relative z-10 bg-[#030c22]/40 rounded-3xl p-8 border border-white/10 shadow-sm mb-3 flex flex-col gap-6 backdrop-blur-md">
                        <div>
                            <h3 className="text-3xl font-bold text-white tracking-tight">Let's talk</h3>
                        </div>

                        {/* Email Pill Input Style */}
                        <a
                            href="mailto:trivergesolutions@gmail.com"
                            className="flex items-center justify-between bg-white/5 hover:bg-[#0c368d]/30 border border-white/10 rounded-2xl p-4 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-all text-sm font-medium"
                        >
                            <span>trivergesolutions@gmail.com</span>
                            <span className="text-lg">→</span>
                        </a>

                        {/* Social Media Buttons Row */}
                        <div className="flex gap-3">
                            <a
                                href="https://www.instagram.com/trivergesolutions/"
                                className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-slate-300 hover:text-white transition-colors"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/triverge-solution/"
                                className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-slate-300 hover:text-white transition-colors"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* BOTTOM LAYER: High Contrast "Book a call" Action */}
                    <a
                        href="#contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="relative z-10 w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-3xl p-6 flex items-center justify-between font-medium text-2xl tracking-wide shadow-[0_0_25px_rgba(6,182,212,0.25)] active:scale-[0.99] transition-all group"
                    >
                        <span>Book a call</span>
                        <Calendar className="w-6 h-6 text-cyan-200 group-hover:text-white transition-colors" />
                    </a>

                </div>
            )}
        </div>
    </nav>
    );
}

