import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6">
            <div className="mb-8 text-center">
                <Link href="/" className="flex flex-col items-center group">
                    <div className="flex bg-indigo-600 text-white p-4 rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <span className="mt-4 text-2xl font-bold text-gray-900 tracking-wider">GAME<span className="text-indigo-600">PORTAL</span></span>
                </Link>
            </div>

            <div className="w-full max-w-md overflow-hidden bg-white p-8 shadow-xl rounded-2xl border border-gray-100">
                {children}
            </div>
        </div>
    );
}
