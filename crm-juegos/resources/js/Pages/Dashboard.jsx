import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ auth, games = [] }) {
    const isAdminOrGestor = auth.user.roles && auth.user.roles.some(r => r.name === 'administrador' || r.name === 'gestor');

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 pt-2 pb-2">
                    Panel de Jugador
                </h2>
            }
        >
            <Head title="Panel" />

            {/* Background elements for premium feel */}
            <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-indigo-50/50 via-purple-50/50 to-white -z-10"></div>
            <div className="absolute top-40 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute top-60 left-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="py-12 relative z-10">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    
                    {/* Welcome Banner */}
                    <div className="backdrop-blur-md bg-white/80 overflow-hidden shadow-2xl sm:rounded-2xl mb-12 border border-white/50">
                        <div className="p-8 text-gray-900 flex flex-col md:flex-row items-center justify-between">
                            <div>
                                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                                    ¡Bienvenido de nuevo, {auth.user.name}! 🚀
                                </h3>
                                <p className="mt-2 text-gray-600">¿Listo para una nueva aventura hoy? Elige tu juego favorito y empieza.</p>
                            </div>
                            {isAdminOrGestor && (
                                <div className="mt-6 md:mt-0">
                                    <Link 
                                        href={route('games.index')} 
                                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                        Ir al CRM de Gestión
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight">Catálogo de Juegos</h3>
                        <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                    </div>
                    
                    {games.length === 0 ? (
                        <div className="backdrop-blur-md bg-white/60 p-12 rounded-3xl shadow-lg border border-white flex flex-col items-center justify-center text-center">
                            <span className="text-6xl mb-4 opacity-50">🧭</span>
                            <h4 className="text-xl font-medium text-gray-700">No hay juegos publicados en este momento.</h4>
                            <p className="text-gray-500 mt-2">Vuelve más tarde para descubrir nuevas aventuras.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {games.map((game, idx) => (
                                <div 
                                    key={game.id} 
                                    className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100/50"
                                >
                                    {/* Abstract Graphic Header */}
                                    <div className={`h-48 flex items-center justify-center bg-gradient-to-br ${
                                        idx % 3 === 0 ? 'from-indigo-500 to-purple-600' : 
                                        idx % 3 === 1 ? 'from-blue-400 to-emerald-400' : 
                                        'from-rose-400 to-orange-400'
                                    } relative overflow-hidden`}>
                                        <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
                                        {/* Stylized Controller Icon */}
                                        <svg className="w-24 h-24 text-white/80 drop-shadow-md z-10 transform group-hover:scale-110 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M21.58,12.58l-3-8A2,2,0,0,0,16.7,3H7.3a2,2,0,0,0-1.88,1.58l-3,8a2,2,0,0,0,.61,2A1.91,1.91,0,0,0,4.5,15H5a2,2,0,0,0,1.91-1.42L7.64,11h8.72l.73,2.58A2,2,0,0,0,19,15h.5a1.91,1.91,0,0,0,1.47-.42A2,2,0,0,0,21.58,12.58ZM10,8H8V6h2Zm2,2H10V8h2Zm0-2V6h2V8ZM16.5,9A1.5,1.5,0,1,1,18,7.5,1.5,1.5,0,0,1,16.5,9Zm0-3A1.5,1.5,0,1,1,18,4.5,1.5,1.5,0,0,1,16.5,6Z"/>
                                        </svg>
                                    </div>
                                    
                                    <div className="p-8 flex flex-col h-full bg-white relative">
                                        {/* Play button float */}
                                        <div className="absolute -top-8 right-6">
                                            <Link 
                                                href={route('games.play', game.id)}
                                                className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-900 text-white shadow-lg hover:bg-indigo-600 hover:shadow-indigo-500/50 transform hover:scale-110 transition-all duration-300"
                                            >
                                                <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
                                            </Link>
                                        </div>

                                        <h4 className="text-2xl font-bold mb-3 text-gray-900 pr-12">{game.title}</h4>
                                        <p className="text-gray-500 mb-8 flex-grow leading-relaxed">{game.description}</p>
                                        
                                        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                En línea
                                            </span>
                                            <span className="text-sm font-medium text-indigo-600 group-hover:text-indigo-800 flex items-center transition-colors">
                                                <Link href={route('games.play', game.id)}>Ingresar a la partida</Link>
                                                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
