import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Play({ auth, game }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-bold text-2xl text-gray-900 leading-tight flex items-center">
                        <span className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                        {game.title}
                    </h2>
                    <Link 
                        href={route('dashboard')} 
                        className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-full shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all"
                    >
                        <svg className="mr-2 h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        Volver al Panel
                    </Link>
                </div>
            }
        >
            <Head title={`Jugando: ${game.title}`} />

            <div className="py-8 bg-gray-100 min-h-[calc(100vh-73px)]">
                <div className="max-w-[1400px] mx-auto sm:px-6 lg:px-8 h-full flex flex-col">
                    {!game.is_published && (
                        <div className="backdrop-blur-sm bg-yellow-500/20 border-l-4 border-yellow-500 text-yellow-800 p-4 mb-6 rounded-r-lg" role="alert">
                            <p className="font-bold flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                                Modo Previsualización (Oculto)
                            </p>
                            <p className="mt-1 ml-7 text-sm">Este juego no es visible para los jugadores. Cárgalo bajo tu responsabilidad administrativa.</p>
                        </div>
                    )}

                    {/* Immersive Game Container */}
                    <div className="flex-grow flex flex-col bg-white overflow-hidden shadow-2xl rounded-3xl border border-gray-200/60 ring-1 ring-black/5">
                        
                        {/* Game Meta Header */}
                        <div className="px-6 py-4 bg-gray-900 border-b border-gray-800 flex justify-between items-center z-10">
                            <div>
                                <h3 className="text-lg font-bold text-white tracking-wide">{game.title}</h3>
                                <p className="text-gray-400 text-xs mt-1 max-w-2xl truncate">{game.description}</p>
                            </div>
                            <div className="flex space-x-2">
                                <button className="p-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors" title="Pantalla Completa" onClick={() => document.getElementById('game-iframe').requestFullscreen()}>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path></svg>
                                </button>
                            </div>
                        </div>

                        {/* Iframe wrapper */}
                        <div className="relative w-full flex-grow bg-black shadow-inner" style={{ minHeight: '65vh' }}>
                            {/* Loading overlay */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/80 pointer-events-none z-0">
                                <div className="flex flex-col items-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-10 w-10 text-indigo-500 mb-4" fill="none" viewBox="0 0 24 24">
                                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span className="text-indigo-400 font-mono text-sm uppercase tracking-widest">Iniciando Entorno 3D...</span>
                                </div>
                            </div>

                            <iframe 
                                id="game-iframe"
                                src={game.url_path} 
                                className="absolute top-0 left-0 w-full h-full border-0 z-10"
                                title={`Juego: ${game.title}`}
                                allowFullScreen
                                style={{backgroundColor: 'transparent'}}
                            ></iframe>
                        </div>

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
