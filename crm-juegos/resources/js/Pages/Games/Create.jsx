import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Create({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        description: '',
        url_path: '',
        is_published: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('games.store'));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-600 pt-2 pb-2">Crear Nuevo Juego</h2>}
        >
            <Head title="Añadir Juego" />

            <div className="py-12 bg-gray-50 min-h-[calc(100vh-73px)]">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                    
                    <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100/50">
                        {/* Header Artwork */}
                        <div className="h-32 bg-gradient-to-r from-teal-500 to-cyan-500 relative flex items-center px-10">
                            <div className="absolute inset-0 bg-white/10 mix-blend-overlay backdrop-blur-[1px]"></div>
                            <svg className="w-16 h-16 text-white opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                            </svg>
                            <div className="ml-6 z-10">
                                <h3 className="text-2xl font-bold text-white">Detalles del Juego</h3>
                                <p className="text-cyan-100 text-sm">Completa la siguiente información para publicarlo.</p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="p-10 space-y-8">
                            
                            <div className="space-y-6">
                                {/* Title */}
                                <div className="relative">
                                    <label className="text-sm font-semibold text-gray-700 block mb-2">Título del Juego</label>
                                    <input
                                        type="text"
                                        value={data.title}
                                        onChange={e => setData('title', e.target.value)}
                                        className="w-full bg-gray-50 border-gray-200 text-gray-900 rounded-xl px-4 py-3 focus:ring-teal-500 focus:border-teal-500 shadow-sm transition-colors duration-200 hover:bg-white"
                                        placeholder="Ej: Starfield Explorer"
                                        required
                                    />
                                    {errors.title && <div className="text-red-500 text-xs mt-2 flex items-center"><svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>{errors.title}</div>}
                                </div>

                                {/* Description */}
                                <div>
                                    <label className="text-sm font-semibold text-gray-700 block mb-2">Descripción Atractiva</label>
                                    <textarea
                                        value={data.description}
                                        onChange={e => setData('description', e.target.value)}
                                        className="w-full bg-gray-50 border-gray-200 text-gray-900 rounded-xl px-4 py-3 focus:ring-teal-500 focus:border-teal-500 shadow-sm transition-colors duration-200 hover:bg-white resize-none"
                                        rows="4"
                                        placeholder="Escribe una breve sinopsis del juego que atraiga a los jugadores..."
                                    ></textarea>
                                    {errors.description && <div className="text-red-500 text-xs mt-2 flex items-center"><svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>{errors.description}</div>}
                                </div>

                                {/* URL Path */}
                                <div>
                                    <label className="text-sm font-semibold text-gray-700 block mb-2">Ruta de Assets (URL)</label>
                                    <div className="flex rounded-xl shadow-sm">
                                        <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-gray-200 bg-gray-100 text-gray-500 text-sm">
                                            http://localhost/
                                        </span>
                                        <input
                                            type="text"
                                            value={data.url_path}
                                            onChange={e => setData('url_path', e.target.value)}
                                            className="flex-1 min-w-0 block w-full px-4 py-3 bg-gray-50 rounded-none rounded-r-xl focus:ring-teal-500 focus:border-teal-500 border-gray-200 sm:text-sm hover:bg-white transition-colors"
                                            placeholder="juegos/base/index.html"
                                            required
                                        />
                                    </div>
                                    <p className="text-xs text-gray-500 mt-2">La ruta relativa donde se aloja el archivo `index.html` del juego.</p>
                                    {errors.url_path && <div className="text-red-500 text-xs mt-2 flex items-center"><svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>{errors.url_path}</div>}
                                </div>

                                {/* Publish Toggle */}
                                <div className="flex items-center mt-6 p-4 rounded-xl border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer" onClick={() => setData('is_published', !data.is_published)}>
                                    <div className="flex items-center h-5">
                                        <input
                                            id="is_published"
                                            type="checkbox"
                                            checked={data.is_published}
                                            onChange={e => setData('is_published', e.target.checked)}
                                            className="w-5 h-5 text-teal-600 bg-white border-gray-300 rounded focus:ring-teal-500 focus:ring-2 cursor-pointer transition-colors"
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="is_published" className="font-semibold text-gray-900 cursor-pointer">Visibilidad Inmediata</label>
                                        <p className="text-gray-500">Si lo marcas, el juego aparecerá automáticamente en el Panel de Jugador.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center justify-end space-x-4 pt-6 border-t border-gray-100">
                                <Link 
                                    href={route('games.index')}
                                    className="px-6 py-3 text-gray-600 hover:text-gray-900 font-medium hover:bg-gray-100 rounded-full transition-colors"
                                >
                                    Cancelar
                                </Link>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className={`inline-flex justify-center flex-1 md:flex-none items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white shadow-lg bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transform hover:-translate-y-0.5 transition-all outline-none ${processing ? 'opacity-70 cursor-wait' : ''}`}
                                >
                                    {processing ? (
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                    ) : (
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path></svg>
                                    )}
                                    Registrar Juego
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
