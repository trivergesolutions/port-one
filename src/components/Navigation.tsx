import { useState, useEffect } from 'react';
import { Menu, X, Code2, Calendar, Instagram, Linkedin, Twitter } from 'lucide-react';
import Button from './Button';
import logo from '../assets/logo_without_bg.png';


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
        { name: 'Services', href: '#services' },
        { name: 'Projects', href: '#projects' },
        { name: 'Team', href: '#team' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'pt-4' : 'pt-6'
                }`}
        >
            {/* The outer container provides the page padding and limits the maximum width */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* The "Floating Island" Navbar Body */}
                <div
                    className={`flex items-center justify-between h-20 px-6 sm:px-8 rounded-2xl transition-all duration-500 ease-in-out ${isScrolled
                        ? 'bg-white/40 backdrop-blur-md border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.04)]'
                        : 'bg-white/70 backdrop-blur-sm border border-slate-200/40 shadow-sm'
                        }`}
                >
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2">
                        <img
                            src={logo}
                            alt="TriVerge Logo"
                            className="w-12 h-12 object-contain"
                        />
                    </a>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-slate-800 hover:text-blue-600 font-medium transition-colors text-sm tracking-wide"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Premium Pill-shaped CTA Button */}
                    <div className="hidden md:block">
                        <Button
                            size="sm"
                            className="bg-slate-900 hover:bg-slate-800 text-white rounded-xl px-5 py-2.5 font-medium transition-all shadow-md hover:shadow-lg text-sm"
                            asChild
                        >
                            <a href="#contact">Contact Us</a>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-xl hover:bg-slate-100/50 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6 text-slate-900" />
                        ) : (
                            <Menu className="w-6 h-6 text-slate-900" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu Dropdown (Matches the floating theme) */}
                {isMobileMenuOpen && (
                    <div className="fixed inset-0 z-50 h-screen w-screen md:hidden bg-[#F9F6F0] flex flex-col p-4 justify-between overflow-y-auto animate-in fade-in duration-300">

                        {/* TOP LAYER: Logo & Close Button Bar */}
                        <div className="flex items-center justify-between w-full bg-white rounded-2xl p-4 border border-slate-200/40 shadow-sm mb-3">
                            <img
                                src={logo}
                                alt="TriVerge Logo"
                                className="h-8 object-contain"
                            />
                            <button
                                className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <X className="w-5 h-5 text-slate-900" />
                            </button>
                        </div>

                        {/* MIDDLE LAYER - CARD 1: Large Typography Nav Links */}
                        <div className="bg-white rounded-3xl p-8 border border-slate-200/40 shadow-sm mb-3 flex-1 flex flex-col justify-center">
                            <div className="flex flex-col gap-6">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="text-4xl text-slate-900 font-bold uppercase tracking-wider hover:text-blue-600 transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* MIDDLE LAYER - CARD 2: Contact Info & Social Links */}
                        <div className="bg-white rounded-3xl p-8 border border-slate-200/40 shadow-sm mb-3 flex flex-col gap-6">
                            <div>
                                <h3 className="text-3xl font-bold text-slate-900 tracking-tight">Let's talk</h3>
                            </div>

                            {/* Email Pill Input Style */}
                            <a
                                href="mailto:trivergesolutions@gmail.com"
                                className="flex items-center justify-between bg-slate-50 hover:bg-slate-100/80 border border-slate-200/50 rounded-2xl p-4 text-slate-700 transition-all text-sm font-medium"
                            >
                                <span>trivergesolutions@gmail.com</span>
                                <span className="text-lg">→</span>
                            </a>

                            {/* Social Media Buttons Row */}
                            <div className="flex gap-3">
                                <a href="https://www.instagram.com/trivergesolutions/" className="p-3 bg-slate-50 hover:bg-slate-100 border border-slate-200/50 rounded-xl text-slate-800 transition-colors">
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a href="https://www.linkedin.com/company/triverge-solution/" className="p-3 bg-slate-50 hover:bg-slate-100 border border-slate-200/50 rounded-xl text-slate-800 transition-colors">
                                    <Linkedin className="w-5 h-5" />
                                </a>

                            </div>
                        </div>

                        {/* BOTTOM LAYER: High Contrast "Book a call" Action */}
                        <a
                            href="#contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="w-full bg-slate-950 text-white rounded-3xl p-6 flex items-center justify-between font-medium text-2xl tracking-wide shadow-xl active:scale-[0.99] transition-transform group"
                        >
                            <span>Book a call</span>
                            <Calendar className="w-6 h-6 text-slate-300 group-hover:text-white transition-colors" />
                        </a>

                    </div>
                )}
            </div>
        </nav>
    );
}
