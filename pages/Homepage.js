import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaEye, FaPen, FaUserShield, FaCalculator } from "react-icons/fa";

const features = [
    {
        icon: <FaEye className="text-white text-2xl" />,
        title: "Student Grades Access and Download",
        description:
            "Students can check their grades online anytime. They can also download their grades for offline use or personal records.",
    },
    {
        icon: <FaPen className="text-white text-2xl" />,
        title: "Professor Grade Input and Management",
        description:
            "Professors can log in to the system to add, edit, and save student grades for their courses.",
    },
    {
        icon: <FaUserShield className="text-white text-2xl" />,
        title: "Administrator Monitoring and Control",
        description:
            "Administrators have a dashboard where they can monitor professors' activities and ensure everything runs smoothly.",
    },
    {
        icon: <FaCalculator className="text-white text-2xl" />,
        title: "Automated Final Grade Calculation",
        description:
            "The system automatically calculates and generates students' final grades based on their scores.",
    },
];


export default function Homepage() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="font-poppins">
            {/* Navbar Section */}
            <section className="bg-white shadow-md">
                <div className="container mx-auto px-14 py-4 flex justify-between items-center">
                    {/* Logo Image */}
                    <Link href="/">
                        <Image
                            src="/img/logo.png"  // Change this to your actual logo
                            alt="Logo"
                            width={80}
                            height={50}
                            className="cursor-pointer"
                        />
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex space-x-6">
                        <Link href="/" className="font-medium text-black hover:text-blue-500 transition">Home</Link>
                        <Link href="/services" className="font-medium text-black hover:text-blue-500 transition">Services</Link>
                        <Link href="/about" className="font-medium text-black hover:text-blue-500 transition">About Us</Link>
                        <Link href="/grades" className="font-medium text-black hover:text-blue-500 transition">Grades</Link>
                        <Link href="/contact" className="font-medium text-black hover:text-blue-500 transition">Contacts</Link>
                    </div>


                    {/* Sign Up Button */}
                    <div>
                        <Link href="/signup">
                            <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                                Sign Up
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
                            ☰
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-white shadow-md py-4 px-6">
                        <Link href="/" className="block py-2 text-black hover:text-blue-500 transition">Home</Link>
                        <Link href="/services" className="block py-2 text-black hover:text-blue-500 transition">Services</Link>
                        <Link href="/about" className="block py-2 text-black hover:text-blue-500 transition">About Us</Link>
                        <Link href="/grades" className="block py-2 text-black hover:text-blue-500 transition">Grades</Link>
                        <Link href="/contact" className="block py-2 text-black hover:text-blue-500 transition">Contacts</Link>
                        <Link href="/signup" className="block py-2 text-blue-600 font-bold">Sign Up</Link>
                    </div>
                )}
            </section>

            {/* Hero Section */}
            <section
                className="relative h-screen bg-cover bg-center flex items-start justify-start text-white px-8 md:px-16 pt-[10rem] md:pt-[12rem]"
                style={{ backgroundImage: "url('/img/Background.png')" }} // Change this to your image path
            >
                {/* Overlay for better readability */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* Content */}
                <div className="relative z-10 max-w-2xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-left">
                        Welcome to the <span className="text-blue-400">Senior High School Grading Portal</span>
                    </h1>
                    <p className="mt-4 text-lg text-left">
                        Easily track your grades, manage academic records, and ensure transparency in the grading process.
                        Our system simplifies grading for students, teachers, and administrators.
                    </p>
                    <Link href="/get-started">
                        <span className="mt-6 inline-block bg-green-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-600 transition">
                            Get Started
                        </span>
                    </Link>
                </div>
            </section>

            {/* Grading Offers Section */}
            <section className="bg-[#F9F5F0] min-h-[90vh] flex items-center py-20 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">
                        What Our Grading Portal Offers
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-8">
                                <div className="bg-black p-4 rounded-lg flex items-center justify-center min-w-[60px] min-h-[60px]">
                                    {feature.icon}
                                </div>
                                <div className="text-left">
                                    <h3 className="text-lg font-semibold text-blue-900">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-700">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section className="relative w-full min-h-[80vh] flex items-center justify-center text-white px-6 text-center bg-[#007bff]">
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Content */}
                <div className="relative z-10 max-w-4xl">
                    <h2 className="text-4xl md:text-4xl font-bold text-white mb-8">
                        About Us
                    </h2>
                    <p className="text-xl leading-relaxed text-justify">
                        Welcome to the <strong>Senior High School Grading Portal</strong>, a modern and efficient online platform designed
                        to simplify the grading process for students, teachers, and school administrators. Our system is built to
                        ensure accuracy, transparency, and accessibility, making it easier for schools to manage academic records
                        in a secure and organized manner.
                    </p>
                </div>
            </section>
        </div>
    );
}
